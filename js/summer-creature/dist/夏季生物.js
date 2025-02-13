// ==UserScript==
// @name         夏季生物
// @author       JustAnotherID
// @version      1.3.0-alpha
// @description  使用 .夏季生物 帮助 查看帮助，为群里增加夏季生物活动吧！\n1.3.0 - 更真实的出没机制：生物会静默增殖，当数量越多时，会越频繁出没主动攻击
// @timestamp    2025-02-13 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/summer-creature
// @updateUrl    https://ghproxy.justanotherid.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/summer-creature/dist/%E5%A4%8F%E5%AD%A3%E7%94%9F%E7%89%A9.js
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
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
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

  // src/types/index.ts
  var Creature, Achievement;
  var init_types = __esm({
    "src/types/index.ts"() {
      Creature = /* @__PURE__ */ ((Creature2) => {
        Creature2["mosquito"] = "mosquito";
        Creature2["cockroach"] = "cockroach";
        return Creature2;
      })(Creature || {});
      Achievement = /* @__PURE__ */ ((Achievement2) => {
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
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
  var freeGlobal, freeGlobal_default;
  var init_freeGlobal = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js"() {
      freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      freeGlobal_default = freeGlobal;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
  var freeSelf, root, root_default;
  var init_root = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js"() {
      init_freeGlobal();
      freeSelf = typeof self == "object" && self && self.Object === Object && self;
      root = freeGlobal_default || freeSelf || Function("return this")();
      root_default = root;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
  var Symbol2, Symbol_default;
  var init_Symbol = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js"() {
      init_root();
      Symbol2 = root_default.Symbol;
      Symbol_default = Symbol2;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js
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
  var objectProto, hasOwnProperty, nativeObjectToString, symToStringTag, getRawTag_default;
  var init_getRawTag = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js"() {
      init_Symbol();
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      nativeObjectToString = objectProto.toString;
      symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
      getRawTag_default = getRawTag;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectProto2, nativeObjectToString2, objectToString_default;
  var init_objectToString = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js"() {
      objectProto2 = Object.prototype;
      nativeObjectToString2 = objectProto2.toString;
      objectToString_default = objectToString;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var nullTag, undefinedTag, symToStringTag2, baseGetTag_default;
  var init_baseGetTag = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js"() {
      init_Symbol();
      init_getRawTag();
      init_objectToString();
      nullTag = "[object Null]";
      undefinedTag = "[object Undefined]";
      symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
      baseGetTag_default = baseGetTag;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default;
  var init_isObjectLike = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js"() {
      isObjectLike_default = isObjectLike;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var symbolTag, isSymbol_default;
  var init_isSymbol = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js"() {
      init_baseGetTag();
      init_isObjectLike();
      symbolTag = "[object Symbol]";
      isSymbol_default = isSymbol;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default;
  var init_arrayMap = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js"() {
      arrayMap_default = arrayMap;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
  var isArray, isArray_default;
  var init_isArray = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js"() {
      isArray = Array.isArray;
      isArray_default = isArray;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseToString.js
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
  var INFINITY, symbolProto, symbolToString, baseToString_default;
  var init_baseToString = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseToString.js"() {
      init_Symbol();
      init_arrayMap();
      init_isArray();
      init_isSymbol();
      INFINITY = 1 / 0;
      symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
      symbolToString = symbolProto ? symbolProto.toString : void 0;
      baseToString_default = baseToString;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
  function trimmedEndIndex(string) {
    var index = string.length;
    while (index-- && reWhitespace.test(string.charAt(index))) {
    }
    return index;
  }
  var reWhitespace, trimmedEndIndex_default;
  var init_trimmedEndIndex = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js"() {
      reWhitespace = /\s/;
      trimmedEndIndex_default = trimmedEndIndex;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js
  function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
  }
  var reTrimStart, baseTrim_default;
  var init_baseTrim = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js"() {
      init_trimmedEndIndex();
      reTrimStart = /^\s+/;
      baseTrim_default = baseTrim;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default;
  var init_isObject = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js"() {
      isObject_default = isObject;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js
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
  var NAN, reIsBadHex, reIsBinary, reIsOctal, freeParseInt, toNumber_default;
  var init_toNumber = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js"() {
      init_baseTrim();
      init_isObject();
      init_isSymbol();
      NAN = 0 / 0;
      reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      reIsBinary = /^0b[01]+$/i;
      reIsOctal = /^0o[0-7]+$/i;
      freeParseInt = parseInt;
      toNumber_default = toNumber;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toFinite.js
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
  var INFINITY2, MAX_INTEGER, toFinite_default;
  var init_toFinite = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toFinite.js"() {
      init_toNumber();
      INFINITY2 = 1 / 0;
      MAX_INTEGER = 17976931348623157e292;
      toFinite_default = toFinite;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toInteger.js
  function toInteger(value) {
    var result = toFinite_default(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }
  var toInteger_default;
  var init_toInteger = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toInteger.js"() {
      init_toFinite();
      toInteger_default = toInteger;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default;
  var init_identity = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js"() {
      identity_default = identity;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var asyncTag, funcTag, genTag, proxyTag, isFunction_default;
  var init_isFunction = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js"() {
      init_baseGetTag();
      init_isObject();
      asyncTag = "[object AsyncFunction]";
      funcTag = "[object Function]";
      genTag = "[object GeneratorFunction]";
      proxyTag = "[object Proxy]";
      isFunction_default = isFunction;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js
  var coreJsData, coreJsData_default;
  var init_coreJsData = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js"() {
      init_root();
      coreJsData = root_default["__core-js_shared__"];
      coreJsData_default = coreJsData;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var maskSrcKey, isMasked_default;
  var init_isMasked = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js"() {
      init_coreJsData();
      maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      isMasked_default = isMasked;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
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
  var funcProto, funcToString, toSource_default;
  var init_toSource = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js"() {
      funcProto = Function.prototype;
      funcToString = funcProto.toString;
      toSource_default = toSource;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var reRegExpChar, reIsHostCtor, funcProto2, objectProto3, funcToString2, hasOwnProperty2, reIsNative, baseIsNative_default;
  var init_baseIsNative = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js"() {
      init_isFunction();
      init_isMasked();
      init_isObject();
      init_toSource();
      reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      reIsHostCtor = /^\[object .+?Constructor\]$/;
      funcProto2 = Function.prototype;
      objectProto3 = Object.prototype;
      funcToString2 = funcProto2.toString;
      hasOwnProperty2 = objectProto3.hasOwnProperty;
      reIsNative = RegExp(
        "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      baseIsNative_default = baseIsNative;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default;
  var init_getValue = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js"() {
      getValue_default = getValue;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default;
  var init_getNative = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js"() {
      init_baseIsNative();
      init_getValue();
      getNative_default = getNative;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
  function noop() {
  }
  var noop_default;
  var init_noop = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js"() {
      noop_default = noop;
    }
  });

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
  var baseFindIndex_default;
  var init_baseFindIndex = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFindIndex.js"() {
      baseFindIndex_default = baseFindIndex;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNaN.js
  function baseIsNaN(value) {
    return value !== value;
  }
  var baseIsNaN_default;
  var init_baseIsNaN = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNaN.js"() {
      baseIsNaN_default = baseIsNaN;
    }
  });

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
  var strictIndexOf_default;
  var init_strictIndexOf = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_strictIndexOf.js"() {
      strictIndexOf_default = strictIndexOf;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIndexOf.js
  function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
  }
  var baseIndexOf_default;
  var init_baseIndexOf = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIndexOf.js"() {
      init_baseFindIndex();
      init_baseIsNaN();
      init_strictIndexOf();
      baseIndexOf_default = baseIndexOf;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludes.js
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf_default(array, value, 0) > -1;
  }
  var arrayIncludes_default;
  var init_arrayIncludes = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludes.js"() {
      init_baseIndexOf();
      arrayIncludes_default = arrayIncludes;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var MAX_SAFE_INTEGER, reIsUint, isIndex_default;
  var init_isIndex = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js"() {
      MAX_SAFE_INTEGER = 9007199254740991;
      reIsUint = /^(?:0|[1-9]\d*)$/;
      isIndex_default = isIndex;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default;
  var init_eq = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js"() {
      eq_default = eq;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var MAX_SAFE_INTEGER2, isLength_default;
  var init_isLength = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js"() {
      MAX_SAFE_INTEGER2 = 9007199254740991;
      isLength_default = isLength;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default;
  var init_isArrayLike = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js"() {
      init_isFunction();
      init_isLength();
      isArrayLike_default = isArrayLike;
    }
  });

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
  var isIterateeCall_default;
  var init_isIterateeCall = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIterateeCall.js"() {
      init_eq();
      init_isArrayLike();
      init_isIndex();
      init_isObject();
      isIterateeCall_default = isIterateeCall;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default;
  var init_baseTimes = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js"() {
      baseTimes_default = baseTimes;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js
  var nativeCreate, nativeCreate_default;
  var init_nativeCreate = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js"() {
      init_getNative();
      nativeCreate = getNative_default(Object, "create");
      nativeCreate_default = nativeCreate;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default;
  var init_hashClear = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js"() {
      init_nativeCreate();
      hashClear_default = hashClear;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default;
  var init_hashDelete = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js"() {
      hashDelete_default = hashDelete;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty3.call(data, key) ? data[key] : void 0;
  }
  var HASH_UNDEFINED, objectProto4, hasOwnProperty3, hashGet_default;
  var init_hashGet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js"() {
      init_nativeCreate();
      HASH_UNDEFINED = "__lodash_hash_undefined__";
      objectProto4 = Object.prototype;
      hasOwnProperty3 = objectProto4.hasOwnProperty;
      hashGet_default = hashGet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
  }
  var objectProto5, hasOwnProperty4, hashHas_default;
  var init_hashHas = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js"() {
      init_nativeCreate();
      objectProto5 = Object.prototype;
      hasOwnProperty4 = objectProto5.hasOwnProperty;
      hashHas_default = hashHas;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var HASH_UNDEFINED2, hashSet_default;
  var init_hashSet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js"() {
      init_nativeCreate();
      HASH_UNDEFINED2 = "__lodash_hash_undefined__";
      hashSet_default = hashSet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  var Hash_default;
  var init_Hash = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js"() {
      init_hashClear();
      init_hashDelete();
      init_hashGet();
      init_hashHas();
      init_hashSet();
      Hash.prototype.clear = hashClear_default;
      Hash.prototype["delete"] = hashDelete_default;
      Hash.prototype.get = hashGet_default;
      Hash.prototype.has = hashHas_default;
      Hash.prototype.set = hashSet_default;
      Hash_default = Hash;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default;
  var init_listCacheClear = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js"() {
      listCacheClear_default = listCacheClear;
    }
  });

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
  var assocIndexOf_default;
  var init_assocIndexOf = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assocIndexOf.js"() {
      init_eq();
      assocIndexOf_default = assocIndexOf;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js
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
  var arrayProto, splice, listCacheDelete_default;
  var init_listCacheDelete = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js"() {
      init_assocIndexOf();
      arrayProto = Array.prototype;
      splice = arrayProto.splice;
      listCacheDelete_default = listCacheDelete;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default;
  var init_listCacheGet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js"() {
      init_assocIndexOf();
      listCacheGet_default = listCacheGet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default;
  var init_listCacheHas = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js"() {
      init_assocIndexOf();
      listCacheHas_default = listCacheHas;
    }
  });

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
  var listCacheSet_default;
  var init_listCacheSet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheSet.js"() {
      init_assocIndexOf();
      listCacheSet_default = listCacheSet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  var ListCache_default;
  var init_ListCache = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js"() {
      init_listCacheClear();
      init_listCacheDelete();
      init_listCacheGet();
      init_listCacheHas();
      init_listCacheSet();
      ListCache.prototype.clear = listCacheClear_default;
      ListCache.prototype["delete"] = listCacheDelete_default;
      ListCache.prototype.get = listCacheGet_default;
      ListCache.prototype.has = listCacheHas_default;
      ListCache.prototype.set = listCacheSet_default;
      ListCache_default = ListCache;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
  var Map, Map_default;
  var init_Map = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js"() {
      init_getNative();
      init_root();
      Map = getNative_default(root_default, "Map");
      Map_default = Map;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash_default(),
      "map": new (Map_default || ListCache_default)(),
      "string": new Hash_default()
    };
  }
  var mapCacheClear_default;
  var init_mapCacheClear = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js"() {
      init_Hash();
      init_ListCache();
      init_Map();
      mapCacheClear_default = mapCacheClear;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default;
  var init_isKeyable = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js"() {
      isKeyable_default = isKeyable;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default;
  var init_getMapData = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js"() {
      init_isKeyable();
      getMapData_default = getMapData;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default;
  var init_mapCacheDelete = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js"() {
      init_getMapData();
      mapCacheDelete_default = mapCacheDelete;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default;
  var init_mapCacheGet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js"() {
      init_getMapData();
      mapCacheGet_default = mapCacheGet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default;
  var init_mapCacheHas = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js"() {
      init_getMapData();
      mapCacheHas_default = mapCacheHas;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default;
  var init_mapCacheSet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js"() {
      init_getMapData();
      mapCacheSet_default = mapCacheSet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  var MapCache_default;
  var init_MapCache = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js"() {
      init_mapCacheClear();
      init_mapCacheDelete();
      init_mapCacheGet();
      init_mapCacheHas();
      init_mapCacheSet();
      MapCache.prototype.clear = mapCacheClear_default;
      MapCache.prototype["delete"] = mapCacheDelete_default;
      MapCache.prototype.get = mapCacheGet_default;
      MapCache.prototype.has = mapCacheHas_default;
      MapCache.prototype.set = mapCacheSet_default;
      MapCache_default = MapCache;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toString.js
  function toString(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default;
  var init_toString = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toString.js"() {
      init_baseToString();
      toString_default = toString;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createRound.js
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
  var nativeIsFinite, nativeMin, createRound_default;
  var init_createRound = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createRound.js"() {
      init_root();
      init_toInteger();
      init_toNumber();
      init_toString();
      nativeIsFinite = root_default.isFinite;
      nativeMin = Math.min;
      createRound_default = createRound;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js
  var Set2, Set_default;
  var init_Set = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js"() {
      init_getNative();
      init_root();
      Set2 = getNative_default(root_default, "Set");
      Set_default = Set2;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheAdd.js
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var HASH_UNDEFINED3, setCacheAdd_default;
  var init_setCacheAdd = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheAdd.js"() {
      HASH_UNDEFINED3 = "__lodash_hash_undefined__";
      setCacheAdd_default = setCacheAdd;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default;
  var init_setCacheHas = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheHas.js"() {
      setCacheHas_default = setCacheHas;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  var SetCache_default;
  var init_SetCache = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js"() {
      init_MapCache();
      init_setCacheAdd();
      init_setCacheHas();
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
      SetCache.prototype.has = setCacheHas_default;
      SetCache_default = SetCache;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default;
  var init_cacheHas = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js"() {
      cacheHas_default = cacheHas;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js
  function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default;
  var init_setToArray = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js"() {
      setToArray_default = setToArray;
    }
  });

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
  var arrayIncludesWith_default;
  var init_arrayIncludesWith = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludesWith.js"() {
      arrayIncludesWith_default = arrayIncludesWith;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castFunction.js
  function castFunction(value) {
    return typeof value == "function" ? value : identity_default;
  }
  var castFunction_default;
  var init_castFunction = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castFunction.js"() {
      init_identity();
      castFunction_default = castFunction;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js
  function baseRandom(lower, upper) {
    return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
  }
  var nativeFloor, nativeRandom, baseRandom_default;
  var init_baseRandom = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRandom.js"() {
      nativeFloor = Math.floor;
      nativeRandom = Math.random;
      baseRandom_default = baseRandom;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/random.js
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
  var freeParseFloat, nativeMin2, nativeRandom2, random_default;
  var init_random = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/random.js"() {
      init_baseRandom();
      init_isIterateeCall();
      init_toFinite();
      freeParseFloat = parseFloat;
      nativeMin2 = Math.min;
      nativeRandom2 = Math.random;
      random_default = random;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/round.js
  var round, round_default;
  var init_round = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/round.js"() {
      init_createRound();
      round = createRound_default("round");
      round_default = round;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/times.js
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
  var MAX_SAFE_INTEGER3, MAX_ARRAY_LENGTH, nativeMin3, times_default;
  var init_times = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/times.js"() {
      init_baseTimes();
      init_castFunction();
      init_toInteger();
      MAX_SAFE_INTEGER3 = 9007199254740991;
      MAX_ARRAY_LENGTH = 4294967295;
      nativeMin3 = Math.min;
      times_default = times;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js
  var INFINITY3, createSet, createSet_default;
  var init_createSet = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js"() {
      init_Set();
      init_noop();
      init_setToArray();
      INFINITY3 = 1 / 0;
      createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY3) ? noop_default : function(values) {
        return new Set_default(values);
      };
      createSet_default = createSet;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUniq.js
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
  var LARGE_ARRAY_SIZE, baseUniq_default;
  var init_baseUniq = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUniq.js"() {
      init_SetCache();
      init_arrayIncludes();
      init_arrayIncludesWith();
      init_cacheHas();
      init_createSet();
      init_setToArray();
      LARGE_ARRAY_SIZE = 200;
      baseUniq_default = baseUniq;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
  function uniq(array) {
    return array && array.length ? baseUniq_default(array) : [];
  }
  var uniq_default;
  var init_uniq = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js"() {
      init_baseUniq();
      uniq_default = uniq;
    }
  });

  // node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js
  var init_lodash = __esm({
    "node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js"() {
      init_random();
      init_round();
      init_times();
      init_uniq();
    }
  });

  // src/items.ts
  var Consumable;
  var init_items = __esm({
    "src/items.ts"() {
      Consumable = /* @__PURE__ */ ((Consumable2) => {
        Consumable2["mosquitoRepellentIncense"] = "mosquitoRepellentIncense";
        Consumable2["cockroachTrap"] = "cockroachTrap";
        Consumable2["cockroachGelBait"] = "cockroachGelBait";
        return Consumable2;
      })(Consumable || {});
    }
  });

  // src/consts/index.ts
  var VERSION, MAX_CREATURE_COUNT, DefaultCreatureIntervals, SuccessfulAttackProbabilities, DefenseFailDescList, ConsumableValidityPeriod, ConsumableLethality;
  var init_consts = __esm({
    "src/consts/index.ts"() {
      init_types();
      init_lodash();
      init_items();
      VERSION = "1.3.0-alpha";
      MAX_CREATURE_COUNT = 16;
      DefaultCreatureIntervals = {
        ["mosquito" /* mosquito */]: 60 * 60,
        ["cockroach" /* cockroach */]: 60 * 60 * 3
      };
      SuccessfulAttackProbabilities = {
        ["mosquito" /* mosquito */]: 60,
        ["cockroach" /* cockroach */]: 40
      };
      DefenseFailDescList = {
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
      ConsumableValidityPeriod = {
        ["mosquitoRepellentIncense" /* mosquitoRepellentIncense */]: 60 * 60 * 8,
        ["cockroachTrap" /* cockroachTrap */]: 60 * 60 * 8,
        ["cockroachGelBait" /* cockroachGelBait */]: 60 * 60 * 8
      };
      ConsumableLethality = {
        ["mosquitoRepellentIncense" /* mosquitoRepellentIncense */]: [3, 7],
        ["cockroachTrap" /* cockroachTrap */]: [1, 2],
        ["cockroachGelBait" /* cockroachGelBait */]: [5, 7]
      };
    }
  });

  // src/store/index.ts
  var getGroups, setGroups, removeGroup, getGroupState, setGroupState, getUserInfo, setUserInfos, addUserCreaturePoint, addUserReleaseCount;
  var init_store = __esm({
    "src/store/index.ts"() {
      init_types();
      init_lodash();
      init_items();
      getGroups = (ext) => {
        let temp = ext.storageGet("summer_creature_groups");
        if (temp) {
          return uniq_default(JSON.parse(temp));
        } else {
          return [];
        }
      };
      setGroups = (ext, groups) => {
        ext.storageSet("summer_creature_groups", JSON.stringify(uniq_default(groups)));
      };
      removeGroup = (ext, group) => {
        let groups = getGroups(ext);
        setGroups(ext, groups.filter((g) => g !== group));
      };
      getGroupState = (ext, group) => {
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
      setGroupState = (ext, group, groupState) => {
        ext.storageSet("summer_creature_group_status::" + group, JSON.stringify(groupState));
        let groups = getGroups(ext);
        groups.push(group);
        setGroups(ext, groups);
      };
      getUserInfo = (ext, userId) => {
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
      setUserInfos = (ext, userId, userInfo) => {
        ext.storageSet("summer_creature_user_info::" + userId, JSON.stringify(userInfo));
      };
      addUserCreaturePoint = (ext, userId, creature, add) => {
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
            if (points["cockroach" /* cockroach */] >= 10 && !info.achievements.cockroach10Kill) {
              info.achievements.cockroach10Kill = true;
              newAchievements.push("cockroach10Kill" /* Cockroach10Kill */);
              newItems.push("cockroachTrap" /* cockroachTrap */);
            }
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
      addUserReleaseCount = (ext, userId, creature, add) => {
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
    }
  });

  // src/utils/index.ts
  var isInstalled, getCreature, getCreatureByConsumable, getCreatures, getAchievementDesc, creatureCountByAction, getDefenseFailDesc, getItemDesc;
  var init_utils = __esm({
    "src/utils/index.ts"() {
      init_types();
      init_lodash();
      init_consts();
      init_items();
      init_store();
      isInstalled = (ext, groupId) => {
        let state = getGroupState(ext, groupId);
        return state.installed;
      };
      getCreature = (creature, text = false) => {
        switch (creature) {
          case "mosquito" /* mosquito */:
            return text ? "蚊子" : "🦟";
          case "cockroach" /* cockroach */:
            return text ? "蟑螂" : "🪳";
        }
      };
      getCreatureByConsumable = (consumable) => {
        switch (consumable) {
          case "mosquitoRepellentIncense" /* mosquitoRepellentIncense */:
            return "mosquito" /* mosquito */;
          case "cockroachTrap" /* cockroachTrap */:
            return "cockroach" /* cockroach */;
          case "cockroachGelBait" /* cockroachGelBait */:
            return "cockroach" /* cockroach */;
        }
      };
      getCreatures = (creature, count) => {
        var _a;
        return (_a = times_default(count, () => getCreature(Creature[creature])).join("")) != null ? _a : "";
      };
      getAchievementDesc = (achievement) => {
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
      creatureCountByAction = (state, action) => {
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
      getDefenseFailDesc = (creature) => {
        const descList = DefenseFailDescList[creature];
        return descList[random_default(0, descList.length - 1)];
      };
      getItemDesc = (item) => {
        switch (item) {
          case "electricSwatter" /* electricSwatter */:
            return ["电蚊拍", "对蚊子的命中率和杀伤提升了"];
          case "mosquitoRepellentIncense" /* mosquitoRepellentIncense */:
            return ["蚊香", "可以点蚊香了"];
          case "cockroachTrap" /* cockroachTrap */:
            return ["蟑螂屋", "可以放蟑螂屋了"];
          case "cockroachGelBait" /* cockroachGelBait */:
            return ["杀蟑胶饵", "可以使用杀蟑胶饵了"];
        }
      };
    }
  });

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
  var init_utils2 = __esm({
    "node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/utils.js"() {
    }
  });

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/cron.js
  var Cron;
  var init_cron = __esm({
    "node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/cron.js"() {
      init_utils2();
      Cron = class {
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
    }
  });

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/cron-parser.js
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
  var secondConstraint, minuteConstraint, hourConstraint, dayConstraint, monthConstraint, weekdayConstraint, timeNicknames;
  var init_cron_parser = __esm({
    "node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/cron-parser.js"() {
      init_cron();
      secondConstraint = {
        min: 0,
        max: 59
      };
      minuteConstraint = {
        min: 0,
        max: 59
      };
      hourConstraint = {
        min: 0,
        max: 23
      };
      dayConstraint = {
        min: 1,
        max: 31
      };
      monthConstraint = {
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
      weekdayConstraint = {
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
      timeNicknames = {
        "@yearly": "0 0 1 1 *",
        "@annually": "0 0 1 1 *",
        "@monthly": "0 0 1 1 *",
        "@weekly": "0 0 * * 0",
        "@daily": "0 0 * * *",
        "@hourly": "0 * * * *",
        "@minutely": "* * * * *"
      };
    }
  });

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/index.js
  var init_dist = __esm({
    "node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/index.js"() {
      init_cron_parser();
      init_cron();
    }
  });

  // node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/schedulers/interval-based.js
  var __classPrivateFieldSet, __classPrivateFieldGet, _IntervalBasedCronScheduler_interval, _IntervalBasedCronScheduler_intervalId, _IntervalBasedCronScheduler_tasks, _IntervalBasedCronScheduler_nextTaskId, IntervalBasedCronScheduler;
  var init_interval_based = __esm({
    "node_modules/.pnpm/cron-schedule@5.0.1/node_modules/cron-schedule/dist/schedulers/interval-based.js"() {
      init_utils2();
      __classPrivateFieldSet = function(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldGet = function(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      };
      IntervalBasedCronScheduler = class {
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
    }
  });

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

  // src/utils/dayjs.ts
  var import_dayjs, import_relativeTime, import_zh_cn, dayjs;
  var init_dayjs = __esm({
    "src/utils/dayjs.ts"() {
      import_dayjs = __toESM(require_dayjs_min());
      import_relativeTime = __toESM(require_relativeTime());
      import_zh_cn = __toESM(require_zh_cn());
      import_dayjs.default.extend(import_relativeTime.default);
      import_dayjs.default.locale("zh-cn");
      dayjs = import_dayjs.default;
    }
  });

  // src/handle/consumable.ts
  var timerUseConsumableHandle, useConsumableHandle, consumableKillCreature, setConsumableHandle, setConsumable;
  var init_consumable = __esm({
    "src/handle/consumable.ts"() {
      init_lodash();
      init_store();
      init_consts();
      init_types();
      init_utils();
      init_dayjs();
      init_items();
      timerUseConsumableHandle = (ext) => {
        var _a;
        const epMap = {};
        const eps = seal.getEndPoints();
        for (let ep of eps) {
          epMap[ep.userId] = ep;
        }
        const now = dayjs();
        for (let groupId of getGroups(ext)) {
          const groupState = getGroupState(ext, groupId);
          if (groupState.installed && groupState.consumableTime) {
            for (let consumable in Consumable) {
              const c = Consumable[consumable];
              const consumableMark = (_a = groupState.item) == null ? void 0 : _a[c];
              if (consumableMark) {
                const consumableTime = groupState.consumableTime[c];
                if (consumableTime + ConsumableValidityPeriod[c] > now.unix()) {
                  continue;
                }
                useConsumableHandle(ext, groupId, c, groupState);
              }
            }
          }
        }
      };
      useConsumableHandle = (ext, groupId, consumable, groupState = void 0) => {
        const lethality = ConsumableLethality[consumable];
        const kill = random_default(lethality[0], lethality[1]);
        switch (consumable) {
          case "mosquitoRepellentIncense" /* mosquitoRepellentIncense */:
            consumableKillCreature(ext, groupId, "mosquitoRepellentIncense" /* mosquitoRepellentIncense */, "mosquito" /* mosquito */, kill, groupState);
            break;
          case "cockroachTrap" /* cockroachTrap */:
            consumableKillCreature(ext, groupId, "cockroachTrap" /* cockroachTrap */, "cockroach" /* cockroach */, kill, groupState);
            break;
          case "cockroachGelBait" /* cockroachGelBait */:
            consumableKillCreature(ext, groupId, "cockroachGelBait" /* cockroachGelBait */, "cockroach" /* cockroach */, kill, groupState);
            break;
        }
      };
      consumableKillCreature = (ext, groupId, consumable, creature, kill, groupState = void 0) => {
        var _a, _b, _c, _d;
        const now = dayjs();
        console.log(`消耗品工作：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupId}，消耗品 ${getItemDesc(consumable)[0]}，击杀 ${kill} 只 ${getCreature(creature)}`);
        const state = groupState != null ? groupState : getGroupState(ext, groupId);
        const current = (_b = (_a = state.consumableKill) == null ? void 0 : _a[creature]) != null ? _b : 0;
        const actuallyKill = Math.min(kill, current);
        state.attacked = __spreadProps(__spreadValues({}, state.attacked), {
          [creature]: current - actuallyKill
        });
        state.consumableKill = __spreadProps(__spreadValues({}, state.consumableKill), {
          [consumable]: ((_d = (_c = state.consumableKill) == null ? void 0 : _c[consumable]) != null ? _d : 0) + kill
        });
        setGroupState(ext, groupId, state);
      };
      setConsumableHandle = (ext, groupId, userId, consumable) => {
        var _a, _b, _c;
        const state = getGroupState(ext, groupId);
        if (!state.installed) {
          return "夏季生物还未出现，无法使用！";
        }
        const now = dayjs();
        const consumableDesc = getItemDesc(consumable)[0];
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
              setConsumable(ext, groupId, "mosquitoRepellentIncense" /* mosquitoRepellentIncense */, now, state);
            }
            break;
          case "cockroachTrap" /* cockroachTrap */:
            if (!userInfo.achievements.cockroach10Kill) {
              return "你还没有解锁蟑螂屋，继续踩死更多蟑螂吧";
            } else {
              setConsumable(ext, groupId, "cockroachTrap" /* cockroachTrap */, now, state);
            }
            break;
          case "cockroachGelBait" /* cockroachGelBait */:
            if (!userInfo.achievements.cockroach100Kill) {
              return "你还没有解锁杀蟑胶饵，继续踩死更多蟑螂吧";
            } else {
              setConsumable(ext, groupId, "cockroachGelBait" /* cockroachGelBait */, now, state);
            }
            break;
          default:
            return "未知的物品！";
        }
        setGroupState(ext, groupId, state);
        return `成功在本群放置${consumableDesc}！`;
      };
      setConsumable = (ext, groupId, consumable, time, groupState = void 0) => {
        const state = groupState != null ? groupState : getGroupState(ext, groupId);
        state.item = __spreadProps(__spreadValues({}, state.item), {
          [consumable]: true
        });
        state.consumableTime = __spreadProps(__spreadValues({}, state.consumableTime), {
          [consumable]: time.unix()
        });
        state.consumableKill = __spreadProps(__spreadValues({}, state.consumableKill), {
          [consumable]: 0
        });
        setGroupState(ext, groupId, state);
      };
    }
  });

  // src/handle/start.ts
  var startHandle, stopHandle;
  var init_start = __esm({
    "src/handle/start.ts"() {
      init_store();
      startHandle = (ext, epUserId, groupId, guildId, userId) => {
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
      stopHandle = (ext, groupId) => {
        let state = getGroupState(ext, groupId);
        if (!state.installed) {
          return "夏季生物还未出现！";
        }
        state.installed = false;
        setGroupState(ext, groupId, state);
        removeGroup(ext, groupId);
        return `神秘的力量让群里不再有讨厌的生物活动了……`;
      };
    }
  });

  // src/handle/grow.ts
  var growHandle, manualReleaseHandle, timerGrowHandle;
  var init_grow = __esm({
    "src/handle/grow.ts"() {
      init_types();
      init_utils();
      init_store();
      init_lodash();
      init_dayjs();
      init_consts();
      growHandle = (ext, groupId, userId, creature, groupState = void 0, mode = "auto", count = 0) => {
        var _a, _b, _c;
        const now = dayjs();
        console.log(`夏季生物繁殖：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(creature)}，模式 ${mode}`);
        let state = groupState != null ? groupState : getGroupState(ext, groupId);
        if (count === 0) {
          if (!((_a = state.attacked) == null ? void 0 : _a[creature])) {
            count = random_default(5, 10);
          } else {
            const currentCount = state.attacked[creature];
            if (currentCount < MAX_CREATURE_COUNT) {
              count = Math.min(random_default(5, 7), MAX_CREATURE_COUNT - currentCount);
            } else {
              count = 0;
            }
          }
        }
        let achievementStr = "";
        if (count > 0) {
          state.attacked = __spreadProps(__spreadValues({}, state.attacked), {
            [creature]: ((_c = (_b = state.attacked) == null ? void 0 : _b[creature]) != null ? _c : 0) + count
          });
          if (mode === "manual") {
            const newAchievements = addUserReleaseCount(ext, userId, creature, count);
            if (newAchievements.length > 0) {
              achievementStr = "获得成就" + newAchievements.map((it) => `「${getAchievementDesc(it)}」`).join("");
            }
          }
          setGroupState(ext, groupId, state);
        }
        return [achievementStr, count];
      };
      manualReleaseHandle = (ext, groupId, userId, userName, creature) => {
        let state = getGroupState(ext, groupId);
        if (!state.installed) {
          return "夏季生物还未出现！";
        }
        let [achievement, count] = growHandle(ext, groupId, userId, creature, state, "manual");
        const creatureName = getCreature(creature);
        let result = `<${userName}>成功向群里释放了 ${count} 只${creatureName}`;
        if (achievement != "") {
          result += `
${achievement}`;
        }
        return result;
      };
      timerGrowHandle = (ext) => {
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
              growHandle(ext, groupId, "", c, groupState, "auto");
            }
          }
        }
      };
    }
  });

  // src/config.ts
  var CreatureIntervals;
  var init_config = __esm({
    "src/config.ts"() {
      init_types();
      init_consts();
      init_lodash();
      CreatureIntervals = {
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
    }
  });

  // src/handle/attack.ts
  var attackGroupUsers, timerAttackHandle, autoAttackHandle;
  var init_attack = __esm({
    "src/handle/attack.ts"() {
      init_store();
      init_types();
      init_config();
      init_utils();
      init_dayjs();
      attackGroupUsers = (ext, groupId, creature, groupStatus = void 0) => {
        var _a, _b;
        let state = groupStatus != null ? groupStatus : getGroupState(ext, groupId);
        const count = (_b = (_a = state == null ? void 0 : state.attacked) == null ? void 0 : _a[creature]) != null ? _b : 0;
        if (count > 0) {
          state.lastAttacked = __spreadProps(__spreadValues({}, state.lastAttacked), { [creature]: dayjs().unix() });
          setGroupState(ext, groupId, state);
          const attackedUsers = [];
          return getCreatures(creature, count) + "\n" + attackedUsers.map((attackedUser) => `[CQ:at,qq=${attackedUser}]被${getCreature(creature, true)}袭击了`);
        }
        return "";
      };
      timerAttackHandle = (ext) => {
        var _a, _b;
        const nowRow = dayjs();
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
      autoAttackHandle = (ext, ep, c, groupState, mode = "auto") => {
        const now = dayjs();
        console.log(`夏季生物袭击：时间 ${now.format("YYYY-MM-DD HH:mm:ss")}，群 ${groupState.targetGroupId}，生物 ${getCreature(c)}，模式 ${mode}`);
        const result = attackGroupUsers(ext, groupState.targetGroupId, c, groupState);
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
    }
  });

  // src/handle/defense.ts
  var defenseHandle;
  var init_defense = __esm({
    "src/handle/defense.ts"() {
      init_types();
      init_store();
      init_utils();
      init_lodash();
      init_consts();
      defenseHandle = (ext, groupId, userId, action) => {
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
    }
  });

  // src/handle/status.ts
  var statusHandle;
  var init_status = __esm({
    "src/handle/status.ts"() {
      init_store();
      init_types();
      init_consts();
      init_utils();
      init_dayjs();
      init_items();
      statusHandle = (ext, groupId, userId) => {
        var _a, _b, _c, _d, _e, _f;
        const state = getGroupState(ext, groupId);
        if (state.installed) {
          let status = "夏季生物活动中——";
          let creatureCountDesc = "";
          for (let creature in Creature) {
            const c = Creature[creature];
            const count = (_b = (_a = state == null ? void 0 : state.attacked) == null ? void 0 : _a[c]) != null ? _b : 0;
            if (count > 0) {
              const ratio = Number((count / MAX_CREATURE_COUNT).toFixed(2));
              if (ratio >= 0.8) {
                creatureCountDesc += `
${getCreature(c)}：极多`;
              } else if (ratio >= 0.6) {
                creatureCountDesc += `
${getCreature(c)}：多`;
              } else if (ratio >= 0.4) {
                creatureCountDesc += `
${getCreature(c)}：一般`;
              } else {
                creatureCountDesc += `
${getCreature(c)}：少`;
              }
            } else {
              creatureCountDesc += `
${getCreature(c)}：无`;
            }
          }
          if (creatureCountDesc !== "") {
            status += "\n\n生物密度:" + creatureCountDesc;
          }
          let consumableState = "";
          const now = dayjs();
          for (let consumable in Consumable) {
            const c = Consumable[consumable];
            const consumableTime = (_d = (_c = state.consumableTime) == null ? void 0 : _c[c]) != null ? _d : now.unix() - ConsumableValidityPeriod[c];
            if (consumableTime + ConsumableValidityPeriod[c] > now.unix()) {
              const count = (_f = (_e = state == null ? void 0 : state.consumableKill) == null ? void 0 : _e[c]) != null ? _f : 0;
              consumableState += `
${getItemDesc(c)[0]}已放置`;
              if (count > 0) {
                consumableState += `，并对 ${count} 只 ${getCreature(getCreatureByConsumable(c))} 生效`;
              }
              consumableState += `，${dayjs.unix(consumableTime + ConsumableValidityPeriod[c]).from(now)}有效`;
            }
          }
          if (consumableState !== "") {
            status += "\n" + consumableState;
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
    }
  });

  // src/index.ts
  var require_src = __commonJS({
    "src/index.ts"() {
      init_consts();
      init_types();
      init_utils();
      init_items();
      init_dist();
      init_interval_based();
      init_consumable();
      init_start();
      init_grow();
      init_attack();
      init_defense();
      init_status();
      var scheduler = new IntervalBasedCronScheduler(10 * 1e3);
      var registerTask = (cron, task) => {
        scheduler.registerTask(parseCronExpression(cron), task);
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
              seal.replyToSender(ctx, msg, manualReleaseHandle(ext, msg.groupId, msg.sender.userId, msg.sender.nickname, creature));
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
              result = setConsumableHandle(ext, msg.groupId, msg.sender.userId, "mosquitoRepellentIncense" /* mosquitoRepellentIncense */);
            } else if (message === "#放蟑螂屋") {
              result = setConsumableHandle(ext, msg.groupId, msg.sender.userId, "cockroachTrap" /* cockroachTrap */);
            } else if (message === "#放杀蟑胶饵") {
              result = setConsumableHandle(ext, msg.groupId, msg.sender.userId, "cockroachGelBait" /* cockroachGelBait */);
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
        registerTask("* */30 * * * *", () => {
          timerGrowHandle(ext);
        });
        registerTask("*/30 * * * * *", () => {
          timerAttackHandle(ext);
        });
        registerTask("* */10 * * * *", () => {
          timerUseConsumableHandle(ext);
        });
      }
      main();
    }
  });
  require_src();
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
