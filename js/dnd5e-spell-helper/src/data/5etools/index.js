import spellsAi from './spells-ai.json' with { type: 'json' };
import spellsEgw from './spells-egw.json' with { type: 'json' };
import spellsGgr from './spells-ggr.json' with { type: 'json' };
import spellsIdrotf from './spells-idrotf.json' with { type: 'json' };
import spellsLlk from './spells-llk.json' with { type: 'json' };
import spellsPhb from './spells-phb.json' with { type: 'json' };
import spellsTce from './spells-tce.json' with { type: 'json' };
import spellsUa2020por from './spells-ua-2020por.json' with { type: 'json' };
import spellsUa2020smt from './spells-ua-2020smt.json' with { type: 'json' };
import spellsUa2021do from './spells-ua-2021do.json' with { type: 'json' };
import spellsUaAr from './spells-ua-ar.json' with { type: 'json' };
import spellsUaFrw from './spells-ua-frw.json' with { type: 'json' };
import spellsUaMm from './spells-ua-mm.json' with { type: 'json' };
import spellsUaSaw from './spells-ua-saw.json' with { type: 'json' };
import spellsUaSs from './spells-ua-ss.json' with { type: 'json' };
import spellsUaTobm from './spells-ua-tobm.json' with { type: 'json' };
import spellsXge from './spells-xge.json' with { type: 'json' };

export const spells = [
  ...spellsAi.spell,
  ...spellsEgw.spell,
  ...spellsGgr.spell,
  ...spellsIdrotf.spell,
  ...spellsLlk.spell,
  ...spellsPhb.spell,
  ...spellsTce.spell,
  ...spellsUa2020por.spell,
  ...spellsUa2020smt.spell,
  ...spellsUa2021do.spell,
  ...spellsUaAr.spell,
  ...spellsUaFrw.spell,
  ...spellsUaMm.spell,
  ...spellsUaSaw.spell,
  ...spellsUaSs.spell,
  ...spellsUaTobm.spell,
  ...spellsXge.spell,
];
