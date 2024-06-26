type locale

@module("date-fns/locale") external zhCN: locale = "zhCN"

@module("date-fns") external format: (Date.msSinceEpoch, string) => string = "format"

@module("date-fns")
external formatDistance: (Date.msSinceEpoch, Date.msSinceEpoch) => string = "formatDistance"

type interval = {
  start: Date.msSinceEpoch,
  end: Date.msSinceEpoch,
}

type duration = {
  years: int,
  months: int,
  days: int,
  hours: int,
  minutes: int,
  seconds: int,
}

@module("date-fns")
external intervalToDuration: interval => duration = "intervalToDuration"

type formatDurationOptions = {locale: locale}

@module("date-fns")
external formatDuration: (duration, ~options: option<formatDurationOptions>) => string =
  "formatDuration"

let formatMillisecond = (millisecond: float) => {
  formatDuration(
    intervalToDuration({start: 0.0, end: millisecond}),
    ~options=Some({locale: zhCN}),
  )
}
