import type { Dayjs } from "dayjs";
import { random } from 'lodash-es'
import { getGroups, getGroupState, getUserInfo, setGroupState } from '../store';
import { ConsumableLethality, ConsumableValidityPeriod } from "../consts";
import { Creature, GroupState } from "../types";
import { getCreature, getItemDesc } from "../utils";
import { dayjs } from "../utils/dayjs";
import { Consumable } from "../items";

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
  const now = dayjs()
  console.log(`消耗品工作：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupId}，消耗品 ${getItemDesc(consumable)[0]}，击杀 ${kill} 只 ${getCreature(creature)}`);
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

const setConsumable = (ext: seal.ExtInfo, groupId: string, consumable: Consumable, time: Dayjs,
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
