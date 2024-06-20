import { Action, Creature } from "../types";
import {
  addUserCreaturePoint,
  getGroupState,
  getUserInfo,
  setGroupState
} from "../store";
import {
  creatureCountByAction,
  getAchievementDesc,
  getCreature,
  getDefenseFailDesc,
  getItemDesc
} from "../utils";
import { random } from "lodash-es";
import { SuccessfulAttackProbabilities } from "../consts";

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
