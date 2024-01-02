import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { EOL } from 'node:os';
import manifestJson from '../extension/manifest.json' assert { type: 'json' };

// This module replaces `chrome` specific keys temporarily.
// Maintain a separate `manifest.json` for these changes in the future.
// Don't forget to discard changes when you finish testing on Chrome browser.
// This utility requires to have the already existing "manifest.json" properties, ... then add Chrome-specific ones.
//   Because it replaces the complete root property, not just the changes.
//   And running this script more than one times should result the same output.

// replace `background` key
manifestJson.background = {
  'service_worker': 'core/background.mjs',
  'type': 'module',
};

// include `offscreen` permission to overcome quirks around transition from background pages to extension service workers
// @see {@link https://developer.chrome.com/blog/Offscreen-Documents-in-Manifest-v3 | Offscreen-Documents-in-Manifest-v3}
// Once the extension service workers can use the Clipboard API, "offscreen" workaround will not be necessary.
// @see {@link https://github.com/GoogleChrome/chrome-extensions-samples/tree/main/functional-samples/cookbook.offscreen-clipboard-write | cookbook.offscreen-clipboard-write}
manifestJson.permissions = [
  "contextMenus",
  "storage",
  "offscreen",
  "clipboardWrite",
];

// delete `browser_specific_settings` key, it is Firefox only
delete manifestJson.browser_specific_settings;

// replace with modified manifest
const file = resolve('extension/manifest.json');
const data = JSON.stringify(manifestJson, null, '  ') + EOL;
writeFileSync(file, data);
