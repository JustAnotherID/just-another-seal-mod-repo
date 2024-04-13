import { text2SealCode, sealCode2text, text2SealCodeCompress } from './utils';

function main() {
  let ext = seal.ext.find('seal-code');
  if (!ext) {
    ext = seal.ext.new('seal-code', 'JustAnotherID', '1.0.0');
    seal.ext.register(ext);
  }

  const help = `文本和海豹码的互相转换。
.海豹 <文本> // 将文本转换为海豹码
.迷你海豹 <文本> // 将文本转换为较短的海豹码
.捉海豹 <海豹码> // 将海豹码转换回文本`;

  const cmdSealCode = seal.ext.newCmdItemInfo();
  cmdSealCode.name = '海豹';
  cmdSealCode.help = help;
  cmdSealCode.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, text2SealCode(cmdArgs.rawArgs));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  const cmdSealCodeCompress = seal.ext.newCmdItemInfo();
  cmdSealCodeCompress.name = '迷你海豹';
  cmdSealCodeCompress.help = help;
  cmdSealCodeCompress.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, text2SealCodeCompress(cmdArgs.rawArgs));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  const cmdSealCodeParse = seal.ext.newCmdItemInfo();
  cmdSealCodeParse.name = '捉海豹';
  cmdSealCodeParse.help = help;
  cmdSealCodeParse.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        const res = sealCode2text(val);
        if (res) {
          seal.replyToSender(ctx, msg, `海豹码解析：【${res}】`);
        } else {
          seal.replyToSender(ctx, msg, '海豹码解析失败');
        }
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  ext.cmdMap['海豹'] = cmdSealCode;
  ext.cmdMap['迷你海豹'] = cmdSealCodeCompress;
  ext.cmdMap['捉海豹'] = cmdSealCodeParse;
}

main();
