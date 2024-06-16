import { random, sample } from 'lodash-es'
import {
  addUserCreaturePoint,
  addUserReleaseCount,
  getGroups,
  getGroupState,
  getUserInfo,
  removeGroup,
  setGroupState
} from './store';
import { Achievement, Action, Creature, GroupState } from "./types";
import {
  ConsumableLethality,
  ConsumableValidityPeriod,
  MAX_CREATURE_COUNT,
  SuccessfulAttackProbabilities
} from "./consts";
import {
  creatureCountByAction,
  getAchievementDesc,
  getCreature,
  getCreatureByConsumable,
  getCreatures,
  getDefenseFailDesc,
  getItemDesc
} from "./utils";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import { Consumable } from "./items";
import { CreatureIntervals } from "./config";

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export const statusHandle = (ext: seal.ExtInfo, groupId: string, userId: string): string => {
  const state = getGroupState(ext, groupId);
  if (state.installed) {
    let status = '夏季生物活动中——'

    // 生物密度
    let creatureCountDesc: string = ''
    for (let creature in Creature) {
      const c = Creature[creature];
      const count = state?.attacked?.[c] ?? 0
      if (count > 0) {
        const ratio = Number((count / MAX_CREATURE_COUNT).toFixed(2));
        if (ratio >= 0.8) {
          creatureCountDesc += `\n${getCreature(c)}：极多`
        } else if (ratio >= 0.6) {
          creatureCountDesc += `\n${getCreature(c)}：多`
        } else if (ratio >= 0.4) {
          creatureCountDesc += `\n${getCreature(c)}：一般`
        } else {
          creatureCountDesc += `\n${getCreature(c)}：少`
        }
      } else {
        creatureCountDesc += `\n${getCreature(c)}：无`
      }
    }
    if (creatureCountDesc !== '') {
      status += '\n\n生物密度:' + creatureCountDesc
    }

    // 消耗品工作信息
    let consumableState: string = ''
    const now = dayjs()
    for (let consumable in Consumable) {
      const c = Consumable[consumable];
      const consumableTime = state.consumableTime?.[c] ?? (now.unix() - ConsumableValidityPeriod[c])
      if (consumableTime + ConsumableValidityPeriod[c] > now.unix()) {
        // 消耗品工作中
        const count = state?.consumableKill?.[c] ?? 0
        consumableState += `\n${getItemDesc(c)[0]}已放置`
        if (count > 0) {
          consumableState += `，并对 ${count} 只 ${getCreature(getCreatureByConsumable(c))} 生效`
        }
        consumableState += `，${dayjs.unix(consumableTime + ConsumableValidityPeriod[c]).from(now)}有效`
      }
    }
    if (consumableState !== '') {
      status += '\n' + consumableState
    }

    // 用户状态
    const userInfo = getUserInfo(ext, userId);
    let userPointsDesc: string[] = []
    Object.entries(userInfo.points).forEach(([creature, point]) => {
      if (point > 0) {
        userPointsDesc.push(`${getCreature(Creature[creature])} ${point} 只`)
      }
    })
    if (userPointsDesc.length > 0) {
      status += '\n\n你的战果：' + userPointsDesc.join(' ')
    }

    let userAchievements: string[] = []
    for (let a in Achievement) {
      if (userInfo.achievements[Achievement[a]]) {
        userAchievements.push(`「${getAchievementDesc(Achievement[a])}」`)
      }
    }
    if (userAchievements.length > 0) {
      status += '\n\n成就：' + userAchievements.join('')
    }

    return status
  } else {
    return '夏季生物还未出现！';
  }
};

export const startHandle = (ext: seal.ExtInfo, epUserId: string, groupId: string, guildId: string, userId: string): string => {
  let state = getGroupState(ext, groupId);
  if (state.installed) {
    return '夏季生物已经开始活动了！';
  }
  state.installed = true;
  state.endpointUserId = epUserId;
  state.targetGroupId = groupId;
  state.targetGuildId = guildId;
  state.targetUserId = userId;
  setGroupState(ext, groupId, state);
  return `夏季生物开始活动了……`;
};

export const stopHandle = (ext: seal.ExtInfo, groupId: string): string => {
  let state = getGroupState(ext, groupId);
  if (!state.installed) {
    return '夏季生物还未出现！';
  }
  state.installed = false;
  setGroupState(ext, groupId, state);
  removeGroup(ext, groupId)
  return `神秘的力量让群里不再有讨厌的生物活动了……`;
};

const growHandle = (ext: seal.ExtInfo, groupId: string, userId: string, creature: Creature,
                    groupState: GroupState = undefined,
                    mode: 'auto' | 'manual' | 'other-group' = 'auto', count: number = 0): [string, number] => {
  const now = dayjs();
  console.log(`夏季生物繁殖：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(creature)}，模式 ${mode}`);
  let state = groupState ?? getGroupState(ext, groupId);
  if (count === 0) {
    if (!state.attacked?.[creature]) {
      count = random(5, 10)
    } else {
      const currentCount = state.attacked[creature]
      if (currentCount < MAX_CREATURE_COUNT) {
        count = Math.min(random(5, 7), MAX_CREATURE_COUNT - currentCount)
      } else {
        count = 0
      }
    }
  }
  let achievementStr: string = ''
  if (count > 0) {
    state.attacked = {
      ...state.attacked,
      [creature]: (state.attacked?.[creature] ?? 0) + count
    }
    if (mode === 'manual') {
      // 手动释放，记录
      const newAchievements = addUserReleaseCount(ext, userId, creature, count);
      if (newAchievements.length > 0) {
        achievementStr = '获得成就' + newAchievements.map(it => `「${getAchievementDesc(it)}」`).join('')
      }
    }
    setGroupState(ext, groupId, state)
  }
  return [achievementStr, count]
}

export const manualReleaseHandle = (ext: seal.ExtInfo, groupId: string, userId: string, userName: string, creature: Creature): string => {
  let state = getGroupState(ext, groupId);
  if (!state.installed) {
    return '夏季生物还未出现！'
  }
  let [achievement, count] = growHandle(ext, groupId, userId, creature, state, 'manual')
  const creatureName = getCreature(creature);
  let result = `<${userName}>成功向群里释放了 ${count} 只${creatureName}`
  if (achievement != '') {
    result += `\n${achievement}`
  }
  return result
}

export const timerGrowHandle = (ext: seal.ExtInfo) => {
  const epMap: { [key: string]: seal.EndPointInfo } = {}
  const eps = seal.getEndPoints()
  for (let ep of eps) {
    epMap[ep.userId] = ep
  }

  for (let groupId of getGroups(ext)) {
    const groupState = getGroupState(ext, groupId)
    if (groupState.installed) {
      for (let creature in Creature) {
        const c = Creature[creature];
        growHandle(ext, groupId, '', c, groupState, 'auto')
      }
    }
  }
}

/**
 * 生物攻击群内用户
 * @param ext
 * @param groupId 群号
 * @param creature 生物
 * @param groupStatus
 */
const attackGroupUsers = (ext: seal.ExtInfo, groupId: string, creature: Creature, groupStatus: GroupState = undefined): string => {
  let state = groupStatus ?? getGroupState(ext, groupId);
  const count = state?.attacked?.[creature] ?? 0
  if (count > 0) {
    state.lastAttacked = { ...state.lastAttacked, [creature]: dayjs().unix() }
    setGroupState(ext, groupId, state)

    // TODO: 根据当前生物数量与群内活跃程度，挑选被攻击的用户
    const attackedUsers = []

    return getCreatures(creature, count) + '\n' + attackedUsers.map(attackedUser => `[CQ:at,qq=${attackedUser}]被${getCreature(creature, true)}袭击了`)
  }
  return ''
}

export const timerAttackHandle = (ext: seal.ExtInfo) => {
  const nowRow = dayjs();
  const now = nowRow.unix()
  const epMap: { [key: string]: seal.EndPointInfo } = {}
  const eps = seal.getEndPoints()
  for (let ep of eps) {
    epMap[ep.userId] = ep
  }

  for (let groupId of getGroups(ext)) {
    const groupState = getGroupState(ext, groupId)
    if (groupState.installed) {
      for (let creature in Creature) {
        const c = Creature[creature];
        const interval = CreatureIntervals[c](ext)
        const lastTime = groupState.lastAttacked?.[c] ?? (now - interval)
        if (lastTime + interval <= now) {
          const ep = epMap[groupState.endpointUserId]
          if (ep) {
            autoAttackHandle(ext, ep, c, groupState)
          }
        }
      }
    }
  }
}

const autoAttackHandle = (ext: seal.ExtInfo, ep: seal.EndPointInfo, c: Creature, groupState: GroupState,
                          mode: 'auto' | 'other-group' = 'auto') => {
  const now = dayjs();
  console.log(`夏季生物袭击：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(c)}，模式 ${mode}`);
  const result = attackGroupUsers(ext, groupState.targetGroupId, c, groupState);
  if (result !== '') {
    // 发送生物袭击消息
    const msg = seal.newMessage();
    msg.messageType = 'group'
    msg.groupId = groupState.targetGroupId
    msg.guildId = groupState.targetGuildId
    msg.sender.userId = groupState.targetUserId

    const ctx = seal.createTempCtx(ep, msg);
    seal.replyToSender(ctx, msg, result)
  }
}

/**
 * @deprecated
 */
const attackOtherGroup = (ext: seal.ExtInfo, creature: Creature, fromGroupId: string, _migrate: number) => {
  const now = dayjs();
  console.log(`夏季生物转移：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，来源群 ${fromGroupId}，生物 ${getCreature(creature)}`);
  const epMap: { [key: string]: seal.EndPointInfo } = {}
  const eps = seal.getEndPoints()
  for (let ep of eps) {
    epMap[ep.userId] = ep
  }

  const groups = getGroups(ext).filter(g => g !== fromGroupId);
  if (groups.length > 0) {
    const randomGroup = sample(groups)
    const groupState = getGroupState(ext, randomGroup)
    const ep = epMap[groupState.endpointUserId]
    if (ep) {
      autoAttackHandle(ext, ep, creature, groupState, 'other-group')
    }
  }
}

/**
 * @deprecated
 */
export const attackHandle = (ext: seal.ExtInfo, groupId: string, userId: string, creature: Creature, groupStatus: GroupState = undefined,
                             mode: 'auto' | 'manual' | 'other-group' = 'auto', count: number = 0): [string, number, number] => {
  let state = groupStatus ?? getGroupState(ext, groupId);
  if (count === 0) {
    if (!state.attacked?.[creature]) {
      count = random(3, 10)
    } else {
      const currentCount = state.attacked[creature]
      if (currentCount < MAX_CREATURE_COUNT) {
        count = Math.min(random(3, 5), MAX_CREATURE_COUNT - currentCount)
      } else {
        count = 0
      }
    }
  }
  state.lastAttacked = { ...state.lastAttacked, [creature]: dayjs().unix() }
  let result: string = ''
  let migrate = 0
  if (count > 0) {
    if (mode !== 'other-group') {
      // 检查蚊香等
      switch (creature) {
        case Creature.mosquito:
          const mosquitoMark = state.item?.mosquitoRepellentIncense ?? false
          if (mosquitoMark) {
            const consumableTime = state.consumableTime!.mosquitoRepellentIncense
            if (consumableTime + ConsumableValidityPeriod[Consumable.mosquitoRepellentIncense] > dayjs().unix()) {
              // 蚊香拦截成功
              migrate = count > 2 ? random(2, count) : 2
              count -= migrate
              attackOtherGroup(ext, creature, groupId, migrate)
            }
          }
          break
        case Creature.cockroach:
          const cockroachMark = state.item?.cockroachTrap ?? false
          if (cockroachMark) {
            const consumableTime = state.consumableTime!.cockroachTrap
            if (consumableTime + ConsumableValidityPeriod[Consumable.cockroachTrap] > dayjs().unix()) {
              // 蟑螂屋拦截成功
              migrate = count > 3 ? random(3, count) : 3
              count -= migrate
            }
          }
          break
      }
    }

    state.attacked = {
      ...state.attacked,
      [creature]: (state.attacked?.[creature] ?? 0) + count
    }
    result = getCreatures(creature, state.attacked[creature]);
    if (migrate > 0) {
      switch (creature) {
        case Creature.mosquito:
          result += `\n[蚊香起效了，有 ${migrate} 只被驱赶去别的地方了]`
          break
        case Creature.cockroach:
          result += `\n[蟑螂屋起效了，有 ${migrate} 只被新粘住了]`
          break
      }
    }
    if (mode === 'other-group') {
      const creatureName = getCreature(creature, true);
      result = `有 ${count} 只 ${creatureName} 从其他地方过来了，当前活动中的${creatureName}：\n${result}`
    } else if (mode === 'manual') {
      // 手动释放，记录
      const newAchievements = addUserReleaseCount(ext, userId, creature, count);
      if (newAchievements.length > 0) {
        result += '\n获得成就' + newAchievements.map(it => `「${getAchievementDesc(it)}」`).join('')
      }
    }
  }
  setGroupState(ext, groupId, state)
  return [result, count, migrate]
};

export const defenseHandle = (ext: seal.ExtInfo, groupId: string, userId: string, action: Action): string | undefined => {
  let result: string | undefined = undefined
  let state = getGroupState(ext, groupId);
  let killed: number = 0
  if (state.installed && state.attacked) {
    let [num, creature] = creatureCountByAction(state, action)
    if (num > 0) {
      result = ''
      const userInfo = getUserInfo(ext, userId);
      let success: boolean
      if (creature === Creature.mosquito && userInfo.items.electricSwatter) {
        success = random(1, 100) <= Math.min(SuccessfulAttackProbabilities[Creature.mosquito] + 20, 100);
      } else {
        success = random(1, 100) <= SuccessfulAttackProbabilities[creature];
      }

      if (success) {
        const creatureDesc = getCreature(creature);

        if (creature === Creature.mosquito && userInfo.items.electricSwatter) {
          result += '使用电蚊拍，'
          killed = Math.min(random(3, 8), num)
        } else {
          killed = Math.min(random(1, 3), num)
        }

        state.attacked[creature] -= killed
        result += `你成功${action}死了 ${killed} 只${creatureDesc}`;
        if (state.attacked[creature] <= 0) {
          result += `\n已经没有${creatureDesc}在活动了`
        } else {
          result += `，还有 ${state.attacked[creature]} 只 ${creatureDesc} 正在活动`
        }
        const [newAchievements, newItems] = addUserCreaturePoint(ext, userId, creature, killed);
        if (newAchievements.length > 0) {
          // 有新成就
          result += '\n获得成就' + newAchievements.map(it => `「${getAchievementDesc(it)}」`).join('')
        }
        if (newItems.length > 0) {
          // 有新道具
          result += '\n解锁' + newItems.map(it => {
            const [itemName, itemDesc] = getItemDesc(it);
            return `「${itemName}」（${itemDesc}）`;
          }).join('')
        }
      } else {
        result = getDefenseFailDesc(creature)
      }
    }
  }
  if (killed > 0) {
    setGroupState(ext, groupId, state)
  }
  return result
}

export const timerUseConsumableHandle = (ext: seal.ExtInfo) => {
  const epMap: { [key: string]: seal.EndPointInfo } = {}
  const eps = seal.getEndPoints()
  for (let ep of eps) {
    epMap[ep.userId] = ep
  }

  const now = dayjs()
  for (let groupId of getGroups(ext)) {
    const groupState = getGroupState(ext, groupId)
    if (groupState.installed && groupState.consumableTime) {
      for (let consumable in Consumable) {
        const c = Consumable[consumable];
        const consumableMark = groupState.item?.[c];
        if (consumableMark) {
          const consumableTime = groupState.consumableTime[c]
          if (consumableTime + ConsumableValidityPeriod[c] > now.unix()) {
            continue;
          }
          useConsumableHandle(ext, groupId, c, groupState)
        }
      }
    }
  }
}

const useConsumableHandle = (ext: seal.ExtInfo, groupId: string, consumable: Consumable,
                             groupState: GroupState = undefined) => {
  const lethality = ConsumableLethality[consumable]
  const kill = random(lethality[0], lethality[1])
  switch (consumable) {
    case Consumable.mosquitoRepellentIncense:
      consumableKillCreature(ext, groupId, Consumable.mosquitoRepellentIncense, Creature.mosquito, kill, groupState)
      break
    case Consumable.cockroachTrap:
      consumableKillCreature(ext, groupId, Consumable.cockroachTrap, Creature.cockroach, kill, groupState)
      break
    case Consumable.cockroachGelBait:
      consumableKillCreature(ext, groupId, Consumable.cockroachGelBait, Creature.cockroach, kill, groupState)
      break
  }
}

const consumableKillCreature = (ext: seal.ExtInfo, groupId: string,
                                consumable: Consumable, creature: Creature, kill: number,
                                groupState: GroupState = undefined) => {
  const state = groupState ?? getGroupState(ext, groupId);
  const current = state.consumableKill?.[creature] ?? 0
  const actuallyKill = Math.min(kill, current)
  state.attacked = {
    ...state.attacked,
    [creature]: current - actuallyKill,
  }
  state.consumableKill = {
    ...state.consumableKill,
    [consumable]: (state.consumableKill?.[consumable] ?? 0) + kill
  }
  setGroupState(ext, groupId, state)
}

export const setConsumableHandle = (ext: seal.ExtInfo, groupId: string, userId: string, consumable: Consumable): string | undefined => {
  const state = getGroupState(ext, groupId);
  if (!state.installed) {
    return '夏季生物还未出现，无法使用！';
  }
  const now = dayjs()
  const consumableDesc = getItemDesc(consumable)[0];
  const consumableMark = state.item?.[consumable];
  const consumableTime = state.consumableTime?.[consumable] ?? now.unix();
  if (consumableMark && consumableTime + ConsumableValidityPeriod[consumable] > now.unix()) {
    return `本群已经放置过${consumableDesc}了！`;
  }

  let userInfo = getUserInfo(ext, userId);
  switch (consumable) {
    case Consumable.mosquitoRepellentIncense:
      // 蚊香需要百蚊斩解锁
      if (!userInfo.achievements.mosquito100Kill) {
        return '你还没有解锁蚊香，继续拍死更多蚊子吧';
      } else {
        setConsumable(ext, groupId, Consumable.mosquitoRepellentIncense, now, state);
      }
      break;
    case Consumable.cockroachTrap:
      // 蟑螂屋需要十蟑斩解锁
      if (!userInfo.achievements.cockroach10Kill) {
        return '你还没有解锁蟑螂屋，继续踩死更多蟑螂吧';
      } else {
        setConsumable(ext, groupId, Consumable.cockroachTrap, now, state);
      }
      break;
    case Consumable.cockroachGelBait:
      // 杀蟑胶饵需要百蟑斩解锁
      if (!userInfo.achievements.cockroach100Kill) {
        return '你还没有解锁杀蟑胶饵，继续踩死更多蟑螂吧';
      } else {
        setConsumable(ext, groupId, Consumable.cockroachGelBait, now, state);
      }
      break;
    default:
      return '未知的物品！'
  }

  setGroupState(ext, groupId, state);
  return `成功在本群放置${consumableDesc}！`
}

const setConsumable = (ext: seal.ExtInfo, groupId: string, consumable: Consumable, time: dayjs.Dayjs,
                       groupState: GroupState = undefined) => {
  const state = groupState ?? getGroupState(ext, groupId);
  state.item = {
    ...state.item,
    [consumable]: true,
  };
  state.consumableTime = {
    ...state.consumableTime,
    [consumable]: time.unix()
  };
  state.consumableKill = {
    ...state.consumableKill,
    [consumable]: 0
  }
  setGroupState(ext, groupId, state);
}
