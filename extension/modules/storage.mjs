/**
 * Default options for the slugify library and the extension, used both for initialization and updating options.
 *
 * Defaults needs to be maintained manually by adding every input in the options page.
 *
 * Maintaining an object requires a higher complexity on the `StorageArea` APIs. That's why we used `.` namespaces.
 */
const defaults = {
  'slugify.lowercase': true,
  'slugify.decamelize': true,
  'slugify.preserveLeadingUnderscore': false,
  'slugify.separator': '-',
  'extension.maxSelectionLength': 200,
  'extension.testString': '_hello & HERE is a 🦄 and of course lotsOf ♥, Мир!',
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
 * Helper to gets all the options from the `StorageArea`.
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea | StorageArea}
 * @returns {Promise} A `Promise` fulfilled with the options.
 */
const getOptions = async () => {
  return browser.storage.local.get(null);
};

/**
 * Helper to set options on change.
 * @param {*} options Options to be set collected from the form.
 * @returns {Promise} A `Promise` fulfilled with a `void` value.
 */
const setOptions = (options) => {
  return browser.storage.local.set(options);
};

export {
  defaults,
  getOptions,
  setOptions,
};
