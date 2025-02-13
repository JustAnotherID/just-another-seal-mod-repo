// ==UserScript==
// @name         模拟农场
// @author       JustAnotherID
// @version      1.0.0
// @description  农场模拟器。使用「.农场 帮助」来查看帮助。
// @timestamp    2025-02-13 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/js/farm
// @updateUrl    https://ghproxy.justanotherid.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/farm/dist/%E6%A8%A1%E6%8B%9F%E5%86%9C%E5%9C%BA.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/farm/dist/%E6%A8%A1%E6%8B%9F%E5%86%9C%E5%9C%BA.js
// ==/UserScript==

(()=>{function o(){let e=seal.ext.find("farm");e||(e=seal.ext.new("farm","JustAnotherID","1.0.0"),seal.ext.register(e));let n=`\u6A21\u62DF\u519C\u573A\u3002
.\u519C\u573A \u67E5\u770B // \u663E\u793A\u4FE1\u606F
.\u519C\u573A \u5E2E\u52A9 // \u663E\u793A\u5E2E\u52A9`,t=seal.ext.newCmdItemInfo();t.name="\u519C\u573A",t.help=n,t.solve=(x,r,l)=>{switch(l.getArgN(1)){case"\u67E5\u770B":let a=c(r.sender.userId);return seal.replyToSender(x,r,a),seal.ext.newCmdExecuteResult(!0);case"help":case"\u5E2E\u52A9":default:let s=seal.ext.newCmdExecuteResult(!0);return s.showHelp=!0,s}},e.cmdMap.\u519C\u573A=t}var c=e=>`[CQ:at,qq=${e}] \u7684\u519C\u573A\uFF1A
\u91D1\u5E01\uFF1AxG  \u519C\u7530\uFF1Ax\u5757

[1]: \u7267\u8349 x\u65F6x\u5206x\u79D2\u540E\u53EF\u6536\u83B7 \u9884\u8BA1\u6536\u5165xG
[2]: \u7267\u8349 x\u65F6x\u5206x\u79D2\u540E\u53EF\u6536\u83B7 \u9884\u8BA1\u6536\u5165xG
[3]: \u7267\u8349 \u53EF\u6536\u83B7 \u6536\u83B7\u540E\u53EF\u5F97xG
[4]: \u7267\u8349 \u53EF\u6536\u83B7[\u88AB\u5077] \u6536\u83B7\u540E\u53EF\u5F97xG\uFF08\u5DF2\u635F\u5931xG\uFF09
\u5269\u4F59x\u5757\u519C\u7530\u95F2\u7F6E\u3002
`;o();})();
