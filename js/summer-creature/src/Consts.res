let version = "2.0.0-alpha"

let maxCreatureCount = 16

let defaultCreatureInterval: Map.t<Types.creature, int> = Map.fromArray([
  (Types.Mosquito, 60 * 60),
  (Types.Cockroach, 60 * 60 * 3),
])

let successfulAccackProbabilities: Map.t<Types.creature, int> = Map.fromArray([
  (Types.Mosquito, 60),
  (Types.Cockroach, 40),
])

let defenseFailDescList: Map.t<Types.creature, array<string>> = Map.fromArray([
  (
    Types.Mosquito,
    [
      ...Lodash.times(5, () => "你试图拍死🦟，但是它的嗡嗡声突然不见了"),
      ...Lodash.times(5, () => "你试图拍死🦟，但找了半天也没看见一只"),
      ...Lodash.times(5, () => "你试图拍死🦟，但它很快飞远消失了"),
      "你试图拍死🦟，结果反而被叮了几个包",
    ],
  ),
  (
    Types.Cockroach,
    [
      ...Lodash.times(10, () => "你试图踩死🪳，但找了半天也没看见一只"),
      ...Lodash.times(10, () => "你试图踩死🪳，但它很快钻进角落消失了"),
      "你试图踩死🪳，它突然飞起来扑向你，趁着吓了一跳的你试图挡住的时候逃走了",
    ],
  ),
])

/* 消耗品有效期 */
let consumableValidityPeriod: Map.t<Types.item, int> = Map.fromArray([
  (Types.MosquitoRepellentIncense, 60 * 60 * 8),
  (Types.CockroachTrap, 60 * 60 * 8),
  (Types.CockroachGelBait, 60 * 60 * 8),
])

/* 消耗品杀伤力（每 10 分钟杀伤） */
let consumableLethality: Map.t<Types.item, (int, int)> = Map.fromArray([
  (Types.MosquitoRepellentIncense, (3, 7)),
  (Types.CockroachTrap, (1, 2)),
  (Types.CockroachGelBait, (5, 7)),
])
