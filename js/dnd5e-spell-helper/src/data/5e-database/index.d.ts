type APIReference = {
  _id?: boolean;
  index: string;
  name: string;
  url: string;
};

interface AreaOfEffect {
  _id?: boolean;
  size: number;
  type: 'sphere' | 'cube' | 'cylinder' | 'line' | 'cone';
}

interface Damage {
  _id?: boolean;
  damage_at_slot_level?: Record<number, string>;
  damage_at_character_level?: Record<number, string>;
  damage_type?: APIReference;
}

interface DC {
  _id?: boolean;
  dc_success: string;
  dc_type: APIReference;
  desc?: string;
}

interface Spell {
  area_of_effect?: AreaOfEffect;
  attack_type?: string;
  casting_time: string;
  classes: APIReference[];
  components: string[];
  concentration: boolean;
  damage?: Damage;
  dc?: DC;
  desc: string[];
  duration: string;
  heal_at_slot_level?: Record<number, string>;
  higher_level?: string;
  index: string;
  level: number;
  material?: string;
  name: string;
  range: string;
  ritual: boolean;
  school: APIReference;
  subclasses?: APIReference[];
  url: string;
}

export declare const spells: Spell[];
