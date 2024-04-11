import type { Data } from "./tool";
import { getRandomIntInclusive } from "./tool";
import { getExplain } from "./explain";

export const generateHandle = (reason: string, times: number): [number, string] => {
  let prefix = reason ? `由于「${reason}」，掷筊：\n` : '掷筊：\n';
  let suffix = '\n\n求解请使用「.求解」'

  let result = '';
  let resKey = 0
  for (let i = 0; i < times; i++) {
    if (i !== 0) {
      result += '\n'
    }
    let mark1 = getRandomIntInclusive(0, 1);
    let mark2 = getRandomIntInclusive(0, 1);
    if (mark1 ^ mark2) {
      result += '圣筊（一阴一阳）'
      resKey = resKey * 10 + 1
    } else if (mark1 === 0) {
      result += '哭筊（二阴）'
      resKey = resKey * 10 // + 0
    } else {
      result += '笑筊（二阳）'
      resKey = resKey * 10 + 2
    }
  }
  return [resKey, prefix + result + suffix];
};

export const explainHandle = (data: Data): string => {
  if (data.times < 3) {
    return '掷圣杯次数不足三次';
  } else {
    const explain = getExplain(data.resKey)
    return `前三次的掷圣杯结果：${explain.name}
「${explain.type}」
${explain.desc}`
  }
}
