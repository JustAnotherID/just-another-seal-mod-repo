import { Creature } from "./types";
import { DefaultCreatureIntervals } from "./consts";
import { round } from "lodash-es";

export const CreatureIntervals = {
  [Creature.mosquito]: (ext: seal.ExtInfo): number => {
    const interval = round(seal.ext.getFloatConfig(ext, '蚊子活动间隔/min（会四舍五入为整数）'))
    if (interval <= 0) {
      return DefaultCreatureIntervals[Creature.mosquito];
    }
    return interval * 60
  },
  [Creature.cockroach]: (ext: seal.ExtInfo): number => {
    const interval = round(seal.ext.getFloatConfig(ext, '蟑螂活动间隔/min（会四舍五入为整数）'))
    if (interval <= 0) {
      return DefaultCreatureIntervals[Creature.cockroach];
    }
    return interval * 60
  },
}
