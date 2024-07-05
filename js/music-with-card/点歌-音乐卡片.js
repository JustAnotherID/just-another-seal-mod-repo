// ==UserScript==
// @name         点歌（音乐卡片版）
// @author       JustAnotherID
// @version      1.0.0
// @description  点歌，返回能直接播放的音乐卡片（仅使用最新 Lagrange 测试可用，其他接入可能也能使用，不保证）\n提供命令：「.点歌 <歌名> (作者)」（QQ音乐）或「.网易云 <歌名> (作者)」（会被展示成QQ音乐），作者是可选的\n网易云的 API 和 Token 可在「插件设置」中配置\n注意：Lagrange 想要发送音乐卡片，请自行在 appsettings.json 中配置音乐卡片签名（通常你需要为分离部署）\n> 感谢原作者星尘，编写了最初的插件代码\n> 感谢二改作者 kakakumous，网易云查询使用的 API 和 Token 取自其二改
// @timestamp    2024-07-05 11:45:14
// @license      Apache-2
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/music-with-card
// ==/UserScript==
if (!seal.ext.find("music-with-card")) {
  const ext = seal.ext.new("music-with-card", "JustAnotherID", "1.0.0");
  // 注册扩展
  seal.ext.register(ext);

  // qq点歌命令
  const cmdQQMusic = seal.ext.newCmdItemInfo();
  cmdQQMusic.name = "点歌";
  cmdQQMusic.help = "QQ音乐点歌，可用「.点歌 <歌名 > (作者)」，作者是可选的";
  cmdQQMusic.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case "help": {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        if (!val) {
          seal.replyToSender(ctx, msg, `要输入歌名啊...`);
        }
        let musicName = val;
        let url =
          `https://c.y.qq.com/soso/fcgi-bin/music_search_new_platform?searchid=53806572956004615&t=1&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=2&w=${musicName}`
        // 发送 GET 请求
        fetch(url)
          .then((response) => {
            // 判断响应状态码是否为 200
            if (response.ok) {
              return response.text();
            } else {
              console.log("qq音乐api失效！");
            }
          })
          .then((data) => {
            let musicJson = JSON.parse(data.replace(/callback\(|\)/g, ""));
            if (musicJson["data"]["song"]["list"] == 0) {
              seal.replyToSender(ctx, msg, "没找到这首歌...");
              //   return "没找到这首歌...";
            }
            let musicName = musicJson["data"]["song"]["list"]["0"]["fsong"];
            let _singer = musicJson["data"]["song"]["list"]["0"]["fsinger"];
            let _singer2 = musicJson["data"]["song"]["list"]["0"]["fsinger2"];
            let singer = _singer2 ? _singer + "/" + _singer2 : _singer;
            let _f = musicJson["data"]["song"]["list"]["0"]["f"].split("|");
            let url = `https://i.y.qq.com/v8/playsong.html?platform=11&appshare=android_qq&appversion=13070008&songmid=${_f[_f.length - 5]}&type=0&appsongtype=1&_wv=1&source=qq&ADTAG=qfshare`;
            let imgUrl = `https://y.qq.com/music/photo_new/T002R300x300M000${_f[_f.length - 3]}_1.jpg?max_age=2592000`;
            let messageRet = `[CQ:music,type=custom,url=${url},audio=${url},title=${musicName},singer=${singer},image=${imgUrl}]`;
            seal.replyToSender(ctx, msg, messageRet);
          })
          .catch((error) => {
            console.log(
              "qq音乐api请求错误！（部分报错可能是你的海豹版本不够新）错误原因：" +
                error
            );
          });
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };

  // from: kakakumous
  // 免责声明：随便搜的api不知道能用多久，家人们有更好的选择可以自己换，这个文件上传之后不会再维护
  // 更新 token 教程：进入这个网页 https://www.free-api.com/doc/369 有个关注公众号
  seal.ext.registerStringConfig(ext, "网易云点歌 API", "https://v2.alapi.cn/api/music/search", "网易云点歌 API，查询名和token会用 ?keyword=歌名&token=token 拼接在后面");
  seal.ext.registerStringConfig(ext, "网易云点歌 API Token", "LwExDtUWhF3rH5ib", "网易云点歌 API Token，由 kakakumous 提供方法和预置token（更新token教程：进入这个网页https://www.free-api.com/doc/369有个关注公众号）");

  // 网易云点歌命令
  const cmdCloudMusic = seal.ext.newCmdItemInfo();
  cmdCloudMusic.name = "网易云";
  cmdCloudMusic.help =
    "网易云点歌，可用「.网易云 <歌名> (作者)」，作者是可选的";
  cmdCloudMusic.solve = (ctx, msg, cmdArgs) => {
    let val = cmdArgs.getArgN(1);
    switch (val) {
      case "help": {
        const ret = seal.ext.newCmdExecuteResult(true);
        ret.showHelp = true;
        return ret;
      }
      default: {
        if (!val) {
          seal.replyToSender(ctx, msg, `要输入歌名啊...`);
        }
        let musicName = val;
        let _url = seal.ext.getStringConfig(ext, "网易云点歌 API")
        let token = seal.ext.getStringConfig(ext, "网易云点歌 API Token")
        let url = `${_url}?keyword=${musicName}&token=${token}`
        // 发送 GET 请求
        fetch(url)
          .then((response) => {
            // 判断响应状态码是否为 200
            if (response.ok) {
              return response.text();
            } else {
              console.log(response.status);
              console.log("网易云音乐api失效！");
            }
          })
          .then((data) => {
            console.log(data);
            let musicJson = JSON.parse(data).data;
            if (musicJson.songCount == 0) {
              seal.replyToSender(ctx, msg, "没找到这首歌");
              return seal.ext.newCmdExecuteResult(true);
            }
            let music = musicJson.songs[0];
            let artists =
              (music?.artists ?? [])?.map((a) => a?.name)?.join("/") ?? "";
            let url = `https://y.music.163.com/m/song?id=${music.id}&app_version=9.1.10`;
            let imgUrl = music?.album?.artist?.img1v1Url ?? "";
            let messageRet = `[CQ:music,type=custom,url=${url},audio=${url},title=${music.name},singer=${artists},image=${imgUrl}]`;
            seal.replyToSender(ctx, msg, messageRet);
          })
          .catch((error) => {
            console.log("网易云音乐api请求错误！错误原因：" + error);
            console.log(musicJson);
          });
        return seal.ext.newCmdExecuteResult(true);
      }
    }
  };
  // 注册命令
  ext.cmdMap["点歌"] = cmdQQMusic;
  ext.cmdMap["QQ音乐"] = cmdQQMusic;
  ext.cmdMap["qq音乐"] = cmdQQMusic;
  ext.cmdMap["网易云"] = cmdCloudMusic;
}
