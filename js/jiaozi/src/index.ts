import { text2jiaozi, jiaozi2text, text2jiaoziCompress } from './utils';

function main() {
  let ext = seal.ext.find('jiaozi');
  if (!ext) {
    ext = seal.ext.new('jiaozi', 'JustAnotherID', '1.0.0');
    seal.ext.register(ext);
  }

  const help = `文本和饺子码的互相转换。
.饺子 <文本> // 将文本转换为饺子码
.压缩饺子 <文本> // 将文本转换为较短的饺子码
.吃饺子 <饺子码> // 将饺子码转换回文本`;

  const cmdJiaozi = seal.ext.newCmdItemInfo();
  cmdJiaozi.name = '饺子';
  cmdJiaozi.help = help;
  cmdJiaozi.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, text2jiaozi(cmdArgs.rawArgs));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  const cmdJiaoziCompress = seal.ext.newCmdItemInfo();
  cmdJiaoziCompress.name = '压缩饺子';
  cmdJiaoziCompress.help = help;
  cmdJiaoziCompress.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, text2jiaoziCompress(cmdArgs.rawArgs));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  const cmdZijiao = seal.ext.newCmdItemInfo();
  cmdZijiao.name = '吃饺子';
  cmdZijiao.help = help;
  cmdZijiao.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        const res = jiaozi2text(val);
        if (res) {
          seal.replyToSender(ctx, msg, `饺子码解析：【${res}】`);
        } else {
          seal.replyToSender(ctx, msg, '饺子码解析失败');
        }
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  ext.cmdMap['饺子'] = cmdJiaozi;
  ext.cmdMap['压缩饺子'] = cmdJiaoziCompress;
  ext.cmdMap['子饺'] = cmdZijiao;
  ext.cmdMap['吃饺子'] = cmdZijiao;
}

main();
