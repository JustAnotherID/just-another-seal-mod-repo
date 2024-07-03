type cron

@module("cron-schedule")
external parseCronExpression: string => cron = "parseCronExpression"

type intervalBasedCronScheduler

@module("cron-schedule/schedulers/interval-based.js") @new
external newIntervalBasedCronScheduler: float => intervalBasedCronScheduler =
  "IntervalBasedCronScheduler"

@send
external registerTask: (intervalBasedCronScheduler, cron, unit => unit) => int = "registerTask"
