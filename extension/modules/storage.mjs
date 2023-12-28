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
 * Groups flattened extension options in the `StorageArea` to categories "slugify" and "extension".
 *
 * `groupName.optionName` is the `name` attribute of the form field, i.e. `name=slufigy.lowercase`.
 * @param {boolean} grouped A `boolean` flag to read options as groups.
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/storage/StorageArea|StorageArea}
 * @returns {Promise} A `Promise` fulfilled with the desired options pattern. (grouped or flat)
 */
const getOptions = async (grouped = false) => {
  const options = await browser.storage.local.get(null);
  if (!grouped) {
    return options;
  } else {
    const optionsGrouped = {
      'slugify': {},
      'extension': {},
    };
    for (const [name, value] of Object.entries(options)) {
      const [groupName, optionName] = name.split('.');
      optionsGrouped[groupName][optionName] = value;
    }
    return optionsGrouped;
  }
};

/**
 * Helper to set multiple options on change
 * @param {*} options Options to be set collected from the form
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
