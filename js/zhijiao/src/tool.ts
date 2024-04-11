export const getRandomIntInclusive = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
};

export const buildKey = (uid: string) => {
  return `zhijiao_${uid}`
}

export interface Data {
  resKey: number
  times: number
}

export const buildData = (resKey: number, curTimes: number): string => {
  const data: Data = {
    resKey: resKey,
    times: curTimes
  }
  return JSON.stringify(data)
}

export const parseData = (data: string): Data => {
  if (data && data !== '') {
    return JSON.parse(data) as Data
  } else {
    return { resKey: 0, times: 0 }
  }
}
