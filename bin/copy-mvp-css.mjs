import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const src = resolve('node_modules/mvp.css/mvp.css');
const dest = resolve('extension/lib/mvp.css');

copyFileSync(src, dest);
