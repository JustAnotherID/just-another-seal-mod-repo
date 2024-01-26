export interface Crop {
  key: string,
  name: string
  level: number
  growth: number
}

const CROPS: Crop[] = [
  {
    key: 'wheat',
    name: '小麦',
    level: 1,
    growth: 1
  },
]

export { CROPS }