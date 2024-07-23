const diceRegex = /{@(?:dice|damage) (.*?)}/g;

function isString(str) {
  if (Object.prototype.toString.call(str) === '[object String]') {
    return true;
  } else {
    return false;
  }
}

export const generateSpellsData = (spellsFrom5eDatebase, spellsFrom5eTools) => {
  let spellsMap = new Map();
  for (let spell of spellsFrom5eDatebase) {
    if (spell.damage) {
      spellsMap.set(spell.name, {
        name_en: spell.name,
        level: spell.level,
        damage: spell.damage.damage_at_slot_level,
      });
    }
  }

  for (let spell of spellsFrom5eTools) {
    let exists = spellsMap.get(spell.ENG_name);
    if (!exists && isString(spell.srd)) {
      exists = spellsMap.get(spell.srd) ?? {};
      exists = {
        ...exists,
        name: spell.name,
        name_en: spell.srd,
        level: spell.level,
        source: spell.source,
      };
    } else {
      exists = exists ?? {};
      exists = {
        ...exists,
        name: spell.name,
        name_en: spell.ENG_name,
        level: spell.level,
        source: spell.source,
      };
    }
    let spell_entries = spell.entries.join('');

    if (spell.level === 0) {
      // 戏法
      if (spell.scalingLevelDice) {
        // 戏法有按等级的不同掷骰
        exists.damage = spell.scalingLevelDice.scaling;
        exists.damageInflict = spell.damageInflict;
      } else if (
        diceRegex.test(spell_entries) &&
        spell_entries.match(diceRegex).length === 1
      ) {
        // 戏法有等级无关的掷骰
        exists.damage = {
          1: diceRegex.exec(spell_entries)[1],
        };
      }
    } else {
      // 法术
      if (exists.damage) {
        exists.damageInflict = spell.damageInflict;
      } else if (
        diceRegex.test(spell_entries) &&
        spell_entries.match(diceRegex).length === 1
      ) {
        exists.damage = {
          [spell.level]: diceRegex.exec(spell_entries)[1],
        };
        exists.damageInflict = spell.damageInflict;
      }
    }

    if (exists.damageInflict && exists.damageInflict.length > 0) {
      let inflicts = [];
      for (let inflict of exists.damageInflict) {
        switch (inflict) {
          case 'acid':
            inflicts.push('强酸');
            break;
          case 'cold':
            inflicts.push('冷冻');
            break;
          case 'fire':
            inflicts.push('火焰');
            break;
          case 'force':
            inflicts.push('力场');
            break;
          case 'necrotic':
            inflicts.push('黯蚀');
            break;
          case 'bludgeoning':
            inflicts.push('钝击');
            break;
          case 'poison':
            inflicts.push('毒素');
            break;
          case 'slashing':
            inflicts.push('挥砍');
            break;
          case 'psychic':
            inflicts.push('心灵');
            break;
          case 'radiant':
            inflicts.push('光耀');
            break;
          case 'lightning':
            inflicts.push('闪电');
            break;
          case 'thunder':
            inflicts.push('雷鸣');
            break;
          case 'piercing':
            inflicts.push('穿刺');
            break;
          default:
            inflicts.push('未知');
            break;
        }
      }
      exists.damageInflict = inflicts;
    }
    spellsMap.set(exists.name_en, exists);
  }

  let result = {};
  result['_comment'] =
    '该文件由 dnd5e-spell-helper/tools/build.js 自动生成，请勿直接修改此文件';
  result['spell'] = [...spellsMap.values()];

  return result;
};
