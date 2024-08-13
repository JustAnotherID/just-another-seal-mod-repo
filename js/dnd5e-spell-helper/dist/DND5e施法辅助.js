// ==UserScript==
// @name         DND5e施法辅助
// @author       JustAnotherID
// @version      1.1.1
// @description  使用 .cs 戏法名 <等级> 或 .cs 法术名 <环数> 自动施法。\n\n灵感和部分代码来自小嘟嘟噜和冷筱华的「DnDSRD法术脚本」，法术数据来自 5e-bits/5e-database 和 fvtt-cn/5etools，没有他们的工作就不会有这个插件的诞生，非常感谢
// @timestamp    2024-07-23 11:45:14
// @license      AGPL-3.0
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/dnd5e-spell-helper
// @updateUrl    https://mirror.ghproxy.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/dnd5e-spell-helper/dist/DND5e%E6%96%BD%E6%B3%95%E8%BE%85%E5%8A%A9.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/dnd5e-spell-helper/dist/DND5e%E6%96%BD%E6%B3%95%E8%BE%85%E5%8A%A9.js
// ==/UserScript==

(() => {
  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Symbol = root_default.Symbol;
  var Symbol_default = Symbol;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGt.js
  function baseGt(value, other) {
    return value > other;
  }
  var baseGt_default = baseGt;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseLt.js
  function baseLt(value, other) {
    return value < other;
  }
  var baseLt_default = baseLt;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseExtremum.js
  function baseExtremum(array, iteratee, comparator) {
    var index = -1, length = array.length;
    while (++index < length) {
      var value = array[index], current = iteratee(value);
      if (current != null && (computed === void 0 ? current === current && !isSymbol_default(current) : comparator(current, computed))) {
        var computed = current, result = value;
      }
    }
    return result;
  }
  var baseExtremum_default = baseExtremum;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/max.js
  function max(array) {
    return array && array.length ? baseExtremum_default(array, identity_default, baseGt_default) : void 0;
  }
  var max_default = max;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/min.js
  function min(array) {
    return array && array.length ? baseExtremum_default(array, identity_default, baseLt_default) : void 0;
  }
  var min_default = min;

  // src/data/spells-data.json
  var spells_data_default = { _comment: "该文件由 dnd5e-spell-helper/tools/build.js 自动生成，请勿直接修改此文件", spell: [{ name_en: "Acid Arrow", level: 2, damage: { "2": "4d4", "3": "5d4", "4": "6d4", "5": "7d4", "6": "8d4", "7": "9d4", "8": "10d4", "9": "11d4" }, name: "马友夫强酸箭", source: "PHB", damageInflict: ["强酸"] }, { name_en: "Acid Splash", level: 0, damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, name: "酸液溅爆", source: "PHB", damageInflict: ["强酸"] }, { name_en: "Arcane Sword", level: 7, damage: { "7": "3d10" }, name: "魔邓肯之剑", source: "PHB", damageInflict: ["力场"] }, { name_en: "Black Tentacles", level: 4, damage: { "4": "3d6" }, name: "艾伐黑触手", source: "PHB", damageInflict: ["钝击"] }, { name_en: "Blade Barrier", level: 6, damage: { "6": "6d10" }, name: "剑刃障壁", source: "PHB", damageInflict: ["挥砍"] }, { name_en: "Blight", level: 4, damage: { "4": "8d8", "5": "9d8", "6": "10d8", "7": "11d8", "8": "12d8", "9": "13d8" }, name: "枯萎术", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Branding Smite", level: 2, damage: { "2": "2d6", "3": "3d6", "4": "4d6", "5": "5d6", "6": "6d6", "7": "7d6", "8": "8d6", "9": "9d6" }, name: "烙印斩", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Burning Hands", level: 1, damage: { "1": "3d6", "2": "4d6", "3": "5d6", "4": "6d6", "5": "7d6", "6": "8d6", "7": "9d6", "8": "10d6", "9": "11d6" }, name: "燃烧之手", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Call Lightning", level: 3, damage: { "3": "3d10", "4": "4d10", "5": "5d10", "6": "6d10", "7": "7d10", "8": "8d10", "9": "9d10" }, name: "召雷术", source: "PHB", damageInflict: ["闪电"] }, { name_en: "Chain Lightning", level: 6, damage: { "6": "10d8" }, name: "连环闪电", source: "PHB", damageInflict: ["闪电"] }, { name_en: "Chill Touch", level: 0, damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" },name: "寒颤之触", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Circle of Death", level: 6, damage: { "6": "8d6", "7": "10d6", "8": "12d6", "9": "14d6" }, name: "死亡之环", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Cloudkill", level: 5, damage: { "5": "5d8", "6": "6d8", "7": "7d8", "8": "8d8", "9": "9d8" }, name: "死云术", source: "PHB", damageInflict: ["毒素"] }, { name_en: "Cone of Cold", level: 5, damage: { "5": "8d8", "6": "9d8", "7": "10d8", "8": "11d8", "9": "12d8" }, name: "寒冰锥", source: "PHB", damageInflict: ["冷冻"] }, { name_en: "Control Water", level: 4, damage: { "4": "2d8" }, name: "操控水体", source: "PHB", damageInflict: ["钝击"] }, { name_en: "Delayed Blast Fireball", level: 7, damage: { "7": "12d6", "8": "13d6", "9": "14d6" }, name: "延迟爆裂火球", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Dimension Door", level: 4, damage: { "4": "4d6" }, name: "次元门", source: "PHB", damageInflict: ["力场"] }, { name_en: "Disintegrate", level: 6, damage: { "6": "10d6 + 40" }, name: "解离术", source: "PHB", damageInflict: ["力场"] }, { name_en: "Divine Favor", level: 1, damage: { "1": "1d4" }, name: "神恩术", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Dream", level: 5, damage: { "5": "3d6" }, name: "托梦术", source: "PHB", damageInflict: ["心灵"] }, { name_en: "Eldritch Blast", level: 0, damage: { "1": "1d10"}, return: {"1":"1", "5":"2","11":"3","17":"4" }, name: "魔能爆", source: "PHB" }, { name_en: "Faithful Hound", level: 4, damage: { "4": "4d8" }, name: "魔邓肯忠犬", source: "PHB", damageInflict: ["穿刺"] }, { name_en: "Feeblemind", level: 8, damage: { "8": "4d6" }, name: "弱智术", source: "PHB", damageInflict: ["心灵"] }, { name_en: "Finger of Death", level: 7, damage: { "7": "7d8 + 30" }, name: "死亡一指", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Fire Bolt", level: 0, damage: { "1": "1d10", "5": "2d10", "11": "3d10", "17": "4d10" }, name: "火焰箭", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Fire Shield", level: 4, damage: { "4": "2d8" }, name: "火焰护盾", source: "PHB", damageInflict: ["冷冻", "火焰"] }, { name_en: "Fire Storm", level: 7, damage: { "7": "7d10" }, name: "火焰风暴", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Fireball", level: 3, damage: { "3": "8d6", "4": "9d6", "5": "10d6", "6": "11d6", "7": "12d6", "8": "13d6", "9": "14d6" }, name: "火球术", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Flame Blade", level: 2, damage: { "2": "3d6", "4": "4d6", "6": "5d6", "8": "6d6" }, name: "火焰刀", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Flame Strike", level: 5, damage: { "5": "4d6 + 4d6", "6": "4d6 + 5d6", "7": "4d6 + 6d6", "8": "4d6 + 7d6", "9": "4d6 + 8d6" }, name: "焰击术", source: "PHB", damageInflict: ["火焰", "光耀"] }, { name_en: "Flaming Sphere", level: 2, damage: { "2": "2d6", "3": "3d6", "4": "4d6", "5": "5d6", "6": "6d6", "7": "7d6", "8": "8d6", "9": "9d6" }, name: "炽焰法球", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Freezing Sphere", level: 6, damage: { "6": "10d6" }, name: "欧提路克冰冻法球", source: "PHB", damageInflict: ["冷冻"] }, { name_en: "Guardian of Faith", level: 4, damage: { "4": "20" }, name: "虔诚守卫", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Guiding Bolt", level: 1, damage: { "1": "4d6", "2": "5d6", "3": "6d6", "4": "7d6", "5": "8d6", "6": "9d6", "7": "10d6", "8": "11d6", "9": "12d6" }, name: "光导箭", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Harm", level: 6, damage: { "6": "14d6" }, name: "伤害术", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Heat Metal", level: 2, damage: { "2": "2d8", "3": "3d8", "4": "4d8", "5": "5d8", "6": "6d8", "7": "7d8", "8": "8d8", "9": "9d8" }, name: "灼热金属", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Hellish Rebuke", level: 1, damage: { "1": "2d10", "2": "3d10", "3": "4d10", "4": "5d10", "5": "6d10", "6": "7d10", "7": "8d10", "8": "9d10", "9": "10d10" }, name: "炼狱叱喝", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Ice Storm", level: 4, damage: { "4": "2d8 + 4d6", "5": "3d8 + 4d6", "6": "4d8 + 4d6", "7": "5d8 + 4d6", "8": "6d8 + 4d6", "9": "7d8 + 4d6" }, name: "冰风暴", source: "PHB", damageInflict: ["钝击", "冷冻"] }, { name_en: "Incendiary Cloud", level: 8, damage: { "8": "10d8" }, name: "焚云术", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Inflict Wounds", level: 1, damage: { "1": "3d10", "2": "4d10", "3": "5d10", "4": "6d10", "5": "7d10", "6": "8d10", "7": "9d10", "8": "10d10", "9": "11d10" }, name: "造成伤势", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Insect Plague", level: 5, damage: { "5": "4d10", "6": "5d10", "7": "6d10", "8": "7d10", "9": "8d10" }, name: "疫病虫群", source: "PHB", damageInflict: ["穿刺"] }, { name_en: "Lightning Bolt", level: 3, damage: { "3": "8d6", "4": "9d6", "5": "10d6", "6": "11d6", "7": "12d6", "8": "13d6", "9": "14d6" }, name: "闪电束", source: "PHB", damageInflict: ["闪电"] }, { name_en: "Magic Missile", level: 1, damage: { "1": "1d4 + 1", "2": "1d4 + 1", "3": "1d4 + 1", "4": "1d4 + 1", "5": "1d4 + 1", "6": "1d4 + 1", "7": "1d4 + 1", "8": "1d4 + 1", "9": "1d4 + 1" }, return: { "1": "3", "2": "4", "3": "5", "4": "6","5":"7","6":"8","7":"9","8":"10","9":"11" }, name: "魔法飞弹", source: "PHB", damageInflict: ["力场"] }, { name_en: "Meteor Swarm", level: 9, damage: { "9": "20d6 + 20d6" }, name: "流星爆", source: "PHB", damageInflict: ["钝击", "火焰"] }, { name_en: "Moonbeam", level: 2, damage: { "2": "2d10", "3": "3d10", "4": "4d10", "5": "5d10", "6": "6d10", "7": "7d10", "8": "8d10", "9": "9d10" }, name: "月华之光", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Phantasmal Killer", level: 4, damage: { "4": "4d10" }, name: "魅影杀手", source: "PHB", damageInflict: ["心灵"] }, { name_en: "Poison Spray", level: 0, damage: { "1": "1d12", "5": "2d12", "11": "3d12", "17": "4d12" }, name: "毒气喷洒", source: "PHB", damageInflict: ["毒素"] }, { name_en: "Prismatic Spray", level: 7, damage: { "7": "10d6" }, name: "虹光喷射", source: "PHB", damageInflict: ["强酸", "冷冻", "火焰", "闪电", "毒素"] }, { name_en: "Produce Flame", level: 0, damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" }, name: "燃火术", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Ray of Frost", level: 0, damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" }, name: "冷冻射线", source: "PHB", damageInflict: ["冷冻"] }, { name_en: "Sacred Flame", level: 0, damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" }, name: "圣焰", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Scorching Ray", level: 2, damage: { "2": "2d6" }, name: "灼热射线", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Shatter", level: 2, damage: { "2": "3d8", "3": "4d8", "4": "5d8", "5": "6d8", "6": "7d8", "7": "8d8", "8": "9d8", "9": "10d8" }, name: "粉碎音波", source: "PHB", damageInflict: ["雷鸣"] }, { name_en: "Shocking Grasp", level: 0, damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" }, name: "电爪", source: "PHB", damageInflict: ["闪电"] }, { name_en: "Sleep", level: 1, damage: { "1": "5d8" }, name: "睡眠术", source: "PHB" }, { name_en: "Spiritual Weapon", level: 2, damage: { "2": "1d8 + MOD", "3": "1d8 + MOD", "4": "2d8 + MOD", "5": "2d8 + MOD", "6": "3d8 + MOD", "7": "3d8 + MOD", "8": "4d8 + MOD", "9": "4d8 + MOD" }, name: "灵体武器", source: "PHB", damageInflict: ["力场"] }, { name_en: "Storm of Vengeance", level: 9, damage: { "9": "2d6" }, name: "复仇风暴", source: "PHB", damageInflict: ["强酸", "钝击", "冷冻", "闪电", "雷鸣"] }, { name_en: "Sunbeam", level: 6, damage: { "6": "6d8" }, name: "烈日光束", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Sunburst", level: 8, damage: { "8": "12d6" }, name: "阳炎爆", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Thunderwave", level: 1, damage: { "1": "2d8", "2": "3d8", "3": "4d8", "4": "5d8", "5": "6d8", "6": "7d8", "7": "8d8", "8": "9d8", "9": "10d8" }, name: "雷鸣波", source: "PHB", damageInflict: ["雷鸣"] }, { name_en: "Vampiric Touch", level: 3, damage: { "3": "3d6", "4": "4d6", "5": "5d6", "6": "6d6", "7": "7d6", "8": "8d6", "9": "9d6" }, name: "吸血鬼之触", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Vicious Mockery", level: 0, damage: { "1": "1d4", "5": "2d4", "11": "3d4", "17": "4d4" }, name: "恶毒嘲笑", source: "PHB", damageInflict: ["心灵"] }, { name_en: "Wall of Fire", level: 4, damage: { "4": "5d8" }, name: "火墙术", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Wall of Ice", level: 6, damage: { "6": "10d6", "7": "12d6", "8": "14d6", "9": "16d6" }, name: "冰墙术", source: "PHB", damageInflict: ["冷冻"] }, { name_en: "Wall of Thorns", level: 6, damage: { "6": "7d8", "7": "8d8", "8": "9d8", "9": "10d8" }, name: "棘墙术", source: "PHB", damageInflict: ["穿刺", "挥砍"] }, { name_en: "Wind Wall", level: 3, damage: { "3": "3d8" }, name: "风墙术", source: "PHB", damageInflict: ["钝击"] }, { name: "扭曲价值", name_en: "Distort Value", level: 1, source: "AI" }, { name: "快速交友", name_en: "Fast Friends", level: 3, source: "AI" }, { name: "巧舌如簧", name_en: "Gift of Gab", level: 2, source: "AI" }, { name: "鼓动贪欲", name_en: "Incite Greed", level: 3, source: "AI" }, { name: "Conjure Vrock (UA)", level: 5, source: "UAThatOldBlackMagic", damage: { "1": "1d4" } }, { name: "吉姆的魔法飞弹", name_en: "Jim's Magic Missile", level: 1, source: "AI" }, { name: "励志演讲", name_en: "Motivational Speech", level: 3, source: "AI" }, { name: "黑暗星辰", name_en: "Dark Star", level: 8, source: "EGW", damage: { "8": "8d10" }, damageInflict: ["力场"] }, { name: "命运宠儿", name_en: "Fortune's Favor", level: 2, source: "EGW" }, { name: "灵敏之赐", name_en: "Gift of Alacrity", level: 1, source: "EGW", damage: { "1": "1d8" } }, { name: "重力分裂", name_en: "Gravity Fissure", level: 6, source: "EGW" }, { name: "引力裂沟", name_en: "Gravity Sinkhole", level: 4, source: "EGW", damage: { "4": "5d10" }, damageInflict: ["力场"] }, { name: "不动物件", name_en: "Immovable Object", level: 2, source: "EGW" }, { name: "扩大重力", name_en: "Magnify Gravity", level: 1, source: "EGW", damage: { "1": "2d8" }, damageInflict: ["力场"] }, { name: "脉冲波动", name_en: "Pulse Wave", level: 3, source: "EGW" }, { name: "饕餮虚空", name_en: "Ravenous Void", level: 9, source: "EGW", damage: { "9": "5d10" }, damageInflict: ["力场"] }, { name: "崩坏现实", name_en: "Reality Break", level: 8, source: "EGW" }, { name: "削弱芒刺", name_en: "Sapping Sting", level: 0, source: "EGW", damage: { "1": "1d4", "5": "2d4", "11": "3d4", "17": "4d4" }, damageInflict: ["黯蚀"] }, { name: "时流刹转", name_en: "Temporal Shunt", level: 5, source: "EGW" }, { name: "系结本源", name_en: "Tether Essence", level: 7, source: "EGW" }, { name: "时光蹂躏", name_en: "Time Ravage", level: 9, source: "EGW", damage: { "9": "10d12" }, damageInflict: ["黯蚀"] }, { name: "魔袋术", name_en: "Wristpocket", level: 2, source: "EGW" }, { name: "思维编码", name_en: "Encode Thoughts", level: 0, source: "GGR" }, { name: "创造魔卫", name_en: "Create Magen", level: 7, source: "IDRotF" }, { name: "冷冻一指", name_en: "Frost Fingers", level: 1, source: "IDRotF", damage: { "1": "2d8" }, damageInflict: ["冷冻"] }, { name: "群聚魔宠", name_en: "Flock of Familiars", level: 2, source: "LLK" }, { name: "高德尔之塔", name_en: "Galder's Tower", level: 3, source: "LLK" }, { name: "援助术", name_en: "Aid", level: 2, source: "PHB" }, { name: "警报术", name_en: "Alarm", level: 1, source: "PHB" }, { name: "变造自身", name_en: "Alter Self", level: 2, source: "PHB" }, { name: "化兽为友", name_en: "Animal Friendship", level: 1, source: "PHB" }, { name: "动物信使", name_en: "Animal Messenger", level: 2, source: "PHB" }, { name: "动物化形", name_en: "Animal Shapes", level: 8, source: "PHB" }, { name: "活化死尸", name_en: "Animate Dead", level: 3, source: "PHB" }, { name: "活化物体", name_en: "Animate Objects", level: 5, source: "PHB" }, { name: "反活物护罩", name_en: "Antilife Shell", level: 5, source: "PHB" }, { name: "反魔法结界", name_en: "Antimagic Field", level: 8, source: "PHB" }, { name: "嫌恶/共感术", name_en: "Antipathy/Sympathy", level: 8, source: "PHB" }, { name: "秘法眼", name_en: "Arcane Eye", level: 4, source: "PHB" }, { name: "秘法之门", name_en: "Arcane Gate", level: 6, source: "PHB" }, { name: "秘法锁", name_en: "Arcane Lock", level: 2, source: "PHB" }, { name: "艾嘉西斯之铠", name_en: "Armor of Agathys", level: 1, source: "PHB" }, { name: "哈达之臂", name_en: "Arms of Hadar", level: 1, source: "PHB", damage: { "1": "2d6" }, damageInflict: ["黯蚀"] }, { name: "星界投影", name_en: "Astral Projection", level: 9, source: "PHB" }, { name: "卜筮", name_en: "Augury", level: 2, source: "PHB" }, { name: "生命灵光", name_en: "Aura of Life", level: 4, source: "PHB" }, { name: "净化灵光", name_en: "Aura of Purity", level: 4, source: "PHB" }, { name: "活力灵光", name_en: "Aura of Vitality", level: 3, source: "PHB", damage: { "3": "2d6" } }, { name: "启蒙术", name_en: "Awaken", level: 5, source: "PHB" }, { name: "灾祸术", name_en: "Bane", level: 1, source: "PHB", damage: { "1": "d4" } }, { name: "放逐斩", name_en: "Banishing Smite", level: 5, source: "PHB" }, { name: "放逐术", name_en: "Banishment", level: 4, source: "PHB" }, { name: "树肤术", name_en: "Barkskin", level: 2, source: "PHB" }, { name: "希望信标", name_en: "Beacon of Hope", level: 3, source: "PHB" }, { name: "野兽知觉", name_en: "Beast Sense", level: 2, source: "PHB" }, { name: "降咒", name_en: "Bestow Curse", level: 3, source: "PHB" }, { name: "毕格比之掌", name_en: "Arcane Hand", level: 5, source: "PHB" }, { name: "剑刃防护", name_en: "Blade Ward", level: 0, source: "PHB" }, { name: "祝福术", name_en: "Bless", level: 1, source: "PHB", damage: { "1": "d4" } }, { name: "致盲斩", name_en: "Blinding Smite", level: 3, source: "PHB" }, { name: "目盲/耳聋术", name_en: "Blindness/Deafness", level: 2, source: "PHB" }, { name: "闪现术", name_en: "Blink", level: 3, source: "PHB", damage: { "3": "d20" } }, { name: "朦胧术", name_en: "Blur", level: 2, source: "PHB" }, { name: "安定心神", name_en: "Calm Emotions", level: 2, source: "PHB" }, { name: "魅惑人类", name_en: "Charm Person", level: 1, source: "PHB" }, { name: "幻色法球", name_en: "Chromatic Orb", level: 1, source: "PHB", damage: { "1": "3d8" }, damageInflict: ["强酸", "冷冻", "火焰", "闪电", "毒素", "雷鸣"] }, { name: "威能法环", name_en: "Circle of Power", level: 5, source: "PHB" }, { name: "锐眼术", name_en: "Clairvoyance", level: 3, source: "PHB" }, { name: "克隆术", name_en: "Clone", level: 8, source: "PHB" }, { name: "匕首之云", name_en: "Cloud of Daggers", level: 2, source: "PHB", damage: { "2": "4d4" }, damageInflict: ["挥砍"] }, { name: "七彩喷射", name_en: "Color Spray", level: 1, source: "PHB" }, { name: "命令术", name_en: "Command", level: 1, source: "PHB" }, { name: "通神术", name_en: "Commune", level: 5, source: "PHB" }, { name: "问道自然", name_en: "Commune with Nature", level: 5, source: "PHB" }, { name: "强迫决斗", name_en: "Compelled Duel", level: 1, source: "PHB" }, { name: "通晓语言", name_en: "Comprehend Languages", level: 1, source: "PHB" }, { name: "强迫术", name_en: "Compulsion", level: 4, source: "PHB" }, { name: "困惑术", name_en: "Confusion", level: 4, source: "PHB", damage: { "4": "d10" } }, { name: "召唤动物", name_en: "Conjure Animals", level: 3, source: "PHB" }, { name: "召唤箭幕", name_en: "Conjure Barrage", level: 3, source: "PHB", damage: { "3": "3d8" } }, { name: "召唤天界生物", name_en: "Conjure Celestial", level: 7, source: "PHB" }, { name: "召唤元素生物", name_en: "Conjure Elemental", level: 5, source: "PHB" }, { name: "召唤精类生物", name_en: "Conjure Fey", level: 6, source: "PHB" }, { name: "召唤次级元素生物", name_en: "Conjure Minor Elementals", level: 4, source: "PHB" }, { name: "召唤箭雨", name_en: "Conjure Volley", level: 5, source: "PHB", damage: { "5": "8d8" } }, { name: "召唤林地之精", name_en: "Conjure Woodland Beings", level: 4, source: "PHB" }, { name: "异界探知", name_en: "Contact Other Plane", level: 5, source: "PHB", damage: { "5": "6d6" }, damageInflict: ["心灵"] }, { name: "疫病术", name_en: "Contagion", level: 5, source: "PHB" }, { name: "触发术", name_en: "Contingency", level: 6, source: "PHB" }, { name: "不灭明焰", name_en: "Continual Flame", level: 2, source: "PHB" }, { name: "操控天气", name_en: "Control Weather", level: 8, source: "PHB", damage: { "8": "1d4 × 10" } }, { name: "警戒箭阵", name_en: "Cordon of Arrows", level: 2, source: "PHB", damage: { "2": "1d6" }, damageInflict: ["穿刺"] }, { name: "反制法术", name_en: "Counterspell", level: 3, source: "PHB" }, { name: "创造饮食", name_en: "Create Food and Water", level: 3, source: "PHB" }, { name: "造水/枯水术", name_en: "Create or Destroy Water", level: 1, source: "PHB" }, { name: "创造不死生物", name_en: "Create Undead", level: 6, source: "PHB" }, { name: "造物术", name_en: "Creation", level: 5, source: "PHB" }, { name: "疯狂冠冕", name_en: "Crown of Madness", level: 2, source: "PHB" }, { name: "十字军斗篷", name_en: "Crusader's Mantle", level: 3, source: "PHB", damage: { "3": "1d4" }, damageInflict: ["光耀"] }, { name: "治疗伤势", name_en: "Cure Wounds", level: 1, source: "PHB" }, { name: "舞光术", name_en: "Dancing Lights", level: 0, source: "PHB" }, { name: "黑暗术", name_en: "Darkness", level: 2, source: "PHB" }, { name: "黑暗视觉", name_en: "Darkvision", level: 2, source: "PHB" }, { name: "昼明术", name_en: "Daylight", level: 3, source: "PHB" }, { name: "防死护咒", name_en: "Death Ward", level: 4, source: "PHB" }, { name: "创造半位面", name_en: "Demiplane", level: 8, source: "PHB" }, { name: "湮灭波", name_en: "Destructive Wave", level: 5, source: "PHB" }, { name: "侦测善恶", name_en: "Detect Evil and Good", level: 1, source: "PHB" }, { name: "侦测魔法", name_en: "Detect Magic", level: 1, source: "PHB" }, { name: "侦测毒素或疾病", name_en: "Detect Poison and Disease", level: 1, source: "PHB" }, { name: "侦测思想", name_en: "Detect Thoughts", level: 2, source: "PHB" }, { name: "易容术", name_en: "Disguise Self", level: 1, source: "PHB" }, { name: "反制善恶", name_en: "Dispel Evil and Good", level: 5, source: "PHB" }, { name: "解除魔法", name_en: "Dispel Magic", level: 3, source: "PHB" }, { name: "噪音暗语", name_en: "Dissonant Whispers", level: 1, source: "PHB", damage: { "1": "3d6" }, damageInflict: ["心灵"] }, { name: "预言术", name_en: "Divination", level: 4, source: "PHB" }, { name: "圣言术", name_en: "Divine Word", level: 7, source: "PHB" }, { name: "支配野兽", name_en: "Dominate Beast", level: 4, source: "PHB" }, { name: "支配怪物", name_en: "Dominate Monster", level: 8, source: "PHB" }, { name: "支配人类", name_en: "Dominate Person", level: 5, source: "PHB" }, { name: "卓姆吉瞬间召唤", name_en: "Instant Summons", level: 6, source: "PHB" }, { name: "德鲁伊伎俩", name_en: "Druidcraft", level: 0, source: "PHB" }, { name: "地震术", name_en: "Earthquake", level: 8, source: "PHB" }, { name: "元素武器", name_en: "Elemental Weapon", level: 3, source: "PHB", damage: { "3": "1d4" }, damageInflict: ["强酸", "冷冻", "火焰", "闪电", "雷鸣"] }, { name: "强化属性", name_en: "Enhance Ability", level: 2, source: "PHB" }, { name: "变巨/缩小术", name_en: "Enlarge/Reduce", level: 2, source: "PHB" }, { name: "诱捕打击", name_en: "Ensnaring Strike", level: 1, source: "PHB", damage: { "1": "1d6" }, damageInflict: ["穿刺"] }, { name: "纠缠术", name_en: "Entangle", level: 1, source: "PHB" }, { name: "注目术", name_en: "Enthrall", level: 2, source: "PHB" }, { name: "跨入乙太界", name_en: "Etherealness", level: 7, source: "PHB" }, { name: "脚底抹油", name_en: "Expeditious Retreat", level: 1, source: "PHB" }, { name: "摄心目光", name_en: "Eyebite", level: 6, source: "PHB" }, { name: "鬼斧神工", name_en: "Fabricate", level: 4, source: "PHB" }, { name: "妖火术", name_en: "Faerie Fire", level: 1, source: "PHB" }, { name: "摹造生命", name_en: "False Life", level: 1, source: "PHB", damage: { "1": "1d4 + 4" } }, { name: "恐惧术", name_en: "Fear", level: 3, source: "PHB" }, { name: "羽落术", name_en: "Feather Fall", level: 1, source: "PHB" }, { name: "假死术", name_en: "Feign Death", level: 3, source: "PHB" }, { name: "寻获魔宠", name_en: "Find Familiar", level: 1, source: "PHB" }, { name: "寻获坐骑", name_en: "Find Steed", level: 2, source: "PHB" }, { name: "寻找捷径", name_en: "Find the Path", level: 6, source: "PHB" }, { name: "寻找陷阱", name_en: "Find Traps", level: 2, source: "PHB" }, { name: "石化术", name_en: "Flesh to Stone", level: 6, source: "PHB" }, { name: "飞行术", name_en: "Fly", level: 3, source: "PHB" }, { name: "云雾术", name_en: "Fog Cloud", level: 1, source: "PHB" }, { name: "禁制术", name_en: "Forbiddance", level: 6, source: "PHB" }, { name: "力场监牢", name_en: "Forcecage", level: 7, source: "PHB" }, { name: "预视术", name_en: "Foresight", level: 9, source: "PHB" }, { name: "行动自如术", name_en: "Freedom of Movement", level: 4, source: "PHB" }, { name: "交友术", name_en: "Friends", level: 0, source: "PHB" }, { name: "气化形体", name_en: "Gaseous Form", level: 3, source: "PHB" }, { name: "异界之门", name_en: "Gate", level: 9, source: "PHB" }, { name: "指使术", name_en: "Geas", level: 5, source: "PHB", damage: { "5": "5d10" }, damageInflict: ["心灵"] }, { name: "遗体防腐", name_en: "Gentle Repose", level: 2, source: "PHB" }, { name: "巨虫术", name_en: "Giant Insect", level: 4, source: "PHB" }, { name: "花言巧语", name_en: "Glibness", level: 8, source: "PHB" }, { name: "法术无效结界", name_en: "Globe of Invulnerability", level: 6, source: "PHB" }, { name: "守卫铭文", name_en: "Glyph of Warding", level: 3, source: "PHB" }, { name: "神莓术", name_en: "Goodberry", level: 1, source: "PHB" }, { name: "抓攫藤蔓", name_en: "Grasping Vine", level: 4, source: "PHB" }, { name: "油腻术", name_en: "Grease", level: 1, source: "PHB" }, { name: "高等隐形术", name_en: "Greater Invisibility", level: 4, source: "PHB" }, { name: "高等复原术", name_en: "Greater Restoration", level: 5, source: "PHB" }, { name: "铜墙铁壁", name_en: "Guards and Wards", level: 6, source: "PHB" }, { name: "神导术", name_en: "Guidance", level: 0, source: "PHB", damage: { "1": "d4" } }, { name: "造风术", name_en: "Gust of Wind", level: 2, source: "PHB" }, { name: "棘刺雹", name_en: "Hail of Thorns", level: 1, source: "PHB", damage: { "1": "1d10" }, damageInflict: ["穿刺"] }, { name: "圣居", name_en: "Hallow", level: 5, source: "PHB" }, { name: "幻景", name_en: "Hallucinatory Terrain", level: 4, source: "PHB" }, { name: "加速术", name_en: "Haste", level: 3, source: "PHB" }, { name: "治愈术", name_en: "Heal", level: 6, source: "PHB" }, { name: "治愈真言", name_en: "Healing Word", level: 1, source: "PHB", damage: { "1": "1d4" } }, { name: "英雄宴", name_en: "Heroes' Feast", level: 6, source: "PHB", damage: { "6": "2d10" } }, { name: "英雄气概", name_en: "Heroism", level: 1, source: "PHB" }, { name: "脆弱诅咒", name_en: "Hex", level: 1, source: "PHB", damage: { "1": "1d6" }, damageInflict: ["黯蚀"] }, { name: "怪物定身术", name_en: "Hold Monster", level: 5, source: "PHB" }, { name: "人类定身术", name_en: "Hold Person", level: 2, source: "PHB" }, { name: "神圣灵光", name_en: "Holy Aura", level: 8, source: "PHB" }, { name: "哈达之欲", name_en: "Hunger of Hadar", level: 3, source: "PHB" }, { name: "猎人印记", name_en: "Hunter's Mark", level: 1, source: "PHB", damage: { "1": "1d6" } }, { name: "催眠图纹", name_en: "Hypnotic Pattern", level: 3, source: "PHB" }, { name: "鉴定术", name_en: "Identify", level: 1, source: "PHB" }, { name: "迷幻手稿", name_en: "Illusory Script", level: 1, source: "PHB" }, { name: "禁锢术", name_en: "Imprisonment", level: 9, source: "PHB" }, { name: "隐形术", name_en: "Invisibility", level: 2, source: "PHB" }, { name: "跳跃术", name_en: "Jump", level: 1, source: "PHB" }, { name: "敲击术", name_en: "Knock", level: 2, source: "PHB" }, { name: "通晓传奇", name_en: "Legend Lore", level: 5, source: "PHB" }, { name: "李欧蒙秘藏箱", name_en: "Secret Chest", level: 4, source: "PHB" }, { name: "李欧蒙小屋", name_en: "Tiny Hut", level: 3, source: "PHB" }, { name: "次级复原术", name_en: "Lesser Restoration", level: 2, source: "PHB" }, { name: "浮空术", name_en: "Levitate", level: 2, source: "PHB" }, { name: "光亮术", name_en: "Light", level: 0, source: "PHB" }, { name: "闪电箭矢", name_en: "Lightning Arrow", level: 3, source: "PHB" }, { name: "动植物定位术", name_en: "Locate Animals or Plants", level: 2, source: "PHB" }, { name: "生物定位术", name_en: "Locate Creature", level: 4, source: "PHB" }, { name: "物品定位术", name_en: "Locate Object", level: 2, source: "PHB" }, { name: "大步奔行", name_en: "Longstrider", level: 1, source: "PHB" }, { name: "法师护甲", name_en: "Mage Armor", level: 1, source: "PHB" }, { name: "法师之手", name_en: "Mage Hand", level: 0, source: "PHB" }, { name: "防护法阵", name_en: "Magic Circle", level: 3, source: "PHB" }, { name: "魔魂壶", name_en: "Magic Jar", level: 6, source: "PHB" }, { name: "魔嘴术", name_en: "Magic Mouth", level: 2, source: "PHB" }, { name: "魔化武器", name_en: "Magic Weapon", level: 2, source: "PHB" }, { name: "强效幻影", name_en: "Major Image", level: 3, source: "PHB" }, { name: "群体治疗伤势", name_en: "Mass Cure Wounds", level: 5, source: "PHB", damage: { "5": "3d8" } }, { name: "群体治愈术", name_en: "Mass Heal", level: 9, source: "PHB" }, { name: "群体治愈真言", name_en: "Mass Healing Word", level: 3, source: "PHB", damage: { "3": "1d4" } }, { name: "群体暗示术", name_en: "Mass Suggestion", level: 6, source: "PHB" }, { name: "迷宫术", name_en: "Maze", level: 8, source: "PHB" }, { name: "融身入石", name_en: "Meld into Stone", level: 3, source: "PHB", damage: { "3": "6d6" }, damageInflict: ["钝击"] }, { name: "修复术", name_en: "Mending", level: 0, source: "PHB" }, { name: "传讯术", name_en: "Message", level: 0, source: "PHB" }, { name: "心灵屏障", name_en: "Mind Blank", level: 8, source: "PHB" }, { name: "次级幻象", name_en: "Minor Illusion", level: 0, source: "PHB" }, { name: "海市蜃楼", name_en: "Mirage Arcane", level: 7, source: "PHB" }, { name: "镜影术", name_en: "Mirror Image", level: 2, source: "PHB", damage: { "2": "d20" } }, { name: "假象术", name_en: "Mislead", level: 5, source: "PHB" }, { name: "迷踪步", name_en: "Misty Step", level: 2, source: "PHB" }, { name: "修改记忆", name_en: "Modify Memory", level: 5, source: "PHB" }, { name: "魔邓肯豪宅术", name_en: "Magnificent Mansion", level: 7, source: "PHB" }, { name: "魔邓肯私人密室", name_en: "Private Sanctum", level: 4, source: "PHB" }, { name: "地动术", name_en: "Move Earth", level: 6, source: "PHB" }, { name: "回避侦测", name_en: "Nondetection", level: 3, source: "PHB" }, { name: "涅斯图魔法灵光", name_en: "Arcanist's Magic Aura", level: 2, source: "PHB" }, { name: "欧提路克魔封法球", name_en: "Resilient Sphere", level: 4, source: "PHB" }, { name: "奥图狂舞术", name_en: "Irresistible Dance", level: 6, source: "PHB" }, { name: "行踪无迹", name_en: "Pass without Trace", level: 2, source: "PHB" }, { name: "穿墙术", name_en: "Passwall", level: 5, source: "PHB" }, { name: "魅影之力", name_en: "Phantasmal Force", level: 2, source: "PHB", damage: { "2": "1d6" }, damageInflict: ["心灵"] }, { name: "魅影驹", name_en: "Phantom Steed", level: 3, source: "PHB" }, { name: "异界盟友", name_en: "Planar Ally", level: 6, source: "PHB" }, { name: "异界誓缚", name_en: "Planar Binding", level: 5, source: "PHB" }, { name: "异界传送", name_en: "Plane Shift", level: 7, source: "PHB" }, { name: "植物滋长", name_en: "Plant Growth", level: 3, source: "PHB" }, { name: "变形术", name_en: "Polymorph", level: 4, source: "PHB" }, { name: "律令治愈", name_en: "Power Word Heal", level: 9, source: "PHB" }, { name: "律令死亡", name_en: "Power Word Kill", level: 9, source: "PHB" }, { name: "律令震慑", name_en: "Power Word Stun", level: 8, source: "PHB" }, { name: "治愈祈祷", name_en: "Prayer of Healing", level: 2, source: "PHB", damage: { "2": "2d8" } }, { name: "魔法技俩", name_en: "Prestidigitation", level: 0, source: "PHB" }, { name: "虹光法墙", name_en: "Prismatic Wall", level: 9, source: "PHB" }, { name: "预置幻象", name_en: "Programmed Illusion", level: 6, source: "PHB" }, { name: "投射幻影", name_en: "Project Image", level: 7, source: "PHB" }, { name: "防护能量", name_en: "Protection from Energy", level: 3, source: "PHB" }, { name: "防护善恶", name_en: "Protection from Evil and Good", level: 1, source: "PHB" }, { name: "防护毒素", name_en: "Protection from Poison", level: 2, source: "PHB" }, { name: "净化饮食", name_en: "Purify Food and Drink", level: 1, source: "PHB" }, { name: "唤醒死者", name_en: "Raise Dead", level: 5, source: "PHB" }, { name: "拉瑞心灵联结", name_en: "Telepathic Bond", level: 5, source: "PHB" }, { name: "衰弱射线", name_en: "Ray of Enfeeblement", level: 2, source: "PHB" }, { name: "致病射线", name_en: "Ray of Sickness", level: 1, source: "PHB", damage: { "1": "2d8" }, damageInflict: ["毒素"] }, { name: "再生术", name_en: "Regenerate", level: 7, source: "PHB" }, { name: "转生术", name_en: "Reincarnate", level: 5, source: "PHB", damage: { "5": "d100" } }, { name: "移除诅咒", name_en: "Remove Curse", level: 3, source: "PHB" }, { name: "提升抗力", name_en: "Resistance", level: 0, source: "PHB", damage: { "1": "d4" } }, { name: "复活术", name_en: "Resurrection", level: 7, source: "PHB" }, { name: "重力反转", name_en: "Reverse Gravity", level: 7, source: "PHB" }, { name: "回生术", name_en: "Revivify", level: 3, source: "PHB" }, { name: "通天绳", name_en: "Rope Trick", level: 2, source: "PHB" }, { name: "圣域术", name_en: "Sanctuary", level: 1, source: "PHB" }, { name: "探知", name_en: "Scrying", level: 5, source: "PHB" }, { name: "炽炎斩", name_en: "Searing Smite", level: 1, source: "PHB" }, { name: "识破隐形", name_en: "See Invisibility", level: 2, source: "PHB" }, { name: "伪装术", name_en: "Seeming", level: 5, source: "PHB" }, { name: "短讯术", name_en: "Sending", level: 3, source: "PHB" }, { name: "隔离术", name_en: "Sequester", level: 7, source: "PHB" }, { name: "形体变化", name_en: "Shapechange", level: 9, source: "PHB" }, { name: "护盾术", name_en: "Shield", level: 1, source: "PHB" }, { name: "虔诚护盾", name_en: "Shield of Faith", level: 1, source: "PHB" }, { name: "橡棍术", name_en: "Shillelagh", level: 0, source: "PHB", damage: { "1": "d8" } }, { name: "沉默术", name_en: "Silence", level: 2, source: "PHB" }, { name: "无声幻影", name_en: "Silent Image", level: 1, source: "PHB" }, { name: "拟像术", name_en: "Simulacrum", level: 7, source: "PHB" }, { name: "雪雨暴", name_en: "Sleet Storm", level: 3, source: "PHB" }, { name: "缓速术", name_en: "Slow", level: 3, source: "PHB", damage: { "3": "d20" } }, { name: "拯救濒死", name_en: "Spare the Dying", level: 0, source: "PHB" }, { name: "动物交谈术", name_en: "Speak with Animals", level: 1, source: "PHB" }, { name: "死者交谈术", name_en: "Speak with Dead", level: 3, source: "PHB" }, { name: "植物交谈术", name_en: "Speak with Plants", level: 3, source: "PHB" }, { name: "蛛行术", name_en: "Spider Climb", level: 2, source: "PHB" }, { name: "荆棘丛生", name_en: "Spike Growth", level: 2, source: "PHB", damage: { "2": "2d4" }, damageInflict: ["穿刺"] }, { name: "灵体守卫", name_en: "Spirit Guardians", level: 3, source: "PHB" }, { name: "惊震斩", name_en: "Staggering Smite", level: 4, source: "PHB", damage: { "4": "4d6" }, damageInflict: ["心灵"] }, { name: "臭云术", name_en: "Stinking Cloud", level: 3, source: "PHB" }, { name: "塑石术", name_en: "Stone Shape", level: 4, source: "PHB" }, { name: "石肤术", name_en: "Stoneskin", level: 4, source: "PHB" }, { name: "暗示术", name_en: "Suggestion", level: 2, source: "PHB" }, { name: "迅捷箭袋", name_en: "Swift Quiver", level: 5, source: "PHB" }, { name: "徽记术", name_en: "Symbol", level: 7, source: "PHB" }, { name: "塔莎狂笑术", name_en: "Hideous Laughter", level: 1, source: "PHB" }, { name: "心灵遥控", name_en: "Telekinesis", level: 5, source: "PHB" }, { name: "心灵感应", name_en: "Telepathy", level: 8, source: "PHB" }, { name: "传送术", name_en: "Teleport", level: 7, source: "PHB", damage: { "7": "d100" } }, { name: "传送法阵", name_en: "Teleportation Circle", level: 5, source: "PHB" }, { name: "谭森浮碟术", name_en: "Floating Disk", level: 1, source: "PHB" }, { name: "奇术", name_en: "Thaumaturgy", level: 0, source: "PHB" }, { name: "荆棘之鞭", name_en: "Thorn Whip", level: 0, source: "PHB", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["穿刺"] }, { name: "雷霆斩", name_en: "Thunderous Smite", level: 1, source: "PHB", damage: { "1": "2d6" }, damageInflict: ["雷鸣"] }, { name: "时间停止", name_en: "Time Stop", level: 9, source: "PHB" }, { name: "巧舌术", name_en: "Tongues", level: 3, source: "PHB" }, { name: "植物遁走术", name_en: "Transport via Plants", level: 6, source: "PHB" }, { name: "树跃术", name_en: "Tree Stride", level: 5, source: "PHB" }, { name: "完全变形术", name_en: "True Polymorph", level: 9, source: "PHB" }, { name: "完全复活术", name_en: "True Resurrection", level: 9, source: "PHB" }, { name: "真知术", name_en: "True Seeing", level: 6, source: "PHB" }, { name: "克敌机先", name_en: "True Strike", level: 0, source: "PHB" }, { name: "海啸术", name_en: "Tsunami", level: 8, source: "PHB" }, { name: "隐形仆役", name_en: "Unseen Servant", level: 1, source: "PHB" }, { name: "力墙术", name_en: "Wall of Force", level: 5, source: "PHB" }, { name: "石墙术", name_en: "Wall of Stone", level: 5, source: "PHB" }, { name: "守护联结", name_en: "Warding Bond", level: 2, source: "PHB" }, { name: "水下呼吸", name_en: "Water Breathing", level: 3, source: "PHB" }, { name: "水面行走", name_en: "Water Walk", level: 3, source: "PHB" }, { name: "蛛网术", name_en: "Web", level: 2, source: "PHB", damage: { "2": "2d4" }, damageInflict: ["火焰"] }, { name: "怪影杀手", name_en: "Weird", level: 9, source: "PHB" }, { name: "御风而行", name_en: "Wind Walk", level: 6, source: "PHB" }, { name: "祈愿术", name_en: "Wish", level: 9, source: "PHB" }, { name: "巫术箭", name_en: "Witch Bolt", level: 1, source: "PHB" }, { name: "回返真言", name_en: "Word of Recall", level: 6, source: "PHB" }, { name: "激愤斩", name_en: "Wrathful Smite", level: 1, source: "PHB", damage: { "1": "1d6" }, damageInflict: ["心灵"] }, { name: "诚实之域", name_en: "Zone of Truth", level: 2, source: "PHB" }, { name: "灾厄之刃", name_en: "Blade of Disaster", level: 9, source: "TCE" }, { name: "轰雷剑", name_en: "Booming Blade", level: 0, source: "TCE", damageInflict: ["雷鸣"] }, { name: "蓝纱一梦", name_en: "Dream of the Blue Veil", level: 7, source: "TCE" }, { name: "翠炎剑", name_en: "Green-Flame Blade", level: 0, source: "TCE", damageInflict: ["火焰"] }, { name: "智能壁垒", name_en: "Intellect Fortress", level: 3, source: "TCE" }, { name: "闪电牵引", name_en: "Lightning Lure", level: 0, source: "TCE", damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" }, damageInflict: ["闪电"] }, { name: "心灵之楔", name_en: "Mind Sliver", level: 0, source: "TCE", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["心灵"] }, { name: "魂灵环绕", name_en: "Spirit Shroud", level: 3, source: "TCE", damage: { "3": "1d8" }, damageInflict: ["光耀", "黯蚀", "冷冻"] }, { name: "异怪召唤术", name_en: "Summon Aberration", level: 4, source: "TCE" }, { name: "野兽召唤术", name_en: "Summon Beast", level: 2, source: "TCE" }, { name: "天界召唤术", name_en: "Summon Celestial", level: 5, source: "TCE" }, { name: "构装体召唤术", name_en: "Summon Construct", level: 4, source: "TCE" }, { name: "元素召唤术", name_en: "Summon Elemental", level: 4, source: "TCE" }, { name: "精类召唤术", name_en: "Summon Fey", level: 3, source: "TCE" }, { name: "邪魔召唤术", name_en: "Summon Fiend", level: 6, source: "TCE" }, { name: "暗影衍体召唤术", name_en: "Summon Shadowspawn", level: 3, source: "TCE" }, { name: "亡灵召唤术", name_en: "Summon Undead", level: 3, source: "TCE" }, { name: "剑刃爆发", name_en: "Sword Burst", level: 0, source: "TCE", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["力场"] }, { name: "塔莎酸蚀酿", name_en: "Tasha's Caustic Brew", level: 1, source: "TCE", damage: { "1": "2d4" }, damageInflict: ["强酸"] }, { name: "塔莎心灵鞭", name_en: "Tasha's Mind Whip", level: 2, source: "TCE" }, { name: "塔莎超凡形态", name_en: "Tasha's Otherworldly Guise", level: 6, source: "TCE" }, { name: "秘法武器", name_en: "Arcane Weapon", level: 1, source: "UAArtificerRevisited", damage: { "1": "1d6" },  return: {"1":"1", "5":"2","11":"3","17":"4" }, damageInflict: ["强酸", "冷冻", "火焰", "闪电", "毒素", "雷鸣"] }, { name: "亚比达奇凋死术", name_en: "Abi-Dalzim's Horrid Wilting", level: 8, source: "XGE" }, { name: "吸收元素", name_en: "Absorb Elements", level: 1, source: "XGE", damage: { "1": "1d6" } }, { name: "阿加纳萨喷火术", name_en: "Aganazzar's Scorcher", level: 2, source: "XGE" }, { name: "野兽联结", name_en: "Beast Bond", level: 1, source: "XGE" }, { name: "大地之骨", name_en: "Bones of the Earth", level: 6, source: "XGE", damage: { "6": "6d6" }, damageInflict: ["钝击"] }, { name: "弹射术", name_en: "Catapult", level: 1, source: "XGE" }, { name: "休憩术", name_en: "Catnap", level: 3, source: "XGE" }, { name: "造成恐惧", name_en: "Cause Fear", level: 1, source: "XGE" }, { name: "典礼术", name_en: "Ceremony", level: 1, source: "XGE" }, { name: "混乱箭", name_en: "Chaos Bolt", level: 1, source: "XGE" }, { name: "魅惑怪物", name_en: "Charm Monster", level: 4, source: "XGE" }, { name: "控火", name_en: "Control Flames", level: 0, source: "XGE" }, { name: "操控风相", name_en: "Control Winds", level: 5, source: "XGE" }, { name: "创造篝火", name_en: "Create Bonfire", level: 0, source: "XGE", damage: { "1": "1d8", "5": "2d8", "11": "3d8", "17": "4d8" }, damageInflict: ["火焰"] }, { name: "创造荷蒙库鲁斯", name_en: "Create Homunculus", level: 6, source: "XGE", damage: { "6": "2d4" } }, { name: "群星冠冕", name_en: "Crown of Stars", level: 7, source: "XGE", damage: { "7": "4d12" }, damageInflict: ["光耀"] }, { name: "骷髅之舞", name_en: "Danse Macabre", level: 5, source: "XGE" }, { name: "拂晓之光", name_en: "Dawn", level: 5, source: "XGE", damage: { "5": "4d10" }, damageInflict: ["光耀"] }, { name: "龙息术", name_en: "Dragon's Breath", level: 2, source: "XGE", damage: { "2": "3d6" }, damageInflict: ["强酸", "冷冻", "火焰", "闪电", "毒素"] }, { name: "德鲁伊林地", name_en: "Druid Grove", level: 6, source: "XGE" }, { name: "尘卷风", name_en: "Dust Devil", level: 2, source: "XGE", damage: { "2": "1d8" }, damageInflict: ["钝击"] }, { name: "大地震颤", name_en: "Earth Tremor", level: 1, source: "XGE" }, { name: "地缚术", name_en: "Earthbind", level: 2, source: "XGE" }, { name: "元素灾祸", name_en: "Elemental Bane", level: 4, source: "XGE", damage: { "4": "2d6" }, damageInflict: ["强酸", "冷冻", "火焰", "闪电", "雷鸣"] }, { name: "敌群环绕", name_en: "Enemies Abound", level: 3, source: "XGE" }, { name: "汲能术", name_en: "Enervation", level: 5, source: "XGE" }, { name: "土石爆发", name_en: "Erupting Earth", level: 3, source: "XGE", damage: { "3": "3d12" }, damageInflict: ["钝击"] }, { name: "渺远步", name_en: "Far Step", level: 5, source: "XGE" }, { name: "寻获高等坐骑", name_en: "Find Greater Steed", level: 4, source: "XGE" }, { name: "火焰箭矢", name_en: "Flame Arrows", level: 3, source: "XGE", damage: { "3": "1d6" }, damageInflict: ["火焰"] }, { name: "霜噬", name_en: "Frostbite", level: 0, source: "XGE", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["冷冻"] }, { name: "自然守卫", name_en: "Guardian of Nature", level: 4, source: "XGE" }, { name: "舞风", name_en: "Gust", level: 0, source: "XGE" }, { name: "治愈精魂", name_en: "Healing Spirit", level: 2, source: "XGE", damage: { "2": "1d6" } }, { name: "神圣武器", name_en: "Holy Weapon", level: 5, source: "XGE" }, { name: "冰刃", name_en: "Ice Knife", level: 1, source: "XGE" }, { name: "幻象巨龙", name_en: "Illusory Dragon", level: 8, source: "XGE", damage: { "8": "7d6" }, damageInflict: ["强酸", "冷冻", "火焰", "闪电", "黯蚀", "毒素"] }, { name: "燔焚术", name_en: "Immolation", level: 5, source: "XGE" }, { name: "炼狱呼唤", name_en: "Infernal Calling", level: 5, source: "XGE", damage: { "5": "3d6" } }, { name: "虫群孳生", name_en: "Infestation", level: 0, source: "XGE", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["毒素"] }, { name: "炽焰赋权", name_en: "Investiture of Flame", level: 6, source: "XGE" }, { name: "冷冻赋权", name_en: "Investiture of Ice", level: 6, source: "XGE" }, { name: "坚岩赋权", name_en: "Investiture of Stone", level: 6, source: "XGE" }, { name: "清风赋权", name_en: "Investiture of Wind", level: 6, source: "XGE" }, { name: "无敌术", name_en: "Invulnerability", level: 9, source: "XGE" }, { name: "生命转换", name_en: "Life Transference", level: 3, source: "XGE", damage: { "3": "4d8" }, damageInflict: ["黯蚀"] }, { name: "发狂黑暗", name_en: "Maddening Darkness", level: 8, source: "XGE", damage: { "8": "8d8" }, damageInflict: ["心灵"] }, { name: "大漩涡", name_en: "Maelstrom", level: 5, source: "XGE" }, { name: "魔石术", name_en: "Magic Stone", level: 0, source: "XGE", damage: { "1": "1d6" }}, { name: "群体变形术", name_en: "Mass Polymorph", level: 9, source: "XGE" }, { name: "马克西米利安大地之攫", name_en: "Maximilian's Earthen Grasp", level: 2, source: "XGE" }, { name: "马友夫微陨星", name_en: "Melf's Minute Meteors", level: 3, source: "XGE", damage: { "3": "2d6" }, damageInflict: ["火焰"] }, { name: "心灵监狱", name_en: "Mental Prison", level: 6, source: "XGE" }, { name: "宏伟堡垒", name_en: "Mighty Fortress", level: 8, source: "XGE" }, { name: "心灵探针", name_en: "Mind Spike", level: 2, source: "XGE", damage: { "2": "3d8" }, damageInflict: ["心灵"] }, { name: "铸土", name_en: "Mold Earth", level: 0, source: "XGE" }, { name: "负能量洪流", name_en: "Negative Energy Flood", level: 5, source: "XGE" }, { name: "律令痛苦", name_en: "Power Word Pain", level: 7, source: "XGE" }, { name: "原始野性", name_en: "Primal Savagery", level: 0, source: "XGE", damage: { "1": "1d10", "5": "2d10", "11": "3d10", "17": "4d10" }, damageInflict: ["强酸"] }, { name: "原初守护", name_en: "Primordial Ward", level: 6, source: "XGE" }, { name: "精神尖啸", name_en: "Psychic Scream", level: 9, source: "XGE", damage: { "9": "14d6" }, damageInflict: ["心灵"] }, { name: "烟火表演", name_en: "Pyrotechnics", level: 2, source: "XGE" }, { name: "散射术", name_en: "Scatter", level: 6, source: "XGE" }, { name: "幽影刃", name_en: "Shadow Blade", level: 2, source: "XGE", damage: { "2": "2d8" }, damageInflict: ["心灵"] }, { name: "骚乱之影", name_en: "Shadow of Moil", level: 4, source: "XGE", damage: { "4": "2d8" }, damageInflict: ["黯蚀"] }, { name: "塑水", name_en: "Shape Water", level: 0, source: "XGE" }, { name: "致病光辉", name_en: "Sickening Radiance", level: 4, source: "XGE", damage: { "4": "4d10" }, damageInflict: ["光耀"] }, { name: "技能赋权", name_en: "Skill Empowerment", level: 5, source: "XGE" }, { name: "天空书写", name_en: "Skywrite", level: 2, source: "XGE" }, { name: "圈套术", name_en: "Snare", level: 1, source: "XGE" }, { name: "史尼洛雪球群", name_en: "Snilloc's Snowball Swarm", level: 2, source: "XGE", damage: { "2": "3d6" }, damageInflict: ["冷冻"] }, { name: "灵魂囚笼", name_en: "Soul Cage", level: 6, source: "XGE" }, { name: "钢风打击", name_en: "Steel Wind Strike", level: 5, source: "XGE", damage: { "5": "6d10" }, damageInflict: ["力场"] }, { name: "暴风法球", name_en: "Storm Sphere", level: 4, source: "XGE" }, { name: "召唤高等恶魔", name_en: "Summon Greater Demon", level: 4, source: "XGE", damage: { "4": "1d6" } }, { name: "召唤次级恶魔", name_en: "Summon Lesser Demons", level: 3, source: "XGE" }, { name: "突触噪乱", name_en: "Synaptic Static", level: 5, source: "XGE" }, { name: "诸神殿堂", name_en: "Temple of the Gods", level: 7, source: "XGE" }, { name: "谭森魔能转换术", name_en: "Tenser's Transformation", level: 6, source: "XGE" }, { name: "雷霆步", name_en: "Thunder Step", level: 3, source: "XGE", damage: { "3": "3d10" }, damageInflict: ["雷鸣"] }, { name: "鸣雷破", name_en: "Thunderclap", level: 0, source: "XGE", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["雷鸣"] }, { name: "潮涌浪", name_en: "Tidal Wave", level: 3, source: "XGE" }, { name: "微型仆役", name_en: "Tiny Servant", level: 3, source: "XGE" }, { name: "亡者丧钟", name_en: "Toll the Dead", level: 0, source: "XGE", damageInflict: ["黯蚀"] }, { name: "转化岩石", name_en: "Transmute Rock", level: 5, source: "XGE", damage: { "5": "4d8" }, damageInflict: ["钝击"] }, { name: "硫酸法球", name_en: "Vitriolic Sphere", level: 4, source: "XGE" }, { name: "光墙术", name_en: "Wall of Light", level: 5, source: "XGE" }, { name: "沙墙术", name_en: "Wall of Sand", level: 3, source: "XGE" }, { name: "水墙术", name_en: "Wall of Water", level: 3, source: "XGE" }, { name: "守护之风", name_en: "Warding Wind", level: 2, source: "XGE" }, { name: "水体法球", name_en: "Watery Sphere", level: 4, source: "XGE" }, { name: "龙卷旋风", name_en: "Whirlwind", level: 7, source: "XGE" }, { name: "光耀祷词", name_en: "Word of Radiance", level: 0, source: "XGE", damage: { "1": "1d6", "5": "2d6", "11": "3d6", "17": "4d6" }, damageInflict: ["光耀"] }, { name: "自然之怒", name_en: "Wrath of Nature", level: 5, source: "XGE" }, { name: "西风打击", name_en: "Zephyr Strike", level: 1, source: "XGE", damage: { "1": "1d8" }, damageInflict: ["力场"] }] };

// src/index.ts
var spellMap = new Map(spells_data_default.spell.map((spell) => [spell.name, spell]));
var helpDesc = `DND5e施法辅助
.cs 戏法名 <等级> // 自动按目标等级释放戏法
.cs 法术名 <环数> // 自动按目标环数施法
`;
function main() {
  let ext = seal.ext.find("dnd5e-spell-helper");
  if (!ext) {
    ext = seal.ext.new("dnd5e-spell-helper", "JustAnotherID", "1.1.1");
    seal.ext.register(ext);
  }
  const cmdCastSpell = seal.ext.newCmdItemInfo();
  cmdCastSpell.name = "cs";
  cmdCastSpell.help = helpDesc;
  cmdCastSpell.solve = (ctx, msg, cmdArgs) => {
    const name = cmdArgs.getArgN(1);
    if (!name) {
      seal.replyToSender(ctx, msg, "请指定戏法/法术名称");
      return seal.ext.newCmdExecuteResult(true);
    } else if (name === "help" || name === "帮助") {
      let ret = seal.ext.newCmdExecuteResult(true);
      ret.showHelp = true;
      return ret;
    }

    const spellInfo = spellMap.get(name);
    if (!spellInfo) {
      seal.replyToSender(ctx, msg, "没有该戏法/法术的信息");
      return seal.ext.newCmdExecuteResult(true);
    } else if (!spellInfo.damage) {
      seal.replyToSender(ctx, msg, "该戏法/法术没有伤害/掷骰信息");
      return seal.ext.newCmdExecuteResult(true);
    }

    let damageDiceStr;
    let rawLevel;
    let targetLevel;
    if (spellInfo.level === 0) {
      rawLevel = parseInt(cmdArgs.getArgN(2) || "1");
      const levelList = Object.keys(spellInfo.damage).map((l) => parseInt(l)).filter((l) => l <= rawLevel);
      targetLevel = max_default(levelList);
      damageDiceStr = spellInfo.damage[targetLevel];
      if (!damageDiceStr) {
        seal.replyToSender(ctx, msg, `没有等级${rawLevel}下释放${name}的信息`);
        return seal.ext.newCmdExecuteResult(true);
      }
    } else {
      const minLevel = min_default(
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

    // 获取执行次数
    let executeTimes = 1;
    if (spellInfo.return) {
      const returnKeys = Object.keys(spellInfo.return).map(Number).sort((a, b) => a - b);
      let closestKey = null;
      for (let i = returnKeys.length - 1; i >= 0; i--) {
        if (targetLevel >= returnKeys[i]) {
          closestKey = returnKeys[i];
          break;
        }
      }
      if (closestKey !== null) {
        executeTimes = parseInt(spellInfo.return[closestKey]);
      }
    }

    const damageParts = damageDiceStr.split(" + ");
    let finalResults = [];

    for (let i = 0; i < executeTimes; i++) {
      const damageTotals = [];
      const currentDamageResults = [];
      for (const part of damageParts) {
        if (part.includes("d")) {
          let [diceCount, diceSides] = part.split("d").map(Number);
          if (!diceCount) {
            diceCount = 1;
          }
          const damage = Array(diceCount).fill(0).map(() => Math.floor(Math.random() * diceSides) + 1);
          const totalDamage2 = damage.reduce((a, b) => a + b, 0);
          damageTotals.push(totalDamage2);
          currentDamageResults.push(damage);
        } else {
          damageTotals.push(Number(part));
          currentDamageResults.push([Number(part)]);
        }
      }
      const currentTotalDamage = damageTotals.reduce((a, b) => a + b, 0);

      const currentDamageString = damageParts.map((part, index) => {
        const damageResult = currentDamageResults[index];
        return `[${part}=${damageResult.reduce((a, b) => a + b, 0)}]`;
      }).join(" + ");

      if (spellInfo.return) {
        finalResults.push(`第${i + 1}次: ${currentDamageString} = ${currentTotalDamage}`);
      } else {
        finalResults.push(`${currentDamageString} = ${currentTotalDamage}`);
      }
    }

    const finalDamageString = finalResults.join("\n");

    const playerName = ctx.player.name || "玩家";
    let final;
    if (spellInfo.level === 0) {
      if (spellInfo.damageInflict) {
        const levelStr = rawLevel === 1 ? "" : `于等级${rawLevel} `;
        const inflict = spellInfo.damageInflict.length === 1 ? spellInfo.damageInflict[0] + "伤害" : `伤害（${spellInfo.damageInflict.join("、")}）`;
        final = `<${playerName}>${levelStr}释放${spellInfo.name}骰${inflict}，结果为\n${finalDamageString}`;
      } else {
        const levelStr = rawLevel === 1 ? "" : `在等级${rawLevel} `;
        final = `<${playerName}>${levelStr}释放${spellInfo.name}进行掷骰，结果为\n${finalDamageString}`;
      }
    } else {
      if (spellInfo.damageInflict) {
        const inflict = spellInfo.damageInflict.length === 1 ? spellInfo.damageInflict[0] + "伤害" : `伤害（${spellInfo.damageInflict.join("、")}）`;
        final = `<${playerName}>为${targetLevel}环${spellInfo.name}骰${inflict}，结果为\n${finalDamageString}`;
      } else {
        final = `<${playerName}>为${targetLevel}环${spellInfo.name}进行掷骰，结果为\n${finalDamageString}`;
      }
    }

    seal.replyToSender(ctx, msg, final);
    return seal.ext.newCmdExecuteResult(true);
  };
  ext.cmdMap["cs"] = cmdCastSpell;
}
main();
})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
