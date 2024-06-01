import {
  autoAttackHandle,
  defenseHandle,
  startHandle,
  manualAttackHandle,
  statusHandle,
  stopHandle
} from './handle';
import { VERSION } from "./consts";
import { Action, Creature } from "./types";
import { getCreature } from "./utils";

// @ts-ignore
let timer: number = undefined

const startTimer = (ext: seal.ExtInfo) => {
  if (timer === undefined) {
    timer = setInterval(() => {
      autoAttackHandle(ext)
    }, 1000 * 10)
  }
}

// @ts-ignore
const stopTimer = () => {
  if (timer != undefined) {
    clearInterval(timer)
    timer = undefined
  }
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
        seal.replyToSender(ctx, msg, startHandle(ext, ctx.endPoint.userId, msg.groupId, msg.guildId, msg.sender.userId));
        return seal.ext.newCmdExecuteResult(true);
      case '停止':
        seal.replyToSender(ctx, msg, stopHandle(ext, msg.groupId));
        return seal.ext.newCmdExecuteResult(true);
      case '释放':
        let creatureCmd = cmdArgs.getArgN(2)
        let creature = undefined
        let result = ''
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
        result = manualAttackHandle(ext, msg.groupId, creature)
        const creatureName = getCreature(creature, true);
        result = `<${msg.sender.nickname}>向群里释放了一些${creatureName}，当前活动中的${creatureName}：\n${result}`
        seal.replyToSender(ctx, msg, result);
        return seal.ext.newCmdExecuteResult(true);
      default:
        seal.replyToSender(ctx, msg, statusHandle(ext, msg.groupId, msg.sender.userId));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  ext.cmdMap['夏季生物'] = cmdSummerCreature;

  ext.onNotCommandReceived = (ctx, msg) => {
    let message = msg.message.trim();
    let result: string | undefined
    if (message === '#拍' || message === '#拍死') {
      result = defenseHandle(ext, msg.groupId, msg.sender.userId, Action.beat);
    } else if (message === '#踩' || message === '#踩死') {
      result = defenseHandle(ext, msg.groupId, msg.sender.userId, Action.stepOn);
    }
    if (result) {
      seal.replyToSender(ctx, msg, result);
    }
  }

  startTimer(ext)
}

main();
