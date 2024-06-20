import { Creature, GroupState } from "../types";
import { getAchievementDesc, getCreature } from "../utils";
import {
  addUserReleaseCount,
  getGroups,
  getGroupState,
  setGroupState
} from "../store";
import { random } from "lodash-es";
import { dayjs } from "../utils/dayjs";
import { MAX_CREATURE_COUNT } from "../consts";

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
