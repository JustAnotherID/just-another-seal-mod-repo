interface Time {
  number: number;
  unit: string;
}

interface Distance {
  type: string;
}

interface Range {
  type: string;
  distance: Distance;
}

interface Component {
  v: boolean;
}

interface Duration {
  type: string;
  amount: number;
}

interface Durations {
  type: string;
  duration: Duration;
}

interface EntriesHigherLevel {
  type: string;
  name: string;
  eNG_name: string;
  entries: string[];
}

interface FromClassList {
  name: string;
  source: string;
}

interface Classe {
  fromClassList: FromClassList[];
}

interface Spell {
  name: string;
  ENG_name: string;
  source: string;
  page: number;
  srd: boolean | string;
  level: number;
  school: string;
  time: Time[];
  range: Range;
  components: Component;
  duration: Durations[];
  entries: string[];
  entriesHigherLevel: EntriesHigherLevel[];
  classes: Classe;
}

export declare const spells: Spell[];
