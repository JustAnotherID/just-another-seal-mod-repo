import { Creature } from "./types";
import { DefaultCreatureIntervals } from "./consts";

export const CreatureIntervals = {
  [Creature.mosquito]: (ext: seal.ExtInfo): number => {
    const interval = seal.ext.getIntConfig(ext, '蚊子活动间隔/min')
    if (interval <= 0) {
      return DefaultCreatureIntervals[Creature.mosquito];
    }
    return interval * 60
  },
  [Creature.cockroach]: (ext: seal.ExtInfo): number => {
    const interval = seal.ext.getIntConfig(ext, '蟑螂活动间隔/min')
    if (interval <= 0) {
      return DefaultCreatureIntervals[Creature.cockroach];
    }
    return interval * 60
  },
}
