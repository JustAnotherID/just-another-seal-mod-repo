import { Achievement, Creature, GroupState, UserInfo, } from "./types";
import { uniq } from "lodash-es";
import { Consumable, Equipment, Item } from "./items";

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
        mosquito10Kill: false,
        mosquito100Kill: false,
        mosquito1000Kill: false,
        mosquito10000Kill: false,
        cockroach10Kill: false,
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

export const addUserCreaturePoint = (ext: seal.ExtInfo, userId: string, creature: Creature, add: number): [Achievement[], Item[]] => {
  let info = getUserInfo(ext, userId);
  let points = info.points
  points[creature] = (points[creature] ?? 0) + add
  info.points = points

  // 计算成就
  let newAchievements: Achievement[] = []
  let newItems: Item[] = []
  switch (creature) {
    case Creature.mosquito:
      if (points[Creature.mosquito] >= 10 && !info.achievements.mosquito10Kill) {
        info.achievements.mosquito10Kill = true
        newAchievements.push(Achievement.Mosquito10Kill)
        info.items.electricSwatter = true
        newItems.push(Equipment.electricSwatter)
      }
      if (points[Creature.mosquito] >= 100 && !info.achievements.mosquito100Kill) {
        info.achievements.mosquito100Kill = true
        newAchievements.push(Achievement.Mosquito100Kill)
        newItems.push(Consumable.mosquitoRepellentIncense)
      }
      if (points[Creature.mosquito] >= 1000 && !info.achievements.mosquito1000Kill) {
        info.achievements.mosquito1000Kill = true
        newAchievements.push(Achievement.Mosquito1000Kill)
      }
      if (points[Creature.mosquito] >= 10000 && !info.achievements.mosquito10000Kill) {
        info.achievements.mosquito10000Kill = true
        newAchievements.push(Achievement.Mosquito10000Kill)
      }
      break;
    case Creature.cockroach:
      if (points[Creature.cockroach] >= 100 && !info.achievements.cockroach100Kill) {
        info.achievements.cockroach100Kill = true
        newAchievements.push(Achievement.Cockroach100Kill)
        newItems.push(Consumable.cockroachTrap)
      }
      if (points[Creature.cockroach] >= 1000 && !info.achievements.cockroach1000Kill) {
        info.achievements.cockroach1000Kill = true
        newAchievements.push(Achievement.Cockroach1000Kill)
      }
      if (points[Creature.cockroach] >= 10000 && !info.achievements.cockroach10000Kill) {
        info.achievements.cockroach10000Kill = true
        newAchievements.push(Achievement.Cockroach10000Kill)
      }
      break;
  }

  setUserInfos(ext, userId, info)
  return [newAchievements, newItems]
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
      if (releases[Creature.mosquito] >= 100 && !info.achievements.mosquito100Release) {
        info.achievements.mosquito100Release = true
        newAchievements.push(Achievement.Mosquito100Release)
      }
      if (releases[Creature.mosquito] >= 1000 && !info.achievements.mosquito1000Release) {
        info.achievements.mosquito1000Release = true
        newAchievements.push(Achievement.Mosquito1000Release)
      }
      if (releases[Creature.mosquito] >= 10000 && !info.achievements.mosquito10000Release) {
        info.achievements.mosquito10000Release = true
        newAchievements.push(Achievement.Mosquito10000Release)
      }
      break;
    case Creature.cockroach:
      if (releases[Creature.cockroach] >= 100 && !info.achievements.cockroach100Release) {
        info.achievements.cockroach100Release = true
        newAchievements.push(Achievement.Cockroach100Release)
      }
      if (releases[Creature.cockroach] >= 1000 && !info.achievements.cockroach1000Release) {
        info.achievements.cockroach1000Release = true
        newAchievements.push(Achievement.Cockroach1000Release)
      }
      if (releases[Creature.cockroach] >= 10000 && !info.achievements.cockroach10000Release) {
        info.achievements.cockroach10000Release = true
        newAchievements.push(Achievement.Cockroach10000Release)
      }
      break;
  }

  setUserInfos(ext, userId, info)
  return newAchievements
}
