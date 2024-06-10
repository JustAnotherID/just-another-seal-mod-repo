// ==UserScript==
// @name         no dissmiss
// @author       JustAnotherID
// @version      1.0.0
// @description  当误使用 .dissmiss 时进行提示
// @timestamp    2024-06-10 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/no-dissmiss
// ==/UserScript==
if (!seal.ext.find("no-dissmiss")) {
  const ext = seal.ext.new("no-dissmiss", "JustAnotherID", "1.0.0");
  seal.ext.register(ext);
  seal.ext.registerStringConfig(ext, "dissmiss误用提示", "你在干什么？是 .dismiss 不是 .dissmiss！");
  
  const cmdNoDissmiss = seal.ext.newCmdItemInfo();
  cmdNoDissmiss.name = "dissmiss";
  cmdNoDissmiss.help = "是 .dismiss 不是 .dissmiss！";
  cmdNoDissmiss.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case "help": {
        ret.showHelp = true;
        return ret;
      }
      default: {
        if (msg.messageType !== 'group') {
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx,msg, seal.ext.getStringConfig(ext, "dissmiss误用提示"))
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  }
  ext.cmdMap["dissmiss"] = cmdNoDissmiss;
}
