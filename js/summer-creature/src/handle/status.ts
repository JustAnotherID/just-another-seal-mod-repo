import { getGroupState, getUserInfo } from "../store";
import { Achievement, Creature } from "../types";
import { ConsumableValidityPeriod, MAX_CREATURE_COUNT } from "../consts";
import {
  getAchievementDesc,
  getCreature,
  getCreatureByConsumable,
  getItemDesc
} from "../utils";
import { dayjs } from "../utils/dayjs";
import { Consumable } from "../items";

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
