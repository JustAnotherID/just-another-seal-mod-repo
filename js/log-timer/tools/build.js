import { build, buildSync } from "esbuild";
import { dirname } from "path";
import { rmSync, readFileSync, writeFileSync } from "fs";
// const fse = require('fs-extra');
import { dev, release } from './build-config.js';


(async () => {
  try {
    let buildEvn = process.env.NODE_ENV
    let config = buildEvn == "production" ? release : release

    if (buildEvn !== "production") {
      config = dev
    }

    const timerStart = Date.now();
    rmSync(dirname(config.outfile), { recursive: true, force: true });
    // fse.copySync("./assets", path.join(path.dirname(config.outfile), "assets"), { overwrite: true });
    // fs.copyFileSync("./index.html", path.join(path.dirname(config.outfile), "index.html"));
    // fs.copyFileSync(buildEvn == "production" ? "./index.html" : "./indexDebug.html", path.join(path.dirname(config.outfile), "index.html"));

    // config.incremental = false;
    await buildSync(config);
    const bodyText = readFileSync(config.outfile);
    const headerText = readFileSync('./header.txt').toString();
    writeFileSync(config.outfile, `${headerText}\n${bodyText}`);
    const timerEnd = Date.now();
    console.log(`🔨 Built in ${timerEnd - timerStart}ms.`)
    process.exit(0);
  } catch (e) {
    console.error(e);
  }
})()
