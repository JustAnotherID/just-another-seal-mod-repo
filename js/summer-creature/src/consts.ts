import { Creature } from "./types";
import { times } from "lodash-es";
import { Consumable } from "./items";

export const VERSION = '1.2.0'

export const MAX_CREATURE_COUNT = 16

export const DefaultCreatureIntervals = {
  [Creature.mosquito]: 60 * 60,
  [Creature.cockroach]: 60 * 60 * 3,
}

export const SuccessfulAttackProbabilities = {
  [Creature.mosquito]: 60,
  [Creature.cockroach]: 40,
}

export const DefenseFailDescList = {
  [Creature.mosquito]: [
    ...times(5, () => '你试图拍死🦟，但是它的嗡嗡声突然不见了'),
    ...times(5, () => '你试图拍死🦟，但找了半天也没看见一只'),
    ...times(5, () => '你试图拍死🦟，但它很快飞远消失了'),
    '你试图拍死🦟，结果反而被叮了几个包',
  ],
  [Creature.cockroach]: [
    ...times(10, () => '你试图踩死🪳，但找了半天也没看见一只'),
    ...times(10, () => '你试图踩死🪳，但它很快钻进角落消失了'),
    '你试图踩死🪳，它突然飞起来扑向你，趁着吓了一跳的你试图挡住的时候逃走了',
  ],
}

/**
 * 消耗品有效期
 */
export const ConsumableValidityPeriod = {
  [Consumable.mosquitoRepellentIncense]: 60 * 60 * 8,
  [Consumable.cockroachTrap]: 60 * 60 * 8,
}
