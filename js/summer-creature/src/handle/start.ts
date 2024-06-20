import { getGroupState, removeGroup, setGroupState } from "../store";

export const startHandle = (ext: seal.ExtInfo, epUserId: string, groupId: string, guildId: string, userId: string): string => {
  let state = getGroupState(ext, groupId);
  if (state.installed) {
    return '夏季生物已经开始活动了！';
  }
  state.installed = true;
  state.endpointUserId = epUserId;
  state.targetGroupId = groupId;
  state.targetGuildId = guildId;
  state.targetUserId = userId;
  setGroupState(ext, groupId, state);
  return `夏季生物开始活动了……`;
};

export const stopHandle = (ext: seal.ExtInfo, groupId: string): string => {
  let state = getGroupState(ext, groupId);
  if (!state.installed) {
    return '夏季生物还未出现！';
  }
  state.installed = false;
  setGroupState(ext, groupId, state);
  removeGroup(ext, groupId)
  return `神秘的力量让群里不再有讨厌的生物活动了……`;
};
