import { DefaultCreatureIntervals, VERSION } from "./consts";
import { Action, Creature } from "./types";
import { isInstalled } from "./utils";
import { Consumable } from "./items";
import { parseCronExpression } from "cron-schedule";
import {
  IntervalBasedCronScheduler
} from "cron-schedule/schedulers/interval-based.js";

import {
  setConsumableHandle,
  timerUseConsumableHandle
} from './handle/consumable';
import { startHandle, stopHandle } from "./handle/start";
import { manualReleaseHandle, timerGrowHandle } from "./handle/grow";
import { timerAttackHandle } from "./handle/attack";
import { defenseHandle } from "./handle/defense";
import { statusHandle } from "./handle/status";

const scheduler = new IntervalBasedCronScheduler(10 * 1000)

const registerTask = (cron: string, task: () => void) => {
  scheduler.registerTask(parseCronExpression(cron), task)
}

const helpDesc = `\
夏季生物
.夏季生物 // 查看当前状态
.夏季生物 (开始|停止) // 夏季生物开始/停止活动，开始后会定期出没
.夏季生物 (帮助|help) // 查看帮助
.夏季生物 释放 (蚊子|蟑螂) // 手动向群里释放生物

当有对应生物活动时，可以使用如下命令攻击：
#拍 // 攻击蚊子
#踩 // 攻击蟑螂

可以解锁更多命令
#点蚊香
#放蟑螂屋
`;

function main() {
  let ext = seal.ext.find('summer-creature');
  if (!ext) {
    ext = seal.ext.new('summer-creature', 'JustAnotherID', VERSION);
    seal.ext.register(ext);
  }

  const cmdSummerCreature = seal.ext.newCmdItemInfo();
  cmdSummerCreature.name = '夏季生物';
  cmdSummerCreature.help = helpDesc;
  cmdSummerCreature.solve = (ctx, msg, cmdArgs) => {
    if (msg.messageType !== 'group') {
      seal.replyToSender(ctx, msg, '夏季生物只能在群内出没');
      return seal.ext.newCmdExecuteResult(true);
    }
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '帮助':
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      case '开始':
      case '开启':
        seal.replyToSender(ctx, msg, startHandle(ext, ctx.endPoint.userId, msg.groupId, msg.guildId, msg.sender.userId));
        return seal.ext.newCmdExecuteResult(true);
      case '停止':
      case '关闭':
        seal.replyToSender(ctx, msg, stopHandle(ext, msg.groupId));
        return seal.ext.newCmdExecuteResult(true);
      case '释放':
        let creatureCmd = cmdArgs.getArgN(2)
        let creature = undefined
        switch (creatureCmd) {
          case '蚊子':
            creature = Creature.mosquito
            break;
          case '蟑螂':
            creature = Creature.cockroach
            break;
          default:
            seal.replyToSender(ctx, msg, "当前不支持该生物");
            return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx, msg, manualReleaseHandle(ext, msg.groupId, msg.sender.userId, msg.sender.nickname, creature));
        return seal.ext.newCmdExecuteResult(true);
      default:
        seal.replyToSender(ctx, msg, statusHandle(ext, msg.groupId, msg.sender.userId));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  ext.cmdMap['夏季生物'] = cmdSummerCreature;

  ext.onNotCommandReceived = (ctx, msg) => {
    let message = msg.message.trim();
    if (isInstalled(ext, msg.groupId)) {
      let emptyReply = false
      let result: string | undefined
      if (message === '#拍' || message === '#拍死') {
        result = defenseHandle(ext, msg.groupId, msg.sender.userId, Action.beat);
        emptyReply = true
      } else if (message === '#踩' || message === '#踩死') {
        result = defenseHandle(ext, msg.groupId, msg.sender.userId, Action.stepOn);
        emptyReply = true
      } else if (message === '#踩' || message === '#踩死') {
      } else if (message === '#点蚊香' || message === '#放蚊香') {
        result = setConsumableHandle(ext, msg.groupId, msg.sender.userId, Consumable.mosquitoRepellentIncense);
      } else if (message === '#放蟑螂屋') {
        result = setConsumableHandle(ext, msg.groupId, msg.sender.userId, Consumable.cockroachTrap);
      } else if (message === '#放杀蟑胶饵') {
        result = setConsumableHandle(ext, msg.groupId, msg.sender.userId, Consumable.cockroachGelBait);
      }
      if (result) {
        seal.replyToSender(ctx, msg, result);
      } else if (emptyReply) {
        seal.replyToSender(ctx, msg, '对着空气输出了一番呢……')
      }
    }
  }

  seal.ext.registerFloatConfig(ext, "蚊子活动间隔/min（会四舍五入为整数）", DefaultCreatureIntervals[Creature.mosquito] / 60);
  seal.ext.registerFloatConfig(ext, "蟑螂活动间隔/min（会四舍五入为整数）", DefaultCreatureIntervals[Creature.cockroach] / 60);

  // 每半小时所有群的生物繁殖一次
  registerTask('* */30 * * * *', () => {
    timerGrowHandle(ext)
  })
  // 检查生物袭击
  registerTask('*/30 * * * * *', () => {
    timerAttackHandle(ext)
  })
  // 每十分钟蚊香等工作一次
  registerTask('* */10 * * * *', () => {
    timerUseConsumableHandle(ext)
  })
}

main();
