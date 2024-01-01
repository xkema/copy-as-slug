import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { EOL } from 'node:os';
import manifestJson from '../extension/manifest.json' assert { type: 'json' };

// This module replaces `chrome` specific keys temporarily.
// Maintain a separate `manifest.json` for these changes in the future.
// Don't forget to discard changes when you finish testing on Chrome browser. 

// replace `background` key
manifestJson.background = {
  'service_worker': 'core/background.mjs',
  'type': 'module',
};

// replace with modified manifest
const file = resolve('extension/manifest.json');
const data = JSON.stringify(manifestJson, null, '  ') + EOL;
writeFileSync(file, data);
