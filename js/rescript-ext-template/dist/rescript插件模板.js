// ==UserScript==
// @name         rescript插件模板
// @author       JustAnotherID
// @version      0.1.0
// @description  rescript 编写插件的模板
// @timestamp    2024-06-21 11:45:14
// @license      MIT
// @homepageURL  https://github.com/JustAnotherID/just-another-seal-mod-repo/tree/master/js/rescript-ext-template
// ==/UserScript==

(() => {
  // src/Index.res.js
  var helpDesc = "rescript 插件模板\n";
  function main() {
    var e = seal.ext.find("rescript-ext-template");
    var ext;
    if (e !== void 0) {
      ext = e;
    } else {
      var temp = seal.ext.new("rescript-ext-template", "JustAnotherID", "0.1.0");
      seal.ext.register(temp);
      ext = temp;
    }
    var cmdDemo = seal.ext.newCmdItemInfo();
    cmdDemo.name = "demo";
    cmdDemo.help = helpDesc;
    cmdDemo.solve = function(_ctx, _msg, _cmdArgs) {
      return seal.ext.newCmdExecuteResult(true);
    };
    ext.cmdMap["demo"] = cmdDemo;
  }
  main();
})();
