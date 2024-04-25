import Interpreter from 'js-interpreter';
import * as Babel from '@babel/standalone';

if (!seal.ext.find('js-interpreter')) {
  const ext = seal.ext.new('js-interpreter', 'JustAnotherID', '1.0.0');
  seal.ext.register(ext);

  seal.ext.registerTemplateConfig(
    ext,
    'whitelist',
    ['UI:1001'],
    '白名单列表。支持指定用户或群，如 QQ:114514、QQ-Group:1919810。'
  );
  seal.ext.registerTemplateConfig(
    ext,
    'blacklist',
    [''],
    '黑名单列表。比白名单优先级更高。'
  );

  ext.onNotCommandReceived = (ctx, msg) => {
    if (msg.message.startsWith('$')) {
      const whitelist = seal.ext.getConfig(ext, 'whitelist');
      const blacklist: string[] =
        seal.ext.getConfig(ext, 'blacklist')?.value ?? [];
      if (whitelist) {
        const groupId = msg.groupId;
        const senderId = msg.sender.userId;
        let black: string;
        for (black of blacklist) {
          if (black === groupId || black === senderId) {
            seal.replyToSender(
              ctx,
              msg,
              seal.format(ctx, '{核心:提示_无权限}')
            );
            return;
          }
        }
        let white: string;
        for (white of whitelist.value) {
          if (white === groupId || white === senderId) {
            const command = msg.message.substring(1).trim();
            let val: any;
            try {
              const es5Code = Babel.transform(command, {
                presets: ['es2015'],
              }).code;
              const env = new Interpreter(es5Code);
              env.run();
              val = env.value;
            } catch (e) {
              val = e;
            }

            let res;
            if (command.length > 40) {
              res = `> ${command.substring(0, 40)}...\n${val}`;
            } else {
              res = `> ${command}\n${val}`;
            }

            seal.replyToSender(ctx, msg, res);
            return;
          }
        }
      }

      seal.replyToSender(ctx, msg, seal.format(ctx, '{核心:提示_无权限}'));
    }
  };
}
