// ==UserScript==
// @name         DND5e施法辅助
// @author       JustAnotherID
// @version      1.1.2
// @description  使用 .cs 戏法名 <等级> 或 .cs 法术名 <环数> 自动施法。\n\n灵感和部分代码来自小嘟嘟噜和冷筱华的「DnDSRD法术脚本」，法术数据来自 5e-bits/5e-database 和 fvtt-cn/5etools，没有他们的工作就不会有这个插件的诞生，非常感谢
// @timestamp    2024-07-23 11:45:14
// @license      AGPL-3.0
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/dnd5e-spell-helper
// @updateUrl    https://mirror.ghproxy.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/dnd5e-spell-helper/dist/DND5e%E6%96%BD%E6%B3%95%E8%BE%85%E5%8A%A9.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/dnd5e-spell-helper/dist/DND5e%E6%96%BD%E6%B3%95%E8%BE%85%E5%8A%A9.js
// ==/UserScript==

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
  
  
   var spells_data_default = { spell: [ { name_en: "Cure Wounds", level: 1, damage: { "1":"1d8", "2":"2d8", "3":"3d8", "4":"4d8", "5":"5d8", "6":"6d8", "7":"7d8", "8":"8d8", "9":"9d8" }, name: "疗伤术", source: "PHB", damageInflict: ["治疗"] }, { name_en: "Healing Word", level: 1, damage: { "1":"1d4", "2":"2d4", "3":"3d4", "4":"4d4", "5":"5d4", "6":"6d4", "7":"7d4", "8":"8d4", "9":"9d4" }, name: "治愈真言", source: "PHB", damageInflict: ["治疗"] }, { name_en: "Sleep", level: 1, damage: { "1":"5d8", "2":"7d8", "3":"9d8", "4":"11d8", "5":"13d8", "6":"15d8", "7":"17d8", "8":"19d8", "9":"21d8" }, name: "睡眠术", source: "PHB" }, { name_en: "Thunderwave", level: 1, damage: { "1":"2d8", "2":"3d8", "3":"4d8", "4":"5d8", "5":"6d8", "6":"7d8", "7":"8d8", "8":"9d8", "9":"10d8" }, name: "雷鸣波", source: "PHB", damageInflict: ["雷鸣"] }, { name_en: "Cloud of Daggers", level: 2, damage: { "2":"4d4", "3":"6d4", "4":"8d4", "5":"10d4", "6":"12d4", "7":"14d4", "8":"16d4", "9":"18d4" }, name: "匕首之云", source: "PHB", damageInflict: ["挥砍"] }, { name_en: "Heat Metal", level: 2, damage: { "2":"2d8", "3":"3d8", "4":"4d8", "5":"5d8", "6":"6d8", "7":"7d8", "8":"8d8", "9":"9d8" }, name: "灼热金属", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Mass Cure Wounds", level: 5, damage: { "5":"3d8", "6":"4d8", "7":"5d8", "8":"6d8", "9":"7d8" }, name: "群体疗伤术", source: "PHB", damageInflict: ["治疗"] }, { name_en: "Sacred Flame", level: 0, damage: { "0": "1d8", "5":"2d8", "11": "3d8", "17": "4d8" }, name: "圣火术", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Guiding Bolt", level: 1, damage: { "1":"4d6", "2":"5d6", "3":"6d6", "4":"7d6", "5":"8d6", "6":"9d6", "7":"10d6", "8":"11d6", "9":"12d6" }, name: "曳光弹", source: "PHB", damageInflict: ["光耀"] }, { name_en: "Inflict Wounds", level: 1, damage: { "1":"3d10", "2":"4d10", "3":"5d10", "4":"6d10", "5":"7d10", "6":"8d10", "7":"9d10", "8":"10d10", "9":"11d10" }, name: "致伤术", source: "PHB", damageInflict: ["黯蚀"] }, { name_en: "Spiritual Weapon", level: 2, damage: { "2":"1d8", "4":"2d8", "6":"3d8", "8":"4d8" }, name: "灵体武器", source: "PHB", damageInflict: ["力场"] }, { name_en: "Mass Healing Word", level: 3, damage: { "3":"1d4", "4":"2d4", "5":"3d4", "6":"4d4", "7":"5d4", "8":"6d4", "9":"7d4" }, name: "群体治愈真言", source: "PHB", damageInflict: ["治疗"] }, { name_en: "Flame Strike", level: 5, damage: { "5":"4d6 + 4d6", "6":"5d6 + 4d6", "7":"6d6 + 4d6", "8":"7d6 + 4d6", "9":"8d6 + 4d6" }, name: "焰击术", source: "PHB", damageInflict: ["火焰", "光耀"] }, { name_en: "Insect Plague", level: 5, damage: { "5":"4d10", "6":"5d10", "7":"6d10", "8":"7d10", "9":"8d10" }, name: "疫病虫群", source: "PHB", damageInflict: ["穿刺"] }, { name_en: "Heal", level: 6, damage: { "6":"70", "7":"80", "8":"90", "9":"100" }, name: "医疗术", source: "PHB", damageInflict: ["治疗"] }, { name_en: "Fire Storm", level: 7, damage: { "7":"7d10" }, name: "火焰风暴", source: "PHB", damageInflict: ["火焰"] }, { name_en: "Regenerate", level: 7, damage: { "7":"4d8 + 15" }, name: "再生术", source: "PHB", damageInflict: ["治疗"] }, { name_en: "Poison Spray", level: 0, damage: { "0": "1d12", "5":"2d12", "11": "3d12", "17": "4d12" }, name: "毒气喷溅", source: "PHB", damageInflict: ["毒素"] }, { name_en: "Produce Flame", level: 0, damage: { "0": "1d8", "5":"2d8", "11": "3d8", "17": "4d8" }, name: "燃火术", source: "PHB", damageInflict: ["火焰"] }, {name_en: "Guiding Bolt", level: 1, damage: {"1":"4d6", "2":"5d6", "3":"6d6", "4":"7d6", "5":"8d6", "6":"9d6", "7":"10d6", "8":"11d6", "9":"12d6"}, name: "光导箭", source: "PHB", "damageInflict": ["光耀"]}, {name_en: "Harm", level: 6, damage: {"6":"14d6"}, name: "重伤术", source: "PHB", "damageInflict": ["黯蚀"]}, {name_en: "Sunbeam", level: 6, damage: {"6":"6d8"}, name: "阳炎射线", source: "PHB", "damageInflict": ["光耀"]}, {name_en: "Sunburst", level: 8, damage: {"8":"12d6"}, name: "阳炎爆", source: "PHB", "damageInflict": ["光耀"]}, {name_en: "Thunderclap", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "鸣雷破", source: "PHB", "damageInflict": ["雷鸣"]}, {name_en: "Color Spray", level: 1, damage: {"1":"6d10", "2":"8d10", "3":"10d10", "4":"12d10", "5":"14d10", "6":"16d10", "7":"18d10", "8":"20d10", "9":"22d10"}, name: "七彩喷射", source: "PHB", "damageInflict": ["幻术"]}, {name_en: "Earth Tremor", level: 1, damage: {"1":"1d6", "2":"2d6", "3":"3d6", "4":"4d6", "5":"5d6", "6":"6d6", "7":"7d6", "8":"8d6", "9":"9d6"}, name: "地颤", source: "XGE", "damageInflict": ["钝击"]}, {name_en: "Toll the Dead", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "亡者丧钟", source: "XGE", "damageInflict": ["黯蚀"]}, {name_en: "Word of Radiance", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "光耀祷词", source: "XGE", "damageInflict": ["光耀"]}, {name_en: "Shatter", level: 2, damage: {"2":"3d8", "3":"4d8", "4":"5d8", "5":"6d8", "6":"7d8", "7":"8d8", "8":"9d8", "9":"10d8"}, name: "粉碎音波", source: "PHB", "damageInflict": ["雷鸣"]}, {name_en: "Spray of Cards", level: 2, damage: {"2":"2d10", "3":"3d10", "4":"4d10", "5":"5d10", "6":"6d10", "7":"7d10", "8":"8d10", "9":"9d10"}, name: "卡牌喷射", source: "BMT", "damageInflict": ["力场"]}, {name_en: "Antagonize", level: 3, damage: {"3":"4d4", "4":"5d4", "5":"6d4", "6":"7d4", "7":"8d4", "8":"9d4", "9":"10d4"}, name: "敌意术", source: "BMT", "damageInflict": ["心灵"]}, {name_en: "Raulothim's Psychic Lance", level: 4, damage: {"4":"7d6", "5":"8d6", "6":"9d6", "7":"10d6", "8":"11d6", "9":"12d6"}, name: "劳洛希姆心灵长枪", source: "FTD", "damageInflict": ["心灵"]}, {name_en: "Phantasmal Killer", level: 4, damage: {"4":"4d10", "5":"5d10", "6":"6d10", "7":"7d10", "8":"8d10", "9":"9d10"}, name: "魅影杀手", source: "PHB", "damageInflict": ["心灵"]}, {name_en: "Mordenkainen's Sword", level: 7, damage: {"7":"3d10"}, name: "魔邓肯之剑", source: "PHB", "damageInflict": ["力场"]}, {name_en: "Feeblemind", level: 8, damage: {"8":"4d6"}, name: "弱智术", source: "PHB", "damageInflict": ["心灵"]}, {name_en: "Thorn Whip", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "荆棘之鞭", source: "PHB", "damageInflict": ["穿刺"]}, {name_en: "Frostbite", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "霜噬", source: "XGE", "damageInflict": ["冷冻"]}, {name_en: "Infestation", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "虫群孳生", source: "XGE", "damageInflict": ["毒素"]}, {name_en: "Primal Savagery", level: 0, damage: {"1":"1d10", "5":"2d10", "11": "3d10", "17": "4d10"}, name: "原初蛮击", source: "XGE", "damageInflict": ["强酸"]}, {name_en: "Create Bonfire", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "创造篝火", source: "XGE", "damageInflict": ["火焰"]}, {name_en: "Absorb Elements", level: 1, damage: {"1":"1d6", "2":"2d6", "3":"3d6", "4":"4d6", "5":"5d6", "6":"6d6", "7":"7d6", "8":"8d6", "9":"9d6"}, name: "吸收元素", source: "XGE", "damageInflict": ["强酸", "冷冻", "火焰", "闪电", "雷鸣"]}, {name_en: "Ice Knife", level: 1, damage: {"1":"1d10 + 2d6", "2":"1d10 + 3d6", "3":"1d10 + 4d6", "4":"1d10 + 5d6", "5":"1d10 + 6d6", "6":"1d10 + 7d6", "7":"1d10 + 8d6", "8":"1d10 + 9d6", "9":"1d10 + 10d6"}, name: "冰刃", source: "XGE", "damageInflict": ["穿刺", "冷冻"]}, {name_en: "Flame Blade", level: 2, damage: {"2":"3d6", "4":"4d6", "6":"5d6", "8":"6d6"}, name: "火焰刀", source: "PHB", "damageInflict": ["火焰"]}, {name_en: "Flaming Sphere", level: 2, damage: {"2":"2d6", "3":"3d6", "4":"4d6", "5":"5d6", "6":"6d6", "7":"7d6", "8":"8d6", "9":"9d6"}, name: "炽焰法球", source: "PHB", "damageInflict": ["火焰"]}, {name_en: "Moonbeam", level: 2, damage: {"2":"2d10", "3":"3d10", "4":"4d10", "5":"5d10", "6":"6d10", "7":"7d10", "8":"8d10", "9":"9d10"}, name: "月华之光", source: "PHB", "damageInflict": ["光耀"]}, {name_en: "Dust Devil", level: 2, damage: {"2":"1d8", "3":"2d8", "4":"3d8", "5":"4d8", "6":"5d8", "7":"6d8", "8":"7d8", "9":"8d8"}, name: "龙卷尘暴", source: "XGE", "damageInflict": ["钝击"]}, {name_en: "Healing Spirit", level: 2, damage: {"2":"1d6", "3":"2d6", "4":"3d6", "5":"4d6", "6":"5d6", "7":"6d6", "8":"7d6", "9":"8d6"}, name: "治愈之魂", source: "PHB", "damageInflict": ["治疗"]}, {name_en: "Aura of Vitality", level: 3, damage: {"3":"2d6"}, name: "活力灵光", source: "PHB", "damageInflict": ["治疗"]}, {name_en: "Call Lightning", level: 3, damage: {"3":"3d10", "4":"4d10", "5":"5d10", "6":"6d10", "7":"7d10", "8":"8d10", "9":"9d10"}, name: "召雷术", source: "PHB", "damageInflict": ["闪电"]}, {name_en: "Erupting Earth", level: 3, damage: {"3":"3d12", "4":"4d12", "5":"5d12", "6":"6d12", "7":"7d12", "8":"8d12", "9":"9d12"}, name: "土石喷发", source: "XGE", "damageInflict": ["钝击"]}, {name_en: "Tidal Wave", level: 3, damage: {"3":"4d8"}, name: "潮涌", source: "XGE", "damageInflict": ["钝击"]}, {name_en: "Fire Shield", level: 4, damage: {"4":"2d8"}, name: "火焰护盾", source: "PHB", "damageInflict": ["火焰", "冷冻"]}, {name_en: "Ice Storm", level: 4, damage: {"4":"2d8 + 4d6", "5":"3d8 + 4d6", "6":"4d8 + 4d6", "7":"5d8 + 4d6", "8":"6d8 + 4d6", "9":"7d8 + 4d6"}, name: "冰风暴", source: "PHB", "damageInflict": ["钝击", "冷冻"]}, {name_en: "Wall of Fire", level: 4, damage: {"4":"5d8", "5":"6d8", "6":"7d8", "7":"8d8", "8":"9d8", "9":"10d8"}, name: "火墙术", source: "PHB", "damageInflict": ["火焰"]}, {name_en: "Cone of Cold", level: 5, damage: {"5":"8d8", "6":"9d8", "7":"10d8", "8":"11d8", "9":"12d8"}, name: "寒冰锥", source: "PHB", "damageInflict": ["冷冻"]}, {name_en: "Wall of Thorns", level: 6, damage: {"6":"7d8", "7":"8d8", "8":"9d8", "9":"10d8"}, name: "棘墙术", source: "PHB", "damageInflict": ["穿刺", "挥砍"]}, {name_en: "Bones of the Earth", level: 6, damage: {"6":"6d6"}, name: "地之骨", source: "XGE", "damageInflict": ["钝击"]}, {name_en: "Investiture of Flame", level: 6, damage: {"6":"1d10 + 4d8"}, name: "炽焰赋权", source: "XGE", "damageInflict": ["火焰"]}, {name_en: "Investiture of Ice", level: 6, damage: {"6":"4d6"}, name: "寒冰赋权", source: "XGE", "damageInflict": ["冷冻"]}, {name_en: "Investiture of Wind", level: 6, damage: {"6":"2d10"}, name: "清风赋权", source: "XGE", "damageInflict": ["钝击"]}, {name_en: "Incendiary Cloud", level: 8, damage: {"8":"10d8"}, name: "焚云术", source: "PHB", "damageInflict": ["火焰"]}, {name_en: "Tsunami", level: 8, damage: {"8":"6d10 + 5d10"}, name: "海啸术", source: "PHB", "damageInflict": ["钝击"]}, {name_en: "Acid Splash", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "酸液飞溅", source: "PHB", "damageInflict": ["强酸"]}, {name_en: "Chill Touch", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "冻寒之触", source: "PHB", "damageInflict": ["黯蚀"]}, {name_en: "Fire Bolt", level: 0, damage: {"1":"1d10", "5":"2d10", "11": "3d10", "17": "4d10"}, name: "火焰箭", source: "PHB", "damageInflict": ["火焰"]}, {name_en: "Ray of Frost", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "冷冻射线", source: "PHB", "damageInflict": ["冷冻"]}, {name_en: "Shocking Grasp", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "电爪", source: "PHB", "damageInflict": ["闪电"]}, {name_en: "Booming Blade", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "轰雷剑", source: "TCE", "damageInflict": ["雷鸣"]}, {name_en: "Green-Flame Blade", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "翠炎剑", source: "TCE", "damageInflict": ["火焰"]}, {name_en: "Lightning Lure", level: 0, damage: {"1":"1d8", "5":"2d8", "11": "3d8", "17": "4d8"}, name: "闪电牵引", source: "TCE", "damageInflict": ["闪电"]}, {name_en: "Mind Sliver", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "心灵之楔", source: "TCE", "damageInflict": ["心灵"]}, {name_en: "Sword Burst", level: 0, damage: {"1":"1d6", "5":"2d6", "11": "3d6", "17": "4d6"}, name: "剑刃爆发", source: "PHB", "damageInflict": ["力场"]}, {name_en: "Burning Hands", level: 1, damage: {"1":"3d6", "2":"4d6", "3":"5d6", "4":"6d6", "5":"7d6", "6":"8d6", "7":"9d6", "8":"10d6", "9":"11d6"}, name: "燃烧之手", source: "PHB", "damageInflict": ["火焰"]}, {name_en: "Chromatic Orb", level: 1, damage: {"1":"3d8", "2":"4d8", "3":"5d8", "4":"6d8", "5":"7d8", "6":"8d8", "7":"9d8", "8":"10d8", "9":"11d8"}, name: "繁彩球", source: "PHB", "damageInflict": ["强酸", "冷冻", "火焰", "闪电", "毒素", "雷鸣"]}, {name_en: "False Life", level: 1, damage: {"1":"1d4 + 4", "2":"1d4 + 9", "3":"1d4 + 14", "4":"1d4 + 19", "5":"1d4 + 24", "6":"1d4 + 29", "7":"1d4 + 34", "8":"1d4 + 39", "9":"1d4 + 44"}, name: "虚假生命", source: "PHB", "damageInflict": ["治疗"]}, {name_en: "Frost Fingers", level: 1, damage: {"1":"2d8", "2":"3d8", "3":"4d8", "4":"5d8", "5":"6d8", "6":"7d8", "7":"8d8", "8":"9d8", "9":"10d8"}, name: "冷冻之指", source: "冰霜少女的雾凇", "damageInflict": ["冷冻"]}, {name_en: "Magic Missile", level: 1, damage: {"1":"3d4 + 3"}, name: "魔法飞弹", source: "PHB", "damageInflict": ["力场"]}, { name_en: "Ray of Sickness", level: 1, damage: { "1":"2d8", "2":"3d8", "3":"4d8", "4":"5d8", "5":"6d8", "6":"7d8", "7":"8d8", "8":"9d8", "9":"10d8" }, name: "致病射线", source: "PHB", damageInflict: ["毒素"] }, { name_en: "Witch Bolt", level: 1, damage: { "1":"1d12", "2":"2d12", "3":"3d12", "4":"4d12", "5":"5d12", "6":"6d12", "7":"7d12", "8":"8d12", "9":"9d12" }, name: "巫术箭", source: "PHB", damageInflict: ["闪电"] }, {name_en: "Catapult", level: 1, damage:{"1":"3d8","2":"4d8","3":"5d8","4":"6d8","5":"7d8","6":"8d8","7":"9d8","8":"10d8","9":"11d8"},name:"弹射术",source:"XGE","damageInflict":["钝击"]}, {name_en: "Tasha's Caustic Brew", level: 1, damage:{"1":"2d4","2":"4d4","3":"6d4","4":"8d4","5":"10d4","6":"12d4","7":"14d4","8":"16d4","9":"18d4"},name:"塔莎酸蚀酿",source:"PHB","damageInflict":["强酸"]}, {name_en: "Jim's Magic Missile", level: 1, damage:{"1":"2d4"},name:"吉姆的魔法飞弹",source:"AI","damageInflict":["力场"]}, {name_en: "Melf's Acid Arrow", level: 2, damage:{"2":"4d4 + 2d4","3":"5d4 + 3d4","4":"6d4 + 4d4","5":"7d4 + 5d4","6":"8d4 + 6d4","7":"9d4 + 7d4","8":"10d4 + 8d4","9":"11d4 + 9d4"},name:"马友夫强酸箭",source:"PHB","damageInflict":["强酸"]}, {name_en: "Scorching Ray", level: 2, damage:{"2":"2d6","3":"2d6","4":"2d6","5":"2d6","6":"2d6","7":"2d6","8":"2d6","9":"2d6"},name:"灼热射线",source:"PHB","damageInflict":["火焰"]}, {name_en: "Dragon's Breath", level: 2, damage:{"2":"3d6","3":"4d6","4":"5d6","5":"6d6","6":"7d6","7":"8d6","8":"9d6","9":"10d6"},name:"龙息术",source:"XGE","damageInflict":["强酸","冷冻","火焰","闪电","毒素"]}, {name_en: "Maximilian's Earthen Grasp", level: 2, damage:{"2":"2d6","3":"2d6","4":"2d6","5":"2d6","6":"2d6","7":"2d6","8":"2d6","9":"2d6"},name:"麦克斯米利安的地之攫",source:"XGE","damageInflict":["钝击"]}, {name_en: "Mind Spike", level: 2, damage:{"2":"3d8","3":"4d8","4":"5d8","5":"6d8","6":"7d8","7":"8d8","8":"9d8","9":"10d8"},name:"心灵尖刺",source:"XGE","damageInflict":["心灵"]}, {name_en: "Shadow Blade", level: 2, damage:{"2":"2d8","3":"3d8","4":"3d8","5":"4d8","6":"4d8","7":"5d8","8":"5d8","9":"5d8"},name:"幽影刃",source:"XGE","damageInflict":["心灵"]},{name_en: "Snilloc's Snowball Swarm", level: 2, damage:{"2":"3d6","3":"4d6","4":"5d6","5":"6d6","6":"7d6","7":"8d6","8":"9d6","9":"10d6"},name:"史尼洛雪球群",source:"XGE","damageInflict":["冷冻"]}, {name_en: "Aganazzar's Scorcher", level: 2, damage:{"2":"3d8","3":"4d8","4":"5d8","5":"6d8","6":"7d8","7":"8d8","8":"9d8","9":"10d8"},name:"阿迦纳萨喷火术",source:"XGE","damageInflict":["火焰"]}, {name_en: "Tasha's Mind Whip", level: 2, damage:{"2":"3d6","3":"3d6","4":"3d6","5":"3d6","6":"3d6","7":"3d6","8":"3d6","9":"3d6"},name:"塔莎心灵鞭",source:"XGE","damageInflict":["心灵"]}, {name_en: "Rime's Binding Ice", level: 2, damage:{"2":"3d8","3":"4d8","4":"5d8","5":"6d8","6":"7d8","7":"8d8","8":"9d8","9":"10d8"},name:"雾凇霜缚",source:"FTD","damageInflict":["冷冻"]}, {name_en: "Kinetic Jaunt", level: 2, damage:{"2":"1d8","3":"1d8","4":"1d8","5":"1d8","6":"1d8","7":"1d8","8":"1d8","9":"1d8"},name:"动力短行",source:"SCC","damageInflict":["力场"]}, {name_en: "Wither and Bloom", level: 2, damage:{"2":"2d6","3":"3d6","4":"4d6","5":"5d6","6":"6d6","7":"7d6","8":"8d6","9":"9d6"},name:"靡叶生华",source:"XGE","damageInflict":["暗蚀"]}, {name_en: "Fireball", level: 3, damage:{"3":"8d6","4":"9d6","5":"10d6","6":"11d6","7":"12d6","8":"13d6","9":"14d6"},name:"火球术",source:"PHB","damageInflict":["火焰"]}, {name_en: "Lightning Bolt", level: 3, damage:{"3":"8d6","4":"9d6","5":"10d6","6":"11d6","7":"12d6","8":"13d6","9":"14d6"},name:"闪电束",source:"PHB","damageInflict":["闪电"]}, {name_en: "Life Transference", level: 3, damage:{"3":"4d8","4":"5d8","5":"6d8","6":"7d8","7":"8d8","8":"9d8","9":"10d8"},name:"生命转换",source:"XGE","damageInflict":["黯蚀"]}, {name_en: "Melf's Minute Meteors", level: 3, damage:{"3":"2d6","4":"2d6","5":"2d6","6":"2d6","7":"2d6","8":"2d6","9":"2d6"},name:"马友夫微流星",source:"XGE","damageInflict":["火焰"]}, {name_en: "Spirit Shroud", level: 3, damage:{"3":"1d8","5":"2d8","7":"3d8","9":"4d8"},name:"魂灵环绕",source:"TCE","damageInflict":["光耀","黯蚀","冷冻"]}, {name_en: "Ashardalon's Stride", level: 3, damage:{"3":"1d6","4":"2d6","5":"3d6","6":"4d6","7":"5d6","8":"6d6","9":"7d6"},name:"阿莎德隆奔行",source:"FTD","damageInflict":["火焰"]}, {name_en: "Antagonize", level: 3, damage:{"3":"4d4","4":"5d4","5":"6d4","6":"7d4","7":"8d4","8":"9d4","9":"10d4"},name:"敌意术",source:"BMT","damageInflict":["心灵"]}, {name_en: "Blight", level: 4, damage:{"4":"8d8","5":"9d8","6":"10d8","7":"11d8","8":"12d8","9":"13d8"},name:"枯萎术",source:"PHB","damageInflict":["黯蚀"]}, {name_en: "Evard's Black Tentacles", level: 4, damage:{"4":"3d6"},name:"艾伐黑触手",source:"PHB","damageInflict":["钝击"]}, {name_en: "Sickening Radiance", level: 4, damage:{"4":"4d10"},name:"致病辐射",source:"EGW","damageInflict":["光耀"]}, {name_en: "Storm Sphere", level: 4, damage:{"4":"2d6 + 4d6","5":"3d6 + 5d6","6":"4d6 + 6d6","7":"5d6 + 7d6","8":"6d6 + 8d6","9":"7d6 + 9d6"},name:"风暴法球",source:"XGE","damageInflict":["钝击","闪电"]}, {name_en: "Vitriolic Sphere", level: 4, damage:{"4":"10d4 + 5d4","5":"12d4 + 5d4","6":"14d4 + 5d4","7":"16d4 + 5d4","8":"18d4 + 5d4","9":"20d4 + 5d4"},name:"浓酸球",source:"XGE","damageInflict":["强酸"]}, {name_en: "Cloudkill", level: 5, damage:{"5":"5d8","6":"6d8","7":"7d8","8":"8d8","9":"9d8"},name:"死云术",source:"PHB","damageInflict":["毒素"]}, {name_en: "Enervation", level: 5, damage:{"5":"4d8","6":"5d8","7":"6d8","8":"7d8","9":"8d8"},name:"汲能术",source:"XGE","damageInflict":["黯蚀"]}, {name_en: "Immolation", level: 5, damage:{"5":"8d6"},name:"焚烧术",source:"XGE","damageInflict":["火焰"]}, {name_en: "Negative Energy Flood", level: 5, damage:{"5":"5d12"},name:"负能量洪流",source:"XGE","damageInflict":["黯蚀"]}, {name_en: "Steel Wind Strike", level: 5, damage:{"5":"6d10"},name:"钢风斩",source:"XGE","damageInflict":["力场"]}, {name_en: "Synaptic Static", level: 5, damage:{"5":"8d6"},name:"突触静止",source:"XGE","damageInflict":["心灵"]}, {name_en: "Chain Lightning", level: 6, damage:{"6":"10d8","7":"10d8","8":"10d8","9":"10d8"},name:"连锁闪电",source:"PHB","damageInflict":["闪电"]}, {name_en: "Circle of Death", level: 6, damage:{"6":"8d6","7":"10d6","8":"12d6","9":"14d6"},name:"死亡法阵",source:"PHB","damageInflict":["黯蚀"]}, {name_en: "Otiluke's Freezing Sphere", level: 6, damage:{"6":"10d6","7":"11d6","8":"12d6","9":"13d6"},name:"欧提路克冰封法球",source:"PHB","damageInflict":["冷冻"]}, {name_en: "Mental Prison", level: 6, damage:{"6":"5d10"},name:"精神监狱",source:"XGE","damageInflict":["心灵"]}, {name_en: "Delayed Blast Fireball", level: 7, damage:{"7":"12d6","8":"13d6","9":"14d6"},name:"延迟爆裂火球",source:"PHB","damageInflict":["火焰"]}, {name_en: "Finger of Death", level: 7, damage:{"7":"7d8 + 30"},name:"死亡一指",source:"PHB","damageInflict":["黯蚀"]}, {name_en: "Abi-Dalzim's Horrid Wilting", level: 8, damage:{"8":"12d8"},name:"亚比达奇凋死术",source:"XGE","damageInflict":["黯蚀"]}, {name_en: "Illusory Dragon", level: 8, damage:{"8":"7d6"},name:"幻影巨龙",source:"XGE","damageInflict":["强酸","冷冻","火焰","闪电","黯蚀","毒素"]}, {name_en: "Maddening Darkness", level: 8, damage:{"8":"8d8"},name:"疯狂之暗",source:"XGE","damageInflict":["心灵"]}, {name_en: "Blade of Disaster", level: 9, damage:{"9":"4d12"},name:"灾祸之刃",source:"TCE","damageInflict":["力场"]}, {name_en: "Weird", level: 9, damage:{"9":"4d10"},name:"怪影杀手",source:"PHB","damageInflict":["心灵"]}, {name_en: "Psychic Scream", level: 9, damage:{"9":"14d6"},name:"心灵尖啸",source:"XGE","damageInflict":["心灵"]}, {name_en: "Blade of Disaster", level: 9, damage:{"9":"4d12"},name:"灾厄之刃",source:"TCE","damageInflict":["力场"]}, {name_en: "Chaos Bolt", level: 1, damage:{"1":"2d8 + 1d6","2":"2d8 + 2d6","3":"2d8 + 3d6","4":"2d8 + 4d6","5":"2d8 + 5d6","6":"2d8 + 6d6","7":"2d8 + 7d6","8":"2d8 + 8d6","9":"2d8 + 9d6"},name:"混乱箭",source:"XGE","damageInflict":["强酸","冷冻","火焰","力场","闪电","毒素","心灵","雷鸣"]}, {name_en: "Thunder Step", level: 3, damage:{"3":"3d10","4":"4d10","5":"5d10","6":"6d10","7":"7d10","8":"8d10","9":"9d10"},name:"雷霆步",source:"XGE","damageInflict":["雷鸣"]}, {name_en: "Eldritch Blast", level: 0, damage:{"1":"1d10"},name:"魔能爆",source:"PHB","damageInflict":["力场"]}, {name_en: "Arms of Hadar", level: 1, damage:{"1":"2d6","2":"3d6","3":"4d6","4":"5d6","5":"6d6","6":"7d6","7":"8d6","8":"9d6","9":"10d6"},name:"哈达之臂",source:"PHB","damageInflict":["黯蚀"]}, {name_en: "Hellish Rebuke", level: 1, damage:{"1":"2d10","2":"3d10","3":"4d10","4":"5d10","5":"6d10","6":"7d10","7":"8d10","8":"9d10","9":"10d10"},name:"炼狱叱喝",source:"PHB","damageInflict":["火焰"]}, {name_en: "Hex", level: 1, damage:{"1":"1d6","3":"1d6","4":"1d6","5":"1d6","6":"1d6","7":"1d6","8":"1d6","9":"1d6"},name:"脆弱诅咒",source:"PHB","damageInflict":["黯蚀"]}, {name_en: "Divine Favor", level: 1, damage:{"1":"1d4"},name:"神恩",source:"PHB","damageInflict":["光耀"]}, {name_en: "Searing Smite", level: 1, damage:{"1":"1d6","2":"2d6","3":"3d6","4":"4d6","5":"5d6","6":"6d6","7":"7d6","8":"8d6","9":"9d6"},name:"炽焰斩",source:"PHB","damageInflict":["火焰"]}, {name_en: "Thunderous Smite", level: 1, damage:{"1":"2d6"},name:"雷鸣斩",source:"PHB","damageInflict":["雷鸣"]}, {name_en: "Wrathful Smite", level: 1, damage:{"1":"1d6"},name:"激愤斩",source:"PHB","damageInflict":["心灵"]}, {name_en: "Branding Smite", level: 2, damage:{"2":"2d6","3":"3d6","4":"4d6","5":"5d6","6":"6d6","7":"7d6","8":"8d6","9":"9d6"},name:"印记斩",source:"PHB","damageInflict":["光耀"]}, {name_en: "Prayer of Healing", level: 2, damage:{"2":"2d8","3":"3d8","4":"4d8","5":"5d8","6":"6d8","7":"7d8","8":"8d8","9":"9d8"},name:"治疗祷言",source:"PHB","damageInflict":["治疗"]}, {name_en: "Aura of Vitality", level: 3, damage:{"3":"2d6"},name:"活力灵光",source:"PHB","damageInflict":["治疗"]}, {name_en: "Blinding Smite", level: 3, damage:{"3":"3d8"},name:"致盲斩",source:"PHB","damageInflict":["光耀"]}, {name_en: "Crusader's Mantle", level: 3, damage:{"3":"1d4"},name:"十字军披风",source:"PHB","damageInflict":["光耀"]}, {name_en: "Spirit Shroud", level: 3, damage:{"3":"1d8","5":"2d8","7":"3d8","9":"4d8"},name:"魂灵环绕",source:"TCE","damageInflict":["光耀","黯蚀","冷冻"]}, {name_en: "Staggering Smite", level: 4, damage:{"4":"4d6"},name:"惊惧斩",source:"PHB","damageInflict":["心灵"]}, {name_en: "Banishing Smite", level: 5, damage:{"5":"5d10"},name:"放逐斩",source:"PHB","damageInflict":["力场"]}, {name_en: "Destructive Wave", level: 5, damage:{"5":"5d6"},name:"湮灭波",source:"PHB","damageInflict":["雷鸣","光耀","黯蚀"]}, {name_en: "Ensnaring Strike", level: 1, damage:{"1":"1d6","2":"2d6","3":"3d6","4":"4d6","5":"5d6","6":"6d6","7":"7d6","8":"8d6","9":"9d6"},name:"诱捕打击",source:"PHB","damageInflict":["穿刺"]}, {name_en: "Hunter's Mark", level: 1, damage:{"1":"1d6","3":"1d6","4":"1d6","5":"1d6","6":"1d6","7":"1d6","8":"1d6","9":"1d6"},name:"猎人印记",source:"PHB","damageInflict":["通用"]}, {name_en: "Zephyr Strike", level: 1, damage:{"1":"1d8"},name:"西风打击",source:"XGE","damageInflict":["力场"]}, {name_en: "Cordon of Arrows", level: 2, damage:{"2":"1d6","3":"1d6","4":"1d6","5":"1d6","6":"1d6","7":"1d6","8":"1d6","9":"1d6"},name:"警戒箭阵",source:"PHB","damageInflict":["穿刺"]}, {name_en: "Spike Growth", level: 2, damage:{"2":"2d4"},name:"棘墙术",source:"PHB","damageInflict":["穿刺"]}, {name_en: "Conjure Barrage", level: 3, damage:{"3":"3d8"},name:"召唤箭雨",source:"PHB","damageInflict":["通用"]}, {name_en: "Lightning Arrows", level: 3, damage:{"3":"4d8 + 2d8","4":"5d8 + 3d8","5":"6d8 + 4d8","6":"7d8 + 5d8","7":"8d8 + 6d8","8":"9d8 + 7d8","9":"10d8 + 8d8"},name:"闪电箭矢",source:"XGE","damageInflict":["闪电"]}, {name_en: "Flame Arrows", level: 3, damage:{"3":"1d6","4":"1d6","5":"1d6","6":"1d6","7":"1d6","8":"1d6","9":"1d6"},name:"烈焰箭矢",source:"XGE","damageInflict":["火焰"]}, {name_en: "Conjure Volley", level: 5, damage:{"5":"8d8"},name:"万箭齐发",source:"XGE","damageInflict":["通用"]}, {name_en: "Steel Wind Strike", level: 5, damage:{"5":"6d10"},name:"钢风斩",source:"XGE","damageInflict":["力场"]}] };
  
      // 创建 spellReturnMap
      const spellReturnMap = [
        {name:"魔法飞弹", return:{ "1": "3", "2": "4", "3": "5", "4": "6", "5": "7", "6": "8", "7": "9", "8": "10", "9": "11" }},
        {name: "魔能爆",return:{ "1": "1", "5": "2", "11": "3", "17": "4" }},
        {name:"连环闪电",return:{"6":"1","7":"2","8":"3","9":"4"}},
        {name:"警戒之箭",return:{"2":"4","3":"5","4":"6","5":"7","6":"8","7":"9","8":"10","9":"11"}},
        {name:"灼热射线",return:{"2":"3","3":"4","4":"5","5":"6","6":"7","7":"8","8":"9","9":"10"}},
        {name:"祝福术",return:{"1":"1","2":"2","3":"3","4":"4","5":"5","6":"6","7":"7","8":"8","9":"9","10":"10","11":"11"}}
      ];
  
    // src/index.ts
    var spellMap = new Map(spells_data_default.spell.map((spell) => [spell.name, spell]));
    //对着抄
    var spellreturnMap = new Map(spellReturnMap.map((spell) => [spell.name, spell.return]));
    var helpDesc = `DND5e施法辅助
  .cs 戏法名 <等级> // 自动按目标等级释放戏法
  .cs 法术名 <环数> // 自动按目标环数施法
  #请注意只包括会掷骰的法术，且伤害为豁免失败的结果。
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
  
        let commandLevel = cmdArgs.getArgN(2)
        let damageDiceStr;
        let rawLevel;
        let targetLevel;
        // 若发现spellInfo的等级为0
        if (spellInfo.level === 0) {
          // 转换第三个（还是第二个啊……）参数为数字，如果转换失败，转换1为数字
          if (parseInt(commandLevel || "1") < 0 || parseInt(commandLevel || "1") > 20 || isNaN(parseInt(commandLevel || "1") )) {
            seal.replyToSender(ctx, msg, `等级${commandLevel}是错误的表达`);
            return seal.ext.newCmdExecuteResult(true);
          }
  
  
          rawLevel = parseInt(commandLevel || "1");
          // 从 spellInfo.damage 对象的键中提取出所有小于或等于 rawLevel 的数字键，并返回这些数字键组成的数组。
          const levelList = Object.keys(spellInfo.damage).map((l) => parseInt(l)).filter((l) => l <= rawLevel);
          // 判断数组长度，数组长度大于0，找最大的那个；数组为空？取最小的那个
          targetLevel = levelList.length > 0 ? Math.max(...levelList) : Math.min(...Object.keys(spellInfo.damage).map((l) => parseInt(l)));
          // 此时获取到对应的执行信息
          damageDiceStr = spellInfo.damage[targetLevel];
          if (!damageDiceStr) {
            seal.replyToSender(ctx, msg, `没有等级${rawLevel}下释放${name}的信息`);
            return seal.ext.newCmdExecuteResult(true);
          }
        } else {
          // spellInfo的等级不为0，代表有严格限制，低于这个等级，是不允许发的
          if (parseInt(commandLevel || "1") < 0 || parseInt(commandLevel || "1") > 9 || isNaN(parseInt(commandLevel || "1"))) {
            seal.replyToSender(ctx, msg, `等级${commandLevel}是错误的表达`);
            return seal.ext.newCmdExecuteResult(true);
          }
          const minLevel = Math.min(...Object.keys(spellInfo.damage).map((l) => parseInt(l)));
          // 获取真实等级，如果等级低于minLevel，则立即推没有信息，如果没有输入，默认认为是最小的
          rawLevel = parseInt(commandLevel || minLevel.toString());
          if (rawLevel < minLevel) {
            seal.replyToSender(ctx, msg, `没有等级${rawLevel}下释放${name}的信息`);
            return seal.ext.newCmdExecuteResult(true);
          }
          targetLevel = rawLevel;
          // 如果 damage 只有一个键值对，则直接使用这个键作为实际计算伤害的环数
          const damageKeys = Object.keys(spellInfo.damage);
          const actualDamageLevel = damageKeys.length === 1 ? parseInt(damageKeys[0]) : targetLevel;
    
          damageDiceStr = spellInfo.damage[actualDamageLevel];
          if (!damageDiceStr) {
            seal.replyToSender(ctx, msg, `没有${targetLevel}环${name}的信息`);
            return seal.ext.newCmdExecuteResult(true);
          }
        }
  
      // 获取执行次数，可能一个级别伤害相同，但是不同级别执行的次数不同
      let executeTimes = 1;
  
      // 检查 spellreturnMap 中是否存在当前法术的名称
      const spellReturnData = spellreturnMap.get(name);
      // 存在执行次数不同的时候
      if (spellReturnData) {
        // 提取法术名称
        const name = spellInfo.name;
        // 如法炮制，和上面原理一模一样，直接照抄，
        // 改 returnmap 了
        const returnKeys = Object.keys(spellReturnData).map(Number).filter((l) => l <= rawLevel);
        // 判断数组长度，数组长度大于0，找最大的那个；数组为空？取最小的那个
        const closestKey = returnKeys.length > 0 ? Math.max(...returnKeys) : Math.min(...Object.keys(spellReturnData).map(Number));
        // 取出它的值，并转换为执行次数
        executeTimes = parseInt(spellReturnData[closestKey]);
        // 输出调试信息
        console.log(executeTimes);
      } else {
        // 如果 spellreturnMap 中没有对应的法术名称，则使用默认值
        executeTimes = 1;
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
  
        if (spellReturnData) {
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
