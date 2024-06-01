import { random } from 'lodash-es'
import {
  addUserCreaturePoint,
  getGroupState,
  getState,
  getUserPoint,
  setGroupState
} from './store';
import { Action, Creature, GroupState } from "./types";
import {
  CreatureIntervals,
  DefenseFailDescList,
  MAX_CREATURE_COUNT,
  SuccessfulAttackProbabilities
} from "./consts";
import { getCreature, getCreatures } from "./utils";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)

export const statusHandle = (ext: seal.ExtInfo, groupId: string, userId: string): string => {
  const state = getGroupState(ext, groupId);
  console.log('group state', JSON.stringify(state))
  if (state.installed) {
    let status = '夏季生物活动中——'

    // 活动状态
    if (state.attacked) {
      let attackedDesc: string = ''
      Object.entries(state.attacked).forEach(([creature, count]) => {
        if (count > 0) {
          attackedDesc += `\n${getCreatures(Creature[creature], count)}`
        }
      })
      if (attackedDesc !== '') {
        status += attackedDesc
      }
    }

    // 下次袭击
    let forecastDesc: string = ''
    const now = dayjs();
    for (let creature in Creature) {
      const c = Creature[creature];
      const interval = CreatureIntervals[creature];
      const lastTime = state?.lastAttacked[c] ?? (now.unix() - interval);
      const nextTime = lastTime + interval
      forecastDesc += `\n${getCreature(Creature[creature])}：${dayjs.unix(nextTime).from(now)}`
    }
    console.log('forecastDesc', forecastDesc)
    if (forecastDesc !== '') {
      status += '\n\n袭击预报:' + forecastDesc
    }

    // 用户状态
    let userDesc: string = ''
    const userPoint = getUserPoint(ext, userId);
    Object.entries(userPoint).forEach(([creature, point]) => {
      if (point > 0) {
        userDesc += `${getCreature(Creature[creature])} ${point} 只`
      }
    })
    console.log('userDesc', userDesc)
    if (userDesc !== '') {
      status += '\n\n你的战果：' + userDesc
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
  return `神秘的力量让群里不再有讨厌的生物活动了……`;
};

export const manualAttackHandle = (ext: seal.ExtInfo, groupId: string, creature: Creature): string => {
  let state = getGroupState(ext, groupId);
  if (!state.installed) {
    return '夏季生物还未出现！';
  }
  return attackHandle(ext, groupId, creature, state);
}

export const autoAttackHandle = (ext: seal.ExtInfo) => {
  const nowRow = dayjs();
  const now = nowRow.unix()
  const epMap: { [key: string]: seal.EndPointInfo } = {}
  const eps = seal.getEndPoints()
  for (let ep of eps) {
    epMap[ep.userId] = ep
  }

  Object.entries(getState(ext).groups).forEach(([groupId, groupState]) => {
    if (groupState.installed) {
      for (let creature in Creature) {
        const c = Creature[creature];
        const interval = CreatureIntervals[c]
        const lastTime = groupState.lastAttacked?.[c] ?? (now - interval)
        if (lastTime + interval <= now) {
          const ep = epMap[groupState.endpointUserId]
          if (ep) {
            console.log(`夏季生物袭击：时间 ${nowRow.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(c)}`);
            const result = attackHandle(ext, groupId, c, groupState)

            // 发送生物活动消息
            const msg = seal.newMessage();
            msg.messageType = 'group'
            msg.groupId = groupState.targetGroupId
            msg.guildId = groupState.targetGuildId
            msg.sender.userId = groupState.targetUserId

            const ctx = seal.createTempCtx(ep, msg);
            seal.replyToSender(ctx, msg, result)
          }
        }
      }
    }
  })
}

export const attackHandle = (ext: seal.ExtInfo, groupId: string, creature: Creature, groupStatus: GroupState = undefined) => {
  let state = groupStatus ?? getGroupState(ext, groupId);
  if (!state.attacked?.[creature]) {
    state.attacked = { ...state.attacked, [creature]: random(3, 10) }
  } else {
    const currentCount = state.attacked[creature]
    if (currentCount < MAX_CREATURE_COUNT) {
      state.attacked[creature] += random(1, 3)
    }
  }
  state.lastAttacked = { ...state.lastAttacked, [creature]: dayjs().unix() }
  setGroupState(ext, groupId, state)

  return getCreatures(creature, state.attacked[creature])
};

const creatureCountByAction = (state: GroupState, action: Action): [number, Creature] => {
  switch (action) {
    case Action.beat:
      return [state.attacked?.[Creature.mosquito] ?? 0, Creature.mosquito]
    case Action.stepOn:
      return [state.attacked?.[Creature.cockroach] ?? 0, Creature.cockroach]
    default:
      return [0, undefined]
  }
}


const getDefenseFailDesc = (creature: Creature): string => {
  const descList = DefenseFailDescList[creature];
  return descList[random(0, descList.length - 1)]
}

export const defenseHandle = (ext: seal.ExtInfo, groupId: string, userId: string, action: Action): string | undefined => {
  let result: string | undefined = undefined
  let state = getGroupState(ext, groupId);
  let killed: number = 0
  if (state.installed && state.attacked) {
    let [num, creature] = creatureCountByAction(state, action)
    if (num > 0) {
      const success = random(1, 100) <= SuccessfulAttackProbabilities[creature];
      if (success) {
        const creatureDesc = getCreature(creature);
        killed = Math.min(random(1, 3), num)
        state.attacked[creature] -= killed
        result = `你成功${action}死了 ${killed} 只${creatureDesc}`;
        if (state.attacked[creature] <= 0) {
          result += `\n已经没有${creatureDesc}在活动了`
        } else {
          result += `，还有 ${state.attacked[creature]} 只 ${creatureDesc} 正在活动`
        }
        addUserCreaturePoint(ext, userId, creature, killed)
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
