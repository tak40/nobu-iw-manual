import { gunzipSync } from 'zlib';
import { P0 } from './p0';
import { P1 } from './p1';
import { P2 } from './p2';
import { P3 } from './p3';
import { P4 } from './p4';
import { P5 } from './p5';
import { P6 } from './p6';
import { P7 } from './p7';
import { P8 } from './p8';
import { P9 } from './p9';
import { P10 } from './p10';
import { P11 } from './p11';
import { P12 } from './p12';
import { P13 } from './p13';
import { P14 } from './p14';
import { P15 } from './p15';
import { P16 } from './p16';
import { P17 } from './p17';
import { P18 } from './p18';
import { P19 } from './p19';

const GZ_B64 = P0+P1+P2+P3+P4+P5+P6+P7+P8+P9+P10+P11+P12+P13+P14+P15+P16+P17+P18+P19;

export function getManualHTML() {
  const buf = Buffer.from(GZ_B64, 'base64');
  return gunzipSync(buf).toString('utf-8');
}
