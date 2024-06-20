import rowDayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

rowDayjs.extend(relativeTime)
rowDayjs.locale('zh-cn')

export const dayjs = rowDayjs
