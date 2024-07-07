import type { SendInfo } from './store';
import { isFinite } from 'lodash-es';
import {
  addGroup,
  deleteGroup,
  getState,
  setSendInfo,
  setState,
} from './store';
import { dayjs, validateOCModeTemperature, validateTemperature } from './utils';

export const menuHandle = (ext: seal.ExtInfo, groupId: string): string => {
  const state = getState(ext, groupId);
  let text = `当前空调${state.open ? '已开启' : '已关闭'}`;
  const now = dayjs();
  if (state.open && state.openTime && state.openTime !== now.unix()) {
    let d = dayjs.duration(dayjs.unix(state.openTime).diff(now));
    text += ' ' + d.humanize();
  }
  if (state.open) {
    if (state.ocMode) {
      text += `[已超频]`;
    }
    let mode = state.mode
    if (state.temperature === 114514 || state.temperature === 1919810) {
      mode = '制臭'
    }
    text += `\n模式：${mode}`;
    if (['制冷', '制热', '除湿', '制臭'].includes(mode)) {
      text += `\n温度：${state.temperature}°C`;
    }
    if ('制臭' === mode) {
      text += `\n哼哼啊啊啊啊啊啊啊啊啊啊——`
    }
  }
  return text;
};

export const openCloseHandle = (
  ext: seal.ExtInfo,
  groupId: string,
  open: boolean,
  sendInfo: SendInfo
): string => {
  let state = getState(ext, groupId);
  const now = dayjs();
  if ((!state.open && open) || (open && !state.openTime)) {
    state.openTime = now.unix();
  } else if (!open) {
    state.lastSendTime = undefined;
  }
  state.open = open;
  if (state.open && !state.mode) {
    // init
    state.mode = '制冷';
    state.temperature = 26;
    state.ocMode = false;
  }
  setState(ext, groupId, state);
  setSendInfo(ext, groupId, sendInfo);

  if (state.open) {
    let text = `空调已经开启`;
    if (state.openTime && state.openTime !== now.unix()) {
      let d = dayjs.duration(dayjs.unix(state.openTime).diff(now));
      text += ' ' + d.humanize();
    }
    let mode = state.mode
    if (state.temperature === 114514 || state.temperature === 1919810) {
      mode = '制臭'
    }
    text += `，当前为${mode}模式`;
    if (state.ocMode) {
      text += `[已超频]`;
    }
    if (['制冷', '制热', '除湿', '制臭'].includes(mode)) {
      text += `，温度 ${state.temperature}°C`;
    }
    if ('制臭' === mode) {
      text += `\n哼哼啊啊啊啊啊啊啊啊啊啊——`
    }
    addGroup(ext, groupId);
    return text;
  } else {
    deleteGroup(ext, groupId);
    return '空调已经关闭';
  }
};

export const modeHandle = (
  ext: seal.ExtInfo,
  groupId: string,
  mode: string
): string => {
  const state = getState(ext, groupId);
  if (!state.open) {
    return '空调未开启';
  }

  if (!mode) {
    if (state.mode === '制冷') {
      mode = '制热';
    } else if (state.mode === '制热') {
      mode = '除湿';
    } else if (state.mode === '除湿') {
      mode = '送风';
    } else if (state.mode === '送风') {
      mode = '制冷';
    }
  }
  state.mode = mode;

  let text = `空调切换为${mode}模式`;
  if (['制冷', '制热', '除湿'].includes(mode)) {
    if (!state.temperature || state.temperature === 0) {
      state.temperature = 26;
    }
    text += `，当前温度 ${state.temperature}°C`;
  }
  setState(ext, groupId, state);
  return text;
};

export const temperatureHandle = (
  ext: seal.ExtInfo,
  groupId: string,
  val1: string,
  val2: string
): string => {
  const state = getState(ext, groupId);
  if (!state.open) {
    return '空调未开启';
  } else if (!['制冷', '制热', '除湿'].includes(state.mode)) {
    return `当前空调为${state.mode}模式`;
  }

  if (val1) {
    let newTemperature: number;
    if (state.ocMode) {
      // 超频模式下，输入 .温度 - 10（带空格）意味着降低 10 度，而 .温度 -10（不带空格）意味着指定温度为 -10
      if (
        (val1 === '-' || val1 === '+') &&
        !val2?.startsWith('-') &&
        !val2?.startsWith('+')
      ) {
        let temp = Number(val2);
        if (isFinite(temp)) {
          newTemperature = state.temperature + (val1 === '-' ? -temp : temp);
        }
      } else if (val1.startsWith('+')) {
        let temp = Number(val1);
        if (isFinite(temp)) {
          newTemperature = state.temperature + temp;
        }
      } else {
        newTemperature = Number(val1);
      }
    } else {
      if (
        (val1 === '-' || val1 === '+') &&
        !val2?.startsWith('-') &&
        !val2?.startsWith('+')
      ) {
        let temp = Number(val2);
        if (isFinite(temp)) {
          newTemperature = state.temperature + (val1 === '-' ? -temp : temp);
        }
      } else if (val1.startsWith('+') || val1.startsWith('-')) {
        let temp = Number(val1);
        if (isFinite(temp)) {
          newTemperature = state.temperature + temp;
        }
      } else {
        newTemperature = Number(val1);
      }
    }

    if (isFinite(newTemperature)) {
      let ok: boolean;
      let err: string;

      if (state.ocMode) {
        [ok, err] = validateOCModeTemperature(newTemperature);
      } else {
        [ok, err] = validateTemperature(newTemperature);
      }
      if (!ok) {
        return '温度调整失败，' + err;
      }
      state.temperature = newTemperature;
      setState(ext, groupId, state);
      return `温度已调整为 ${state.temperature}°C`;
    } else {
      return '温度调整失败，请输入「.温度 <温度>」来直接指定温度，或输入「.温度 [+/-] <温度>」来升高或降低温度';
    }
  } else {
    return '温度调整失败，未指定值';
  }
};

export const ocModeHandle = (
  ext: seal.ExtInfo,
  groupId: string,
  ocMode: boolean
): string => {
  const state = getState(ext, groupId);
  if (!state.open) {
    return '空调未开启';
  }
  state.ocMode = ocMode;

  let text: string;
  if (state.ocMode) {
    text = '超频模式已开启';
  } else {
    text = '超频模式已关闭';
    let [ok, _] = validateTemperature(state.temperature);
    if (!ok) {
      state.temperature = 26;
      text += '，当前温度已调整为 26°C';
    }
  }
  setState(ext, groupId, state);
  return text;
};
