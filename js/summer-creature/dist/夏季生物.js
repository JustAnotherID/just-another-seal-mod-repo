// ==UserScript==
// @name         夏季生物
// @author       JustAnotherID
// @version      1.3.0-alpha
// @description  使用 .夏季生物 帮助 查看帮助，为群里增加夏季生物活动吧！\n1.1.0 - 增加蚊香和蟑螂屋，新增成就，并允许配置活动间隔时间\n1.2.0 - 增加电蚊拍
// @timestamp    2024-06-01 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/summer-creature
// @updateUrl    https://mirror.ghproxy.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/summer-creature/dist/%E5%A4%8F%E5%AD%A3%E7%94%9F%E7%89%A9.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/summer-creature/dist/%E5%A4%8F%E5%AD%A3%E7%94%9F%E7%89%A9.js
// ==/UserScript==

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
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
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js"(exports2, module2) {
      !function(t, e) {
        "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports2, function() {
        "use strict";
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date()) return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = "$isDayjsObject", S = function(t2) {
          return t2 instanceof _ || !(!t2 || !t2[p]);
        }, w = function t2(e2, n2, r2) {
          var i2;
          if (!e2) return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1) return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, O = function(t2, e2) {
          if (S(t2)) return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, b = v;
        b.l = w, b.i = S, b.w = function(t2, e2) {
          return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2) return /* @__PURE__ */ new Date(NaN);
              if (b.u(e2)) return /* @__PURE__ */ new Date();
              if (e2 instanceof Date) return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return b;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = O(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return O(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < O(t2);
          }, m2.$g = function(t2, e2, n2) {
            return b.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
              var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (f2) {
              case h:
                return r2 ? l2(1, 0) : l2(31, 11);
              case c:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === c || o2 === h) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[b.p(t2)]();
          }, m2.add = function(r2, f2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = b.p(f2), y2 = function(t2) {
              var e2 = O(l2);
              return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === c) return this.set(c, this.$M + r2);
            if ($2 === h) return this.set(h, this.$y + r2);
            if ($2 === a) return y2(1);
            if ($2 === o) return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return b.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, d2 = function(t3) {
              return b.s(s2 % 12 || 12, t3, "0");
            }, $2 = f2 || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            };
            return r2.replace(y, function(t3, r3) {
              return r3 || function(t4) {
                switch (t4) {
                  case "YY":
                    return String(e2.$y).slice(-2);
                  case "YYYY":
                    return b.s(e2.$y, 4, "0");
                  case "M":
                    return a2 + 1;
                  case "MM":
                    return b.s(a2 + 1, 2, "0");
                  case "MMM":
                    return h2(n2.monthsShort, a2, c2, 3);
                  case "MMMM":
                    return h2(c2, a2);
                  case "D":
                    return e2.$D;
                  case "DD":
                    return b.s(e2.$D, 2, "0");
                  case "d":
                    return String(e2.$W);
                  case "dd":
                    return h2(n2.weekdaysMin, e2.$W, o2, 2);
                  case "ddd":
                    return h2(n2.weekdaysShort, e2.$W, o2, 3);
                  case "dddd":
                    return o2[e2.$W];
                  case "H":
                    return String(s2);
                  case "HH":
                    return b.s(s2, 2, "0");
                  case "h":
                    return d2(1);
                  case "hh":
                    return d2(2);
                  case "a":
                    return $2(s2, u2, true);
                  case "A":
                    return $2(s2, u2, false);
                  case "m":
                    return String(u2);
                  case "mm":
                    return b.s(u2, 2, "0");
                  case "s":
                    return String(e2.$s);
                  case "ss":
                    return b.s(e2.$s, 2, "0");
                  case "SSS":
                    return b.s(e2.$ms, 3, "0");
                  case "Z":
                    return i2;
                }
                return null;
              }(t3) || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
              return b.m(y2, m3);
            };
            switch (M3) {
              case h:
                $2 = D2() / 12;
                break;
              case c:
                $2 = D2();
                break;
              case f:
                $2 = D2() / 3;
                break;
              case o:
                $2 = (g2 - v2) / 6048e5;
                break;
              case a:
                $2 = (g2 - v2) / 864e5;
                break;
              case u:
                $2 = g2 / n;
                break;
              case s:
                $2 = g2 / e;
                break;
              case i:
                $2 = g2 / t;
                break;
              default:
                $2 = g2;
            }
            return l2 ? $2 : b.a($2);
          }, m2.daysInMonth = function() {
            return this.endOf(c).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2) return this.$L;
            var n2 = this.clone(), r2 = w(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return b.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), k = _.prototype;
        return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
          k[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), O.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, O), t2.$i = true), O;
        }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
          return O(1e3 * t2);
        }, O.en = D[g], O.Ls = D, O.p = {}, O;
      });
    }
  });

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/relativeTime.js
  var require_relativeTime = __commonJS({
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/relativeTime.js"(exports2, module2) {
      !function(r, e) {
        "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
      }(exports2, function() {
        "use strict";
        return function(r, e, t) {
          r = r || {};
          var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
          function i(r2, e2, t2, o2) {
            return n.fromToBase(r2, e2, t2, o2);
          }
          t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
            for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
              var y = h[c];
              y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
              var p = (r.rounding || Math.round)(Math.abs(f));
              if (s = f > 0, p <= y.r || !y.r) {
                p <= 1 && c > 0 && (y = h[c - 1]);
                var v = l[y.l];
                u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
                break;
              }
            }
            if (n2) return a;
            var M = s ? l.future : l.past;
            return "function" == typeof M ? M(a) : M.replace("%s", a);
          }, n.to = function(r2, e2) {
            return i(r2, e2, this, true);
          }, n.from = function(r2, e2) {
            return i(r2, e2, this);
          };
          var d = function(r2) {
            return r2.$u ? t.utc() : t();
          };
          n.toNow = function(r2) {
            return this.to(d(this), r2);
          }, n.fromNow = function(r2) {
            return this.from(d(this), r2);
          };
        };
      });
    }
  });

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/locale/zh-cn.js
  var require_zh_cn = __commonJS({
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/locale/zh-cn.js"(exports2, module2) {
      !function(e, _) {
        "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
      }(exports2, function(e) {
        "use strict";
        function _(e2) {
          return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
        }
        var t = _(e), d = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2, _2) {
          return "W" === _2 ? e2 + "周" : e2 + "日";
        }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e2, _2) {
          var t2 = 100 * e2 + _2;
          return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
        } };
        return t.default.locale(d, null, true), d;
      });
    }
  });

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

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseToString.js
  var INFINITY = 1 / 0;
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray_default(value)) {
      return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var baseToString_default = baseToString;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  var reWhitespace = /\s/;
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var trimmedEndIndex_default = trimmedEndIndex;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  var reTrimStart = /^\s+/;
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var baseTrim_default = baseTrim;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = baseTrim_default(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toFinite.js
  var INFINITY2 = 1 / 0;
  var MAX_INTEGER = 17976931348623157e292;
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber_default(value);
    if (value === INFINITY2 || value === -INFINITY2) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }
  var toFinite_default = toFinite;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toInteger.js
  function toInteger(value) {
    var result = toFinite_default(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  var toInteger_default = toInteger;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

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

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function noop() {
  }
  var noop_default = noop;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFindIndex.js
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }
  var baseFindIndex_default = baseFindIndex;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNaN.js
  function baseIsNaN(value) {
    return value !== value;
  }
  var baseIsNaN_default = baseIsNaN;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_strictIndexOf.js
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  var strictIndexOf_default = strictIndexOf;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIndexOf.js
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
  }
  var baseIndexOf_default = baseIndexOf;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludes.js
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf_default(array, value, 0) > -1;
  }
  var arrayIncludes_default = arrayIncludes;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
  var objectProto4 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto4;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

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

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty4.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

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
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty5.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty6.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty7.call(data, key);
  }
  var hashHas_default = hashHas;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
  var Map = getNative_default(root_default, "Map");
  var Map_default = Map;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash_default(),
      "map": new (Map_default || ListCache_default)(),
      "string": new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toString.js
  function toString(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default = toString;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createRound.js
  var nativeIsFinite = root_default.isFinite;
  var nativeMin = Math.min;
  function createRound(methodName) {
    var func = Math[methodName];
    return function(number, precision) {
      number = toNumber_default(number);
      precision = precision == null ? 0 : nativeMin(toInteger_default(precision), 292);
      if (precision && nativeIsFinite(number)) {
        var pair = (toString_default(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
        pair = (toString_default(value) + "e").split("e");
        return +(pair[0] + "e" + (+pair[1] - precision));
      }
      return func(number);
    };
  }
  var createRound_default = createRound;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
  var Set = getNative_default(root_default, "Set");
  var Set_default = Set;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js
  function SetCache(values2) {
    var index = -1, length = values2 == null ? 0 : values2.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values2[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludesWith.js
  function arrayIncludesWith(array, value, comparator) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (comparator(value, array[index])) {
        return true;
      }
    }
    return false;
  }
  var arrayIncludesWith_default = arrayIncludesWith;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castFunction.js
  function castFunction(value) {
    return typeof value == "function" ? value : identity_default;
  }
  var castFunction_default = castFunction;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseValues.js
  function baseValues(object, props) {
    return arrayMap_default(props, function(key) {
      return object[key];
    });
  }
  var baseValues_default = baseValues;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/values.js
  function values(object) {
    return object == null ? [] : baseValues_default(object, keys_default(object));
  }
  var values_default = values;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  var nativeFloor = Math.floor;
  var nativeRandom = Math.random;
  function baseRandom(lower, upper) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }
  var baseRandom_default = baseRandom;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/random.js
  var freeParseFloat = parseFloat;
  var nativeMin2 = Math.min;
  var nativeRandom2 = Math.random;
  function random(lower, upper, floating) {
    if (floating && typeof floating != "boolean" && isIterateeCall_default(lower, upper, floating)) {
      upper = floating = void 0;
    }
    if (floating === void 0) {
      if (typeof upper == "boolean") {
        floating = upper;
        upper = void 0;
      } else if (typeof lower == "boolean") {
        floating = lower;
        lower = void 0;
      }
    }
    if (lower === void 0 && upper === void 0) {
      lower = 0;
      upper = 1;
    } else {
      lower = toFinite_default(lower);
      if (upper === void 0) {
        upper = lower;
        lower = 0;
      } else {
        upper = toFinite_default(upper);
      }
    }
    if (lower > upper) {
      var temp = lower;
      lower = upper;
      upper = temp;
    }
    if (floating || lower % 1 || upper % 1) {
      var rand = nativeRandom2();
      return nativeMin2(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
    }
    return baseRandom_default(lower, upper);
  }
  var random_default = random;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/round.js
  var round = createRound_default("round");
  var round_default = round;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arraySample.js
  function arraySample(array) {
    var length = array.length;
    return length ? array[baseRandom_default(0, length - 1)] : void 0;
  }
  var arraySample_default = arraySample;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSample.js
  function baseSample(collection) {
    return arraySample_default(values_default(collection));
  }
  var baseSample_default = baseSample;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sample.js
  function sample(collection) {
    var func = isArray_default(collection) ? arraySample_default : baseSample_default;
    return func(collection);
  }
  var sample_default = sample;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/times.js
  var MAX_SAFE_INTEGER3 = 9007199254740991;
  var MAX_ARRAY_LENGTH = 4294967295;
  var nativeMin3 = Math.min;
  function times(n, iteratee) {
    n = toInteger_default(n);
    if (n < 1 || n > MAX_SAFE_INTEGER3) {
      return [];
    }
    var index = MAX_ARRAY_LENGTH, length = nativeMin3(n, MAX_ARRAY_LENGTH);
    iteratee = castFunction_default(iteratee);
    n -= MAX_ARRAY_LENGTH;
    var result = baseTimes_default(length, iteratee);
    while (++index < n) {
      iteratee(index);
    }
    return result;
  }
  var times_default = times;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js
  var INFINITY3 = 1 / 0;
  var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY3) ? noop_default : function(values2) {
    return new Set_default(values2);
  };
  var createSet_default = createSet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUniq.js
  var LARGE_ARRAY_SIZE = 200;
  function baseUniq(array, iteratee, comparator) {
    var index = -1, includes = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
    if (comparator) {
      isCommon = false;
      includes = arrayIncludesWith_default;
    } else if (length >= LARGE_ARRAY_SIZE) {
      var set = iteratee ? null : createSet_default(array);
      if (set) {
        return setToArray_default(set);
      }
      isCommon = false;
      includes = cacheHas_default;
      seen = new SetCache_default();
    } else {
      seen = iteratee ? [] : result;
    }
    outer:
      while (++index < length) {
        var value = array[index], computed = iteratee ? iteratee(value) : value;
        value = comparator || value !== 0 ? value : 0;
        if (isCommon && computed === computed) {
          var seenIndex = seen.length;
          while (seenIndex--) {
            if (seen[seenIndex] === computed) {
              continue outer;
            }
          }
          if (iteratee) {
            seen.push(computed);
          }
          result.push(value);
        } else if (!includes(seen, computed, comparator)) {
          if (seen !== result) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
    return result;
  }
  var baseUniq_default = baseUniq;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
  function uniq(array) {
    return array && array.length ? baseUniq_default(array) : [];
  }
  var uniq_default = uniq;

  // src/types.ts
  var Creature = /* @__PURE__ */ ((Creature2) => {
    Creature2["mosquito"] = "mosquito";
    Creature2["cockroach"] = "cockroach";
    return Creature2;
  })(Creature || {});
  var Achievement = /* @__PURE__ */ ((Achievement2) => {
    Achievement2["Mosquito10Kill"] = "mosquito10Kill";
    Achievement2["Mosquito100Kill"] = "mosquito100Kill";
    Achievement2["Mosquito1000Kill"] = "mosquito1000Kill";
    Achievement2["Mosquito10000Kill"] = "mosquito10000Kill";
    Achievement2["Cockroach10Kill"] = "cockroach10Kill";
    Achievement2["Cockroach100Kill"] = "cockroach100Kill";
    Achievement2["Cockroach1000Kill"] = "cockroach1000Kill";
    Achievement2["Cockroach10000Kill"] = "cockroach10000Kill";
    Achievement2["Mosquito100Release"] = "mosquito100Release";
    Achievement2["Mosquito1000Release"] = "mosquito1000Release";
    Achievement2["Mosquito10000Release"] = "mosquito10000Release";
    Achievement2["Cockroach100Release"] = "cockroach100Release";
    Achievement2["Cockroach1000Release"] = "cockroach1000Release";
    Achievement2["Cockroach10000Release"] = "cockroach10000Release";
    return Achievement2;
  })(Achievement || {});

  // src/store.ts
  var getGroups = (ext) => {
    let temp = ext.storageGet("summer_creature_groups");
    if (temp) {
      return JSON.parse(temp);
    } else {
      return [];
    }
  };
  var setGroups = (ext, groups) => {
    ext.storageSet("summer_creature_groups", JSON.stringify(uniq_default(groups)));
  };
  var removeGroup = (ext, group) => {
    let groups = getGroups(ext);
    setGroups(ext, groups.filter((g) => g !== group));
  };
  var getGroupState = (ext, group) => {
    let temp = ext.storageGet("summer_creature_group_status::" + group);
    if (temp) {
      const groupState = JSON.parse(temp);
      return groupState;
    }
    return {
      endpointUserId: "",
      targetUserId: "",
      targetGroupId: "",
      targetGuildId: "",
      installed: false
    };
  };
  var setGroupState = (ext, group, groupState) => {
    ext.storageSet("summer_creature_group_status::" + group, JSON.stringify(groupState));
    let groups = getGroups(ext);
    groups.push(group);
    setGroups(ext, groups);
  };
  var getUserInfo = (ext, userId) => {
    let temp = ext.storageGet("summer_creature_user_info::" + userId);
    if (temp) {
      return JSON.parse(temp);
    } else {
      return {
        points: {},
        releases: {},
        items: {
          electricSwatter: false
        },
        achievements: {
          mosquito10Kill: false,
          mosquito100Kill: false,
          mosquito1000Kill: false,
          mosquito10000Kill: false,
          cockroach10Kill: false,
          cockroach100Kill: false,
          cockroach1000Kill: false,
          cockroach10000Kill: false,
          mosquito100Release: false,
          mosquito1000Release: false,
          mosquito10000Release: false,
          cockroach100Release: false,
          cockroach1000Release: false,
          cockroach10000Release: false
        }
      };
    }
  };
  var setUserInfos = (ext, userId, userInfo) => {
    ext.storageSet("summer_creature_user_info::" + userId, JSON.stringify(userInfo));
  };
  var addUserCreaturePoint = (ext, userId, creature, add) => {
    var _a;
    let info = getUserInfo(ext, userId);
    let points = info.points;
    points[creature] = ((_a = points[creature]) != null ? _a : 0) + add;
    info.points = points;
    let newAchievements = [];
    let newItems = [];
    switch (creature) {
      case "mosquito" /* mosquito */:
        if (points["mosquito" /* mosquito */] >= 10 && !info.achievements.mosquito10Kill) {
          info.achievements.mosquito10Kill = true;
          newAchievements.push("mosquito10Kill" /* Mosquito10Kill */);
          info.items.electricSwatter = true;
          newItems.push("electricSwatter" /* electricSwatter */);
        }
        if (points["mosquito" /* mosquito */] >= 100 && !info.achievements.mosquito100Kill) {
          info.achievements.mosquito100Kill = true;
          newAchievements.push("mosquito100Kill" /* Mosquito100Kill */);
          newItems.push("mosquitoRepellentIncense" /* mosquitoRepellentIncense */);
        }
        if (points["mosquito" /* mosquito */] >= 1e3 && !info.achievements.mosquito1000Kill) {
          info.achievements.mosquito1000Kill = true;
          newAchievements.push("mosquito1000Kill" /* Mosquito1000Kill */);
        }
        if (points["mosquito" /* mosquito */] >= 1e4 && !info.achievements.mosquito10000Kill) {
          info.achievements.mosquito10000Kill = true;
          newAchievements.push("mosquito10000Kill" /* Mosquito10000Kill */);
        }
        break;
      case "cockroach" /* cockroach */:
        if (points["cockroach" /* cockroach */] >= 100 && !info.achievements.cockroach100Kill) {
          info.achievements.cockroach100Kill = true;
          newAchievements.push("cockroach100Kill" /* Cockroach100Kill */);
          newItems.push("cockroachTrap" /* cockroachTrap */);
        }
        if (points["cockroach" /* cockroach */] >= 1e3 && !info.achievements.cockroach1000Kill) {
          info.achievements.cockroach1000Kill = true;
          newAchievements.push("cockroach1000Kill" /* Cockroach1000Kill */);
        }
        if (points["cockroach" /* cockroach */] >= 1e4 && !info.achievements.cockroach10000Kill) {
          info.achievements.cockroach10000Kill = true;
          newAchievements.push("cockroach10000Kill" /* Cockroach10000Kill */);
        }
        break;
    }
    setUserInfos(ext, userId, info);
    return [newAchievements, newItems];
  };
  var addUserReleaseCount = (ext, userId, creature, add) => {
    var _a;
    let info = getUserInfo(ext, userId);
    let releases = info.releases;
    releases[creature] = ((_a = releases[creature]) != null ? _a : 0) + add;
    info.releases = releases;
    let newAchievements = [];
    switch (creature) {
      case "mosquito" /* mosquito */:
        if (releases["mosquito" /* mosquito */] >= 100 && !info.achievements.mosquito100Release) {
          info.achievements.mosquito100Release = true;
          newAchievements.push("mosquito100Release" /* Mosquito100Release */);
        }
        if (releases["mosquito" /* mosquito */] >= 1e3 && !info.achievements.mosquito1000Release) {
          info.achievements.mosquito1000Release = true;
          newAchievements.push("mosquito1000Release" /* Mosquito1000Release */);
        }
        if (releases["mosquito" /* mosquito */] >= 1e4 && !info.achievements.mosquito10000Release) {
          info.achievements.mosquito10000Release = true;
          newAchievements.push("mosquito10000Release" /* Mosquito10000Release */);
        }
        break;
      case "cockroach" /* cockroach */:
        if (releases["cockroach" /* cockroach */] >= 100 && !info.achievements.cockroach100Release) {
          info.achievements.cockroach100Release = true;
          newAchievements.push("cockroach100Release" /* Cockroach100Release */);
        }
        if (releases["cockroach" /* cockroach */] >= 1e3 && !info.achievements.cockroach1000Release) {
          info.achievements.cockroach1000Release = true;
          newAchievements.push("cockroach1000Release" /* Cockroach1000Release */);
        }
        if (releases["cockroach" /* cockroach */] >= 1e4 && !info.achievements.cockroach10000Release) {
          info.achievements.cockroach10000Release = true;
          newAchievements.push("cockroach10000Release" /* Cockroach10000Release */);
        }
        break;
    }
    setUserInfos(ext, userId, info);
    return newAchievements;
  };

  // src/consts.ts
  var VERSION = "1.3.0-alpha";
  var MAX_CREATURE_COUNT = 16;
  var DefaultCreatureIntervals = {
    ["mosquito" /* mosquito */]: 60 * 60,
    ["cockroach" /* cockroach */]: 60 * 60 * 3
  };
  var SuccessfulAttackProbabilities = {
    ["mosquito" /* mosquito */]: 60,
    ["cockroach" /* cockroach */]: 40
  };
  var DefenseFailDescList = {
    ["mosquito" /* mosquito */]: [
      ...times_default(5, () => "你试图拍死🦟，但是它的嗡嗡声突然不见了"),
      ...times_default(5, () => "你试图拍死🦟，但找了半天也没看见一只"),
      ...times_default(5, () => "你试图拍死🦟，但它很快飞远消失了"),
      "你试图拍死🦟，结果反而被叮了几个包"
    ],
    ["cockroach" /* cockroach */]: [
      ...times_default(10, () => "你试图踩死🪳，但找了半天也没看见一只"),
      ...times_default(10, () => "你试图踩死🪳，但它很快钻进角落消失了"),
      "你试图踩死🪳，它突然飞起来扑向你，趁着吓了一跳的你试图挡住的时候逃走了"
    ]
  };
  var ConsumableValidityPeriod = {
    ["mosquitoRepellentIncense" /* mosquitoRepellentIncense */]: 60 * 60 * 8,
    ["cockroachTrap" /* cockroachTrap */]: 60 * 60 * 8
  };

  // src/utils.ts
  var isInstalled = (ext, groupId) => {
    let state = getGroupState(ext, groupId);
    return state.installed;
  };
  var getCreature = (creature, text = false) => {
    switch (creature) {
      case "mosquito" /* mosquito */:
        return text ? "蚊子" : "🦟";
      case "cockroach" /* cockroach */:
        return text ? "蟑螂" : "🪳";
    }
  };
  var getCreatures = (creature, count) => {
    var _a;
    return (_a = times_default(count, () => getCreature(Creature[creature])).join("")) != null ? _a : "";
  };
  var getAchievementDesc = (achievement) => {
    switch (achievement) {
      case "mosquito10Kill" /* Mosquito10Kill */:
        return "十蚊斩";
      case "mosquito100Kill" /* Mosquito100Kill */:
        return "百蚊斩";
      case "mosquito1000Kill" /* Mosquito1000Kill */:
        return "千蚊斩";
      case "mosquito10000Kill" /* Mosquito10000Kill */:
        return "万蚊斩";
      case "cockroach10Kill" /* Cockroach10Kill */:
        return "十蟑斩";
      case "cockroach100Kill" /* Cockroach100Kill */:
        return "百蟑斩";
      case "cockroach1000Kill" /* Cockroach1000Kill */:
        return "千蟑斩";
      case "cockroach10000Kill" /* Cockroach10000Kill */:
        return "万蟑斩";
      case "mosquito100Release" /* Mosquito100Release */:
        return "蚊子之友";
      case "mosquito1000Release" /* Mosquito1000Release */:
        return "蚊子间谍";
      case "mosquito10000Release" /* Mosquito10000Release */:
        return "人形蚊子";
      case "cockroach100Release" /* Cockroach100Release */:
        return "蟑螂之友";
      case "cockroach1000Release" /* Cockroach1000Release */:
        return "蟑螂间谍";
      case "cockroach10000Release" /* Cockroach10000Release */:
        return "人形蟑螂";
    }
  };
  var creatureCountByAction = (state, action) => {
    var _a, _b, _c, _d;
    switch (action) {
      case "拍" /* beat */:
        return [(_b = (_a = state.attacked) == null ? void 0 : _a["mosquito" /* mosquito */]) != null ? _b : 0, "mosquito" /* mosquito */];
      case "踩" /* stepOn */:
        return [(_d = (_c = state.attacked) == null ? void 0 : _c["cockroach" /* cockroach */]) != null ? _d : 0, "cockroach" /* cockroach */];
      default:
        return [0, void 0];
    }
  };
  var getDefenseFailDesc = (creature) => {
    const descList = DefenseFailDescList[creature];
    return descList[random_default(0, descList.length - 1)];
  };
  var getItemDesc = (item) => {
    switch (item) {
      case "electricSwatter" /* electricSwatter */:
        return ["电蚊拍", "对蚊子的命中率和杀伤提升了"];
      case "mosquitoRepellentIncense" /* mosquitoRepellentIncense */:
        return ["蚊香", "可以点蚊香了"];
      case "cockroachTrap" /* cockroachTrap */:
        return ["蟑螂屋", "可以放蟑螂屋了"];
    }
  };

  // src/handle.ts
  var import_dayjs = __toESM(require_dayjs_min());
  var import_relativeTime = __toESM(require_relativeTime());
  var import_zh_cn = __toESM(require_zh_cn());

  // src/config.ts
  var CreatureIntervals = {
    ["mosquito" /* mosquito */]: (ext) => {
      const interval = round_default(seal.ext.getFloatConfig(ext, "蚊子活动间隔/min（会四舍五入为整数）"));
      if (interval <= 0) {
        return DefaultCreatureIntervals["mosquito" /* mosquito */];
      }
      return interval * 60;
    },
    ["cockroach" /* cockroach */]: (ext) => {
      const interval = round_default(seal.ext.getFloatConfig(ext, "蟑螂活动间隔/min（会四舍五入为整数）"));
      if (interval <= 0) {
        return DefaultCreatureIntervals["cockroach" /* cockroach */];
      }
      return interval * 60;
    }
  };

  // src/handle.ts
  import_dayjs.default.locale("zh-cn");
  import_dayjs.default.extend(import_relativeTime.default);
  var statusHandle = (ext, groupId, userId) => {
    var _a, _b;
    const state = getGroupState(ext, groupId);
    if (state.installed) {
      let status = "夏季生物活动中——";
      if (state.attacked) {
        let attackedDesc = "";
        Object.entries(state.attacked).forEach(([creature, count]) => {
          if (count > 0) {
            attackedDesc += `
${getCreatures(Creature[creature], count)}`;
          }
        });
        if (attackedDesc !== "") {
          status += attackedDesc;
        }
      }
      let forecastDesc = "";
      const now = (0, import_dayjs.default)();
      for (let creature in Creature) {
        const c = Creature[creature];
        const interval = CreatureIntervals[creature](ext);
        const lastTime = (_b = (_a = state == null ? void 0 : state.lastAttacked) == null ? void 0 : _a[c]) != null ? _b : now.unix() - interval;
        const nextTime = lastTime + interval;
        forecastDesc += `
${getCreature(Creature[creature])}：${import_dayjs.default.unix(nextTime).from(now)}`;
      }
      if (forecastDesc !== "") {
        status += "\n\n袭击预报:" + forecastDesc;
      }
      const userInfo = getUserInfo(ext, userId);
      let userPointsDesc = [];
      Object.entries(userInfo.points).forEach(([creature, point]) => {
        if (point > 0) {
          userPointsDesc.push(`${getCreature(Creature[creature])} ${point} 只`);
        }
      });
      if (userPointsDesc.length > 0) {
        status += "\n\n你的战果：" + userPointsDesc.join(" ");
      }
      let userAchievements = [];
      for (let a in Achievement) {
        if (userInfo.achievements[Achievement[a]]) {
          userAchievements.push(`「${getAchievementDesc(Achievement[a])}」`);
        }
      }
      if (userAchievements.length > 0) {
        status += "\n\n成就：" + userAchievements.join("");
      }
      return status;
    } else {
      return "夏季生物还未出现！";
    }
  };
  var startHandle = (ext, epUserId, groupId, guildId, userId) => {
    let state = getGroupState(ext, groupId);
    if (state.installed) {
      return "夏季生物已经开始活动了！";
    }
    state.installed = true;
    state.endpointUserId = epUserId;
    state.targetGroupId = groupId;
    state.targetGuildId = guildId;
    state.targetUserId = userId;
    setGroupState(ext, groupId, state);
    return `夏季生物开始活动了……`;
  };
  var stopHandle = (ext, groupId) => {
    let state = getGroupState(ext, groupId);
    if (!state.installed) {
      return "夏季生物还未出现！";
    }
    state.installed = false;
    setGroupState(ext, groupId, state);
    removeGroup(ext, groupId);
    return `神秘的力量让群里不再有讨厌的生物活动了……`;
  };
  var manualAttackHandle = (ext, groupId, userId, creature) => {
    let state = getGroupState(ext, groupId);
    if (!state.installed) {
      return ["夏季生物还未出现！", 0, 0];
    }
    return attackHandle(ext, groupId, userId, creature, state, "manual");
  };
  var timerAttackHandle = (ext) => {
    var _a, _b;
    const nowRow = (0, import_dayjs.default)();
    const now = nowRow.unix();
    const epMap = {};
    const eps = seal.getEndPoints();
    for (let ep of eps) {
      epMap[ep.userId] = ep;
    }
    for (let groupId of getGroups(ext)) {
      const groupState = getGroupState(ext, groupId);
      if (groupState.installed) {
        for (let creature in Creature) {
          const c = Creature[creature];
          const interval = CreatureIntervals[c](ext);
          const lastTime = (_b = (_a = groupState.lastAttacked) == null ? void 0 : _a[c]) != null ? _b : now - interval;
          if (lastTime + interval <= now) {
            const ep = epMap[groupState.endpointUserId];
            if (ep) {
              autoAttackHandle(ext, ep, c, groupState);
            }
          }
        }
      }
    }
  };
  var autoAttackHandle = (ext, ep, c, groupState, mode = "auto", migrate = 0) => {
    const now = (0, import_dayjs.default)();
    console.log(`夏季生物袭击：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(c)}，模式 ${mode}`);
    const [result, _count, _migrate] = attackHandle(ext, groupState.targetGroupId, "", c, groupState, mode, migrate);
    if (result !== "") {
      const msg = seal.newMessage();
      msg.messageType = "group";
      msg.groupId = groupState.targetGroupId;
      msg.guildId = groupState.targetGuildId;
      msg.sender.userId = groupState.targetUserId;
      const ctx = seal.createTempCtx(ep, msg);
      seal.replyToSender(ctx, msg, result);
    }
  };
  var attackOtherGroup = (ext, creature, fromGroupId, migrate) => {
    const now = (0, import_dayjs.default)();
    console.log(`夏季生物转移：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，来源群 ${fromGroupId}，生物 ${getCreature(creature)}`);
    const epMap = {};
    const eps = seal.getEndPoints();
    for (let ep of eps) {
      epMap[ep.userId] = ep;
    }
    const groups = getGroups(ext).filter((g) => g !== fromGroupId);
    if (groups.length > 0) {
      const randomGroup = sample_default(groups);
      const groupState = getGroupState(ext, randomGroup);
      const ep = epMap[groupState.endpointUserId];
      if (ep) {
        autoAttackHandle(ext, ep, creature, groupState, "other-group", migrate);
      }
    }
  };
  var attackHandle = (ext, groupId, userId, creature, groupStatus = void 0, mode = "auto", count = 0) => {
    var _a, _b, _c, _d, _e, _f, _g;
    let state = groupStatus != null ? groupStatus : getGroupState(ext, groupId);
    if (count === 0) {
      if (!((_a = state.attacked) == null ? void 0 : _a[creature])) {
        count = random_default(3, 10);
      } else {
        const currentCount = state.attacked[creature];
        if (currentCount < MAX_CREATURE_COUNT) {
          count = Math.min(random_default(3, 5), MAX_CREATURE_COUNT - currentCount);
        } else {
          count = 0;
        }
      }
    }
    state.lastAttacked = __spreadProps(__spreadValues({}, state.lastAttacked), { [creature]: (0, import_dayjs.default)().unix() });
    let result = "";
    let migrate = 0;
    if (count > 0) {
      if (mode !== "other-group") {
        switch (creature) {
          case "mosquito" /* mosquito */:
            const mosquitoMark = (_c = (_b = state.item) == null ? void 0 : _b.mosquitoRepellentIncense) != null ? _c : false;
            if (mosquitoMark) {
              const consumableTime = state.consumableTime.mosquitoRepellentIncense;
              if (consumableTime + ConsumableValidityPeriod["mosquitoRepellentIncense" /* mosquitoRepellentIncense */] > (0, import_dayjs.default)().unix()) {
                migrate = count > 2 ? random_default(2, count) : 2;
                count -= migrate;
                attackOtherGroup(ext, creature, groupId, migrate);
              }
            }
            break;
          case "cockroach" /* cockroach */:
            const cockroachMark = (_e = (_d = state.item) == null ? void 0 : _d.cockroachTrap) != null ? _e : false;
            if (cockroachMark) {
              const consumableTime = state.consumableTime.cockroachTrap;
              if (consumableTime + ConsumableValidityPeriod["cockroachTrap" /* cockroachTrap */] > (0, import_dayjs.default)().unix()) {
                migrate = count > 3 ? random_default(3, count) : 3;
                count -= migrate;
              }
            }
            break;
        }
      }
      state.attacked = __spreadProps(__spreadValues({}, state.attacked), {
        [creature]: ((_g = (_f = state.attacked) == null ? void 0 : _f[creature]) != null ? _g : 0) + count
      });
      result = getCreatures(creature, state.attacked[creature]);
      if (migrate > 0) {
        switch (creature) {
          case "mosquito" /* mosquito */:
            result += `
[蚊香起效了，有 ${migrate} 只被驱赶去别的地方了]`;
            break;
          case "cockroach" /* cockroach */:
            result += `
[蟑螂屋起效了，有 ${migrate} 只被新粘住了]`;
            break;
        }
      }
      if (mode === "other-group") {
        const creatureName = getCreature(creature, true);
        result = `有 ${count} 只 ${creatureName} 从其他地方过来了，当前活动中的${creatureName}：
${result}`;
      } else if (mode === "manual") {
        const newAchievements = addUserReleaseCount(ext, userId, creature, count);
        if (newAchievements.length > 0) {
          result += "\n获得成就" + newAchievements.map((it) => `「${getAchievementDesc(it)}」`).join("");
        }
      }
    }
    setGroupState(ext, groupId, state);
    return [result, count, migrate];
  };
  var defenseHandle = (ext, groupId, userId, action) => {
    let result = void 0;
    let state = getGroupState(ext, groupId);
    let killed = 0;
    if (state.installed && state.attacked) {
      let [num, creature] = creatureCountByAction(state, action);
      if (num > 0) {
        result = "";
        const userInfo = getUserInfo(ext, userId);
        let success;
        if (creature === "mosquito" /* mosquito */ && userInfo.items.electricSwatter) {
          success = random_default(1, 100) <= Math.min(SuccessfulAttackProbabilities["mosquito" /* mosquito */] + 20, 100);
        } else {
          success = random_default(1, 100) <= SuccessfulAttackProbabilities[creature];
        }
        if (success) {
          const creatureDesc = getCreature(creature);
          if (creature === "mosquito" /* mosquito */ && userInfo.items.electricSwatter) {
            result += "使用电蚊拍，";
            killed = Math.min(random_default(3, 8), num);
          } else {
            killed = Math.min(random_default(1, 3), num);
          }
          state.attacked[creature] -= killed;
          result += `你成功${action}死了 ${killed} 只${creatureDesc}`;
          if (state.attacked[creature] <= 0) {
            result += `
已经没有${creatureDesc}在活动了`;
          } else {
            result += `，还有 ${state.attacked[creature]} 只 ${creatureDesc} 正在活动`;
          }
          const [newAchievements, newItems] = addUserCreaturePoint(ext, userId, creature, killed);
          if (newAchievements.length > 0) {
            result += "\n获得成就" + newAchievements.map((it) => `「${getAchievementDesc(it)}」`).join("");
          }
          if (newItems.length > 0) {
            result += "\n解锁" + newItems.map((it) => {
              const [itemName, itemDesc] = getItemDesc(it);
              return `「${itemName}」（${itemDesc}）`;
            }).join("");
          }
        } else {
          result = getDefenseFailDesc(creature);
        }
      }
    }
    if (killed > 0) {
      setGroupState(ext, groupId, state);
    }
    return result;
  };
  var useConsumableHandle = (ext, groupId, userId, consumable) => {
    var _a, _b, _c;
    const state = getGroupState(ext, groupId);
    if (!state.installed) {
      return "夏季生物还未出现，无法使用！";
    }
    const now = (0, import_dayjs.default)();
    const consumableDesc = getItemDesc(consumable);
    const consumableMark = (_a = state.item) == null ? void 0 : _a[consumable];
    const consumableTime = (_c = (_b = state.consumableTime) == null ? void 0 : _b[consumable]) != null ? _c : now.unix();
    if (consumableMark && consumableTime + ConsumableValidityPeriod[consumable] > now.unix()) {
      return `本群已经放置过${consumableDesc}了！`;
    }
    let userInfo = getUserInfo(ext, userId);
    switch (consumable) {
      case "mosquitoRepellentIncense" /* mosquitoRepellentIncense */:
        if (!userInfo.achievements.mosquito100Kill) {
          return "你还没有解锁蚊香，继续拍死更多蚊子吧";
        } else {
          state.item = __spreadProps(__spreadValues({}, state.item), {
            ["mosquitoRepellentIncense" /* mosquitoRepellentIncense */]: true
          });
          state.consumableTime = __spreadProps(__spreadValues({}, state.consumableTime), {
            ["mosquitoRepellentIncense" /* mosquitoRepellentIncense */]: now.unix()
          });
        }
        break;
      case "cockroachTrap" /* cockroachTrap */:
        if (!userInfo.achievements.cockroach100Kill) {
          return "你还没有解锁蟑螂屋，继续踩死更多蟑螂吧";
        } else {
          state.item = __spreadProps(__spreadValues({}, state.item), {
            ["cockroachTrap" /* cockroachTrap */]: true
          });
          state.consumableTime = __spreadProps(__spreadValues({}, state.consumableTime), {
            ["cockroachTrap" /* cockroachTrap */]: now.unix()
          });
        }
        break;
      default:
        return "未知的物品！";
    }
    setGroupState(ext, groupId, state);
    return `成功在本群放置${consumableDesc}！`;
  };

  // src/index.ts
  var timer = void 0;
  var startTimer = (ext) => {
    if (timer === void 0) {
      timer = setInterval(() => {
        timerAttackHandle(ext);
      }, 1e3 * 30);
    }
  };
  var helpDesc = `夏季生物
.夏季生物 // 查看当前状态
.夏季生物 (开始|停止) // 夏季生物开始/停止活动，开始后会定期出没
.夏季生物 (帮助|help) // 查看帮助
.夏季生物 释放 (蚊子|蟑螂) // 手动向群里释放生物

当有对应生物活动时，可以使用如下命令攻击：
#拍 // 攻击蚊子
#踩 // 攻击蟑螂

可以解锁更多命令
#点蚊香
#放蟑螂屋
`;
  function main() {
    let ext = seal.ext.find("summer-creature");
    if (!ext) {
      ext = seal.ext.new("summer-creature", "JustAnotherID", VERSION);
      seal.ext.register(ext);
    }
    const cmdSummerCreature = seal.ext.newCmdItemInfo();
    cmdSummerCreature.name = "夏季生物";
    cmdSummerCreature.help = helpDesc;
    cmdSummerCreature.solve = (ctx, msg, cmdArgs) => {
      if (msg.messageType !== "group") {
        seal.replyToSender(ctx, msg, "夏季生物只能在群内出没");
        return seal.ext.newCmdExecuteResult(true);
      }
      let val = cmdArgs.getArgN(1);
      switch (val) {
        case "help":
        case "帮助":
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
        case "开始":
        case "开启":
          seal.replyToSender(ctx, msg, startHandle(ext, ctx.endPoint.userId, msg.groupId, msg.guildId, msg.sender.userId));
          return seal.ext.newCmdExecuteResult(true);
        case "停止":
        case "关闭":
          seal.replyToSender(ctx, msg, stopHandle(ext, msg.groupId));
          return seal.ext.newCmdExecuteResult(true);
        case "释放":
          let creatureCmd = cmdArgs.getArgN(2);
          let creature = void 0;
          switch (creatureCmd) {
            case "蚊子":
              creature = "mosquito" /* mosquito */;
              break;
            case "蟑螂":
              creature = "cockroach" /* cockroach */;
              break;
            default:
              seal.replyToSender(ctx, msg, "当前不支持该生物");
              return seal.ext.newCmdExecuteResult(true);
          }
          let [result, count, migrate] = manualAttackHandle(ext, msg.groupId, msg.sender.userId, creature);
          const creatureName = getCreature(creature, true);
          result = `<${msg.sender.nickname}>向群里释放了 ${count + migrate} 只 ${creatureName}，当前活动中的${creatureName}：
${result}`;
          seal.replyToSender(ctx, msg, result);
          return seal.ext.newCmdExecuteResult(true);
        default:
          seal.replyToSender(ctx, msg, statusHandle(ext, msg.groupId, msg.sender.userId));
          return seal.ext.newCmdExecuteResult(true);
      }
    };
    ext.cmdMap["夏季生物"] = cmdSummerCreature;
    ext.onNotCommandReceived = (ctx, msg) => {
      let message = msg.message.trim();
      if (isInstalled(ext, msg.groupId)) {
        let emptyReply = false;
        let result;
        if (message === "#拍" || message === "#拍死") {
          result = defenseHandle(ext, msg.groupId, msg.sender.userId, "拍" /* beat */);
          emptyReply = true;
        } else if (message === "#踩" || message === "#踩死") {
          result = defenseHandle(ext, msg.groupId, msg.sender.userId, "踩" /* stepOn */);
          emptyReply = true;
        } else if (message === "#踩" || message === "#踩死") {
        } else if (message === "#点蚊香" || message === "#放蚊香") {
          result = useConsumableHandle(ext, msg.groupId, msg.sender.userId, "mosquitoRepellentIncense" /* mosquitoRepellentIncense */);
        } else if (message === "#放蟑螂屋") {
          result = useConsumableHandle(ext, msg.groupId, msg.sender.userId, "cockroachTrap" /* cockroachTrap */);
        }
        if (result) {
          seal.replyToSender(ctx, msg, result);
        } else if (emptyReply) {
          seal.replyToSender(ctx, msg, "对着空气输出了一番呢……");
        }
      }
    };
    seal.ext.registerFloatConfig(ext, "蚊子活动间隔/min（会四舍五入为整数）", DefaultCreatureIntervals["mosquito" /* mosquito */] / 60);
    seal.ext.registerFloatConfig(ext, "蟑螂活动间隔/min（会四舍五入为整数）", DefaultCreatureIntervals["cockroach" /* cockroach */] / 60);
    startTimer(ext);
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
