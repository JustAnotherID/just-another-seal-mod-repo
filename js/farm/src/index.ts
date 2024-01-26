import type { Crop } from "./crop";

function main() {
  // 注册扩展
  let ext = seal.ext.find('farm');
  if (!ext) {
    ext = seal.ext.new('farm', 'JustAnotherID', '1.0.0');
    seal.ext.register(ext);
  }

  // 编写指令
  const help = `模拟农场。
.农场 查看 // 显示信息
.农场 帮助 // 显示帮助`
  const cmdSeal = seal.ext.newCmdItemInfo();
  cmdSeal.name = '农场';
  cmdSeal.help = help;

  cmdSeal.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case '查看':
        const res = showHandle(msg.sender.userId)
        seal.replyToSender(ctx, msg, res)
        return seal.ext.newCmdExecuteResult(true)
      case 'help':
      case '帮助':
      default:
        const ret = seal.ext.newCmdExecuteResult(true)
        ret.showHelp = true
        return ret
    }
  }

  // 注册命令
  ext.cmdMap['农场'] = cmdSeal;
}

const showHandle = (userId: string) => {
  return `[CQ:at,qq=${userId}] 的农场：
金币：xG  农田：x块

[1]: 牧草 x时x分x秒后可收获 预计收入xG
[2]: 牧草 x时x分x秒后可收获 预计收入xG
[3]: 牧草 可收获 收获后可得xG
[4]: 牧草 可收获[被偷] 收获后可得xG（已损失xG）
剩余x块农田闲置。
`
};

main();
