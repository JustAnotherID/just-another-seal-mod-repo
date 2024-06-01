import { Achievement, Action, Creature, GroupState } from "./types";
import { random, times } from "lodash-es";
import { DefenseFailDescList } from "./consts";
import { Consumable, Equipment, Item } from "./items";

export const getCreature = (creature: Creature, text: boolean = false): string => {
  switch (creature) {
    case Creature.mosquito:
      return text ? '蚊子' : '🦟';
    case Creature.cockroach:
      return text ? '蟑螂' : '🪳';
  }
}

export const getCreatures = (creature: Creature, count: number): string => {
  return times(count, () => getCreature(Creature[creature])).join('') ?? ''
}

export const getAchievementDesc = (achievement: Achievement): string => {
  switch (achievement) {
    case Achievement.Mosquito100Kill:
      return "百蚊斩";
    case Achievement.Mosquito1000Kill:
      return "千蚊斩";
    case Achievement.Mosquito10000Kill:
      return "万蚊斩";
    case Achievement.Cockroach100Kill:
      return "百蟑斩";
    case Achievement.Cockroach1000Kill:
      return "千蟑斩";
    case Achievement.Cockroach10000Kill:
      return "万蟑斩";

    case Achievement.Mosquito100Release:
      return "蚊子之友";
    case Achievement.Mosquito1000Release:
      return "蚊子间谍";
    case Achievement.Mosquito10000Release:
      return "人形蚊子";
    case Achievement.Cockroach100Release:
      return "蟑螂之友";
    case Achievement.Cockroach1000Release:
      return "蟑螂间谍";
    case Achievement.Cockroach10000Release:
      return "人形蟑螂";
  }
}

export const creatureCountByAction = (state: GroupState, action: Action): [number, Creature] => {
  switch (action) {
    case Action.beat:
      return [state.attacked?.[Creature.mosquito] ?? 0, Creature.mosquito]
    case Action.stepOn:
      return [state.attacked?.[Creature.cockroach] ?? 0, Creature.cockroach]
    default:
      return [0, undefined]
  }
}

export const getDefenseFailDesc = (creature: Creature): string => {
  const descList = DefenseFailDescList[creature];
  return descList[random(0, descList.length - 1)]
}

export const getItemDesc = (item: Item) => {
  switch (item) {
    case Equipment.electricSwatter:
      return '电蚊拍';
    case Consumable.mosquitoRepellentIncense:
      return '蚊香';
    case Consumable.cockroachTrap:
      return '蟑螂屋';
  }
}
