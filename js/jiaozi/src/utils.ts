/*
 * 饺子码编码格式：'饺'=0 '子'=1 '吃'=2 '?'=3 '？'=4 '!'=5 '！'=6 '~'=7
 * 版本号 3bit + 编码方式 1 bit
 * 版本号 001 作为未控制包头的旧饺子码版本号
 * 版本号 010（版本 2）开始控制包头长度
 * 版本号 011 为当前版本（版本 3），升级为 8 进制
 */

import { gzip, ungzip } from 'pako';

export function text2jiaozi(text: string): string {
  return text2jiaoziV2(text);
}

export function text2jiaoziCompress(text: string): string {
  return text2jiaoziV3(text);
}

/**
 * 编码饺子码v3
 *
 * @param text 文本
 * @returns 饺子码v1
 */
export function text2jiaoziV3(text: string): string {
  const rawStr = stringToUtf8ByteArray(text)
    .map((i) => i.toString(8).padStart(3, '0'))
    .join('');
  const compressed = Array.from(gzip(text, { level: 9 }) as Uint8Array)
    .map((i) => i.toString(8).padStart(3, '0'))
    .join('');
  let bits;
  if (compressed.length < rawStr.length) {
    // 编码方式 1 为 gzip 压缩
    const prefix = '0111';
    bits = `${prefix}${compressed}`;
  } else {
    // 编码方式 0 为 utf8 原始编码
    const prefix = '0110';
    bits = `${prefix}${rawStr}`;
  }
  return bits2JiaoziChars(bits);
}

/**
 * 编码饺子码v2
 *
 * @param text 文本
 * @returns 饺子码v1
 */
export function text2jiaoziV2(text: string): string {
  const rawStr = stringToUtf8ByteArray(text)
    .map((i) => i.toString(2).padStart(8, '0'))
    .join('');
  const compressed = Array.from(gzip(text, { level: 9 }) as Uint8Array)
    .map((i) => i.toString(2).padStart(8, '0'))
    .join('');
  let bits;
  if (compressed.length < rawStr.length) {
    // 编码方式 1 为 gzip 压缩
    const prefix = '0101';
    bits = `${prefix}${compressed}`;
  } else {
    // 编码方式 0 为 utf8 原始编码
    const prefix = '0100';
    bits = `${prefix}${rawStr}`;
  }
  return bits2JiaoziChars(bits);
}

/**
 * 未控制包头的旧饺子码编码
 * @deprecated
 */
function oldText2jiaozi(text: string): string {
  const rawStr = stringToUtf8ByteArray(text)
    .map((i) => i.toString(2).padStart(8, '0'))
    .join('');
  const compressed = Array.from(gzip(text, { level: 9 }) as Uint8Array)
    .map((i) => i.toString(2).padStart(8, '0'))
    .join('');
  let bits;
  if (compressed.length < rawStr.length) {
    const prefix = stringToUtf8ByteArray('0:1:')
      .map((i) => i.toString(2).padStart(8, '0'))
      .join('');
    bits = `${prefix}${compressed}`;
  } else {
    const prefix = stringToUtf8ByteArray('0:0:')
      .map((i) => i.toString(2).padStart(8, '0'))
      .join('');
    bits = `${prefix}${rawStr}`;
  }
  return bits2JiaoziChars(bits);
}

/**
 * 解析饺子码
 */
export function jiaozi2text(jiaozi: string): string | undefined {
  const versionStr = jiaozi.slice(0, 3);
  switch (versionStr) {
    // 001: 旧饺子码
    case '饺饺子':
      return oldJiaozi2text(jiaozi);
    // 010: 饺子码v2
    case '饺子饺':
      return jiaozi2textV2(jiaozi);
    // 011: 饺子码v3
    case '饺子子':
      return jiaozi2textV3(jiaozi);
    default:
      return undefined;
  }
}

/**
 * 解析饺子码v3
 */
function jiaozi2textV3(jiaozi: string): string | undefined {
  const format = jiaozi.slice(3, 4);
  switch (format) {
    // 编码方式 0 为 utf8 原始编码
    case '饺':
      return utf8ByteArrayToString(
        jiaoziChars2bits(jiaozi.slice(4))
          .match(/.{3}/g)
          .map((i) => parseInt(i, 8))
      );
    // 编码方式 1 为 gzip 压缩
    case '子':
      const bits = new Uint8Array(
        jiaoziChars2bits(jiaozi.slice(4))
          .match(/.{3}/g)
          .map((i) => parseInt(i, 8))
      );
      return ungzip(bits, { to: 'string' });
    default:
      return undefined;
  }
}

/**
 * 解析饺子码v2
 */
function jiaozi2textV2(jiaozi: string): string | undefined {
  const format = jiaozi.slice(3, 4);
  switch (format) {
    // 编码方式 0 为 utf8 原始编码
    case '饺':
      return utf8ByteArrayToString(
        jiaoziChars2bits(jiaozi.slice(4))
          .match(/.{8}/g)
          .map((i) => parseInt(i, 2))
      );
    // 编码方式 1 为 gzip 压缩
    case '子':
      const bits = new Uint8Array(
        jiaoziChars2bits(jiaozi.slice(4))
          .match(/.{8}/g)
          .map((i) => parseInt(i, 2))
      );
      return ungzip(bits, { to: 'string' });
    default:
      return undefined;
  }
}

/**
 * 解析旧饺子码
 * 格式为 版本号:编码格式:数据
 * @deprecated
 */
function oldJiaozi2text(jiaozi: string): string | undefined {
  const bits = jiaozi
    .split('')
    .map((c) => {
      if (c === '饺') {
        return '0';
      } else if (c === '子') {
        return '1';
      } else {
        return '';
      }
    })
    .join('');
  const array = bits.match(/.{8}/g).map((i) => parseInt(i, 2));
  // 解析版本号和编码方式
  const temp = utf8ByteArrayToString(array).split(':');
  if (temp.length < 3) {
    return undefined;
  }
  const version = parseInt(temp[0]);
  const format = parseInt(temp[1]);
  if (version == 0) {
    const prefixLen = stringToUtf8ByteArray(`${version}:${format}:`)
      .map((i) => i.toString(2).padStart(8, '0'))
      .join('');
    switch (format) {
      // 原始值
      case 0:
        return utf8ByteArrayToString(
          array.slice(`${version}:${format}:`.length)
        );
      // gzip 压缩
      case 1:
        const data = jiaozi.slice(prefixLen.length);
        if (data.length % 8 !== 0) {
          return undefined;
        }
        const val = data.match(/.{8}/g).map((i) => parseInt(i, 2));
        const bits = new Uint8Array(val);
        return ungzip(bits, { to: 'string' });
      default:
        return undefined;
    }
  }
  return undefined;
}

function stringToUtf8ByteArray(str: string): Array<number> {
  let out = [],
    p = 0;
  for (let i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = (c >> 6) | 192;
      out[p++] = (c & 63) | 128;
    } else if (
      (c & 0xfc00) == 0xd800 &&
      i + 1 < str.length &&
      (str.charCodeAt(i + 1) & 0xfc00) == 0xdc00
    ) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = (c >> 18) | 240;
      out[p++] = ((c >> 12) & 63) | 128;
      out[p++] = ((c >> 6) & 63) | 128;
      out[p++] = (c & 63) | 128;
    } else {
      out[p++] = (c >> 12) | 224;
      out[p++] = ((c >> 6) & 63) | 128;
      out[p++] = (c & 63) | 128;
    }
  }
  return out;
}

function utf8ByteArrayToString(bytes: Uint8Array | Array<number>): string {
  let out = [],
    pos = 0,
    c = 0;
  while (pos < bytes.length) {
    let c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u =
        (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
        0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var c2 = bytes[pos++];
      var c3 = bytes[pos++];
      out[c++] = String.fromCharCode(
        ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      );
    }
  }
  return out.join('');
}

function bits2JiaoziChars(bits: string) {
  return bits
    .split('')
    .map((bit) => {
      if (bit === '0') {
        return '饺';
      } else if (bit === '1') {
        return '子';
      } else if (bit === '2') {
        return '吃';
      } else if (bit === '3') {
        return '?';
      } else if (bit === '4') {
        return '？';
      } else if (bit === '5') {
        return '!';
      } else if (bit === '6') {
        return '！';
      } else if (bit === '7') {
        return '~';
      } else {
        return '';
      }
    })
    .join('');
}

function jiaoziChars2bits(jiaozi: string) {
  return jiaozi
    .split('')
    .map((c) => {
      if (c === '饺') {
        return '0';
      } else if (c === '子') {
        return '1';
      } else if (c === '吃') {
        return '2';
      } else if (c === '?') {
        return '3';
      } else if (c === '？') {
        return '4';
      } else if (c === '!') {
        return '5';
      } else if (c === '！') {
        return '6';
      } else if (c === '~') {
        return '7';
      } else {
        return '';
      }
    })
    .join('');
}
