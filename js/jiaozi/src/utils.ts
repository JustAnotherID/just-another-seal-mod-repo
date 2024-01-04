import { gzip, ungzip } from 'pako';

export function text2jiaozi(text: string): string {
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
  return bits
    .split('')
    .map((bit) => {
      if (bit === '0') {
        return '饺';
      } else if (bit === '1') {
        return '子';
      } else {
        return '';
      }
    })
    .join('');
}

export function jiaozi2text(jiaozi: string): string | undefined {
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
