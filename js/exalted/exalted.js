// ==UserScript==
// @name         exalted
// @author       JustAnotherID
// @version      1.0.0
// @description  exalted的D10骰池规则支持
// @timestamp    2024-08-17 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/exalted
// ==/UserScript==
const regex = /([0-9]+)(?:[aA]([0-9]+))?(?:[cC]([0-9]+))?/

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const handleRex = (msg, cmdArgs) => {
  const val = cmdArgs.getArgN(1)
  const reason = cmdArgs.getArgN(2)
  const params = val.match(regex)
  if (params.length < 1) {
    return "错误的参数格式，请使用 .rex <个数>a<成功阈值>c<双倍成功阈值>"
  }
  const num = parseInt(params[1] ?? 10)
  const success = parseInt(params[2] ?? 7)
  const doubleSuccess = parseInt(params[3] ?? 10)
  if (success > doubleSuccess) {
    return "双倍成功阈值不能高于成功阈值！"
  } else if (num < 1) {
    return "掷骰个数不能小于1！"
  } else if (success < 1) {
    return "成功阈值不能小于1！"
  }

  const exec = `${num}D10a${success}c${doubleSuccess}`
  const pool = Array(num).fill(0).map(() => randomInt(1, 10))
  let detailList = []
  let successNum = 0
  let dSuccessNum = 0
  let hasOne = false // 是否有1，用于后续判断是否是大失败
  for (let num of pool) {
    if (num >= doubleSuccess)   {
      dSuccessNum++
      detailList.push(`<${num}>`)
    } else if (num >= success) {
      successNum++
      detailList.push(`[${num}]`)
    } else {
      detailList.push(`${num}`)
    }

    if (num === 1) {
      hasOne = true
    }
  }
  let res = successNum + dSuccessNum * 2 // 最后成功数

  let content = `<${msg.sender.nickname}>掷出了${exec}={${detailList.join(",")}}=${res}`
  if (reason && reason !== "") {
    content = `由于${reason}，${content}`
  }
  if (res === 0 && hasOne) {
    content += " 大失败！"
  }
  return content
}

if (!seal.ext.find("exalted")) {
  const ext = seal.ext.new("exalted", "JustAnotherID", "1.0.0");
  seal.ext.register(ext);

  const help = `exalted D10 骰池指令
.rex <个数>a<成功阈值>c<双倍成功阈值> // 投掷<个数>个D10，结果中大于等于<成功阈值>的判定为成功，大于等于<双倍成功阈值>的判定为双倍成功
.rex help // 显示帮助`;
  
  const cmdRex = seal.ext.newCmdItemInfo();
  cmdRex.name = "rex";
  cmdRex.help = help;
  cmdRex.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case "help": {
        const ret = seal.ext.newCmdExecuteResult(true)
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, handleRex(msg, cmdArgs))
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  }
  ext.cmdMap["rex"] = cmdRex;
}
