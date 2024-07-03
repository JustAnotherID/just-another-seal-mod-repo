let _ = DayLocale.zhCn
DayLocale.setGlobalLocale("zh-cn")

Day.extend(DayDuration.plugin)
Day.extend(DayRelativeTime.plugin)

let formatMilliseconds = (milliseconds: Date.msSinceEpoch) => {
  let hourSec = 60.0 *. 60.0
  let minuteSec = 60.0
  let seconds = milliseconds /. 1000.0

  let hh = Math.floor(seconds /. hourSec)
  let hhStr = Float.toString(hh)
  let mm = Math.floor(Float.mod(seconds, hourSec) /. minuteSec)
  let mmStr = Float.toString(mm)
  let ss = Math.floor(Float.mod(seconds, minuteSec))
  let ssStr = Float.toString(ss)
  if hh > 0.0 {
    `${hhStr}小时${mmStr}分钟${ssStr}秒`
  } else if mm > 0.0 {
    `${mmStr}分钟${ssStr}秒`
  } else {
    `${ssStr}秒`
  }
}

type logTimeInfo = {
  begin: bool,
  totalTime: Date.msSinceEpoch,
  lastBeginTime: Date.msSinceEpoch,
  lastEndTime: Date.msSinceEpoch,
}

@scope("JSON") @val external parseJsonObject: string => logTimeInfo = "parse"

let generateStorageLogTimeKey = (~groupId: string, ~logName: string) => {
  "LOG_TIMER_" ++ groupId ++ "_" ++ logName
}

type logBeginResult = {
  new: bool,
  logName: string,
  lastEndTime: Date.msSinceEpoch,
  totalTime: Date.msSinceEpoch,
}

type logEndResult = {
  logName: string,
  totalTime: Date.msSinceEpoch,
  currentTime: Date.msSinceEpoch,
}

let logBegin = (extInfo: Seal.extInfo, msgContext: Seal.msgContext, ~groupId: string) => {
  let logNameVar = Seal.Vars.strGet(msgContext, "$t记录名称")
  let logName = Option.getOr(logNameVar, "")
  let key = generateStorageLogTimeKey(~groupId, ~logName)
  let now = Date.now()
  switch Seal.storageGet(extInfo, key) {
  | Some("") | None => {
      let info: logTimeInfo = {
        begin: true,
        totalTime: 0.0,
        lastBeginTime: now,
        lastEndTime: now,
      }
      switch JSON.stringifyAny(info) {
      | Some(json) => {
          Seal.storageSet(extInfo, ~key, ~value=json)
          Ok({new: true, logName, lastEndTime: now, totalTime: 0.0})
        }
      | None => Error("未知错误(002)")
      }
    }
  | Some(json) => {
      let old = parseJsonObject(json)
      if old.begin {
        Error(`记录${logName}已在计时中`)
      } else {
        let new = {...old, begin: true, lastBeginTime: now}
        switch JSON.stringifyAny(new) {
        | Some(json) => {
            Seal.storageSet(extInfo, ~key, ~value=json)
            Ok({
              new: false,
              logName,
              lastEndTime: old.lastEndTime,
              totalTime: old.totalTime,
            })
          }
        | None => Error("未知错误(001)")
        }
      }
    }
  }
}

let logEnd = (extInfo: Seal.extInfo, msgContext: Seal.msgContext, ~groupId: string) => {
  let logNameVar = Seal.Vars.strGet(msgContext, "$t记录名称")
  let logName = Option.getOr(logNameVar, "")
  let key = generateStorageLogTimeKey(~groupId, ~logName)
  let now = Date.now()
  switch Seal.storageGet(extInfo, key) {
  | Some("") | None => Error(`无记录<${logName}>的计时信息`)
  | Some(json) => {
      let old = parseJsonObject(json)
      if old.begin {
        let currentTime = now -. old.lastBeginTime
        let new = {
          ...old,
          begin: false,
          totalTime: old.totalTime +. currentTime,
          lastEndTime: now,
        }
        switch JSON.stringifyAny(new) {
        | Some(json) => {
            Seal.storageSet(extInfo, ~key, ~value=json)
            Ok({
              logName,
              totalTime: new.totalTime,
              currentTime,
            })
          }
        | None => Error("未知错误(003)")
        }
      } else {
        Error("")
      }
    }
  }
}

let main = () => {
  let ext = switch Seal.Ext.find("log-timer") {
  | None =>
    let temp = Seal.Ext.new(~name="log-timer", ~author="JustAnotherID", ~version="1.1.1")
    Seal.Ext.register(temp)
    temp
  | Some(e) => e
  }

  ext["onCommandReceived"] = (
    msgContext: Seal.msgContext,
    message: Seal.message,
    cmdArgs: Seal.cmdArgs,
  ) => {
    if (
      message.messageType === Seal.Group &&
      cmdArgs.command === "log" &&
      Array.length(cmdArgs.args) > 0
    ) {
      // 适配诸如 .log newxxx 这种不带空格的场景
      let (arg0, arg1) = switch cmdArgs.args[0] {
      | Some("new" as s)
      | Some("on" as s)
      | Some("off" as s)
      | Some("end" as s)
      | Some("halt" as s) => (Some(s), cmdArgs.args[1])
      | Some(s) if String.startsWith(s, "new") => (
          Some("new"),
          Some(String.sliceToEnd(s, ~start=3)),
        )
      | Some(s) if String.startsWith(s, "on") => (Some("on"), Some(String.sliceToEnd(s, ~start=2)))
      | Some(s) if String.startsWith(s, "off") => (
          Some("off"),
          Some(String.sliceToEnd(s, ~start=3)),
        )
      | Some(s) if String.startsWith(s, "end") => (
          Some("end"),
          Some(String.sliceToEnd(s, ~start=3)),
        )
      | Some(s) if String.startsWith(s, "halt") => (
          Some("halt"),
          Some(String.sliceToEnd(s, ~start=4)),
        )
      | _ => (None, None)
      }

      let msg = switch arg0 {
      | Some("new") | Some("on") => {
          let targetLog = arg1
          switch targetLog {
          | Some("") | None => Some("未指定记录名称，无法启动计时")
          | Some(targetLogName) =>
            Seal.Vars.strSet(msgContext, ~key="$t记录名称", ~value=targetLogName)
            let beginResult = logBegin(ext, msgContext, ~groupId=message.groupId)
            switch beginResult {
            | Ok(result) if result.new => {
                let now = Day.format(Day.now(), "YYYY-MM-DD HH:mm:ss")
                Some(`新记录「${result.logName}」于${now}开始计时`)
              }
            | Ok(result) => {
                let now = Day.format(Day.now(), "YYYY-MM-DD HH:mm:ss")
                let lastEndTime = Day.format(
                  Day.parseTimestamp(result.lastEndTime),
                  "YYYY-MM-DD HH:mm:ss",
                )
                let lastEndTimeDesc = Day.fromNow(Day.parseTimestamp(result.lastEndTime), None)
                let totalTime = formatMilliseconds(result.totalTime)
                Some(
                  `记录「${result.logName}」于${now}开始计时\n截止目前累计时长：${totalTime}\n上一次于${lastEndTimeDesc}（${lastEndTime}）停止计时`,
                )
              }
            | Error(err) => Some(err)
            }
          }
        }
      | Some("off") | Some("end") | Some("halt") => {
          let endResult = logEnd(ext, msgContext, ~groupId=message.groupId)
          switch endResult {
          | Ok(result) => {
              let now = Day.format(Day.now(), "YYYY-MM-DD HH:mm:ss")
              let currentTime = formatMilliseconds(result.currentTime)
              let totalTime = formatMilliseconds(result.totalTime)
              Some(
                `记录「${result.logName}」于${now}停止计时\n本次时长：${currentTime}\n目前累计时长：${totalTime}`,
              )
            }
          | Error(err) => Some(err)
          }
        }
      | _ => None
      }

      switch msg {
      | Some("") | None => ()
      | Some(msg) => Seal.replyToSender(msgContext, message, msg)
      }
    }
  }
}

main()
