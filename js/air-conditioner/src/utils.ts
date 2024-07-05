import { isFinite } from 'lodash-es';
import rowDayjs from 'dayjs';
import zhCn from 'dayjs/locale/zh-cn';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

rowDayjs.locale(zhCn);
rowDayjs.extend(relativeTime);
rowDayjs.extend(duration);

export const dayjs = rowDayjs;

export const validateTemperature = (temperature: number): [boolean, string] => {
  if (!isFinite(temperature)) {
    return [false, '格式错误'];
  }
  if (temperature < 16 || temperature > 32) {
    return [false, '只能在 16°C 到 32°C 之间'];
  }
  if (temperature % 0.5 !== 0) {
    return [false, '只能以 0.5 为间隔'];
  }
  return [true, ''];
};

export const validateOCModeTemperature = (
  temperature: number
): [boolean, string] => {
  if (!isFinite(temperature)) {
    return [false, '格式错误'];
  }
  if (temperature <= -273.15) {
    return [false, '超出物理极限'];
  }
  if (temperature % 0.5 !== 0) {
    return [false, '只能以 0.5 为间隔'];
  }
  return [true, ''];
};
