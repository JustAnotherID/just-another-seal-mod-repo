import { generateHandle, explainHandle } from './handle';
import { buildData, buildKey, parseData } from "./tool";

function main() {
  let ext = seal.ext.find('zhijiao');
  if (!ext) {
    ext = seal.ext.new('zhijiao', 'JustAnotherID', '1.1.1');
    seal.ext.register(ext);
  }

  const helpDesc = `\
掷筊
.掷筊/掷杯 <原因> // 掷筊
.掷三次 <原因> // 掷筊三次
.求解 // 解读上一次结果\
`;
  const solveTemplate = (
    ctx: seal.MsgContext,
    msg: seal.Message,
    cmdArgs: seal.CmdArgs,
    text: string
  ) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case '':
      case 'help': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, text);
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  }

  const cmdGenerate = seal.ext.newCmdItemInfo();
  cmdGenerate.name = '掷筊';
  cmdGenerate.help = helpDesc;
  cmdGenerate.solve = (ctx, msg, cmdArgs) => {
    const uid = msg.sender.userId;
    const [onceKey, text] = generateHandle(cmdArgs.rawArgs, 1);

    const key = buildKey(uid);
    const oldData = parseData(ext.storageGet(key));
    const resKey = ((oldData?.resKey ?? 0) % 100) * 10 + onceKey
    const times = oldData.times >= 3 ? 3 : oldData.times + 1
    let data = buildData(resKey, times);
    ext.storageSet(key, data)

    return solveTemplate(ctx, msg, cmdArgs, text);
  };

  const cmdGenerate3 = seal.ext.newCmdItemInfo();
  cmdGenerate3.name = '掷三次';
  cmdGenerate3.help = helpDesc;
  cmdGenerate3.solve = (ctx, msg, cmdArgs) => {
    const uid = msg.sender.userId;
    const [resKey, text] = generateHandle(cmdArgs.rawArgs, 3);

    ext.storageSet(buildKey(uid), buildData(resKey, 3))

    return solveTemplate(ctx, msg, cmdArgs, text);
  };

  const cmdExplain = seal.ext.newCmdItemInfo();
  cmdExplain.name = '求解';
  cmdExplain.help = helpDesc
  cmdExplain.solve = (ctx, msg, cmdArgs) => {
    const data = parseData(ext.storageGet(buildKey(msg.sender.userId)));
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, explainHandle(data));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  }

  ext.cmdMap['掷筊'] = cmdGenerate;
  ext.cmdMap['掷杯'] = cmdGenerate;
  ext.cmdMap['掷三次'] = cmdGenerate3;
  ext.cmdMap['求解'] = cmdExplain;
}

main();
