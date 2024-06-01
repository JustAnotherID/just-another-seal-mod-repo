import { Creature } from "./types";
import { times } from "lodash-es";

export const VERSION = '1.0.0'

export const MAX_CREATURE_COUNT = 16

export const CreatureIntervals = {
  [Creature.mosquito]: 60 * 10,
  [Creature.cockroach]: 60 * 30,
}

export const SuccessfulAttackProbabilities = {
  [Creature.mosquito]: 50,
  [Creature.cockroach]: 30,
}

export const DefenseFailDescList = {
  [Creature.mosquito]: [
    ...times(5, () => '你试图拍死🦟，但是它的嗡嗡声突然不见了'),
    ...times(5, () => '你试图拍死🦟，但找了半天也没看见一只'),
    ...times(5, () => '你试图拍死🦟，但它很快飞远消失了'),
    '你试图拍死🦟，结果反而被叮了几个个包',
  ],
  [Creature.cockroach]: [
    ...times(10, () => '你试图踩死🪳，但找了半天也没看见一只'),
    ...times(10, () => '你试图踩死🪳，但它很快钻进角落消失了'),
    '你试图踩死🪳，它突然飞起来扑向你，趁着吓了一跳的你试图挡住的时候逃走了',
  ],
}
