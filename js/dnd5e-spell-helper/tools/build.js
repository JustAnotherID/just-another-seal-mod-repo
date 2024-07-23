import { buildSync } from 'esbuild';
import { dirname } from 'path';
import { rmSync, readFileSync, writeFileSync } from 'fs';
import { release, dev } from './build-config.js';

// 导入数据文件进行整理
import { spells as spellsFrom5eDatebase } from '../src/data/5e-database/index.js';
import { spells as spellsFrom5eTools } from '../src/data/5etools/index.js';
import { generateSpellsData } from './utils.js';

(async () => {
  try {
    let buildEvn = process.env.NODE_ENV;
    let config = buildEvn == 'production' ? release : release;

    if (buildEvn !== "production") {
      config = dev
    }

    // 将数据文件整理并导出成 JSON
    const spells = generateSpellsData(spellsFrom5eDatebase, spellsFrom5eTools);
    const spellsDataFile = 'src/data/spells-data.json'
    rmSync(spellsDataFile, { recursive: true, force: true });
    const spellsStr = JSON.stringify(spells)
    console.log('📝 Write ' + spellsDataFile)
    writeFileSync(spellsDataFile, spellsStr);

    const timerStart = Date.now();
    rmSync(dirname(config.outfile), { recursive: true, force: true });

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
})();
