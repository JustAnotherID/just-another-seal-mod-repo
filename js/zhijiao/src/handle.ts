const getRandomIntInclusive = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

const zhijiaoHandle = (reason: string, times: number = 1): string => {
  let prefix = reason ? `由于「${reason}」，掷筊：\n` : '掷筊：\n';

  let result = '';
  for (let i = 0; i < times; i++) {
    if (i !== 0) {
      result += '\n'
    }
    let mark1 = getRandomIntInclusive(0, 1);
    let mark2 = getRandomIntInclusive(0, 1);
    if (mark1 ^ mark2) {
      result += '圣筊（一阴一阳）'
    } else if (mark1 === 0) {
      result += '哭筊（二阴）'
    } else {
      result += '笑筊（二阳）'
    }
  }

  return prefix + result;
};

export default zhijiaoHandle;
