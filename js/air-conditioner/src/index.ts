import {
  menuHandle,
  modeHandle,
  ocModeHandle,
  openCloseHandle,
  temperatureHandle,
} from './handle';
import { parseCronExpression } from 'cron-schedule';
import { IntervalBasedCronScheduler } from 'cron-schedule/schedulers/interval-based.js';
import { getGroups, getSendInfo, getState, SendInfo, setState } from './store';
import { dayjs } from './utils';
import { round } from 'lodash-es';

const scheduler = new IntervalBasedCronScheduler(10 * 1000);

const helpDesc = `\
群空调
.开空调 // 打开群内空调
.关空调 // 关闭群内空调
.模式 (制冷|制热|除湿|送风) // 设置模式，如「.模式 制冷」设置为制冷模式，不带参数时切换为下个模式
.温度 (+|-) <值> // 调整空调温度（°C），如「.温度 + 2」提升 2°C，「.温度 - 1」降低 1°C
.温度 <值> // 直接设置空调温度（°C），如「.温度 26」设置温度为 26°C
.超频 (开|关) // 启用/关闭超频模式，解除温度控制
.空调 // 查看当前状态
.空调 (help|帮助) // 查看菜单`;

function main() {
  let ext = seal.ext.find('air-conditioner');
  if (!ext) {
    ext = seal.ext.new('air-conditioner', 'JustAnotherID', '1.2.2');
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
        const groupInfo: SendInfo = {
          endpointUserId: ctx.endPoint.userId,
          targetUserId: msg.sender.userId,
          targetGroupId: msg.groupId,
          targetGuildId: msg.guildId,
        };
        seal.replyToSender(
          ctx,
          msg,
          openCloseHandle(ext, msg.groupId, true, groupInfo)
        );
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
        const groupInfo: SendInfo = {
          endpointUserId: ctx.endPoint.userId,
          targetUserId: msg.sender.userId,
          targetGroupId: msg.groupId,
          targetGuildId: msg.guildId,
        };
        seal.replyToSender(
          ctx,
          msg,
          openCloseHandle(ext, msg.groupId, false, groupInfo)
        );
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
    let val1 = cmdArgs.getArgN(1);
    let val2 = cmdArgs.getArgN(2);
    switch (val1) {
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
        seal.replyToSender(
          ctx,
          msg,
          temperatureHandle(ext, msg.groupId, val1, val2)
        );
        return seal.ext.newCmdExecuteResult(true);
    }
  };

  const cmdOCMode = seal.ext.newCmdItemInfo();
  cmdOCMode.name = '超频';
  cmdOCMode.help = helpDesc;
  cmdOCMode.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case '开':
      case '关':
        if (msg.messageType !== 'group') {
          seal.replyToSender(ctx, msg, '空调只能在群内使用');
          return seal.ext.newCmdExecuteResult(true);
        }
        seal.replyToSender(
          ctx,
          msg,
          ocModeHandle(ext, msg.groupId, val === '开')
        );
        return seal.ext.newCmdExecuteResult(true);
      case 'help':
      case '帮助':
      default:
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
    }
  };

  ext.cmdMap['空调'] = cmdMenu;
  ext.cmdMap['开空调'] = cmdOpen;
  ext.cmdMap['关空调'] = cmdClose;
  ext.cmdMap['模式'] = cmdMode;
  ext.cmdMap['温度'] = cmdTemperature;
  ext.cmdMap['超频'] = cmdOCMode;

  const AIR_CONDITIONER_NOTIFY_INTERVAL =
    '空调提醒间隔/min（会四舍五入为整数）';
  seal.ext.registerFloatConfig(
    ext,
    AIR_CONDITIONER_NOTIFY_INTERVAL,
    30,
    '空调开启后，会「大致」按照此间隔向群里发送状态，最小间隔为 5 分钟'
  );

  // 每5分钟检查一次空调状态
  scheduler.registerTask(parseCronExpression('* */5 * * * *'), () => {
    const now = dayjs();
    console.log(`开始检查空调状态 ${now.format('YYYY-MM-DD HH:mm:ss')}`);
    const epMap: { [key: string]: seal.EndPointInfo } = {};
    const eps = seal.getEndPoints();
    for (let ep of eps) {
      epMap[ep.userId] = ep;
    }

    let groups = getGroups(ext);
    console.log(`群列表 ${JSON.stringify(groups)}`);
    for (let group of groups) {
      const state = getState(ext, group);
      console.log(`群 ${group} 空调状态 ${JSON.stringify(state)}`);
      if (state?.open && state.openTime) {
        let send = true;
        if (state.lastSendTime) {
          const interval = round(
            seal.ext.getFloatConfig(ext, AIR_CONDITIONER_NOTIFY_INTERVAL)
          );
          const diff = now.diff(dayjs.unix(state.lastSendTime), 'minute');
          console.log(`群 ${group} 上次间隔 ${diff}`);
          if (diff >= interval) {
            state.lastSendTime = now.unix();
          } else {
            send = false;
          }
        } else {
          state.lastSendTime = now.unix();
        }
        setState(ext, group, state);

        if (send) {
          const sendInfo = getSendInfo(ext, group);
          console.log(`群 ${group} 发送信息 ${JSON.stringify(sendInfo)}`);
          if (sendInfo) {
            const result = menuHandle(ext, group);
            const ep = epMap[sendInfo.endpointUserId];
            if (ep && result) {
              const msg = seal.newMessage();
              msg.messageType = 'group';
              msg.groupId = sendInfo.targetGroupId;
              msg.guildId = sendInfo.targetGuildId;
              msg.sender.userId = sendInfo.targetUserId;
              const ctx = seal.createTempCtx(ep, msg);
              seal.replyToSender(ctx, msg, result);
            }
          }
        }
      }
    }
  });
}

main();
