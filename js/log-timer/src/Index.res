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
    let temp = Seal.Ext.new(~name="log-timer", ~author="JustAnotherID", ~version="1.0.0")
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
      let msg = switch cmdArgs.args[0] {
      | Some("new") | Some("on") => {
          let targetLog = cmdArgs.args[1]
          switch targetLog {
          | Some("") | None => ()
          | Some(targetLogName) =>
            Seal.Vars.strSet(msgContext, ~key="$t记录名称", ~value=targetLogName)
          }
          let beginResult = logBegin(ext, msgContext, ~groupId=message.groupId)
          switch beginResult {
          | Ok(result) if result.new => Some(`新记录<${result.logName}>开始计时`)
          | Ok(result) => {
              let now = DateFns.format(Date.now(), "yyyy-MM-dd HH:mm:ss")
              let lastEndTime = DateFns.format(result.lastEndTime, "yyyy-MM-dd HH:mm:ss")
              let totalTime = DateFns.formatMillisecond(result.totalTime)
              Some(
                `记录<${result.logName}>于${now}开始计时，之前的累计时长为${totalTime}\n（最近一次在${lastEndTime}停止计时）`,
              )
            }
          | Error(err) => Some(err)
          }
        }
      | Some("off") | Some("end") | Some("halt") => {
          let endResult = logEnd(ext, msgContext, ~groupId=message.groupId)
          switch endResult {
          | Ok(result) => {
              let now = DateFns.format(Date.now(), "yyyy-MM-dd HH:mm:ss")
              let currentTime = DateFns.formatMillisecond(result.currentTime)
              let totalTime = DateFns.formatMillisecond(result.totalTime)
              Some(
                `记录<${result.logName}>于${now}停止计时\n本次时长为${currentTime}，目前累计时长为${totalTime}`,
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
