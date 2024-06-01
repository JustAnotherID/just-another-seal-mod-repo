import { Creature } from "./types";
import { times } from "lodash-es";

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
