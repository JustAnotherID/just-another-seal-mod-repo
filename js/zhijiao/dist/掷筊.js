// ==UserScript==
// @name         掷筊
// @author       JustAnotherID
// @version      1.0.1
// @description  使用 .掷筊/掷杯 help 查看帮助
// @timestamp    2024-04-10 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/zhijiao
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/zhijiao/dist/%E6%8E%B7%E7%AD%8A.js
// ==/UserScript==
(()=>{var u=(t,l)=>{let a=Math.ceil(t),e=Math.floor(l);return Math.floor(Math.random()*(e-a+1)+a)},m=(t,l=1)=>{let a=t?`\u7531\u4E8E\u300C${t}\u300D\uFF0C\u63B7\u7B4A\uFF1A
`:`\u63B7\u7B4A\uFF1A
`,e="";for(let n=0;n<l;n++){n!==0&&(e+=`
`);let s=u(0,1),r=u(0,1);s^r?e+="\u5723\u7B4A\uFF08\u4E00\u9634\u4E00\u9633\uFF09":s===0?e+="\u54ED\u7B4A\uFF08\u4E8C\u9634\uFF09":e+="\u7B11\u7B4A\uFF08\u4E8C\u9633\uFF09"}return a+e},i=m;function d(){let t=seal.ext.find("zhijiao");t||(t=seal.ext.new("zhijiao","JustAnotherID","1.0.0"),seal.ext.register(t));let l=seal.ext.newCmdItemInfo(),a=`\u63B7\u7B4A
.\u63B7\u7B4A/\u63B7\u676F <\u539F\u56E0> // \u63B7\u7B4A
.\u63B7\u4E09\u6B21 <\u539F\u56E0> // \u63B7\u7B4A\u4E09\u6B21`;l.name="\u63B7\u7B4A",l.help=a,l.solve=(n,s,r)=>{switch(r.getArgN(1)){case"":case"help":{let o=seal.ext.newCmdExecuteResult(!0);return o.showHelp=!0,o}default:return seal.replyToSender(n,s,i(r.rawArgs)),seal.ext.newCmdExecuteResult(!0)}};let e=seal.ext.newCmdItemInfo();e.name="\u63B7\u4E09\u6B21",e.help=a,e.solve=(n,s,r)=>{switch(r.getArgN(1)){case"":case"help":{let o=seal.ext.newCmdExecuteResult(!0);return o.showHelp=!0,o}default:return seal.replyToSender(n,s,i(r.rawArgs,3)),seal.ext.newCmdExecuteResult(!0)}},t.cmdMap.\u63B7\u7B4A=l,t.cmdMap.\u63B7\u676F=l,t.cmdMap.\u63B7\u4E09\u6B21=e}d();})();
