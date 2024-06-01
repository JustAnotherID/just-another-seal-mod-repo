export enum Creature {
  mosquito = 'mosquito',
  cockroach = 'cockroach',
}

export enum Action {
  beat = '拍',
  stepOn = '踩',
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

export interface Points {
  [key: string]: UserPoint
}
