import {
  menuHandle,
  modeHandle,
  openCloseHandle,
  temperatureHandle,
} from './handle';

const helpDesc = `\
群空调
.开空调 // 打开群内空调
.关空调 // 关闭群内空调
.模式 (制冷|制热|除湿|送风) // 设置模式，如「.模式 制冷」设置为制冷模式，不带参数时切换为下个模式
.温度 (+|-)<值> // 调整空调温度（°C），如「.温度 +2」提升 2°C，「.温度 -1」降低 1°C
.温度 <值> // 直接设置空调温度（°C），如「.温度 26」设置温度为 26°C
.空调 // 查看当前状态
.空调 help|帮助 // 查看菜单`;

function main() {
  let ext = seal.ext.find('air-conditioner');
  if (!ext) {
    ext = seal.ext.new('air-conditioner', 'JustAnotherID', '1.0.0');
    seal.ext.register(ext);
  }

  const cmdMenu = seal.ext.newCmdItemInfo();
  cmdMenu.name = '空调';
  cmdMenu.help = helpDesc;
  cmdMenu.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '帮助':
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      default:
        if (msg.messageType !== 'group') {
          seal.replyToSender(ctx, msg, '空调只能在群内使用');
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx, msg, menuHandle(ext, msg.groupId));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  const cmdOpen = seal.ext.newCmdItemInfo();
  cmdOpen.name = '开空调';
  cmdOpen.help = helpDesc;
  cmdOpen.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '帮助':
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      default:
        if (msg.messageType !== 'group') {
          seal.replyToSender(ctx, msg, '空调只能在群内使用');
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx, msg, openCloseHandle(ext, msg.groupId, true));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  const cmdClose = seal.ext.newCmdItemInfo();
  cmdClose.name = '关空调';
  cmdClose.help = helpDesc;
  cmdClose.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '帮助':
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      default:
        if (msg.messageType !== 'group') {
          seal.replyToSender(ctx, msg, '空调只能在群内使用');
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx, msg, openCloseHandle(ext, msg.groupId, false));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  const cmdMode = seal.ext.newCmdItemInfo();
  cmdMode.name = '模式';
  cmdMode.help = helpDesc;
  cmdMode.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case 'help':
      case '帮助':
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      default:
        if (msg.messageType !== 'group') {
          seal.replyToSender(ctx, msg, '空调只能在群内使用');
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx, msg, modeHandle(ext, msg.groupId, val));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  const cmdTemperature = seal.ext.newCmdItemInfo();
  cmdTemperature.name = '温度';
  cmdTemperature.help = helpDesc;
  cmdTemperature.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case '':
      case 'help':
      case '帮助':
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      default:
        if (msg.messageType !== 'group') {
          seal.replyToSender(ctx, msg, '空调只能在群内使用');
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(ctx, msg, temperatureHandle(ext, msg.groupId, val));
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  ext.cmdMap['空调'] = cmdMenu;
  ext.cmdMap['开空调'] = cmdOpen;
  ext.cmdMap['关空调'] = cmdClose;
  ext.cmdMap['模式'] = cmdMode;
  ext.cmdMap['温度'] = cmdTemperature;
}

main();
