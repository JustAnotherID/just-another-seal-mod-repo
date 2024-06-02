import { Consumable } from "./items";

export enum Creature {
  mosquito = 'mosquito',
  cockroach = 'cockroach',
}

export enum Action {
  beat = '拍',
  stepOn = '踩',
}

export type GroupItem = {
  [key in Consumable]: boolean
}

export type GroupConsumableTime = {
  // 记录消耗品放置时间
  [key in Consumable]: number
}

export interface GroupState {
  endpointUserId: string;
  targetUserId: string;
  targetGroupId: string;
  targetGuildId: string;

  installed: boolean;
  attacked?: {
    [key in Creature]?: number
  }
  lastAttacked?: {
    [key in Creature]?: number
  }

  item?: GroupItem
  consumableTime?: GroupConsumableTime
}

export interface State {
  version: string;
  groups: {
    [key: string]: GroupState
  };
}

export type UserPoint = {
  [key in Creature]: number;
};

export type CreatureCount = {
  [key in Creature]: number;
};

export interface UserItem {
  electricSwatter: boolean // 电蚊拍
}

export enum Achievement {
  Mosquito10Kill = 'mosquito10Kill',
  Mosquito100Kill = 'mosquito100Kill',
  Mosquito1000Kill = 'mosquito1000Kill',
  Mosquito10000Kill = 'mosquito10000Kill',
  Cockroach10Kill = 'cockroach10Kill',
  Cockroach100Kill = 'cockroach100Kill',
  Cockroach1000Kill = 'cockroach1000Kill',
  Cockroach10000Kill = 'cockroach10000Kill',

  Mosquito100Release = 'mosquito100Release',
  Mosquito1000Release = 'mosquito1000Release',
  Mosquito10000Release = 'mosquito10000Release',
  Cockroach100Release = 'cockroach100Release',
  Cockroach1000Release = 'cockroach1000Release',
  Cockroach10000Release = 'cockroach10000Release',
}

export type AchievementMark = {
  [key in Achievement]: boolean
}

export interface UserInfo {
  points: UserPoint
  releases: CreatureCount
  items: UserItem
  achievements: AchievementMark
}


/**
 * @deprecated
 */
export interface Points {
  [key: string]: UserPoint
}
