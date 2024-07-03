@module external plugin: Day.plugin = "dayjs/plugin/duration"

type durationUnit =
  | @as("milliseconds") Milliseconds
  | @as("seconds") Seconds
  | @as("minutes") Minutes
  | @as("hours") Hours
  | @as("days") Days
  | @as("months") Months
  | @as("years") Years
  | @as("date") Dates
type duration

@module("dayjs")
external make: (float, durationUnit) => duration = "duration"

@send external humanize: duration => string = "humanize"

@send external format: (duration, string) => string = "format"

@send external asX: (duration, durationUnit) => string = "as"
