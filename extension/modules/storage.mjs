/**
 * Default options for the slugify library and the extension, used both for initialization and updating options.
 * 
 * Defaults needs to be maintained manually by adding every input in the options page.
 * 
 * - options - form
 *   - slugify
 *     - `lowercase` - checkbox
 *     - `decamelize` - checkbox
 *     - `preserveLeadingUnderscore` - checkbox
 *     - `separator` - text
 *   - extension
 *     - `maxSelectionLength` - text
 */
const defaults = {
  lowercase: true,
  decamelize: true,
  preserveLeadingUnderscore: false,
  separator: '-',

  maxSelectionLength: 200,
};

/* 
- slugify library defaults
  - [x] separator / '-'
  - [x] lowercase / true
  - [x] decamelize / true
  - [ ] customReplacements / [ ['&', ' and '], ['🦄', ' unicorn '], ['♥', ' love '] ]
  - [x] preserveLeadingUnderscore / false
  - [ ] preserveTrailingDash / false
  - [ ] preserveCharacters / []
  - [ ] slugifyWithCounter
  - [ ] reset
*/

/**
 * Helper for the `StorageArea.get()`
 * 
 * @param {*} keys Same with the `StorageArea` API
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea|StorageArea}
 * @returns {Promise} A `Promise` fulfilled with a `void` value.
 */
const getOptions = (keys = null) => {
  return browser.storage.local.get(keys);
};

const setOption = (option) => {
  return browser.storage.local.set(option);
};

const setDefaults = () => {
  return browser.storage.local.set(defaults);
};

export {
  getOptions,
  setOption,
  setDefaults,
};
