import { isFinite } from 'lodash-es';
import { getState, setState } from './store';

export const menuHandle = (ext: seal.ExtInfo, groupId: string): string => {
  const state = getState(ext, groupId);
  let text = `当前空调${state.open ? '已开启' : '已关闭'}`;
  if (state.open) {
    text += `\n模式：${state.mode}`;
    if (['制冷', '制热', '除湿'].includes(state.mode)) {
      text += `\n温度：${state.temperature}°C`;
    }
  }
  return text;
};

export const openCloseHandle = (
  ext: seal.ExtInfo,
  groupId: string,
  open: boolean
): string => {
  let state = getState(ext, groupId);
  state.open = open;
  if (state.open && !state.mode) {
    // init
    state.mode = '制冷';
    state.temperature = 26;
  }
  setState(ext, groupId, state);

  if (state.open) {
    let text = `空调已经开启，当前为${state.mode}模式`;
    if (['制冷', '制热', '除湿'].includes(state.mode)) {
      text += `，温度 ${state.temperature}°C`;
    }
    return text;
  } else {
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
  temperature: string
): string => {
  const state = getState(ext, groupId);
  if (!state.open) {
    return '空调未开启';
  } else if (!['制冷', '制热', '除湿'].includes(state.mode)) {
    return `当前空调为${state.mode}模式`;
  }

  if (temperature) {
    if (temperature.startsWith('+') || temperature.startsWith('-')) {
      let sign = temperature.startsWith('+') ? 1 : -1;
      temperature = temperature.slice(1);
      let temp = Number(temperature);
      if (isFinite(temp)) {
        let newTemperature = state.temperature + temp * sign;
        if (newTemperature % 0.5 !== 0) {
          return '温度调整格式错误，温度只能以 0.5 为间隔';
        } else if (newTemperature < 16 || newTemperature > 32) {
          return '温度调整格式错误，温度只能在 16°C 到 32°C 之间';
        }
        state.temperature = newTemperature;
        setState(ext, groupId, state);
        return `温度已调整为 ${state.temperature}°C`;
      } else {
        return '温度调整格式错误，请输入「.温度 [+/-]<温度>」来升高或降低温度';
      }
    } else {
      let newTemperature = Number(temperature);
      if (isFinite(newTemperature)) {
        if (newTemperature % 0.5 !== 0) {
          return '温度调整格式错误，温度只能以 0.5 为间隔';
        } else if (newTemperature < 16 || newTemperature > 32) {
          return '温度调整格式错误，温度只能在 16°C 到 32°C 之间';
        }
        state.temperature = newTemperature;
        setState(ext, groupId, state);
        return `温度已调整为 ${state.temperature}°C`;
      } else {
        return '温度调整格式错误，请输入「.温度 <温度>」来直接指定温度';
      }
    }
  } else {
    return '温度调整格式错误，未指定值';
  }
};
