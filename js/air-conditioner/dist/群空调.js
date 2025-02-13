// ==UserScript==
// @name         群空调
// @author       JustAnotherID
// @version      1.2.3
// @description  使用 .空调 help 查看帮助，为群里安装空调吧（？\n 1.2.1 - 增加空调状态提醒
// @timestamp    2025-02-13 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/air-conditioner
// @updateUrl    https://ghproxy.justanotherid.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/air-conditioner/dist/%E7%BE%A4%E7%A9%BA%E8%B0%83.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/air-conditioner/dist/%E7%BE%A4%E7%A9%BA%E8%B0%83.js
// ==/UserScript==

(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
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
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
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

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/locale/zh-cn.js
  var require_zh_cn = __commonJS({
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/locale/zh-cn.js"(exports, module) {
      !function(e, _) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
      }(exports, function(e) {
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

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/relativeTime.js
  var require_relativeTime = __commonJS({
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/relativeTime.js"(exports, module) {
      !function(r, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
      }(exports, function() {
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

  // node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/duration.js
  var require_duration = __commonJS({
    "node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/plugin/duration.js"(exports, module) {
      !function(t, s) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = s() : "function" == typeof define && define.amd ? define(s) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_duration = s();
      }(exports, function() {
        "use strict";
        var t, s, n = 1e3, i = 6e4, e = 36e5, r = 864e5, o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, d = 2628e6, a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u, months: d, days: r, hours: e, minutes: i, seconds: n, milliseconds: 1, weeks: 6048e5 }, c = function(t2) {
          return t2 instanceof g;
        }, f = function(t2, s2, n2) {
          return new g(t2, n2, s2.$l);
        }, m = function(t2) {
          return s.p(t2) + "s";
        }, l = function(t2) {
          return t2 < 0;
        }, $ = function(t2) {
          return l(t2) ? Math.ceil(t2) : Math.floor(t2);
        }, y = function(t2) {
          return Math.abs(t2);
        }, v = function(t2, s2) {
          return t2 ? l(t2) ? { negative: true, format: "" + y(t2) + s2 } : { negative: false, format: "" + t2 + s2 } : { negative: false, format: "" };
        }, g = function() {
          function l2(t2, s2, n2) {
            var i2 = this;
            if (this.$d = {}, this.$l = n2, void 0 === t2 && (this.$ms = 0, this.parseFromMilliseconds()), s2) return f(t2 * h[m(s2)], this);
            if ("number" == typeof t2) return this.$ms = t2, this.parseFromMilliseconds(), this;
            if ("object" == typeof t2) return Object.keys(t2).forEach(function(s3) {
              i2.$d[m(s3)] = t2[s3];
            }), this.calMilliseconds(), this;
            if ("string" == typeof t2) {
              var e2 = t2.match(a);
              if (e2) {
                var r2 = e2.slice(2).map(function(t3) {
                  return null != t3 ? Number(t3) : 0;
                });
                return this.$d.years = r2[0], this.$d.months = r2[1], this.$d.weeks = r2[2], this.$d.days = r2[3], this.$d.hours = r2[4], this.$d.minutes = r2[5], this.$d.seconds = r2[6], this.calMilliseconds(), this;
              }
            }
            return this;
          }
          var y2 = l2.prototype;
          return y2.calMilliseconds = function() {
            var t2 = this;
            this.$ms = Object.keys(this.$d).reduce(function(s2, n2) {
              return s2 + (t2.$d[n2] || 0) * h[n2];
            }, 0);
          }, y2.parseFromMilliseconds = function() {
            var t2 = this.$ms;
            this.$d.years = $(t2 / u), t2 %= u, this.$d.months = $(t2 / d), t2 %= d, this.$d.days = $(t2 / r), t2 %= r, this.$d.hours = $(t2 / e), t2 %= e, this.$d.minutes = $(t2 / i), t2 %= i, this.$d.seconds = $(t2 / n), t2 %= n, this.$d.milliseconds = t2;
          }, y2.toISOString = function() {
            var t2 = v(this.$d.years, "Y"), s2 = v(this.$d.months, "M"), n2 = +this.$d.days || 0;
            this.$d.weeks && (n2 += 7 * this.$d.weeks);
            var i2 = v(n2, "D"), e2 = v(this.$d.hours, "H"), r2 = v(this.$d.minutes, "M"), o2 = this.$d.seconds || 0;
            this.$d.milliseconds && (o2 += this.$d.milliseconds / 1e3, o2 = Math.round(1e3 * o2) / 1e3);
            var u2 = v(o2, "S"), d2 = t2.negative || s2.negative || i2.negative || e2.negative || r2.negative || u2.negative, a2 = e2.format || r2.format || u2.format ? "T" : "", h2 = (d2 ? "-" : "") + "P" + t2.format + s2.format + i2.format + a2 + e2.format + r2.format + u2.format;
            return "P" === h2 || "-P" === h2 ? "P0D" : h2;
          }, y2.toJSON = function() {
            return this.toISOString();
          }, y2.format = function(t2) {
            var n2 = t2 || "YYYY-MM-DDTHH:mm:ss", i2 = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
            return n2.replace(o, function(t3, s2) {
              return s2 || String(i2[t3]);
            });
          }, y2.as = function(t2) {
            return this.$ms / h[m(t2)];
          }, y2.get = function(t2) {
            var s2 = this.$ms, n2 = m(t2);
            return "milliseconds" === n2 ? s2 %= 1e3 : s2 = "weeks" === n2 ? $(s2 / h[n2]) : this.$d[n2], s2 || 0;
          }, y2.add = function(t2, s2, n2) {
            var i2;
            return i2 = s2 ? t2 * h[m(s2)] : c(t2) ? t2.$ms : f(t2, this).$ms, f(this.$ms + i2 * (n2 ? -1 : 1), this);
          }, y2.subtract = function(t2, s2) {
            return this.add(t2, s2, true);
          }, y2.locale = function(t2) {
            var s2 = this.clone();
            return s2.$l = t2, s2;
          }, y2.clone = function() {
            return f(this.$ms, this);
          }, y2.humanize = function(s2) {
            return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s2);
          }, y2.valueOf = function() {
            return this.asMilliseconds();
          }, y2.milliseconds = function() {
            return this.get("milliseconds");
          }, y2.asMilliseconds = function() {
            return this.as("milliseconds");
          }, y2.seconds = function() {
            return this.get("seconds");
          }, y2.asSeconds = function() {
            return this.as("seconds");
          }, y2.minutes = function() {
            return this.get("minutes");
          }, y2.asMinutes = function() {
            return this.as("minutes");
          }, y2.hours = function() {
            return this.get("hours");
          }, y2.asHours = function() {
            return this.as("hours");
          }, y2.days = function() {
            return this.get("days");
          }, y2.asDays = function() {
            return this.as("days");
          }, y2.weeks = function() {
            return this.get("weeks");
          }, y2.asWeeks = function() {
            return this.as("weeks");
          }, y2.months = function() {
            return this.get("months");
          }, y2.asMonths = function() {
            return this.as("months");
          }, y2.years = function() {
            return this.get("years");
          }, y2.asYears = function() {
            return this.as("years");
          }, l2;
        }(), p = function(t2, s2, n2) {
          return t2.add(s2.years() * n2, "y").add(s2.months() * n2, "M").add(s2.days() * n2, "d").add(s2.hours() * n2, "h").add(s2.minutes() * n2, "m").add(s2.seconds() * n2, "s").add(s2.milliseconds() * n2, "ms");
        };
        return function(n2, i2, e2) {
          t = e2, s = e2().$utils(), e2.duration = function(t2, s2) {
            var n3 = e2.locale();
            return f(t2, { $l: n3 }, s2);
          }, e2.isDuration = c;
          var r2 = i2.prototype.add, o2 = i2.prototype.subtract;
          i2.prototype.add = function(t2, s2) {
            return c(t2) ? p(this, t2, 1) : r2.bind(this)(t2, s2);
          }, i2.prototype.subtract = function(t2, s2) {
            return c(t2) ? p(this, t2, -1) : o2.bind(this)(t2, s2);
          };
        };
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

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

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
  var objectProto4 = Object.prototype;
  var hasOwnProperty3 = objectProto4.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty3.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js
  var objectProto5 = Object.prototype;
  var hasOwnProperty4 = objectProto5.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
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
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

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
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values[index]);
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

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFinite.js
  var nativeIsFinite2 = root_default.isFinite;
  function isFinite(value) {
    return typeof value == "number" && nativeIsFinite2(value);
  }
  var isFinite_default = isFinite;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/round.js
  var round = createRound_default("round");
  var round_default = round;

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js
  var INFINITY3 = 1 / 0;
  var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY3) ? noop_default : function(values) {
    return new Set_default(values);
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

  // src/store.ts
  var getState = (ext, group) => {
    let temp = ext.storageGet("air-conditioner_" + group);
    if (temp) {
      return JSON.parse(temp);
    } else {
      return {
        open: false,
        mode: "制冷",
        temperature: 26,
        ocMode: false
      };
    }
  };
  var setState = (ext, group, state) => {
    ext.storageSet("air-conditioner_" + group, JSON.stringify(state));
  };
  var GROUPS_KEY = "air-conditioner_groups";
  var addGroup = (ext, groupId) => {
    let groups = getGroups(ext);
    let newGroups = uniq_default([...groups, groupId]);
    ext.storageSet(GROUPS_KEY, JSON.stringify(newGroups));
  };
  var deleteGroup = (ext, groupId) => {
    let groups = getGroups(ext);
    let newGroups = groups.filter((g) => g !== groupId);
    ext.storageSet(GROUPS_KEY, JSON.stringify(newGroups));
  };
  var getGroups = (ext) => {
    let data = ext.storageGet(GROUPS_KEY);
    let groups = [];
    if (data) {
      groups = JSON.parse(data);
    }
    return groups;
  };
  var SEND_INFO_KEY_PREFIX = "air-conditioner_send-info_";
  var setSendInfo = (ext, groupId, info) => {
    ext.storageSet(SEND_INFO_KEY_PREFIX + groupId, JSON.stringify(info));
  };
  var getSendInfo = (ext, groupId) => {
    let info = ext.storageGet(SEND_INFO_KEY_PREFIX + groupId);
    if (info) {
      return JSON.parse(info);
    }
    return void 0;
  };

  // src/utils.ts
  var import_dayjs = __toESM(require_dayjs_min(), 1);
  var import_zh_cn = __toESM(require_zh_cn(), 1);
  var import_relativeTime = __toESM(require_relativeTime(), 1);
  var import_duration = __toESM(require_duration(), 1);
  import_dayjs.default.locale(import_zh_cn.default);
  import_dayjs.default.extend(import_relativeTime.default);
  import_dayjs.default.extend(import_duration.default);
  var dayjs = import_dayjs.default;
  var validateTemperature = (temperature) => {
    if (!isFinite_default(temperature)) {
      return [false, "格式错误"];
    }
    if (temperature < 16 || temperature > 32) {
      return [false, "只能在 16°C 到 32°C 之间"];
    }
    if (temperature % 0.5 !== 0) {
      return [false, "只能以 0.5 为间隔"];
    }
    return [true, ""];
  };
  var validateOCModeTemperature = (temperature) => {
    if (!isFinite_default(temperature)) {
      return [false, "格式错误"];
    }
    if (temperature <= -273.15) {
      return [false, "超出物理极限"];
    }
    if (temperature % 0.5 !== 0) {
      return [false, "只能以 0.5 为间隔"];
    }
    return [true, ""];
  };

  // src/handle.ts
  var menuHandle = (ext, groupId) => {
    const state = getState(ext, groupId);
    let text = `当前空调${state.open ? "已开启" : "已关闭"}`;
    const now = dayjs();
    if (state.open && state.openTime && state.openTime !== now.unix()) {
      let d = dayjs.duration(dayjs.unix(state.openTime).diff(now));
      text += " " + d.humanize();
    }
    if (state.open) {
      if (state.ocMode) {
        text += `[已超频]`;
      }
      let mode = state.mode;
      if (state.temperature === 114514 || state.temperature === 1919810) {
        mode = "制臭";
      }
      text += `
模式：${mode}`;
      if (["制冷", "制热", "除湿", "制臭"].includes(mode)) {
        text += `
温度：${state.temperature}°C`;
      }
      if ("制臭" === mode) {
        text += `
哼哼啊啊啊啊啊啊啊啊啊啊——`;
      }
    }
    return text;
  };
  var openCloseHandle = (ext, groupId, open, sendInfo) => {
    let state = getState(ext, groupId);
    const now = dayjs();
    if (!state.open && open || open && !state.openTime) {
      state.openTime = now.unix();
    } else if (!open) {
      state.lastSendTime = void 0;
    }
    state.open = open;
    if (state.open && !state.mode) {
      state.mode = "制冷";
      state.temperature = 26;
      state.ocMode = false;
    }
    setState(ext, groupId, state);
    setSendInfo(ext, groupId, sendInfo);
    if (state.open) {
      let text = `空调已经开启`;
      if (state.openTime && state.openTime !== now.unix()) {
        let d = dayjs.duration(dayjs.unix(state.openTime).diff(now));
        text += " " + d.humanize();
      }
      let mode = state.mode;
      if (state.temperature === 114514 || state.temperature === 1919810) {
        mode = "制臭";
      }
      text += `，当前为${mode}模式`;
      if (state.ocMode) {
        text += `[已超频]`;
      }
      if (["制冷", "制热", "除湿", "制臭"].includes(mode)) {
        text += `，温度 ${state.temperature}°C`;
      }
      if ("制臭" === mode) {
        text += `
哼哼啊啊啊啊啊啊啊啊啊啊——`;
      }
      addGroup(ext, groupId);
      return text;
    } else {
      deleteGroup(ext, groupId);
      return "空调已经关闭";
    }
  };
  var modeHandle = (ext, groupId, mode) => {
    const state = getState(ext, groupId);
    if (!state.open) {
      return "空调未开启";
    }
    if (!mode) {
      if (state.mode === "制冷") {
        mode = "制热";
      } else if (state.mode === "制热") {
        mode = "除湿";
      } else if (state.mode === "除湿") {
        mode = "送风";
      } else if (state.mode === "送风") {
        mode = "制冷";
      }
    }
    state.mode = mode;
    let text = `空调切换为${mode}模式`;
    if (["制冷", "制热", "除湿"].includes(mode)) {
      if (!state.temperature || state.temperature === 0) {
        state.temperature = 26;
      }
      text += `，当前温度 ${state.temperature}°C`;
    }
    setState(ext, groupId, state);
    return text;
  };
  var temperatureHandle = (ext, groupId, val1, val2) => {
    const state = getState(ext, groupId);
    if (!state.open) {
      return "空调未开启";
    } else if (!["制冷", "制热", "除湿"].includes(state.mode)) {
      return `当前空调为${state.mode}模式`;
    }
    if (val1) {
      let newTemperature;
      if (state.ocMode) {
        if ((val1 === "-" || val1 === "+") && !(val2 == null ? void 0 : val2.startsWith("-")) && !(val2 == null ? void 0 : val2.startsWith("+"))) {
          let temp = Number(val2);
          if (isFinite_default(temp)) {
            newTemperature = state.temperature + (val1 === "-" ? -temp : temp);
          }
        } else if (val1.startsWith("+")) {
          let temp = Number(val1);
          if (isFinite_default(temp)) {
            newTemperature = state.temperature + temp;
          }
        } else {
          newTemperature = Number(val1);
        }
      } else {
        if ((val1 === "-" || val1 === "+") && !(val2 == null ? void 0 : val2.startsWith("-")) && !(val2 == null ? void 0 : val2.startsWith("+"))) {
          let temp = Number(val2);
          if (isFinite_default(temp)) {
            newTemperature = state.temperature + (val1 === "-" ? -temp : temp);
          }
        } else if (val1.startsWith("+") || val1.startsWith("-")) {
          let temp = Number(val1);
          if (isFinite_default(temp)) {
            newTemperature = state.temperature + temp;
          }
        } else {
          newTemperature = Number(val1);
        }
      }
      if (isFinite_default(newTemperature)) {
        let ok;
        let err;
        if (state.ocMode) {
          [ok, err] = validateOCModeTemperature(newTemperature);
        } else {
          [ok, err] = validateTemperature(newTemperature);
        }
        if (!ok) {
          return "温度调整失败，" + err;
        }
        state.temperature = newTemperature;
        setState(ext, groupId, state);
        return `温度已调整为 ${state.temperature}°C`;
      } else {
        return "温度调整失败，请输入「.温度 <温度>」来直接指定温度，或输入「.温度 [+/-] <温度>」来升高或降低温度";
      }
    } else {
      return "温度调整失败，未指定值";
    }
  };
  var ocModeHandle = (ext, groupId, ocMode) => {
    const state = getState(ext, groupId);
    if (!state.open) {
      return "空调未开启";
    }
    state.ocMode = ocMode;
    let text;
    if (state.ocMode) {
      text = "超频模式已开启";
    } else {
      text = "超频模式已关闭";
      let [ok, _] = validateTemperature(state.temperature);
      if (!ok) {
        state.temperature = 26;
        text += "，当前温度已调整为 26°C";
      }
    }
    setState(ext, groupId, state);
    return text;
  };

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/utils.js
  function extractDateElements(date) {
    return {
      second: date.getSeconds(),
      minute: date.getMinutes(),
      hour: date.getHours(),
      day: date.getDate(),
      month: date.getMonth(),
      weekday: date.getDay(),
      year: date.getFullYear()
    };
  }
  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  function getDaysBetweenWeekdays(weekday1, weekday2) {
    if (weekday1 <= weekday2) {
      return weekday2 - weekday1;
    }
    return 6 - weekday1 + weekday2 + 1;
  }
  function wrapFunction(fn, errorHandler) {
    return () => {
      try {
        const res = fn();
        if (res instanceof Promise) {
          res.catch((err) => {
            if (errorHandler) {
              errorHandler(err);
            }
          });
        }
      } catch (err) {
        if (errorHandler) {
          errorHandler(err);
        }
      }
    };
  }

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/cron.js
  var Cron = class {
    constructor({ seconds, minutes, hours, days, months, weekdays }) {
      if (!seconds || seconds.size === 0)
        throw new Error("There must be at least one allowed second.");
      if (!minutes || minutes.size === 0)
        throw new Error("There must be at least one allowed minute.");
      if (!hours || hours.size === 0)
        throw new Error("There must be at least one allowed hour.");
      if (!months || months.size === 0)
        throw new Error("There must be at least one allowed month.");
      if ((!weekdays || weekdays.size === 0) && (!days || days.size === 0))
        throw new Error("There must be at least one allowed day or weekday.");
      this.seconds = Array.from(seconds).sort((a, b) => a - b);
      this.minutes = Array.from(minutes).sort((a, b) => a - b);
      this.hours = Array.from(hours).sort((a, b) => a - b);
      this.days = Array.from(days).sort((a, b) => a - b);
      this.months = Array.from(months).sort((a, b) => a - b);
      this.weekdays = Array.from(weekdays).sort((a, b) => a - b);
      const validateData = (name, data, constraint) => {
        if (data.some((x) => typeof x !== "number" || x % 1 !== 0 || x < constraint.min || x > constraint.max)) {
          throw new Error(`${name} must only consist of integers which are within the range of ${constraint.min} and ${constraint.max}`);
        }
      };
      validateData("seconds", this.seconds, { min: 0, max: 59 });
      validateData("minutes", this.minutes, { min: 0, max: 59 });
      validateData("hours", this.hours, { min: 0, max: 23 });
      validateData("days", this.days, { min: 1, max: 31 });
      validateData("months", this.months, { min: 0, max: 11 });
      validateData("weekdays", this.weekdays, { min: 0, max: 6 });
      this.reversed = {
        seconds: this.seconds.map((x) => x).reverse(),
        minutes: this.minutes.map((x) => x).reverse(),
        hours: this.hours.map((x) => x).reverse(),
        days: this.days.map((x) => x).reverse(),
        months: this.months.map((x) => x).reverse(),
        weekdays: this.weekdays.map((x) => x).reverse()
      };
    }
    /**
     * Find the next or previous hour, starting from the given start hour that matches the hour constraint.
     * startHour itself might also be allowed.
     */
    findAllowedHour(dir, startHour) {
      return dir === "next" ? this.hours.find((x) => x >= startHour) : this.reversed.hours.find((x) => x <= startHour);
    }
    /**
     * Find the next or previous minute, starting from the given start minute that matches the minute constraint.
     * startMinute itself might also be allowed.
     */
    findAllowedMinute(dir, startMinute) {
      return dir === "next" ? this.minutes.find((x) => x >= startMinute) : this.reversed.minutes.find((x) => x <= startMinute);
    }
    /**
     * Find the next or previous second, starting from the given start second that matches the second constraint.
     * startSecond itself IS NOT allowed.
     */
    findAllowedSecond(dir, startSecond) {
      return dir === "next" ? this.seconds.find((x) => x > startSecond) : this.reversed.seconds.find((x) => x < startSecond);
    }
    /**
     * Find the next or previous time, starting from the given start time that matches the hour, minute
     * and second constraints. startTime itself might also be allowed.
     */
    findAllowedTime(dir, startTime) {
      let hour = this.findAllowedHour(dir, startTime.hour);
      if (hour !== void 0) {
        if (hour === startTime.hour) {
          let minute = this.findAllowedMinute(dir, startTime.minute);
          if (minute !== void 0) {
            if (minute === startTime.minute) {
              const second = this.findAllowedSecond(dir, startTime.second);
              if (second !== void 0) {
                return { hour, minute, second };
              }
              minute = this.findAllowedMinute(dir, dir === "next" ? startTime.minute + 1 : startTime.minute - 1);
              if (minute !== void 0) {
                return {
                  hour,
                  minute,
                  second: dir === "next" ? this.seconds[0] : this.reversed.seconds[0]
                };
              }
            } else {
              return {
                hour,
                minute,
                second: dir === "next" ? this.seconds[0] : this.reversed.seconds[0]
              };
            }
          }
          hour = this.findAllowedHour(dir, dir === "next" ? startTime.hour + 1 : startTime.hour - 1);
          if (hour !== void 0) {
            return {
              hour,
              minute: dir === "next" ? this.minutes[0] : this.reversed.minutes[0],
              second: dir === "next" ? this.seconds[0] : this.reversed.seconds[0]
            };
          }
        } else {
          return {
            hour,
            minute: dir === "next" ? this.minutes[0] : this.reversed.minutes[0],
            second: dir === "next" ? this.seconds[0] : this.reversed.seconds[0]
          };
        }
      }
      return void 0;
    }
    /**
     * Find the next or previous day in the given month, starting from the given startDay
     * that matches either the day or the weekday constraint. startDay itself might also be allowed.
     */
    findAllowedDayInMonth(dir, year, month, startDay) {
      var _a, _b;
      if (startDay < 1)
        throw new Error("startDay must not be smaller than 1.");
      const daysInMonth = getDaysInMonth(year, month);
      const daysRestricted = this.days.length !== 31;
      const weekdaysRestricted = this.weekdays.length !== 7;
      if (!daysRestricted && !weekdaysRestricted) {
        if (startDay > daysInMonth) {
          return dir === "next" ? void 0 : daysInMonth;
        }
        return startDay;
      }
      let allowedDayByDays;
      if (daysRestricted) {
        allowedDayByDays = dir === "next" ? this.days.find((x) => x >= startDay) : this.reversed.days.find((x) => x <= startDay);
        if (allowedDayByDays !== void 0 && allowedDayByDays > daysInMonth) {
          allowedDayByDays = void 0;
        }
      }
      let allowedDayByWeekdays;
      if (weekdaysRestricted) {
        const startWeekday = new Date(year, month, startDay).getDay();
        const nearestAllowedWeekday = dir === "next" ? (_a = this.weekdays.find((x) => x >= startWeekday)) !== null && _a !== void 0 ? _a : this.weekdays[0] : (_b = this.reversed.weekdays.find((x) => x <= startWeekday)) !== null && _b !== void 0 ? _b : this.reversed.weekdays[0];
        if (nearestAllowedWeekday !== void 0) {
          const daysBetweenWeekdays = dir === "next" ? getDaysBetweenWeekdays(startWeekday, nearestAllowedWeekday) : getDaysBetweenWeekdays(nearestAllowedWeekday, startWeekday);
          allowedDayByWeekdays = dir === "next" ? startDay + daysBetweenWeekdays : startDay - daysBetweenWeekdays;
          if (allowedDayByWeekdays > daysInMonth || allowedDayByWeekdays < 1) {
            allowedDayByWeekdays = void 0;
          }
        }
      }
      if (allowedDayByDays !== void 0 && allowedDayByWeekdays !== void 0) {
        return dir === "next" ? Math.min(allowedDayByDays, allowedDayByWeekdays) : Math.max(allowedDayByDays, allowedDayByWeekdays);
      }
      if (allowedDayByDays !== void 0) {
        return allowedDayByDays;
      }
      if (allowedDayByWeekdays !== void 0) {
        return allowedDayByWeekdays;
      }
      return void 0;
    }
    /** Gets the next date starting from the given start date or now. */
    getNextDate(startDate = /* @__PURE__ */ new Date()) {
      const startDateElements = extractDateElements(startDate);
      let minYear = startDateElements.year;
      let startIndexMonth = this.months.findIndex((x) => x >= startDateElements.month);
      if (startIndexMonth === -1) {
        startIndexMonth = 0;
        minYear++;
      }
      const maxIterations = this.months.length * 5;
      for (let i = 0; i < maxIterations; i++) {
        const year = minYear + Math.floor((startIndexMonth + i) / this.months.length);
        const month = this.months[(startIndexMonth + i) % this.months.length];
        const isStartMonth = year === startDateElements.year && month === startDateElements.month;
        let day = this.findAllowedDayInMonth("next", year, month, isStartMonth ? startDateElements.day : 1);
        let isStartDay = isStartMonth && day === startDateElements.day;
        if (day !== void 0 && isStartDay) {
          const nextTime = this.findAllowedTime("next", startDateElements);
          if (nextTime !== void 0) {
            return new Date(year, month, day, nextTime.hour, nextTime.minute, nextTime.second);
          }
          day = this.findAllowedDayInMonth("next", year, month, day + 1);
          isStartDay = false;
        }
        if (day !== void 0 && !isStartDay) {
          return new Date(year, month, day, this.hours[0], this.minutes[0], this.seconds[0]);
        }
      }
      throw new Error("No valid next date was found.");
    }
    /** Gets the specified amount of future dates starting from the given start date or now. */
    getNextDates(amount, startDate) {
      const dates = [];
      let nextDate;
      for (let i = 0; i < amount; i++) {
        nextDate = this.getNextDate(nextDate !== null && nextDate !== void 0 ? nextDate : startDate);
        dates.push(nextDate);
      }
      return dates;
    }
    /**
     * Get an ES6 compatible iterator which iterates over the next dates starting from startDate or now.
     * The iterator runs until the optional endDate is reached or forever.
     */
    *getNextDatesIterator(startDate, endDate) {
      let nextDate;
      while (true) {
        nextDate = this.getNextDate(nextDate !== null && nextDate !== void 0 ? nextDate : startDate);
        if (endDate && endDate.getTime() < nextDate.getTime()) {
          return;
        }
        yield nextDate;
      }
    }
    /** Gets the previous date starting from the given start date or now. */
    getPrevDate(startDate = /* @__PURE__ */ new Date()) {
      const startDateElements = extractDateElements(startDate);
      let maxYear = startDateElements.year;
      let startIndexMonth = this.reversed.months.findIndex((x) => x <= startDateElements.month);
      if (startIndexMonth === -1) {
        startIndexMonth = 0;
        maxYear--;
      }
      const maxIterations = this.reversed.months.length * 5;
      for (let i = 0; i < maxIterations; i++) {
        const year = maxYear - Math.floor((startIndexMonth + i) / this.reversed.months.length);
        const month = this.reversed.months[(startIndexMonth + i) % this.reversed.months.length];
        const isStartMonth = year === startDateElements.year && month === startDateElements.month;
        let day = this.findAllowedDayInMonth("prev", year, month, isStartMonth ? startDateElements.day : (
          // Start searching from the last day of the month.
          getDaysInMonth(year, month)
        ));
        let isStartDay = isStartMonth && day === startDateElements.day;
        if (day !== void 0 && isStartDay) {
          const prevTime = this.findAllowedTime("prev", startDateElements);
          if (prevTime !== void 0) {
            return new Date(year, month, day, prevTime.hour, prevTime.minute, prevTime.second);
          }
          if (day > 1) {
            day = this.findAllowedDayInMonth("prev", year, month, day - 1);
            isStartDay = false;
          }
        }
        if (day !== void 0 && !isStartDay) {
          return new Date(year, month, day, this.reversed.hours[0], this.reversed.minutes[0], this.reversed.seconds[0]);
        }
      }
      throw new Error("No valid previous date was found.");
    }
    /** Gets the specified amount of previous dates starting from the given start date or now. */
    getPrevDates(amount, startDate) {
      const dates = [];
      let prevDate;
      for (let i = 0; i < amount; i++) {
        prevDate = this.getPrevDate(prevDate !== null && prevDate !== void 0 ? prevDate : startDate);
        dates.push(prevDate);
      }
      return dates;
    }
    /**
     * Get an ES6 compatible iterator which iterates over the previous dates starting from startDate or now.
     * The iterator runs until the optional endDate is reached or forever.
     */
    *getPrevDatesIterator(startDate, endDate) {
      let prevDate;
      while (true) {
        prevDate = this.getPrevDate(prevDate !== null && prevDate !== void 0 ? prevDate : startDate);
        if (endDate && endDate.getTime() > prevDate.getTime()) {
          return;
        }
        yield prevDate;
      }
    }
    /** Returns true when there is a cron date at the given date. */
    matchDate(date) {
      const { second, minute, hour, day, month, weekday } = extractDateElements(date);
      if (this.seconds.indexOf(second) === -1 || this.minutes.indexOf(minute) === -1 || this.hours.indexOf(hour) === -1 || this.months.indexOf(month) === -1) {
        return false;
      }
      if (this.days.length !== 31 && this.weekdays.length !== 7) {
        return this.days.indexOf(day) !== -1 || this.weekdays.indexOf(weekday) !== -1;
      }
      return this.days.indexOf(day) !== -1 && this.weekdays.indexOf(weekday) !== -1;
    }
  };

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/cron-parser.js
  var secondConstraint = {
    min: 0,
    max: 59
  };
  var minuteConstraint = {
    min: 0,
    max: 59
  };
  var hourConstraint = {
    min: 0,
    max: 23
  };
  var dayConstraint = {
    min: 1,
    max: 31
  };
  var monthConstraint = {
    min: 1,
    max: 12,
    aliases: {
      jan: "1",
      feb: "2",
      mar: "3",
      apr: "4",
      may: "5",
      jun: "6",
      jul: "7",
      aug: "8",
      sep: "9",
      oct: "10",
      nov: "11",
      dec: "12"
    }
  };
  var weekdayConstraint = {
    min: 0,
    max: 7,
    aliases: {
      mon: "1",
      tue: "2",
      wed: "3",
      thu: "4",
      fri: "5",
      sat: "6",
      sun: "7"
    }
  };
  var timeNicknames = {
    "@yearly": "0 0 1 1 *",
    "@annually": "0 0 1 1 *",
    "@monthly": "0 0 1 1 *",
    "@weekly": "0 0 * * 0",
    "@daily": "0 0 * * *",
    "@hourly": "0 * * * *",
    "@minutely": "* * * * *"
  };
  function parseElement(element, constraint) {
    const result = /* @__PURE__ */ new Set();
    if (element === "*") {
      for (let i = constraint.min; i <= constraint.max; i = i + 1) {
        result.add(i);
      }
      return result;
    }
    const listElements = element.split(",");
    if (listElements.length > 1) {
      for (const listElement of listElements) {
        const parsedListElement = parseElement(listElement, constraint);
        for (const x of parsedListElement) {
          result.add(x);
        }
      }
      return result;
    }
    const parseSingleElement = (singleElement) => {
      var _a, _b;
      singleElement = (_b = (_a = constraint.aliases) === null || _a === void 0 ? void 0 : _a[singleElement.toLowerCase()]) !== null && _b !== void 0 ? _b : singleElement;
      const parsedElement = Number.parseInt(singleElement, 10);
      if (Number.isNaN(parsedElement)) {
        throw new Error(`Failed to parse ${element}: ${singleElement} is NaN.`);
      }
      if (parsedElement < constraint.min || parsedElement > constraint.max) {
        throw new Error(`Failed to parse ${element}: ${singleElement} is outside of constraint range of ${constraint.min} - ${constraint.max}.`);
      }
      return parsedElement;
    };
    const rangeSegments = /^((([0-9a-zA-Z]+)-([0-9a-zA-Z]+))|\*)(\/([0-9]+))?$/.exec(element);
    if (rangeSegments === null) {
      result.add(parseSingleElement(element));
      return result;
    }
    const parsedStart = rangeSegments[1] === "*" ? constraint.min : parseSingleElement(rangeSegments[3]);
    const parsedEnd = rangeSegments[1] === "*" ? constraint.max : parseSingleElement(rangeSegments[4]);
    if (parsedStart > parsedEnd) {
      throw new Error(`Failed to parse ${element}: Invalid range (start: ${parsedStart}, end: ${parsedEnd}).`);
    }
    const step = rangeSegments[6];
    let parsedStep = 1;
    if (step !== void 0) {
      parsedStep = Number.parseInt(step, 10);
      if (Number.isNaN(parsedStep)) {
        throw new Error(`Failed to parse step: ${step} is NaN.`);
      }
      if (parsedStep < 1) {
        throw new Error(`Failed to parse step: Expected ${step} to be greater than 0.`);
      }
    }
    for (let i = parsedStart; i <= parsedEnd; i = i + parsedStep) {
      result.add(i);
    }
    return result;
  }
  function parseCronExpression(cronExpression) {
    var _a;
    if (typeof cronExpression !== "string") {
      throw new TypeError("Invalid cron expression: must be of type string.");
    }
    cronExpression = (_a = timeNicknames[cronExpression.toLowerCase()]) !== null && _a !== void 0 ? _a : cronExpression;
    const elements = cronExpression.split(" ");
    if (elements.length < 5 || elements.length > 6) {
      throw new Error("Invalid cron expression: expected 5 or 6 elements.");
    }
    const rawSeconds = elements.length === 6 ? elements[0] : "0";
    const rawMinutes = elements.length === 6 ? elements[1] : elements[0];
    const rawHours = elements.length === 6 ? elements[2] : elements[1];
    const rawDays = elements.length === 6 ? elements[3] : elements[2];
    const rawMonths = elements.length === 6 ? elements[4] : elements[3];
    const rawWeekdays = elements.length === 6 ? elements[5] : elements[4];
    return new Cron({
      seconds: parseElement(rawSeconds, secondConstraint),
      minutes: parseElement(rawMinutes, minuteConstraint),
      hours: parseElement(rawHours, hourConstraint),
      days: parseElement(rawDays, dayConstraint),
      // months in cron are indexed by 1, but Cron expects indexes by 0, so we need to reduce all set values by one.
      months: new Set(Array.from(parseElement(rawMonths, monthConstraint)).map((x) => x - 1)),
      weekdays: new Set(Array.from(parseElement(rawWeekdays, weekdayConstraint)).map((x) => x % 7))
    });
  }

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/schedulers/interval-based.js
  var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
  };
  var __classPrivateFieldGet = function(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  };
  var _IntervalBasedCronScheduler_interval;
  var _IntervalBasedCronScheduler_intervalId;
  var _IntervalBasedCronScheduler_tasks;
  var _IntervalBasedCronScheduler_nextTaskId;
  var IntervalBasedCronScheduler = class {
    /**
     * Creates and starts a new scheduler with the given interval.
     */
    constructor(interval) {
      _IntervalBasedCronScheduler_interval.set(this, void 0);
      _IntervalBasedCronScheduler_intervalId.set(this, void 0);
      _IntervalBasedCronScheduler_tasks.set(this, []);
      _IntervalBasedCronScheduler_nextTaskId.set(
        this,
        1
        /**
         * Creates and starts a new scheduler with the given interval.
         */
      );
      __classPrivateFieldSet(this, _IntervalBasedCronScheduler_interval, interval, "f");
      this.start();
    }
    /* Starts the scheduler. */
    start() {
      if (__classPrivateFieldGet(this, _IntervalBasedCronScheduler_intervalId, "f") !== void 0) {
        throw new Error("Scheduler already started.");
      }
      __classPrivateFieldSet(this, _IntervalBasedCronScheduler_intervalId, setInterval(this.processTasks.bind(this), __classPrivateFieldGet(this, _IntervalBasedCronScheduler_interval, "f")), "f");
    }
    /* Ensures the scheduler is stopped. */
    stop() {
      if (__classPrivateFieldGet(this, _IntervalBasedCronScheduler_intervalId, "f")) {
        clearInterval(__classPrivateFieldGet(this, _IntervalBasedCronScheduler_intervalId, "f"));
        __classPrivateFieldSet(this, _IntervalBasedCronScheduler_intervalId, void 0, "f");
      }
    }
    /* Inserts a task in the tasks array at the right position sorted by nextExecution time. */
    insertTask(newTask) {
      const index = __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").findIndex((task) => task.nextExecution.getTime() > newTask.nextExecution.getTime());
      __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").splice(index, 0, newTask);
    }
    /* Registers a new task. */
    registerTask(cron, task, opts) {
      var _a;
      const id = __classPrivateFieldGet(this, _IntervalBasedCronScheduler_nextTaskId, "f");
      this.insertTask({
        id,
        cron,
        nextExecution: cron.getNextDate(),
        task,
        isOneTimeTask: (_a = opts === null || opts === void 0 ? void 0 : opts.isOneTimeTask) !== null && _a !== void 0 ? _a : false,
        errorHandler: opts === null || opts === void 0 ? void 0 : opts.errorHandler
      });
      __classPrivateFieldSet(this, _IntervalBasedCronScheduler_nextTaskId, __classPrivateFieldGet(this, _IntervalBasedCronScheduler_nextTaskId, "f") + 1, "f");
      return id;
    }
    /** Unregisters a task, causing it to no longer be executed. */
    unregisterTask(id) {
      const taskIndex = __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").findIndex((task) => task.id === id);
      if (taskIndex === -1)
        throw new Error("Task not found.");
      __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").splice(taskIndex, 1);
    }
    /* Sorts the tasks array based on the next execution time so that the next task is first in the array. */
    sortTasks() {
      __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").sort((a, b) => {
        return a.nextExecution.getTime() - b.nextExecution.getTime();
      });
    }
    processTasks() {
      const now = Date.now();
      let taskExecuted = false;
      let oneTimeTaskExecuted = false;
      for (let i = 0; i < __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").length; i += 1) {
        const task = __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f")[i];
        if (task.nextExecution.getTime() <= now) {
          wrapFunction(task.task, task.errorHandler)();
          if (!task.isOneTimeTask) {
            taskExecuted = true;
            task.nextExecution = task.cron.getNextDate();
          } else {
            oneTimeTaskExecuted = true;
          }
        } else {
          break;
        }
      }
      if (oneTimeTaskExecuted) {
        __classPrivateFieldSet(this, _IntervalBasedCronScheduler_tasks, __classPrivateFieldGet(this, _IntervalBasedCronScheduler_tasks, "f").filter((task) => task.nextExecution.getTime() > now), "f");
      }
      if (taskExecuted) {
        this.sortTasks();
      }
    }
  };
  _IntervalBasedCronScheduler_interval = /* @__PURE__ */ new WeakMap(), _IntervalBasedCronScheduler_intervalId = /* @__PURE__ */ new WeakMap(), _IntervalBasedCronScheduler_tasks = /* @__PURE__ */ new WeakMap(), _IntervalBasedCronScheduler_nextTaskId = /* @__PURE__ */ new WeakMap();

  // src/index.ts
  var scheduler = new IntervalBasedCronScheduler(10 * 1e3);
  var helpDesc = `群空调
.开空调 // 打开群内空调
.关空调 // 关闭群内空调
.模式 (制冷|制热|除湿|送风) // 设置模式，如「.模式 制冷」设置为制冷模式，不带参数时切换为下个模式
.温度 (+|-) <值> // 调整空调温度（°C），如「.温度 + 2」提升 2°C，「.温度 - 1」降低 1°C
.温度 <值> // 直接设置空调温度（°C），如「.温度 26」设置温度为 26°C
.超频 (开|关) // 启用/关闭超频模式，解除温度控制
.空调 // 查看当前状态
.空调 (help|帮助) // 查看菜单`;
  function main() {
    let ext = seal.ext.find("air-conditioner");
    if (!ext) {
      ext = seal.ext.new("air-conditioner", "JustAnotherID", "1.2.2");
      seal.ext.register(ext);
    }
    const cmdMenu = seal.ext.newCmdItemInfo();
    cmdMenu.name = "空调";
    cmdMenu.help = helpDesc;
    cmdMenu.solve = (ctx, msg, cmdArgs) => {
      let val = cmdArgs.getArgN(1);
      switch (val) {
        case "help":
        case "帮助":
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
        default:
          if (msg.messageType !== "group") {
            seal.replyToSender(ctx, msg, "空调只能在群内使用");
            return seal.ext.newCmdExecuteResult(true);
          }
          seal.replyToSender(ctx, msg, menuHandle(ext, msg.groupId));
          return seal.ext.newCmdExecuteResult(true);
      }
    };
    const cmdOpen = seal.ext.newCmdItemInfo();
    cmdOpen.name = "开空调";
    cmdOpen.help = helpDesc;
    cmdOpen.solve = (ctx, msg, cmdArgs) => {
      let val = cmdArgs.getArgN(1);
      switch (val) {
        case "help":
        case "帮助":
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
        default:
          if (msg.messageType !== "group") {
            seal.replyToSender(ctx, msg, "空调只能在群内使用");
            return seal.ext.newCmdExecuteResult(true);
          }
          const groupInfo = {
            endpointUserId: ctx.endPoint.userId,
            targetUserId: msg.sender.userId,
            targetGroupId: msg.groupId,
            targetGuildId: msg.guildId
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
    cmdClose.name = "关空调";
    cmdClose.help = helpDesc;
    cmdClose.solve = (ctx, msg, cmdArgs) => {
      let val = cmdArgs.getArgN(1);
      switch (val) {
        case "help":
        case "帮助":
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
        default:
          if (msg.messageType !== "group") {
            seal.replyToSender(ctx, msg, "空调只能在群内使用");
            return seal.ext.newCmdExecuteResult(true);
          }
          const groupInfo = {
            endpointUserId: ctx.endPoint.userId,
            targetUserId: msg.sender.userId,
            targetGroupId: msg.groupId,
            targetGuildId: msg.guildId
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
    cmdMode.name = "模式";
    cmdMode.help = helpDesc;
    cmdMode.solve = (ctx, msg, cmdArgs) => {
      let val = cmdArgs.getArgN(1);
      switch (val) {
        case "help":
        case "帮助":
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
        default:
          if (msg.messageType !== "group") {
            seal.replyToSender(ctx, msg, "空调只能在群内使用");
            return seal.ext.newCmdExecuteResult(true);
          }
          seal.replyToSender(ctx, msg, modeHandle(ext, msg.groupId, val));
          return seal.ext.newCmdExecuteResult(true);
      }
    };
    const cmdTemperature = seal.ext.newCmdItemInfo();
    cmdTemperature.name = "温度";
    cmdTemperature.help = helpDesc;
    cmdTemperature.solve = (ctx, msg, cmdArgs) => {
      let val1 = cmdArgs.getArgN(1);
      let val2 = cmdArgs.getArgN(2);
      switch (val1) {
        case "":
        case "help":
        case "帮助":
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
        default:
          if (msg.messageType !== "group") {
            seal.replyToSender(ctx, msg, "空调只能在群内使用");
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
    cmdOCMode.name = "超频";
    cmdOCMode.help = helpDesc;
    cmdOCMode.solve = (ctx, msg, cmdArgs) => {
      let val = cmdArgs.getArgN(1);
      switch (val) {
        case "开":
        case "关":
          if (msg.messageType !== "group") {
            seal.replyToSender(ctx, msg, "空调只能在群内使用");
            return seal.ext.newCmdExecuteResult(true);
          }
          seal.replyToSender(
            ctx,
            msg,
            ocModeHandle(ext, msg.groupId, val === "开")
          );
          return seal.ext.newCmdExecuteResult(true);
        case "help":
        case "帮助":
        default:
          const ret = seal.ext.newCmdExecuteResult(true);
          ret.showHelp = true;
          return ret;
      }
    };
    ext.cmdMap["空调"] = cmdMenu;
    ext.cmdMap["开空调"] = cmdOpen;
    ext.cmdMap["关空调"] = cmdClose;
    ext.cmdMap["模式"] = cmdMode;
    ext.cmdMap["温度"] = cmdTemperature;
    ext.cmdMap["超频"] = cmdOCMode;
    const AIR_CONDITIONER_NOTIFY_INTERVAL = "空调提醒间隔/min（会四舍五入为整数）";
    seal.ext.registerFloatConfig(
      ext,
      AIR_CONDITIONER_NOTIFY_INTERVAL,
      30,
      "空调开启后，会「大致」按照此间隔向群里发送状态，最小间隔为 5 分钟"
    );
    scheduler.registerTask(parseCronExpression("* */5 * * * *"), () => {
      const now = dayjs();
      const epMap = {};
      const eps = seal.getEndPoints();
      for (let ep of eps) {
        epMap[ep.userId] = ep;
      }
      let groups = getGroups(ext);
      for (let group of groups) {
        const state = getState(ext, group);
        if ((state == null ? void 0 : state.open) && state.openTime) {
          let send = true;
          if (state.lastSendTime) {
            const interval = round_default(
              seal.ext.getFloatConfig(ext, AIR_CONDITIONER_NOTIFY_INTERVAL)
            );
            const diff = now.diff(dayjs.unix(state.lastSendTime), "minute");
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
            if (sendInfo) {
              const result = menuHandle(ext, group);
              const ep = epMap[sendInfo.endpointUserId];
              if (ep && result) {
                const msg = seal.newMessage();
                msg.messageType = "group";
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
