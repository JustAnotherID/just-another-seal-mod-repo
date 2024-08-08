import { max, min } from 'lodash-es';
import spellsData from './data/spells-data.json';

const spellMap = new Map(spellsData.spell.map((spell) => [spell.name, spell]));

const helpDesc = `\
DND5e施法辅助
.cs 戏法名 <等级> // 自动按目标等级释放戏法
.cs 法术名 <环数> // 自动按目标环数施法
`;

function main() {
  let ext = seal.ext.find('dnd5e-spell-helper');
  if (!ext) {
    ext = seal.ext.new('dnd5e-spell-helper', 'JustAnotherID', '1.1.1');
    seal.ext.register(ext);
  }

  const cmdCastSpell = seal.ext.newCmdItemInfo();
  cmdCastSpell.name = 'cs';
  cmdCastSpell.help = helpDesc;
  cmdCastSpell.solve = (ctx, msg, cmdArgs) => {
    const name = cmdArgs.getArgN(1);
    if (!name) {
      seal.replyToSender(ctx, msg, '请指定戏法/法术名称');
      return seal.ext.newCmdExecuteResult(true);
    } else if (name === 'help' || name === '帮助') {
      let ret = seal.ext.newCmdExecuteResult(true);
      ret.showHelp = true;
      return ret;
    }

    const spellInfo = spellMap.get(name);
    if (!spellInfo) {
      seal.replyToSender(ctx, msg, '没有该戏法/法术的信息');
      return seal.ext.newCmdExecuteResult(true);
    } else if (!spellInfo.damage) {
      seal.replyToSender(ctx, msg, '该戏法/法术没有伤害/掷骰信息');
      return seal.ext.newCmdExecuteResult(true);
    }

    let damageDiceStr: string;
    let rawLevel: number;
    let targetLevel: number;
    if (spellInfo.level === 0) {
      // 是戏法，参数是等级
      rawLevel = parseInt(cmdArgs.getArgN(2) || '1');
      const levelList = Object.keys(spellInfo.damage)
        .map((l) => parseInt(l))
        .filter((l) => l <= rawLevel);
      targetLevel = max(levelList);
      damageDiceStr = spellInfo.damage[targetLevel];
      if (!damageDiceStr) {
        seal.replyToSender(ctx, msg, `没有等级${rawLevel}下释放${name}的信息`);
        return seal.ext.newCmdExecuteResult(true);
      }
    } else {
      // 是法术，参数是环数
      const minLevel = min(
        Object.keys(spellInfo.damage).map((l) => parseInt(l))
      );
      rawLevel = parseInt(cmdArgs.getArgN(2) || minLevel.toString());
      targetLevel = rawLevel;
      damageDiceStr = spellInfo.damage[targetLevel];
      if (!damageDiceStr) {
        seal.replyToSender(ctx, msg, `没有${targetLevel}环${name}的信息`);
        return seal.ext.newCmdExecuteResult(true);
      }
    }

    // 解析伤害骰子（例如："8d6" 或 "20d6 + 20d6"）
    const damageParts = damageDiceStr.split(' + ');
    const damageTotals = [];
    const allDamageResults = [];

    for (const part of damageParts) {
      if (part.includes('d')) {
        let [diceCount, diceSides] = part.split('d').map(Number);
        if (!diceCount) {
          diceCount = 1;
        }
        const damage = Array(diceCount)
          .fill(0)
          .map(() => Math.floor(Math.random() * diceSides) + 1);
        const totalDamage = damage.reduce((a, b) => a + b, 0);
        damageTotals.push(totalDamage);
        allDamageResults.push(damage);
      } else {
        damageTotals.push(Number(part));
        allDamageResults.push([Number(part)]);
      }
    }

    const totalDamage = damageTotals.reduce((a, b) => a + b, 0);
    const finalDamageString = damageParts
      .map((part, index) => {
        const damageResult = allDamageResults[index];
        return `[${part}=${damageTotals[index]}(${damageResult.join('+')})]`;
      })
      .join(' + ');

    // 返回结果
    const playerName = ctx.player.name || '玩家';
    let final: string;
    if (spellInfo.level === 0) {
      if (spellInfo.damageInflict) {
        const levelStr = rawLevel === 1 ? '' : `于等级${rawLevel} `;
        const inflict =
          spellInfo.damageInflict.length === 1
            ? spellInfo.damageInflict[0] + '伤害'
            : `伤害（${spellInfo.damageInflict.join('、')}）`;
        final = `<${playerName}>${levelStr}释放${spellInfo.name}骰${inflict}，结果为${damageDiceStr} = ${finalDamageString} = ${totalDamage}`;
      } else {
        const levelStr = rawLevel === 1 ? '' : `在等级${rawLevel} `;
        final = `<${playerName}>${levelStr}释放${spellInfo.name}进行掷骰，结果为${damageDiceStr} = ${finalDamageString} = ${totalDamage}`;
      }
    } else {
      if (spellInfo.damageInflict) {
        const inflict =
          spellInfo.damageInflict.length === 1
            ? spellInfo.damageInflict[0] + '伤害'
            : `伤害（${spellInfo.damageInflict.join('、')}）`;
        final = `<${playerName}>为${targetLevel}环${spellInfo.name}骰${inflict}，结果为${damageDiceStr} = ${finalDamageString} = ${totalDamage}`;
      } else {
        final = `<${playerName}>为${targetLevel}环${spellInfo.name}进行掷骰，结果为${damageDiceStr} = ${finalDamageString} = ${totalDamage}`;
      }
    }
    seal.replyToSender(ctx, msg, final);
    return seal.ext.newCmdExecuteResult(true);
  };

  ext.cmdMap['cs'] = cmdCastSpell;
}

main();
