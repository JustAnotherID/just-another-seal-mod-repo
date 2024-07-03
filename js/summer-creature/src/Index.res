let _ = DayLocale.zhCn
DayLocale.setGlobalLocale("zh-cn")

Day.extend(DayDuration.plugin)

let helpDesc = `夏季生物 ${Consts.version}
.夏季生物 // 查看当前状态
.夏季生物 (开始|停止) // 夏季生物开始/停止活动，开始后会定期出没
.夏季生物 (帮助|help) // 查看帮助
.夏季生物 释放 (蚊子|蟑螂) // 手动向群里释放生物

当有对应生物活动时，可以使用如下命令攻击：
#拍 // 攻击蚊子
#踩 // 攻击蟑螂

可以解锁更多命令
#点蚊香
#放蟑螂屋`

let scheduler = CronScheduler.newIntervalBasedCronScheduler(10.0 *. 1000.0)

let registerTask = (cronStr: string, task: unit => unit): unit => {
  let cron = CronScheduler.parseCronExpression(cronStr)
  let _ = CronScheduler.registerTask(scheduler, cron, task)
}

let main = () => {
  let ext = switch Seal.Ext.find("summer-creature") {
  | None => {
      let temp = Seal.Ext.new(~name="summer-creature", ~author="JustAnotherID", ~version=Consts.version)
      Seal.Ext.register(temp)
      temp
    }
  | Some(e) => e
  }

  let cmdSummerCreature = Seal.Ext.newCmdItemInfo()
  cmdSummerCreature["name"] = "夏季生物"
  cmdSummerCreature["help"] = helpDesc
  cmdSummerCreature["solve"] = (ctx, msg, cmdArgs) => {
    if msg.messageType !== Group {
      Seal.replyToSender(ctx, msg, "夏季生物只能在群内出没")
      Seal.Ext.newCmdExecuteResult(true)
    } else {
      switch Seal.getArgN(cmdArgs, 1) {
      | Some("help") | Some("帮助") => {
          let ret = Seal.Ext.newCmdExecuteResult(true)
          {...ret, showHelp: true}
        }
      | Some("开始") | Some("开启") => {
          Seal.replyToSender(
            ctx,
            msg,
            Handle.startHandle(
              ext,
              ~epUserId=ctx.endPoint.userId,
              ~groupId=msg.groupId,
              ~guildId=msg.guildId,
              ~userId=msg.sender.userId,
            ),
          )
          Seal.Ext.newCmdExecuteResult(true)
        }
      | Some("停止") | Some("关闭") => {
          Seal.replyToSender(ctx, msg, Handle.stopHandle(ext, ~groupId=msg.groupId))
          Seal.Ext.newCmdExecuteResult(true)
        }
      | Some("释放") => {
          let creature = Seal.getArgN(cmdArgs, 2)
          let ret = switch creature {
          | Some(c) =>
            Handle.manualHandle(
              ext,
              ~groupId=msg.groupId,
              ~userId=msg.sender.userId,
              ~userName=msg.sender.nickname,
              c,
            )
          | None => "未指定生物"
          }
          Seal.replyToSender(ctx, msg, ret)
          Seal.Ext.newCmdExecuteResult(true)
        }
      | _ => {
          Seal.replyToSender(
            ctx,
            msg,
            Handle.statusHandle(ext, ~groupId=msg.groupId, ~userId=msg.sender.userId),
          )
          Seal.Ext.newCmdExecuteResult(true)
        }
      }
    }
  }

  Dict.set(ext["cmdMap"], "夏季生物", cmdSummerCreature)

  ext["onNotCommandReceived"] = (ctx, msg) => {
    let message = String.trim(msg.message)
    if String.startsWith(message, "#") {
      let result = switch message {
      | "#拍" | "#拍死" =>
        Some(
          Handle.defenseHandle(
            ext,
            ~groupId=msg.groupId,
            ~userId=msg.sender.userId,
            ~action=Types.Beat,
          ),
          true,
        )
      | "#踩" | "#踩死" =>
        Some(
          Handle.defenseHandle(
            ext,
            ~groupId=msg.groupId,
            ~userId=msg.sender.userId,
            ~action=Types.StepOn,
          ),
          true,
        )
      | "#点蚊香" | "#放蚊香" =>
        Some(
          Handle.setConsumableHandle(
            ext,
            ~groupId=msg.groupId,
            ~userId=msg.sender.userId,
            ~consumable=Types.MosquitoRepellentIncense,
          ),
          false,
        )
      | "#放蟑螂屋" =>
        Some(
          Handle.setConsumableHandle(
            ext,
            ~groupId=msg.groupId,
            ~userId=msg.sender.userId,
            ~consumable=Types.CockroachTrap,
          ),
          false,
        )
      | "#放杀蟑胶饵" =>
        Some(
          Handle.setConsumableHandle(
            ext,
            ~groupId=msg.groupId,
            ~userId=msg.sender.userId,
            ~consumable=Types.CockroachGelBait,
          ),
          false,
        )
      | _ => None
      }

      switch result {
      | Some(r, true) if r === "" =>
        Seal.replyToSender(ctx, msg, "对着空气输出了一番呢……")
      | Some(r, true) | Some(r, false) => Seal.replyToSender(ctx, msg, r)
      | None => ()
      }
    }
  }

  /* 定时执行相关 */

  // 每半小时所有群的生物繁殖一次
  registerTask("* */30 * * * *", () => {
    Handle.timerGrowHandle(ext)
  })
  // 检查生物袭击
  registerTask("*/30 * * * * *", () => {
    // let x = Map.get(Consts.defenseFailDescList,Types.Mosquito)
    // Console.log(x)
    Handle.timerAttackHandle(ext)
  })
  // 每十分钟蚊香等工作一次
  registerTask("* */10 * * * *", () => {
    Handle.timerUseConsumableHandle(ext)
  })
}

main()
