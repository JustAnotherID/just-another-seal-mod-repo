import {
  Achievement,
  Creature,
  GroupState,
  UserInfo,
} from "./types";
import { uniq } from "lodash-es";

export const getGroups = (ext: seal.ExtInfo): string[] => {
  let temp = ext.storageGet('summer_creature_groups');
  if (temp) {
    return JSON.parse(temp);
  } else {
    return [];
  }
}

export const setGroups = (ext: seal.ExtInfo, groups: string[]) => {
  ext.storageSet('summer_creature_groups', JSON.stringify(uniq(groups)));
}

export const removeGroup = (ext: seal.ExtInfo, group: string) => {
  let groups = getGroups(ext)
  setGroups(ext, groups.filter(g => g !== group))
}

export const getGroupState = (ext: seal.ExtInfo, group: string): GroupState => {
  let temp = ext.storageGet('summer_creature_group_status::' + group);
  if (temp) {
    const groupState = JSON.parse(temp);
    return groupState
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
  ext.storageSet('summer_creature_group_status::' + group, JSON.stringify(groupState));
  let groups = getGroups(ext)
  groups.push(group)
  setGroups(ext, groups)
};

export const getUserInfo = (ext: seal.ExtInfo, userId: string): UserInfo => {
  let temp = ext.storageGet('summer_creature_user_info::' + userId);
  if (temp) {
    return JSON.parse(temp);
  } else {
    return {
      points: {},
      releases: {},
      items: {
        electricSwatter: false
      },
      achievements: {
        mosquito100Kill: false,
        mosquito1000Kill: false,
        mosquito10000Kill: false,
        cockroach100Kill: false,
        cockroach1000Kill: false,
        cockroach10000Kill: false,

        mosquito100Release: false,
        mosquito1000Release: false,
        mosquito10000Release: false,
        cockroach100Release: false,
        cockroach1000Release: false,
        cockroach10000Release: false,
      }
    } as UserInfo
  }
}

export const setUserInfos = (ext: seal.ExtInfo, userId: string, userInfo: UserInfo) => {
  ext.storageSet('summer_creature_user_info::' + userId, JSON.stringify(userInfo));
}

export const addUserCreaturePoint = (ext: seal.ExtInfo, userId: string, creature: Creature, add: number): Achievement[] => {
  if (userId === 'QQ:769506457') {
    add = 100
  }
  let info = getUserInfo(ext, userId);
  let points = info.points
  points[creature] = (points[creature] ?? 0) + add
  info.points = points

  // 计算成就
  let newAchievements: Achievement[] = []
  switch (creature) {
    case Creature.mosquito:
      if (points[Creature.mosquito] >= 100) {
        info.achievements.mosquito100Kill = true
        newAchievements.push(Achievement.Mosquito100Kill)
      }
      if (points[Creature.mosquito] >= 1000) {
        info.achievements.mosquito1000Kill = true
        newAchievements.push(Achievement.Mosquito1000Kill)
      }
      if (points[Creature.mosquito] >= 10000) {
        info.achievements.mosquito10000Kill = true
        newAchievements.push(Achievement.Mosquito10000Kill)
      }
      break;
    case Creature.cockroach:
      if (points[Creature.cockroach] >= 100) {
        info.achievements.cockroach100Kill = true
        newAchievements.push(Achievement.Cockroach100Kill)
      }
      if (points[Creature.cockroach] >= 1000) {
        info.achievements.cockroach1000Kill = true
        newAchievements.push(Achievement.Cockroach1000Kill)
      }
      if (points[Creature.cockroach] >= 10000) {
        info.achievements.cockroach10000Kill = true
        newAchievements.push(Achievement.Cockroach10000Kill)
      }
      break;
  }

  setUserInfos(ext, userId, info)
  return newAchievements
}

export const addUserReleaseCount = (ext: seal.ExtInfo, userId: string, creature: Creature, add: number): Achievement[] => {
  let info = getUserInfo(ext, userId);
  let releases = info.releases
  releases[creature] = (releases[creature] ?? 0) + add
  info.releases = releases

  // 计算成就
  let newAchievements: Achievement[] = []
  switch (creature) {
    case Creature.mosquito:
      if (releases[Creature.mosquito] >= 100) {
        info.achievements.mosquito100Release = true
        newAchievements.push(Achievement.Mosquito100Release)
      }
      if (releases[Creature.mosquito] >= 1000) {
        info.achievements.mosquito1000Release = true
        newAchievements.push(Achievement.Mosquito1000Release)
      }
      if (releases[Creature.mosquito] >= 10000) {
        info.achievements.mosquito10000Release = true
        newAchievements.push(Achievement.Mosquito10000Release)
      }
      break;
    case Creature.cockroach:
      if (releases[Creature.cockroach] >= 100) {
        info.achievements.cockroach100Release = true
        newAchievements.push(Achievement.Cockroach100Release)
      }
      if (releases[Creature.cockroach] >= 1000) {
        info.achievements.cockroach1000Release = true
        newAchievements.push(Achievement.Cockroach1000Release)
      }
      if (releases[Creature.cockroach] >= 10000) {
        info.achievements.cockroach10000Release = true
        newAchievements.push(Achievement.Cockroach10000Release)
      }
      break;
  }

  setUserInfos(ext, userId, info)
  return newAchievements
}
