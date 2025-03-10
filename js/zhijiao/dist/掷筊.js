// ==UserScript==
// @name         掷筊
// @author       JustAnotherID
// @version      1.1.2
// @description  使用 .掷筊/掷杯 help 查看帮助   1.1.0-增加 .求解 指令
// @timestamp    2025-02-13 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/zhijiao
// @updateUrl    https://ghproxy.justanotherid.com/https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/zhijiao/dist/%E6%8E%B7%E7%AD%8A.js
// @updateUrl    https://raw.githubusercontent.com/JustAnotherID/just-another-seal-mod-repo/master/js/zhijiao/dist/%E6%8E%B7%E7%AD%8A.js
// ==/UserScript==

(()=>{var u=(e,t)=>{let l=Math.ceil(e),m=Math.floor(t);return Math.floor(Math.random()*(m-l+1)+l)},i=e=>`zhijiao_${e}`,x=(e,t)=>JSON.stringify({resKey:e,times:t}),k=e=>e&&e!==""?JSON.parse(e):{resKey:0,times:0};var K=[{key:111,name:"\u4E09\u5723\u676F",type:"\u4E0A\u4E0A",desc:`\u90ED\u5B50\u4EEA\u5168\u7984\u3002
\u798F\u5982\u4E1C\u6D77\u5BFF\u5357\u5C71\uFF0C
\u541B\u5C14\u4F55\u6545\u82E6\u4E2D\u95F4\uFF1F
\u5BCC\u8D35\u8363\u534E\u5929\u6CE8\u5B9A\uFF0C
\u592A\u767D\u8D35\u4EBA\u5B88\u8EAB\u8FB9\u3002
\u51E1\u4E8B\u5927\u5409\uFF0C
\u6697\u529D\u4E16\u4EBA\u3002`},{key:222,name:"\u4E09\u7B11\u676F",type:"\u4E0A\u5409",desc:`\u56DB\u7693\u516B\u4ED9\uFF0C\u5341\u516B\u5B66\u58EB\u3002
\u98CE\u606C\u6D6A\u9759\u597D\u884C\u821F\uFF0C
\u9AD8\u6B4C\u9F13\u821E\u4E50\u60A0\u60A0\uFF1B
\u56DB\u7693\u516B\u4ED9\u9F50\u7545\u996E\uFF0C
\u5341\u516B\u5B66\u58EB\u767B\u701B\u6D32\u3002
\u529F\u540D\u5927\u5409\uFF0C
\u51FA\u5916\u5927\u5409\u3002`},{key:0,name:"\u4E09\u54ED\u676F",type:"\u4E0B\u4E0B",desc:`\u6B66\u5219\u5929\u5750\u5929\u3002
\u9B3C\u95E8\u5173\u4E0A\u649E\u65E0\u5E38\uFF0C
\u7834\u8239\u66F4\u9047\u6D6A\u5934\u98CE\uFF1B
\u4E45\u8FDC\u51A4\u5BB6\u76F8\u7F57\u7F51\uFF0C
\u8FD0\u4EA4\u5409\u65F6\u4E5F\u906D\u6B83\u3002
\u6697\u9634\u6709\u8D22\u6C14\uFF0C
\u5149\u9633\u5219\u4E0D\u5409\u3002`},{key:112,name:"\u5723\u5723\u7B11",type:"\u4E2D\u5E73",desc:`\u5B54\u5B50\u5728\u9648\u3002
\u54D1\u5B50\u5F97\u68A6\u4E8B\u96BE\u8A00\uFF0C
\u778E\u5B50\u7A7F\u9488\u66F4\u4E0D\u7136\uFF1B
\u4E5D\u66F2\u660E\u73E0\u7A7F\u5F97\u8FC7\uFF0C
\u5728\u9648\u7EDD\u7CAE\u5168\u56E0\u8D24\u3002
\u51E1\u4E8B\u8270\u96BE\uFF0C
\u6709\u8D35\u4EBA\u52A9\u3002`},{key:110,name:"\u5723\u5723\u54ED",type:"\u4E0A\u5409",desc:`\u738B\u5B89\u77F3\u5C0F\u767B\u79D1\u3002
\u5B9D\u955C\u56E2\u5706\u4F3C\u6708\u660E\uFF0C
\u7434\u745F\u548C\u9E23\u7545\u6211\u60C5\uFF1B
\u7EA2\u674F\u679D\u5934\u6625\u610F\u95F9\uFF0C
\u767B\u79D1\u4E00\u4E3E\u72B6\u5143\u540D\u3002
\u7167\u65F6\u5A5A\u59FB\u4E70\u5356\u5927\u5409\uFF0C
\u521D\u4E00\u81F3\u5341\u4E94\u6C42\u5927\u5409\u3002`},{key:121,name:"\u5723\u7B11\u5723",type:"\u4E2D\u5E73",desc:`\u5218\u798F\u59BB\u529D\u592B\u3002
\u53F6\u843D\u6839\u6DF1\u971C\u4E0D\u6015\uFF0C
\u67AF\u6728\u9022\u6625\u518D\u53D1\u82BD\uFF1B
\u867D\u662F\u4E2D\u95F4\u591A\u8FDB\u9000\uFF0C
\u94B1\u8D22\u5230\u5E95\u5C5E\u6211\u5BB6\u3002
\u6C42\u8D22\u7167\u65F6\u5409\uFF0C
\u4E8B\u78E8\u4F46\u7EC8\u6210\u3002`},{key:122,name:"\u5723\u7B11\u7B11",type:"\u4E2D\u5E73",desc:`\u5F20\u98DE\u4E49\u91CA\u4E25\u989C\u3002
\u6885\u82B1\u51BB\u96EA\u6296\u82B3\u83F2\uFF0C
\u6C5F\u4E0A\u6E14\u7FC1\u628A\u9493\u98DE\uFF1B
\u591C\u9759\u6C34\u5BD2\u9C7C\u4E0D\u9975\uFF0C
\u6EE1\u8239\u7A7A\u8F7D\u6708\u660E\u5F52\u3002
\u51E1\u4E8B\u5E73\u5E38\uFF0C
\u5FC3\u8BDA\u8FD0\u81F3\u3002`},{key:120,name:"\u5723\u7B11\u54ED",type:"\u4E0A\u5409",desc:`\u5218\u79C0\u5174\u6C49\u3002
\u7687\u5929\u964D\u4E0B\u7D2B\u5FAE\u661F\uFF0C
\u9664\u5996\u706D\u602A\u5F97\u5B89\u5B81\uFF1B
\u4E8C\u5341\u516B\u5BBF\u6276\u5723\u4E3B\uFF0C
\u6C49\u738B\u5BB6\u56FD\u518D\u91CD\u5174\u3002
\u6697\u65F6\u661F\u51FA\u5927\u5409\uFF0C
\u51E1\u4E8B\u4E8C\u6B21\u5927\u5409\u3002`},{key:101,name:"\u5723\u54ED\u5723",type:"\u4E0A\u5409",desc:`\u821C\u5386\u5C71\u8015\u7530\u3002
\u5BCC\u8D35\u603B\u662F\u5929\u6CE8\u5B9A\uFF0C
\u4E94\u8C37\u4E30\u767B\u80DC\u4E0A\u5E74\uFF1B
\u5171\u4EAB\u592A\u5E73\u6B4C\u821C\u65E5\uFF0C
\u542B\u54FA\u9F13\u8179\u4E50\u5C27\u5929\u3002
\u51E1\u4E8B\u5927\u5409\uFF0C
\u767D\u5929\u5927\u5409\u3002`},{key:102,name:"\u5723\u54ED\u7B11",type:"\u4E2D\u5409",desc:`\u5415\u8499\u6B63\u7834\u7A91\u9F50\u5FD7\u3002
\u9CA4\u9C7C\u5FD7\u6C14\u672C\u82F1\u96C4\uFF0C
\u5C48\u5B88\u6C60\u4E2D\u8FD0\u672A\u901A\uFF1B
\u4E00\u65E6\u5CE5\u5D58\u5934\u89D2\u73B0\uFF0C
\u98CE\u4E91\u9645\u4F1A\u5316\u6210\u9F99\u3002
\u6C42\u8D22\u6F6E\u6DA8\u5409\uFF0C
\u51FA\u5916\u98CE\u96E8\u5409\u3002`},{key:100,name:"\u5723\u54ED\u54ED",type:"\u4E0B\u4E0B",desc:`\u97E9\u4FE1\u903C\u949F\u79BB\u771B\u81EA\u520E\u3002
\u767D\u864E\u51FA\u5C71\u6B32\u5BB3\u4EBA\uFF0C
\u9C7C\u5165\u7F57\u7F51\u96BE\u8131\u8EAB\uFF1B
\u5BB3\u4EBA\u4E4B\u5FC3\u5219\u5BB3\u5DF1\uFF0C
\u98DE\u866B\u6251\u706B\u81EA\u4F24\u751F\u3002
\u5B9C\u5B88\u672C\u4EFD\uFF0C
\u8C28\u9632\u53E3\u820C\u3002`},{key:211,name:"\u7B11\u5723\u5723",type:"\u4E2D\u5409",desc:`\u592A\u516C\u9047\u6587\u738B\u3002
\u592A\u516C\u9493\u9C7C\u516B\u5341\u79CB\uFF0C
\u9664\u5546\u706D\u7EA3\u518D\u5174\u5468\uFF1B
\u6C11\u5B89\u56FD\u5B9A\u592A\u5E73\u65E5\uFF0C
\u6C5F\u5C71\u4E07\u91CC\u4EFB\u541B\u6E38\u3002
\u51E1\u4E8B\u7167\u65E7\uFF0C
\u6F6E\u6DA8\u5927\u5409\u3002`},{key:212,name:"\u7B11\u5723\u7B11",type:"\u4E0B\u4E0B",desc:`\u5937\u9F50\u803B\u98DF\u5468\u7C9F\u3002
\u9C7C\u5728\u5C0F\u6DA7\u751F\u957F\u96BE\uFF0C
\u6DF1\u5904\u5B89\u8EAB\u6D45\u6C34\u5BD2\uFF1B
\u6E05\u51B7\u9999\u4E2D\u62B1\u819D\u541F\uFF0C
\u5937\u9F50\u997F\u6B7B\u9996\u9633\u5C71\u3002
\u5934\u597D\u5C3E\u8870\uFF0C
\u8D22\u6C14\u8D8B\u6DE1\u3002`},{key:210,name:"\u7B11\u5723\u54ED",type:"\u4E2D\u5409",desc:`\u91CA\u8FE6\uFF0C\u8001\u541B\uFF0C\u771F\u5B97\uFF0C\u6881\u7EA5\u3002
\u91CA\u8FE6\u5E7B\u5316\u5999\u5E94\u8EAB\uFF0C
\u8001\u541B\u629B\u9001\u7389\u9E92\u9E9F\uFF1B
\u771F\u5B97\u6C42\u55E3\u751F\u592A\u5B50\uFF0C
\u6881\u7EA5\u7977\u4E18\u51FA\u5723\u4EBA\u3002
\u8BDA\u4FE1\u7ACB\u4E16\uFF0C
\u6709\u6C42\u5FC5\u5E94\uFF0C
\u6DFB\u6CB9\u5411\u5584\u3002`},{key:221,name:"\u7B11\u7B11\u5723",type:"\u4E0A\u5409",desc:`\u89C2\u97F3\u6E21\u4F17\u751F\u3002
\u65E5\u4E0A\u4E1C\u65B9\u5982\u706B\u8F6E\uFF0C
\u5341\u5206\u5149\u5F69\u7167\u4E7E\u5764\uFF1B
\u4E8C\u5341\u56DB\u6C14\u5C3D\u6E05\u6D01\uFF0C
\u4E00\u5E74\u56DB\u5B63\u592A\u5E73\u6625\u3002
\u51E1\u4E8B\u5927\u5409\uFF0C
\u65E5\u7167\u5927\u5409\u3002`},{key:220,name:"\u7B11\u7B11\u54ED",type:"\u4E2D\u5E73",desc:`\u6731\u5BFF\u660C\u5F03\u5B98\u5BFB\u6BCD\u3002
\u4E00\u76CF\u5B64\u706F\u5BF9\u9762\u4F11\uFF0C
\u5BCC\u8D35\u94B1\u8D22\u6C34\u4E0A\u821F\uFF1B
\u4EFB\u4ED6\u9669\u5904\u4E0D\u89C1\u9669\uFF0C
\u4E3B\u4EBA\u6709\u798F\u518D\u6DFB\u6CB9\u3002
\u51E1\u4E8B\u4E0D\u987B\u5F3A\u6C42\uFF0C
\u5411\u5584\u5373\u9022\u51F6\u5316\u5409\u3002`},{key:201,name:"\u7B11\u54ED\u5723",type:"\u4E2D\u5409",desc:`\u6843\u56ED\u7ED3\u4E49\u3002
\u4E09\u4EBA\u5404\u59D3\u540C\u4E00\u5FC3\uFF0C
\u6843\u56ED\u7ED3\u4E49\u60C5\u610F\u6DF1\uFF1B
\u5C71\u4E2D\u77F3\u5934\u7686\u662F\u5B9D\uFF0C
\u8FD0\u6765\u90FD\u80FD\u53D8\u6210\u91D1\u3002
\u51E1\u4E8B\u4EBA\u548C\uFF0C
\u80FD\u6210\u4E8B\u4E1A\u3002`},{key:202,name:"\u7B11\u54ED\u7B11",type:"\u4E2D\u5E73",desc:`\u7A0B\u54AC\u91D1\u9047\u8D66\u3002
\u56DA\u4EBA\u51FA\u7981\u4E0A\u9152\u697C\uFF0C
\u7545\u996E\u5BBD\u676F\u89E3\u95F7\u5934\uFF1B
\u529D\u541B\u614E\u5FCD\u4E00\u65F6\u6C14\uFF0C
\u975E\u5E72\u5DF1\u4E8B\u4E14\u76F8\u9976\u3002
\u5B9C\u5B88\u672C\u4EFD\uFF0C
\u4EE5\u9000\u4E3A\u8FDB\u3002`},{key:200,name:"\u7B11\u54ED\u54ED",type:"\u4E0B\u4E0B",desc:`\u6885\u5983\u6545\u4E8B\u3002
\u82E5\u8981\u6C42\u8D22\u672A\u5F97\u65F6\uFF0C
\u53EA\u6050\u9B3C\u8D3C\u76F8\u4FB5\u5BB3\uFF1B
\u5173\u95E8\u95ED\u6237\u5BB6\u4E2D\u5750\uFF0C
\u707E\u7978\u504F\u4ECE\u5929\u4E0A\u6765\u3002
\u9047\u4E8B\u4E0D\u5409\uFF0C
\u987B\u9632\u5C0F\u4EBA\uFF0C
\u9632\u60A3\u707E\u7978\u3002`},{key:11,name:"\u54ED\u5723\u5723",type:"\u4E2D\u5409",desc:`\u82CF\u5C0F\u59B9\u7B54\u8BD7\u3002
\u592B\u5987\u6709\u610F\u4E24\u76F8\u6C42\uFF0C
\u7EF8\u7F2A\u672A\u5408\u5404\u6210\u6101\uFF1B
\u5FC3\u6709\u7075\u7280\u4E00\u70B9\u901A\uFF0C
\u5929\u6CE8\u59FB\u7F18\u4E0D\u987B\u5FE7\u3002
\u9022\u6625\u5927\u5409\uFF0C
\u6697\u4E8B\u5927\u5409\uFF0C
\u51E1\u4E8B\u6709\u6210\u3002
`},{key:12,name:"\u54ED\u5723\u7B11",type:"\u4E2D\u5409",desc:`\u4E03\u5915\u76F8\u4F1A\u3002
\u725B\u90CE\u7EC7\u5973\u5404\u5929\u8FB9\uFF0C
\u963B\u9694\u94F6\u6CB3\u8DEF\u6773\u7136\uFF1B
\u767E\u5E74\u5BCC\u8D35\u98CE\u524D\u70DB\uFF0C
\u4E00\u65E6\u8363\u534E\u4E91\u91CC\u4ED9\u3002
\u51E1\u4E8B\u65E0\u5B9E\uFF0C
\u8D22\u6C14\u4E94\u5206\u3002`},{key:10,name:"\u54ED\u5723\u54ED",type:"\u4E2D\u5E73",desc:`\u540E\u7FBF\u5C04\u65E5\uFF0C\u5AE6\u5A25\u5954\u6708\u3002
\u5F20\u5F13\u5C04\u65E5\u603B\u865A\u7A7A\uFF0C
\u673D\u6728\u96BE\u96D5\u767D\u8D39\u5DE5\uFF1B
\u5E73\u751F\u5E38\u5FF5\u5343\u58F0\u4F5B\uFF0C
\u4F5C\u6076\u6789\u70E7\u4E07\u70B7\u9999\u3002
\u51E1\u4E8B\u614E\u8A00\uFF0C
\u4E8B\u6EE1\u62DB\u635F\u3002`},{key:21,name:"\u54ED\u7B11\u5723",type:"\u4E2D\u5E73",desc:`\u5218\u6587\u5B9A\u4E70\u7236\u3002
\u96F7\u9706\u9739\u96F3\u9707\u865A\u7A7A\uFF0C
\u5929\u516C\u5DEE\u6211\u5BDF\u5409\u51F6\uFF1B
\u79EF\u5584\u4E4B\u5BB6\u6709\u4F59\u5E86\uFF0C
\u79EF\u6076\u4E4B\u5BB6\u6709\u4F59\u6B83\u3002
\u4F5C\u4E8B\u5E94\u968F\u8FD0\uFF0C
\u6C42\u8D22\u9047\u6625\u5409\u3002`},{key:22,name:"\u54ED\u7B11\u7B11",type:"\u4E2D\u5E73",desc:`\u4F0F\u7FB2\u753B\u516B\u5366\u3002
\u4F0F\u7FB2\u516B\u5366\u6700\u7CBE\u7075\uFF0C
\u516D\u5341\u7532\u5B50\u63A8\u4E94\u661F\uFF1B
\u6697\u865A\u4E8F\u5FC3\u5929\u5730\u89C1\uFF0C
\u4E3E\u5934\u4E09\u5C3A\u6709\u795E\u660E\u3002
\u9690\u5FCD\u5219\u5584\uFF0C
\u9759\u4EE5\u5F85\u65F6\uFF0C
\u591C\u6C42\u660C\u5409\uFF0C
\u8D22\u6C14\u4E09\u5206\u3002`},{key:20,name:"\u54ED\u7B11\u54ED",type:"\u4E0B\u4E0B",desc:`\u5415\u540E\u5BB3\u97E9\u4FE1\u3002
\u6614\u65E5\u87B3\u8782\u53BB\u6355\u8749\uFF0C
\u5C82\u77E5\u9EC4\u96C0\u5728\u540E\u8FB9\uFF1B
\u83AB\u4FE1\u4ED6\u4EBA\u76F4\u4E2D\u76F4\uFF0C
\u987B\u9632\u5FC3\u91CC\u4EC1\u4E0D\u4EC1\u3002
\u51E1\u4E8B\u592A\u9669\uFF0C
\u8C28\u9632\u5219\u5409\u3002`},{key:1,name:"\u54ED\u54ED\u5723",type:"\u4E2D\u5E73",desc:`\u4E09\u85CF\u53D6\u7ECF\u3002
\u4E09\u85CF\u53D6\u7ECF\u5F80\u897F\u5929\uFF0C
\u8DEF\u9014\u9669\u963B\u52B3\u5723\u8D24\uFF1B
\u4E91\u6A2A\u79E6\u5CAD\u5BB6\u4F55\u5728\uFF1F
\u96EA\u62E5\u84DD\u5173\u9A6C\u4E0D\u524D\u3002
\u51E1\u4E8B\u8270\u96BE\uFF0C
\u8D22\u8FD0\u672A\u5230\uFF0C
\u5FCD\u4EE5\u5F85\u65F6\u3002`},{key:2,name:"\u54ED\u54ED\u7B11",type:"\u4E2D\u5E73",desc:`\u516B\u4ED9\u8FC7\u6D77\u3002
\u516B\u4ED9\u8FC7\u6D77\u8D74\u87E0\u6843\uFF0C
\u9F99\u738B\u964D\u593A\u84DD\u91C7\u548C\uFF1B
\u56E0\u8D2A\u7389\u76AE\u52A8\u5200\u6218\uFF0C
\u6148\u5FC3\u60DF\u4F5B\u6765\u8BB2\u548C\u3002
\u51E1\u4E8B\u66F2\u6298\uFF0C
\u6709\u8D35\u4EBA\u52A9\uFF0C
\u8D22\u8FD0\u672A\u5230\u3002`}],v=new Map(K.map(e=>[e.key,e])),b=e=>v.get(e);var f=(e,t)=>{let l=e?`\u7531\u4E8E\u300C${e}\u300D\uFF0C\u63B7\u7B4A\uFF1A
`:`\u63B7\u7B4A\uFF1A
`,m=`

\u6C42\u89E3\u8BF7\u4F7F\u7528\u300C.\u6C42\u89E3\u300D`,c="",s=0;for(let a=0;a<t;a++){a!==0&&(c+=`
`);let n=u(0,1),r=u(0,1);n^r?(c+="\u5723\u7B4A\uFF08\u4E00\u9634\u4E00\u9633\uFF09",s=s*10+1):n===0?(c+="\u54ED\u7B4A\uFF08\u4E8C\u9634\uFF09",s=s*10):(c+="\u7B11\u7B4A\uFF08\u4E8C\u9633\uFF09",s=s*10+2)}return[s,l+c+m]},w=e=>{if(e.times<3)return"\u63B7\u5723\u676F\u6B21\u6570\u4E0D\u8DB3\u4E09\u6B21";{let t=b(e.resKey);return`\u524D\u4E09\u6B21\u7684\u63B7\u5723\u676F\u7ED3\u679C\uFF1A${t.name}
\u300C${t.type}\u300D
${t.desc}`}};function C(){let e=seal.ext.find("zhijiao");e||(e=seal.ext.new("zhijiao","JustAnotherID","1.1.1"),seal.ext.register(e));let t=`\u63B7\u7B4A
.\u63B7\u7B4A/\u63B7\u676F <\u539F\u56E0> // \u63B7\u7B4A
.\u63B7\u4E09\u6B21 <\u539F\u56E0> // \u63B7\u7B4A\u4E09\u6B21
.\u6C42\u89E3 // \u89E3\u8BFB\u4E0A\u4E00\u6B21\u7ED3\u679C`,l=(a,n,r,p)=>{switch(r.getArgN(1)){case"":case"help":{let o=seal.ext.newCmdExecuteResult(!0);return o.showHelp=!0,o}default:return seal.replyToSender(a,n,p),seal.ext.newCmdExecuteResult(!0)}},m=seal.ext.newCmdItemInfo();m.name="\u63B7\u7B4A",m.help=t,m.solve=(a,n,r)=>{var h;let p=n.sender.userId,[y,o]=f(r.rawArgs,1),g=i(p),d=k(e.storageGet(g)),D=((h=d==null?void 0:d.resKey)!=null?h:0)%100*10+y,I=d.times>=3?3:d.times+1,M=x(D,I);return e.storageSet(g,M),l(a,n,r,o)};let c=seal.ext.newCmdItemInfo();c.name="\u63B7\u4E09\u6B21",c.help=t,c.solve=(a,n,r)=>{let p=n.sender.userId,[y,o]=f(r.rawArgs,3);return e.storageSet(i(p),x(y,3)),l(a,n,r,o)};let s=seal.ext.newCmdItemInfo();s.name="\u6C42\u89E3",s.help=t,s.solve=(a,n,r)=>{let p=k(e.storageGet(i(n.sender.userId)));switch(r.getArgN(1)){case"help":{let o=seal.ext.newCmdExecuteResult(!0);return o.showHelp=!0,o}default:return seal.replyToSender(a,n,w(p)),seal.ext.newCmdExecuteResult(!0)}},e.cmdMap.\u63B7\u7B4A=m,e.cmdMap.\u63B7\u676F=m,e.cmdMap.\u63B7\u4E09\u6B21=c,e.cmdMap.\u6C42\u89E3=s}C();})();
