import { VERSION } from "./consts";
import { Creature, GroupState, Points, State, UserPoint } from "./types";

export const getState = (ext: seal.ExtInfo): State => {
  let temp = ext.storageGet('summer_creature_status');
  if (temp) {
    let state = JSON.parse(temp);
    // console.log('get state:', JSON.stringify(state));
    return state;
  } else {
    let state = { version: VERSION, groups: {} };
    // console.log('get state:', JSON.stringify(state));
    return state;
  }
};

export const setState = (ext: seal.ExtInfo, state: State) => {
  if (state.version) {
    state.version = VERSION;
  }
  // console.log('set state:', JSON.stringify(state));
  ext.storageSet('summer_creature_status', JSON.stringify(state));
};

export const getGroupState = (ext: seal.ExtInfo, group: string): GroupState => {
  let state = getState(ext);
  if (state) {
    let groupState = state?.groups?.[group];
    if (groupState) {
      return groupState;
    }
  }
  return {
    endpointUserId: "",
    targetUserId: "",
    targetGroupId: "",
    targetGuildId: "",
    installed: false
  };
};

export const setGroupState = (
  ext: seal.ExtInfo,
  group: string,
  groupState: GroupState
) => {
  let state = getState(ext);
  let groups = state.groups
  groups[group] = groupState;
  state.groups = groups
  setState(ext, state);
};

export const getUserPoint = (ext: seal.ExtInfo, userId: string): UserPoint => {
  let temp = ext.storageGet('summer_creature_points');
  let points: Points = temp ? JSON.parse(temp) : {};
  if (points[userId]) {
    return points[userId] ?? {} as UserPoint;
  } else {
    return {} as UserPoint
  }
}

export const getUserCreaturePoint = (ext: seal.ExtInfo, userId: string, creature: Creature): number => {
  let userPoint: UserPoint = getUserPoint(ext, userId)
  if (userPoint[creature]) {
    return userPoint[creature];
  } else {
    return 0
  }
}

export const setUserCreaturePoint = (ext: seal.ExtInfo, userId: string, creature: Creature, point: number) => {
  let temp = ext.storageGet('summer_creature_points');
  let points: Points = temp ? JSON.parse(temp) : {} as Points;
  points = {
    ...points,
    [userId]: {
      ...(points[userId] ?? {}),
      [creature]: point
    }
  } as Points
  ext.storageSet('summer_creature_points', JSON.stringify(points));
}


export const addUserCreaturePoint = (ext: seal.ExtInfo, userId: string, creature: Creature, add: number) => {
  let temp = ext.storageGet('summer_creature_points');
  let points: Points = temp ? JSON.parse(temp) : {};
  let userPoint: UserPoint = points[userId] ?? {} as UserPoint
  userPoint[creature] = (userPoint[creature] ?? 0) + add
  points = {
    ...points,
    [userId]: userPoint
  }
  ext.storageSet('summer_creature_points', JSON.stringify(points));
}
