export interface State {
  open: boolean;
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
      ocMode: false
    };
  }
};

export const setState = (ext: seal.ExtInfo, group: string, state: State) => {
  ext.storageSet('air-conditioner_' + group, JSON.stringify(state));
};
