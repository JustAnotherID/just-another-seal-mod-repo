import dayjs from "dayjs/esm";
import zhCn from 'dayjs/esm/locale/zh-cn';
import relativeTime from 'dayjs/esm/plugin/relativeTime';
import duration from 'dayjs/esm/plugin/duration';
import { isEmpty } from 'lodash-es'

dayjs.locale(zhCn);
dayjs.extend(relativeTime);
dayjs.extend(duration);

type logTimeInfo = {
  begin: boolean,
  totalTime: number,
  lastBeginTime: number,
  lastEndTime: number,
}

const formatMilliseconds = (milliseconds: number): string => {
  const hourSec = 60 * 60;
  const minuteSec = 60;
  const seconds = milliseconds / 1000;

  const hh = Math.floor(seconds / hourSec);
  const hhStr = hh.toString();
  const mm = Math.floor((seconds % hourSec) / minuteSec);
  const mmStr = mm.toString();
  const ss = Math.floor(seconds % minuteSec);
  const ssStr = ss.toString();

  if (hh > 0) {
    return `${hhStr}小时${mmStr}分钟${ssStr}秒`;
  } else if (mm > 0) {
    return `${mmStr}分钟${ssStr}秒`;
  } else {
    return `${ssStr}秒`;
  }
};

const generateStorageLogTimeKey = (groupId: string, logName: string) => `LOG_TIMER_${groupId}_${logName}`

type LogBeginResult = {
  success: true,
  new: boolean;
  logName: string;
  lastEndTime?: number;
  totalTime?: number
} | {
  success: false;
  error: string;
};

type LogEndResult = {
  success: true,
  logName: string;
  currentTime: number;
  totalTime: number
} | {
  success: false;
  error: string;
};

const logBegin = (ext: seal.ExtInfo, ctx: seal.MsgContext, groupId: string): LogBeginResult => {
  const logName = seal.vars.strGet(ctx, "$t记录名称")?.[0] ?? ""
  const key = generateStorageLogTimeKey(groupId, logName)
  const now = Date.now()

  const json = ext.storageGet(key);
  if (json) {
    const old: logTimeInfo = JSON.parse(json);
    if (old.begin) {
      return {
        success: false,
        error: `记录${logName}已在计时中`
      }
    } else {
      let newInfo = {
        ...old,
        begin: true,
        lastBeginTime: now,
      }
      const json = JSON.stringify(newInfo);
      ext.storageSet(key, json);
      return {
        success: true,
        new: false,
        logName: logName,
        lastEndTime: old.lastEndTime,
        totalTime: old.totalTime,
      }
    }
  } else {
    const info: logTimeInfo = {
      begin: true,
      totalTime: 0.0,
      lastBeginTime: now,
      lastEndTime: now,
    }
    const json = JSON.stringify(info);
    ext.storageSet(key, json)
    return { success: true, new: true, logName, lastEndTime: now, totalTime: 0.0 }
  }
}

const logEnd = (ext: seal.ExtInfo, ctx: seal.MsgContext, groupId: string): LogEndResult => {
  const logName = seal.vars.strGet(ctx, "$t记录名称")?.[0] ?? ""
  const key = generateStorageLogTimeKey(groupId, logName)

  let json = ext.storageGet(key)
  if (json) {
    const old: logTimeInfo = JSON.parse(json);
    if (old.begin) {
      const now = Date.now()
      const currentTime = now - old.lastBeginTime
      const newInfo = {
        ...old,
        begin: false,
        totalTime: old.totalTime + currentTime,
        lastEndTime: now,
      }
      const json = JSON.stringify(newInfo);
      ext.storageSet(key, json);
      return {
        success: true,
        logName: logName,
        totalTime: newInfo.totalTime,
        currentTime,
      }
    } else {
      return {
        success: false,
        error: ""
      }
    }
  } else {
    return {
      success: false,
      error: `无记录<${logName}>的计时信息`
    }
  }
}

function main() {
  let ext = seal.ext.find('log-timer');
  if (!ext) {
    ext = seal.ext.new('log-timer', 'JustAnotherID', '2.0.0');
    seal.ext.register(ext);

    ext.onCommandReceived = (ctx, message, cmdArgs) => {
      if (message.messageType === 'group' && cmdArgs.command === 'log' && cmdArgs.args.length > 0) {
        // 适配诸如 .log newxxx 这种不带空格的场景
        let arg0 = "";
        let arg1 = "";
        const rawArg0 = cmdArgs.args[0]
        if (rawArg0 === 'new' || rawArg0 === 'on' || rawArg0 === 'off' || rawArg0 === 'end' || rawArg0 === 'halt') {
          arg0 = rawArg0;
          arg1 = cmdArgs.args[1];
        } else if (rawArg0.startsWith('on')) {
          arg0 = rawArg0.slice(0, 2);
          arg1 = rawArg0.slice(2);
        } else if (rawArg0.startsWith('new') || rawArg0.startsWith('off') || rawArg0.startsWith('end')) {
          arg0 = rawArg0.slice(0, 3);
          arg1 = rawArg0.slice(3);
        } else if (rawArg0.startsWith('halt')) {
          arg0 = rawArg0.slice(0, 4);
          arg1 = rawArg0.slice(4);
        }

        let msg = ""
        switch (arg0) {
          case "new":
          case "on":
            const targetLog = arg1
            if (isEmpty(targetLog)) {
              msg = '未指定记录名称，无法启动计时'
              break;
            }
            seal.vars.strSet(ctx, '$t记录名称', targetLog)
            const beginResult: LogBeginResult = logBegin(ext, ctx, message.groupId)
            if (beginResult.success === false) {
              msg = beginResult.error
            } else if (beginResult?.new) {
              const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
              msg = `新记录「${beginResult.logName}」于${now}开始计时`
            } else {
              const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
              const lastEndTime = dayjs(beginResult.lastEndTime).format('YYYY-MM-DD HH:mm:ss')
              const lastEndTimeDesc = dayjs(beginResult.lastEndTime).fromNow()
              const totalTime = formatMilliseconds(beginResult.totalTime)
              msg = `记录「${beginResult.logName}」于${now}开始计时\n截止目前累计时长：${totalTime}\n上一次于${lastEndTimeDesc}（${lastEndTime}）停止计时`
            }
            break;

          case "off":
          case "end":
          case "halt":
            const endResult = logEnd(ext, ctx, message.groupId)
            if (endResult.success) {
              const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
              let currentTime = formatMilliseconds(endResult.currentTime)
              let totalTime = formatMilliseconds(endResult.totalTime)
              msg = `记录「${endResult.logName}」于${now}停止计时\n本次时长：${currentTime}\n目前累计时长：${totalTime}`
            } else if (endResult.success === false && !isEmpty(endResult.error)) {
              msg = endResult.error
            }
            break;
        }

        if (msg) {
          seal.replyToSender(ctx, message, msg)
        }
      }
    }
  }
}

main()