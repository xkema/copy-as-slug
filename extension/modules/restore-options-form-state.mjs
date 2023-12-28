/**
 * Restores options form with the info saved into the `StorageArea`.
 *
 * Default options set when extension installed in the first time.
 * @param {HTMLFormElement} optionsForm HTML `<form>` element for extension options
 * @param {*} options Options fetched from `StorageArea`
 * @todo Check if extension "update" triggers update of the defaults.
 */
const restoreOptionsFormState = (optionsForm, options) => {
  // set form field values
  for (const [name, value] of Object.entries(options)) {
    // get target element by its `name` attribute
    const target = optionsForm.elements[name];
    // apply value assignment by the type of the option
    switch (name) {
      case 'lowercase':
      case 'decamelize':
      case 'preserveLeadingUnderscore':
        target.checked = value;
        break;
      case 'separator':
        target.value = value;
        break;
      case 'maxSelectionLength':
        target.value = value.toString();
        break;
    }
  }
};

export { restoreOptionsFormState };
