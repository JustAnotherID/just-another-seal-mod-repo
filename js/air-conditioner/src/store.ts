import { uniq } from 'lodash-es';

export interface State {
  open: boolean;
  openTime?: number;
  lastSendTime?: number;
  mode: string;
  temperature: number;
  ocMode: boolean; // 超频模式
}

export const getState = (ext: seal.ExtInfo, group: string): State => {
  let temp = ext.storageGet('air-conditioner_' + group);
  if (temp) {
    return JSON.parse(temp);
  } else {
    return {
      open: false,
      mode: '制冷',
      temperature: 26,
      ocMode: false,
    };
  }
};

export const setState = (ext: seal.ExtInfo, group: string, state: State) => {
  ext.storageSet('air-conditioner_' + group, JSON.stringify(state));
};

const GROUPS_KEY = 'air-conditioner_groups';

export const addGroup = (ext: seal.ExtInfo, groupId: string) => {
  let groups = getGroups(ext);
  let newGroups = uniq([...groups, groupId]);
  ext.storageSet(GROUPS_KEY, JSON.stringify(newGroups));
};

export const deleteGroup = (ext: seal.ExtInfo, groupId: string) => {
  let groups = getGroups(ext);
  let newGroups = groups.filter((g) => g !== groupId);
  ext.storageSet(GROUPS_KEY, JSON.stringify(newGroups));
};

export const getGroups = (ext: seal.ExtInfo): string[] => {
  let data = ext.storageGet(GROUPS_KEY);
  let groups = [];
  if (data) {
    groups = JSON.parse(data);
  }
  return groups;
};

const SEND_INFO_KEY_PREFIX = 'air-conditioner_send-info_';

export interface SendInfo {
  endpointUserId: string;
  targetUserId: string;
  targetGroupId: string;
  targetGuildId: string;
}

export const setSendInfo = (
  ext: seal.ExtInfo,
  groupId: string,
  info: SendInfo
) => {
  ext.storageSet(SEND_INFO_KEY_PREFIX + groupId, JSON.stringify(info));
};

export const getSendInfo = (
  ext: seal.ExtInfo,
  groupId: string
): SendInfo | undefined => {
  let info = ext.storageGet(SEND_INFO_KEY_PREFIX + groupId);
  if (info) {
    return JSON.parse(info);
  }
  return undefined;
};
