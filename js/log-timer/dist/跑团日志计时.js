// ==UserScript==
// @name         跑团日志计时
// @author       JustAnotherID
// @version      2.0.0
// @description  在使用 .log new/on/off/end/halt 命令时会提示本次跑团用时相关信息（该插件没有新增命令）
// @timestamp    2025-04-24 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/log-timer
// @updateUrl    https://ghproxy.justanotherid.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/log-timer/dist/%E8%B7%91%E5%9B%A2%E6%97%A5%E5%BF%97%E8%AE%A1%E6%97%B6.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/summer-creature/log-timer/%E8%B7%91%E5%9B%A2%E6%97%A5%E5%BF%97%E8%AE%A1%E6%97%B6.js
// ==/UserScript==

(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/constant.js
  var SECONDS_A_MINUTE = 60;
  var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
  var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
  var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
  var MILLISECONDS_A_SECOND = 1e3;
  var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
  var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;
  var MS = "millisecond";
  var S = "second";
  var MIN = "minute";
  var H = "hour";
  var D = "day";
  var W = "week";
  var M = "month";
  var Q = "quarter";
  var Y = "year";
  var DATE = "date";
  var FORMAT_DEFAULT = "YYYY-MM-DDTHH:mm:ssZ";
  var INVALID_DATE_STRING = "Invalid Date";
  var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
  var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/locale/en.js
  var en_default = {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    ordinal: function ordinal(n) {
      var s = ["th", "st", "nd", "rd"];
      var v = n % 100;
      return "[" + n + (s[(v - 20) % 10] || s[v] || s[0]) + "]";
    }
  };

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/utils.js
  var padStart = function padStart2(string, length, pad) {
    var s = String(string);
    if (!s || s.length >= length) return string;
    return "" + Array(length + 1 - s.length).join(pad) + string;
  };
  var padZoneStr = function padZoneStr2(instance) {
    var negMinutes = -instance.utcOffset();
    var minutes = Math.abs(negMinutes);
    var hourOffset = Math.floor(minutes / 60);
    var minuteOffset = minutes % 60;
    return (negMinutes <= 0 ? "+" : "-") + padStart(hourOffset, 2, "0") + ":" + padStart(minuteOffset, 2, "0");
  };
  var monthDiff = function monthDiff2(a, b) {
    if (a.date() < b.date()) return -monthDiff2(b, a);
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
    var anchor = a.clone().add(wholeMonthDiff, M);
    var c = b - anchor < 0;
    var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), M);
    return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
  };
  var absFloor = function absFloor2(n) {
    return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
  };
  var prettyUnit = function prettyUnit2(u) {
    var special = {
      M,
      y: Y,
      w: W,
      d: D,
      D: DATE,
      h: H,
      m: MIN,
      s: S,
      ms: MS,
      Q
    };
    return special[u] || String(u || "").toLowerCase().replace(/s$/, "");
  };
  var isUndefined = function isUndefined2(s) {
    return s === void 0;
  };
  var utils_default = {
    s: padStart,
    z: padZoneStr,
    m: monthDiff,
    a: absFloor,
    p: prettyUnit,
    u: isUndefined
  };

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/index.js
  var L = "en";
  var Ls = {};
  Ls[L] = en_default;
  var IS_DAYJS = "$isDayjsObject";
  var isDayjs = function isDayjs2(d) {
    return d instanceof Dayjs || !!(d && d[IS_DAYJS]);
  };
  var parseLocale = function parseLocale2(preset, object, isLocal) {
    var l;
    if (!preset) return L;
    if (typeof preset === "string") {
      var presetLower = preset.toLowerCase();
      if (Ls[presetLower]) {
        l = presetLower;
      }
      if (object) {
        Ls[presetLower] = object;
        l = presetLower;
      }
      var presetSplit = preset.split("-");
      if (!l && presetSplit.length > 1) {
        return parseLocale2(presetSplit[0]);
      }
    } else {
      var name = preset.name;
      Ls[name] = preset;
      l = name;
    }
    if (!isLocal && l) L = l;
    return l || !isLocal && L;
  };
  var dayjs = function dayjs2(date, c) {
    if (isDayjs(date)) {
      return date.clone();
    }
    var cfg = typeof c === "object" ? c : {};
    cfg.date = date;
    cfg.args = arguments;
    return new Dayjs(cfg);
  };
  var wrapper = function wrapper2(date, instance) {
    return dayjs(date, {
      locale: instance.$L,
      utc: instance.$u,
      x: instance.$x,
      $offset: instance.$offset
      // todo: refactor; do not use this.$offset in you code
    });
  };
  var Utils = utils_default;
  Utils.l = parseLocale;
  Utils.i = isDayjs;
  Utils.w = wrapper;
  var parseDate = function parseDate2(cfg) {
    var date = cfg.date, utc = cfg.utc;
    if (date === null) return /* @__PURE__ */ new Date(NaN);
    if (Utils.u(date)) return /* @__PURE__ */ new Date();
    if (date instanceof Date) return new Date(date);
    if (typeof date === "string" && !/Z$/i.test(date)) {
      var d = date.match(REGEX_PARSE);
      if (d) {
        var m = d[2] - 1 || 0;
        var ms = (d[7] || "0").substring(0, 3);
        if (utc) {
          return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
        }
        return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
      }
    }
    return new Date(date);
  };
  var Dayjs = /* @__PURE__ */ function() {
    function Dayjs2(cfg) {
      this.$L = parseLocale(cfg.locale, null, true);
      this.parse(cfg);
      this.$x = this.$x || cfg.x || {};
      this[IS_DAYJS] = true;
    }
    var _proto = Dayjs2.prototype;
    _proto.parse = function parse(cfg) {
      this.$d = parseDate(cfg);
      this.init();
    };
    _proto.init = function init() {
      var $d2 = this.$d;
      this.$y = $d2.getFullYear();
      this.$M = $d2.getMonth();
      this.$D = $d2.getDate();
      this.$W = $d2.getDay();
      this.$H = $d2.getHours();
      this.$m = $d2.getMinutes();
      this.$s = $d2.getSeconds();
      this.$ms = $d2.getMilliseconds();
    };
    _proto.$utils = function $utils() {
      return Utils;
    };
    _proto.isValid = function isValid() {
      return !(this.$d.toString() === INVALID_DATE_STRING);
    };
    _proto.isSame = function isSame(that, units) {
      var other = dayjs(that);
      return this.startOf(units) <= other && other <= this.endOf(units);
    };
    _proto.isAfter = function isAfter(that, units) {
      return dayjs(that) < this.startOf(units);
    };
    _proto.isBefore = function isBefore(that, units) {
      return this.endOf(units) < dayjs(that);
    };
    _proto.$g = function $g(input, get, set) {
      if (Utils.u(input)) return this[get];
      return this.set(set, input);
    };
    _proto.unix = function unix() {
      return Math.floor(this.valueOf() / 1e3);
    };
    _proto.valueOf = function valueOf() {
      return this.$d.getTime();
    };
    _proto.startOf = function startOf(units, _startOf) {
      var _this = this;
      var isStartOf = !Utils.u(_startOf) ? _startOf : true;
      var unit = Utils.p(units);
      var instanceFactory = function instanceFactory2(d, m) {
        var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
        return isStartOf ? ins : ins.endOf(D);
      };
      var instanceFactorySet = function instanceFactorySet2(method, slice) {
        var argumentStart = [0, 0, 0, 0];
        var argumentEnd = [23, 59, 59, 999];
        return Utils.w(_this.toDate()[method].apply(
          // eslint-disable-line prefer-spread
          _this.toDate("s"),
          (isStartOf ? argumentStart : argumentEnd).slice(slice)
        ), _this);
      };
      var $W = this.$W, $M = this.$M, $D = this.$D;
      var utcPad = "set" + (this.$u ? "UTC" : "");
      switch (unit) {
        case Y:
          return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
        case M:
          return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);
        case W: {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }
        case D:
        case DATE:
          return instanceFactorySet(utcPad + "Hours", 0);
        case H:
          return instanceFactorySet(utcPad + "Minutes", 1);
        case MIN:
          return instanceFactorySet(utcPad + "Seconds", 2);
        case S:
          return instanceFactorySet(utcPad + "Milliseconds", 3);
        default:
          return this.clone();
      }
    };
    _proto.endOf = function endOf(arg) {
      return this.startOf(arg, false);
    };
    _proto.$set = function $set(units, _int) {
      var _C$D$C$DATE$C$M$C$Y$C;
      var unit = Utils.p(units);
      var utcPad = "set" + (this.$u ? "UTC" : "");
      var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
      var arg = unit === D ? this.$D + (_int - this.$W) : _int;
      if (unit === M || unit === Y) {
        var date = this.clone().set(DATE, 1);
        date.$d[name](arg);
        date.init();
        this.$d = date.set(DATE, Math.min(this.$D, date.daysInMonth())).$d;
      } else if (name) this.$d[name](arg);
      this.init();
      return this;
    };
    _proto.set = function set(string, _int2) {
      return this.clone().$set(string, _int2);
    };
    _proto.get = function get(unit) {
      return this[Utils.p(unit)]();
    };
    _proto.add = function add(number, units) {
      var _this2 = this, _C$MIN$C$H$C$S$unit;
      number = Number(number);
      var unit = Utils.p(units);
      var instanceFactorySet = function instanceFactorySet2(n) {
        var d = dayjs(_this2);
        return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
      };
      if (unit === M) {
        return this.set(M, this.$M + number);
      }
      if (unit === Y) {
        return this.set(Y, this.$y + number);
      }
      if (unit === D) {
        return instanceFactorySet(1);
      }
      if (unit === W) {
        return instanceFactorySet(7);
      }
      var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1;
      var nextTimeStamp = this.$d.getTime() + number * step;
      return Utils.w(nextTimeStamp, this);
    };
    _proto.subtract = function subtract(number, string) {
      return this.add(number * -1, string);
    };
    _proto.format = function format(formatStr) {
      var _this3 = this;
      var locale2 = this.$locale();
      if (!this.isValid()) return locale2.invalidDate || INVALID_DATE_STRING;
      var str = formatStr || FORMAT_DEFAULT;
      var zoneStr = Utils.z(this);
      var $H = this.$H, $m = this.$m, $M = this.$M;
      var weekdays = locale2.weekdays, months = locale2.months, meridiem2 = locale2.meridiem;
      var getShort = function getShort2(arr, index, full, length) {
        return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
      };
      var get$H = function get$H2(num) {
        return Utils.s($H % 12 || 12, num, "0");
      };
      var meridiemFunc = meridiem2 || function(hour, minute, isLowercase) {
        var m = hour < 12 ? "AM" : "PM";
        return isLowercase ? m.toLowerCase() : m;
      };
      var matches = function matches2(match) {
        switch (match) {
          case "YY":
            return String(_this3.$y).slice(-2);
          case "YYYY":
            return Utils.s(_this3.$y, 4, "0");
          case "M":
            return $M + 1;
          case "MM":
            return Utils.s($M + 1, 2, "0");
          case "MMM":
            return getShort(locale2.monthsShort, $M, months, 3);
          case "MMMM":
            return getShort(months, $M);
          case "D":
            return _this3.$D;
          case "DD":
            return Utils.s(_this3.$D, 2, "0");
          case "d":
            return String(_this3.$W);
          case "dd":
            return getShort(locale2.weekdaysMin, _this3.$W, weekdays, 2);
          case "ddd":
            return getShort(locale2.weekdaysShort, _this3.$W, weekdays, 3);
          case "dddd":
            return weekdays[_this3.$W];
          case "H":
            return String($H);
          case "HH":
            return Utils.s($H, 2, "0");
          case "h":
            return get$H(1);
          case "hh":
            return get$H(2);
          case "a":
            return meridiemFunc($H, $m, true);
          case "A":
            return meridiemFunc($H, $m, false);
          case "m":
            return String($m);
          case "mm":
            return Utils.s($m, 2, "0");
          case "s":
            return String(_this3.$s);
          case "ss":
            return Utils.s(_this3.$s, 2, "0");
          case "SSS":
            return Utils.s(_this3.$ms, 3, "0");
          case "Z":
            return zoneStr;
          default:
            break;
        }
        return null;
      };
      return str.replace(REGEX_FORMAT, function(match, $1) {
        return $1 || matches(match) || zoneStr.replace(":", "");
      });
    };
    _proto.utcOffset = function utcOffset() {
      return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
    };
    _proto.diff = function diff(input, units, _float) {
      var _this4 = this;
      var unit = Utils.p(units);
      var that = dayjs(input);
      var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
      var diff2 = this - that;
      var getMonth = function getMonth2() {
        return Utils.m(_this4, that);
      };
      var result;
      switch (unit) {
        case Y:
          result = getMonth() / 12;
          break;
        case M:
          result = getMonth();
          break;
        case Q:
          result = getMonth() / 3;
          break;
        case W:
          result = (diff2 - zoneDelta) / MILLISECONDS_A_WEEK;
          break;
        case D:
          result = (diff2 - zoneDelta) / MILLISECONDS_A_DAY;
          break;
        case H:
          result = diff2 / MILLISECONDS_A_HOUR;
          break;
        case MIN:
          result = diff2 / MILLISECONDS_A_MINUTE;
          break;
        case S:
          result = diff2 / MILLISECONDS_A_SECOND;
          break;
        default:
          result = diff2;
          break;
      }
      return _float ? result : Utils.a(result);
    };
    _proto.daysInMonth = function daysInMonth() {
      return this.endOf(M).$D;
    };
    _proto.$locale = function $locale() {
      return Ls[this.$L];
    };
    _proto.locale = function locale2(preset, object) {
      if (!preset) return this.$L;
      var that = this.clone();
      var nextLocaleName = parseLocale(preset, object, true);
      if (nextLocaleName) that.$L = nextLocaleName;
      return that;
    };
    _proto.clone = function clone() {
      return Utils.w(this.$d, this);
    };
    _proto.toDate = function toDate() {
      return new Date(this.valueOf());
    };
    _proto.toJSON = function toJSON() {
      return this.isValid() ? this.toISOString() : null;
    };
    _proto.toISOString = function toISOString() {
      return this.$d.toISOString();
    };
    _proto.toString = function toString() {
      return this.$d.toUTCString();
    };
    return Dayjs2;
  }();
  var proto = Dayjs.prototype;
  dayjs.prototype = proto;
  [["$ms", MS], ["$s", S], ["$m", MIN], ["$H", H], ["$W", D], ["$M", M], ["$y", Y], ["$D", DATE]].forEach(function(g) {
    proto[g[1]] = function(input) {
      return this.$g(input, g[0], g[1]);
    };
  });
  dayjs.extend = function(plugin, option) {
    if (!plugin.$i) {
      plugin(option, Dayjs, dayjs);
      plugin.$i = true;
    }
    return dayjs;
  };
  dayjs.locale = parseLocale;
  dayjs.isDayjs = isDayjs;
  dayjs.unix = function(timestamp) {
    return dayjs(timestamp * 1e3);
  };
  dayjs.en = Ls[L];
  dayjs.Ls = Ls;
  dayjs.p = {};
  var esm_default = dayjs;

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/locale/zh-cn.js
  var locale = {
    name: "zh-cn",
    weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
    weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
    weekdaysMin: "日_一_二_三_四_五_六".split("_"),
    months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
    monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
    ordinal: function ordinal2(number, period) {
      switch (period) {
        case "W":
          return number + "周";
        default:
          return number + "日";
      }
    },
    weekStart: 1,
    yearStart: 4,
    formats: {
      LT: "HH:mm",
      LTS: "HH:mm:ss",
      L: "YYYY/MM/DD",
      LL: "YYYY年M月D日",
      LLL: "YYYY年M月D日Ah点mm分",
      LLLL: "YYYY年M月D日ddddAh点mm分",
      l: "YYYY/M/D",
      ll: "YYYY年M月D日",
      lll: "YYYY年M月D日 HH:mm",
      llll: "YYYY年M月D日dddd HH:mm"
    },
    relativeTime: {
      future: "%s内",
      past: "%s前",
      s: "几秒",
      m: "1 分钟",
      mm: "%d 分钟",
      h: "1 小时",
      hh: "%d 小时",
      d: "1 天",
      dd: "%d 天",
      M: "1 个月",
      MM: "%d 个月",
      y: "1 年",
      yy: "%d 年"
    },
    meridiem: function meridiem(hour, minute) {
      var hm = hour * 100 + minute;
      if (hm < 600) {
        return "凌晨";
      } else if (hm < 900) {
        return "早上";
      } else if (hm < 1100) {
        return "上午";
      } else if (hm < 1300) {
        return "中午";
      } else if (hm < 1800) {
        return "下午";
      }
      return "晚上";
    }
  };
  esm_default.locale(locale, null, true);
  var zh_cn_default = locale;

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/plugin/relativeTime/index.js
  var relativeTime_default = function(o, c, d) {
    o = o || {};
    var proto2 = c.prototype;
    var relObj = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    };
    d.en.relativeTime = relObj;
    proto2.fromToBase = function(input, withoutSuffix, instance, isFrom, postFormat) {
      var loc = instance.$locale().relativeTime || relObj;
      var T = o.thresholds || [{
        l: "s",
        r: 44,
        d: S
      }, {
        l: "m",
        r: 89
      }, {
        l: "mm",
        r: 44,
        d: MIN
      }, {
        l: "h",
        r: 89
      }, {
        l: "hh",
        r: 21,
        d: H
      }, {
        l: "d",
        r: 35
      }, {
        l: "dd",
        r: 25,
        d: D
      }, {
        l: "M",
        r: 45
      }, {
        l: "MM",
        r: 10,
        d: M
      }, {
        l: "y",
        r: 17
      }, {
        l: "yy",
        d: Y
      }];
      var Tl = T.length;
      var result;
      var out;
      var isFuture;
      for (var i = 0; i < Tl; i += 1) {
        var t = T[i];
        if (t.d) {
          result = isFrom ? d(input).diff(instance, t.d, true) : instance.diff(input, t.d, true);
        }
        var abs = (o.rounding || Math.round)(Math.abs(result));
        isFuture = result > 0;
        if (abs <= t.r || !t.r) {
          if (abs <= 1 && i > 0) t = T[i - 1];
          var format = loc[t.l];
          if (postFormat) {
            abs = postFormat("" + abs);
          }
          if (typeof format === "string") {
            out = format.replace("%d", abs);
          } else {
            out = format(abs, withoutSuffix, t.l, isFuture);
          }
          break;
        }
      }
      if (withoutSuffix) return out;
      var pastOrFuture = isFuture ? loc.future : loc.past;
      if (typeof pastOrFuture === "function") {
        return pastOrFuture(out);
      }
      return pastOrFuture.replace("%s", out);
    };
    function fromTo(input, withoutSuffix, instance, isFrom) {
      return proto2.fromToBase(input, withoutSuffix, instance, isFrom);
    }
    proto2.to = function(input, withoutSuffix) {
      return fromTo(input, withoutSuffix, this, true);
    };
    proto2.from = function(input, withoutSuffix) {
      return fromTo(input, withoutSuffix, this);
    };
    var makeNow = function makeNow2(thisDay) {
      return thisDay.$u ? d.utc() : d();
    };
    proto2.toNow = function(withoutSuffix) {
      return this.to(makeNow(this), withoutSuffix);
    };
    proto2.fromNow = function(withoutSuffix) {
      return this.from(makeNow(this), withoutSuffix);
    };
  };

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/esm/plugin/duration/index.js
  var MILLISECONDS_A_YEAR = MILLISECONDS_A_DAY * 365;
  var MILLISECONDS_A_MONTH = MILLISECONDS_A_YEAR / 12;
  var durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  var unitToMS = {
    years: MILLISECONDS_A_YEAR,
    months: MILLISECONDS_A_MONTH,
    days: MILLISECONDS_A_DAY,
    hours: MILLISECONDS_A_HOUR,
    minutes: MILLISECONDS_A_MINUTE,
    seconds: MILLISECONDS_A_SECOND,
    milliseconds: 1,
    weeks: MILLISECONDS_A_WEEK
  };
  var isDuration = function isDuration2(d) {
    return d instanceof Duration;
  };
  var $d;
  var $u;
  var wrapper3 = function wrapper4(input, instance, unit) {
    return new Duration(input, unit, instance.$l);
  };
  var prettyUnit3 = function prettyUnit4(unit) {
    return $u.p(unit) + "s";
  };
  var isNegative = function isNegative2(number) {
    return number < 0;
  };
  var roundNumber = function roundNumber2(number) {
    return isNegative(number) ? Math.ceil(number) : Math.floor(number);
  };
  var absolute = function absolute2(number) {
    return Math.abs(number);
  };
  var getNumberUnitFormat = function getNumberUnitFormat2(number, unit) {
    if (!number) {
      return {
        negative: false,
        format: ""
      };
    }
    if (isNegative(number)) {
      return {
        negative: true,
        format: "" + absolute(number) + unit
      };
    }
    return {
      negative: false,
      format: "" + number + unit
    };
  };
  var Duration = /* @__PURE__ */ function() {
    function Duration2(input, unit, locale2) {
      var _this = this;
      this.$d = {};
      this.$l = locale2;
      if (input === void 0) {
        this.$ms = 0;
        this.parseFromMilliseconds();
      }
      if (unit) {
        return wrapper3(input * unitToMS[prettyUnit3(unit)], this);
      }
      if (typeof input === "number") {
        this.$ms = input;
        this.parseFromMilliseconds();
        return this;
      }
      if (typeof input === "object") {
        Object.keys(input).forEach(function(k) {
          _this.$d[prettyUnit3(k)] = input[k];
        });
        this.calMilliseconds();
        return this;
      }
      if (typeof input === "string") {
        var d = input.match(durationRegex);
        if (d) {
          var properties = d.slice(2);
          var numberD = properties.map(function(value) {
            return value != null ? Number(value) : 0;
          });
          this.$d.years = numberD[0];
          this.$d.months = numberD[1];
          this.$d.weeks = numberD[2];
          this.$d.days = numberD[3];
          this.$d.hours = numberD[4];
          this.$d.minutes = numberD[5];
          this.$d.seconds = numberD[6];
          this.calMilliseconds();
          return this;
        }
      }
      return this;
    }
    var _proto = Duration2.prototype;
    _proto.calMilliseconds = function calMilliseconds() {
      var _this2 = this;
      this.$ms = Object.keys(this.$d).reduce(function(total, unit) {
        return total + (_this2.$d[unit] || 0) * unitToMS[unit];
      }, 0);
    };
    _proto.parseFromMilliseconds = function parseFromMilliseconds() {
      var $ms = this.$ms;
      this.$d.years = roundNumber($ms / MILLISECONDS_A_YEAR);
      $ms %= MILLISECONDS_A_YEAR;
      this.$d.months = roundNumber($ms / MILLISECONDS_A_MONTH);
      $ms %= MILLISECONDS_A_MONTH;
      this.$d.days = roundNumber($ms / MILLISECONDS_A_DAY);
      $ms %= MILLISECONDS_A_DAY;
      this.$d.hours = roundNumber($ms / MILLISECONDS_A_HOUR);
      $ms %= MILLISECONDS_A_HOUR;
      this.$d.minutes = roundNumber($ms / MILLISECONDS_A_MINUTE);
      $ms %= MILLISECONDS_A_MINUTE;
      this.$d.seconds = roundNumber($ms / MILLISECONDS_A_SECOND);
      $ms %= MILLISECONDS_A_SECOND;
      this.$d.milliseconds = $ms;
    };
    _proto.toISOString = function toISOString() {
      var Y2 = getNumberUnitFormat(this.$d.years, "Y");
      var M2 = getNumberUnitFormat(this.$d.months, "M");
      var days = +this.$d.days || 0;
      if (this.$d.weeks) {
        days += this.$d.weeks * 7;
      }
      var D2 = getNumberUnitFormat(days, "D");
      var H2 = getNumberUnitFormat(this.$d.hours, "H");
      var m = getNumberUnitFormat(this.$d.minutes, "M");
      var seconds = this.$d.seconds || 0;
      if (this.$d.milliseconds) {
        seconds += this.$d.milliseconds / 1e3;
        seconds = Math.round(seconds * 1e3) / 1e3;
      }
      var S2 = getNumberUnitFormat(seconds, "S");
      var negativeMode = Y2.negative || M2.negative || D2.negative || H2.negative || m.negative || S2.negative;
      var T = H2.format || m.format || S2.format ? "T" : "";
      var P = negativeMode ? "-" : "";
      var result = P + "P" + Y2.format + M2.format + D2.format + T + H2.format + m.format + S2.format;
      return result === "P" || result === "-P" ? "P0D" : result;
    };
    _proto.toJSON = function toJSON() {
      return this.toISOString();
    };
    _proto.format = function format(formatStr) {
      var str = formatStr || "YYYY-MM-DDTHH:mm:ss";
      var matches = {
        Y: this.$d.years,
        YY: $u.s(this.$d.years, 2, "0"),
        YYYY: $u.s(this.$d.years, 4, "0"),
        M: this.$d.months,
        MM: $u.s(this.$d.months, 2, "0"),
        D: this.$d.days,
        DD: $u.s(this.$d.days, 2, "0"),
        H: this.$d.hours,
        HH: $u.s(this.$d.hours, 2, "0"),
        m: this.$d.minutes,
        mm: $u.s(this.$d.minutes, 2, "0"),
        s: this.$d.seconds,
        ss: $u.s(this.$d.seconds, 2, "0"),
        SSS: $u.s(this.$d.milliseconds, 3, "0")
      };
      return str.replace(REGEX_FORMAT, function(match, $1) {
        return $1 || String(matches[match]);
      });
    };
    _proto.as = function as(unit) {
      return this.$ms / unitToMS[prettyUnit3(unit)];
    };
    _proto.get = function get(unit) {
      var base = this.$ms;
      var pUnit = prettyUnit3(unit);
      if (pUnit === "milliseconds") {
        base %= 1e3;
      } else if (pUnit === "weeks") {
        base = roundNumber(base / unitToMS[pUnit]);
      } else {
        base = this.$d[pUnit];
      }
      return base || 0;
    };
    _proto.add = function add(input, unit, isSubtract) {
      var another;
      if (unit) {
        another = input * unitToMS[prettyUnit3(unit)];
      } else if (isDuration(input)) {
        another = input.$ms;
      } else {
        another = wrapper3(input, this).$ms;
      }
      return wrapper3(this.$ms + another * (isSubtract ? -1 : 1), this);
    };
    _proto.subtract = function subtract(input, unit) {
      return this.add(input, unit, true);
    };
    _proto.locale = function locale2(l) {
      var that = this.clone();
      that.$l = l;
      return that;
    };
    _proto.clone = function clone() {
      return wrapper3(this.$ms, this);
    };
    _proto.humanize = function humanize(withSuffix) {
      return $d().add(this.$ms, "ms").locale(this.$l).fromNow(!withSuffix);
    };
    _proto.valueOf = function valueOf() {
      return this.asMilliseconds();
    };
    _proto.milliseconds = function milliseconds() {
      return this.get("milliseconds");
    };
    _proto.asMilliseconds = function asMilliseconds() {
      return this.as("milliseconds");
    };
    _proto.seconds = function seconds() {
      return this.get("seconds");
    };
    _proto.asSeconds = function asSeconds() {
      return this.as("seconds");
    };
    _proto.minutes = function minutes() {
      return this.get("minutes");
    };
    _proto.asMinutes = function asMinutes() {
      return this.as("minutes");
    };
    _proto.hours = function hours() {
      return this.get("hours");
    };
    _proto.asHours = function asHours() {
      return this.as("hours");
    };
    _proto.days = function days() {
      return this.get("days");
    };
    _proto.asDays = function asDays() {
      return this.as("days");
    };
    _proto.weeks = function weeks() {
      return this.get("weeks");
    };
    _proto.asWeeks = function asWeeks() {
      return this.as("weeks");
    };
    _proto.months = function months() {
      return this.get("months");
    };
    _proto.asMonths = function asMonths() {
      return this.as("months");
    };
    _proto.years = function years() {
      return this.get("years");
    };
    _proto.asYears = function asYears() {
      return this.as("years");
    };
    return Duration2;
  }();
  var manipulateDuration = function manipulateDuration2(date, duration, k) {
    return date.add(duration.years() * k, "y").add(duration.months() * k, "M").add(duration.days() * k, "d").add(duration.hours() * k, "h").add(duration.minutes() * k, "m").add(duration.seconds() * k, "s").add(duration.milliseconds() * k, "ms");
  };
  var duration_default = function(option, Dayjs2, dayjs3) {
    $d = dayjs3;
    $u = dayjs3().$utils();
    dayjs3.duration = function(input, unit) {
      var $l = dayjs3.locale();
      return wrapper3(input, {
        $l
      }, unit);
    };
    dayjs3.isDuration = isDuration;
    var oldAdd = Dayjs2.prototype.add;
    var oldSubtract = Dayjs2.prototype.subtract;
    Dayjs2.prototype.add = function(value, unit) {
      if (isDuration(value)) {
        return manipulateDuration(this, value, 1);
      }
      return oldAdd.bind(this)(value, unit);
    };
    Dayjs2.prototype.subtract = function(value, unit) {
      if (isDuration(value)) {
        return manipulateDuration(this, value, -1);
      }
      return oldSubtract.bind(this)(value, unit);
    };
  };

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

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

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_WeakMap.js
  var WeakMap = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isLength_default = isLength;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto2;
  }
  var isPrototype_default = isPrototype;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty3 = objectProto5.hasOwnProperty;
  var propertyIsEnumerable = objectProto5.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(/* @__PURE__ */ function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty3.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js
  var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer2 = moduleExports ? root_default.Buffer : void 0;
  var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
  var isBuffer = nativeIsBuffer || stubFalse_default;
  var isBuffer_default = isBuffer;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js
  var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
  var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess = moduleExports2 && freeGlobal_default.process;
  var nodeUtil = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeUtil_default = nodeUtil;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty4.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
  var Map = getNative_default(root_default, "Map");
  var Map_default = Map;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
  var Set = getNative_default(root_default, "Set");
  var Set_default = Set;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getTag.js
  var mapTag2 = "[object Map]";
  var objectTag2 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag2 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag2 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag2;
          case mapCtorString:
            return mapTag2;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag2;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
  var mapTag3 = "[object Map]";
  var setTag3 = "[object Set]";
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function isEmpty(value) {
    if (value == null) {
      return true;
    }
    if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
      return !value.length;
    }
    var tag = getTag_default(value);
    if (tag == mapTag3 || tag == setTag3) {
      return !value.size;
    }
    if (isPrototype_default(value)) {
      return !baseKeys_default(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty5.call(value, key)) {
        return false;
      }
    }
    return true;
  }
  var isEmpty_default = isEmpty;

  // src/index.ts
  esm_default.locale(zh_cn_default);
  esm_default.extend(relativeTime_default);
  esm_default.extend(duration_default);
  var formatMilliseconds = (milliseconds) => {
    const hourSec = 60 * 60;
    const minuteSec = 60;
    const seconds = milliseconds / 1e3;
    const hh = Math.floor(seconds / hourSec);
    const hhStr = hh.toString();
    const mm = Math.floor(seconds % hourSec / minuteSec);
    const mmStr = mm.toString();
    const ss = Math.floor(seconds % minuteSec);
    const ssStr = ss.toString();
    if (hh > 0) {
      return `${hhStr}小时${mmStr}分钟${ssStr}秒`;
    } else if (mm > 0) {
      return `${mmStr}分钟${ssStr}秒`;
    } else {
      return `${ssStr}秒`;
    }
  };
  var generateStorageLogTimeKey = (groupId, logName) => `LOG_TIMER_${groupId}_${logName}`;
  var logBegin = (ext, ctx, groupId) => {
    var _a, _b;
    const logName = (_b = (_a = seal.vars.strGet(ctx, "$t记录名称")) == null ? void 0 : _a[0]) != null ? _b : "";
    const key = generateStorageLogTimeKey(groupId, logName);
    const now = Date.now();
    const json = ext.storageGet(key);
    if (json) {
      const old = JSON.parse(json);
      if (old.begin) {
        return {
          success: false,
          error: `记录${logName}已在计时中`
        };
      } else {
        let newInfo = __spreadProps(__spreadValues({}, old), {
          begin: true,
          lastBeginTime: now
        });
        const json2 = JSON.stringify(newInfo);
        ext.storageSet(key, json2);
        return {
          success: true,
          new: false,
          logName,
          lastEndTime: old.lastEndTime,
          totalTime: old.totalTime
        };
      }
    } else {
      const info = {
        begin: true,
        totalTime: 0,
        lastBeginTime: now,
        lastEndTime: now
      };
      const json2 = JSON.stringify(info);
      ext.storageSet(key, json2);
      return { success: true, new: true, logName, lastEndTime: now, totalTime: 0 };
    }
  };
  var logEnd = (ext, ctx, groupId) => {
    var _a, _b;
    const logName = (_b = (_a = seal.vars.strGet(ctx, "$t记录名称")) == null ? void 0 : _a[0]) != null ? _b : "";
    const key = generateStorageLogTimeKey(groupId, logName);
    let json = ext.storageGet(key);
    if (json) {
      const old = JSON.parse(json);
      if (old.begin) {
        const now = Date.now();
        const currentTime = now - old.lastBeginTime;
        const newInfo = __spreadProps(__spreadValues({}, old), {
          begin: false,
          totalTime: old.totalTime + currentTime,
          lastEndTime: now
        });
        const json2 = JSON.stringify(newInfo);
        ext.storageSet(key, json2);
        return {
          success: true,
          logName,
          totalTime: newInfo.totalTime,
          currentTime
        };
      } else {
        return {
          success: false,
          error: ""
        };
      }
    } else {
      return {
        success: false,
        error: `无记录<${logName}>的计时信息`
      };
    }
  };
  function main() {
    let ext = seal.ext.find("log-timer");
    if (!ext) {
      ext = seal.ext.new("log-timer", "JustAnotherID", "2.0.0");
      seal.ext.register(ext);
      ext.onCommandReceived = (ctx, message, cmdArgs) => {
        if (message.messageType === "group" && cmdArgs.command === "log" && cmdArgs.args.length > 0) {
          let arg0 = "";
          let arg1 = "";
          const rawArg0 = cmdArgs.args[0];
          if (rawArg0 === "new" || rawArg0 === "on" || rawArg0 === "off" || rawArg0 === "end" || rawArg0 === "halt") {
            arg0 = rawArg0;
            arg1 = cmdArgs.args[1];
          } else if (rawArg0.startsWith("on")) {
            arg0 = rawArg0.slice(0, 2);
            arg1 = rawArg0.slice(2);
          } else if (rawArg0.startsWith("new") || rawArg0.startsWith("off") || rawArg0.startsWith("end")) {
            arg0 = rawArg0.slice(0, 3);
            arg1 = rawArg0.slice(3);
          } else if (rawArg0.startsWith("halt")) {
            arg0 = rawArg0.slice(0, 4);
            arg1 = rawArg0.slice(4);
          }
          let msg = "";
          switch (arg0) {
            case "new":
            case "on":
              const targetLog = arg1;
              if (isEmpty_default(targetLog)) {
                msg = "未指定记录名称，无法启动计时";
                break;
              }
              seal.vars.strSet(ctx, "$t记录名称", targetLog);
              const beginResult = logBegin(ext, ctx, message.groupId);
              if (beginResult.success === false) {
                msg = beginResult.error;
              } else if (beginResult == null ? void 0 : beginResult.new) {
                const now = esm_default().format("YYYY-MM-DD HH:mm:ss");
                msg = `新记录「${beginResult.logName}」于${now}开始计时`;
              } else {
                const now = esm_default().format("YYYY-MM-DD HH:mm:ss");
                const lastEndTime = esm_default(beginResult.lastEndTime).format("YYYY-MM-DD HH:mm:ss");
                const lastEndTimeDesc = esm_default(beginResult.lastEndTime).fromNow();
                const totalTime = formatMilliseconds(beginResult.totalTime);
                msg = `记录「${beginResult.logName}」于${now}开始计时
截止目前累计时长：${totalTime}
上一次于${lastEndTimeDesc}（${lastEndTime}）停止计时`;
              }
              break;
            case "off":
            case "end":
            case "halt":
              const endResult = logEnd(ext, ctx, message.groupId);
              if (endResult.success) {
                const now = esm_default().format("YYYY-MM-DD HH:mm:ss");
                let currentTime = formatMilliseconds(endResult.currentTime);
                let totalTime = formatMilliseconds(endResult.totalTime);
                msg = `记录「${endResult.logName}」于${now}停止计时
本次时长：${currentTime}
目前累计时长：${totalTime}`;
              } else if (endResult.success === false && !isEmpty_default(endResult.error)) {
                msg = endResult.error;
              }
              break;
          }
          if (msg) {
            seal.replyToSender(ctx, message, msg);
          }
        }
      };
    }
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
