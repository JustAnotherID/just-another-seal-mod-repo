import zhijiaoHandle from './handle';

function main() {
  let ext = seal.ext.find('zhijiao');
  if (!ext) {
    ext = seal.ext.new('zhijiao', 'JustAnotherID', '1.0.0');
    seal.ext.register(ext);
  }

  const cmdZhijiao = seal.ext.newCmdItemInfo();
  const zhijiaoHelp = `\
掷筊
.掷筊/掷杯 <原因> // 掷筊
.掷三次 <原因> // 掷筊三次\
`;
  cmdZhijiao.name = '掷筊';
  cmdZhijiao.help = zhijiaoHelp;
  cmdZhijiao.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case '':
      case 'help': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, zhijiaoHandle(cmdArgs.rawArgs));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  const cmdZhijiao3 = seal.ext.newCmdItemInfo();
  cmdZhijiao3.name = '掷三次';
  cmdZhijiao3.help = zhijiaoHelp;
  cmdZhijiao3.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case '':
      case 'help': {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        seal.replyToSender(ctx, msg, zhijiaoHandle(cmdArgs.rawArgs, 3));
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  ext.cmdMap['掷筊'] = cmdZhijiao;
  ext.cmdMap['掷杯'] = cmdZhijiao;
  ext.cmdMap['掷三次'] = cmdZhijiao3;
}

main();
