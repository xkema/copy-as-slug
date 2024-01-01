import { translateOptionsToFormData } from './translate-options-to-form-data.mjs';

/**
 * Restores options form with the info saved into the `StorageArea`.
 *
 * Default options set when extension installed in the first time.
 * @todo Check if extension "update" triggers update of the defaults.
 * @param {HTMLFormElement} optionsForm HTML `<form>` element for extension options
 * @param {*} options Options fetched from `StorageArea`
 */
const restoreOptionsFormState = (optionsForm, options) => {
  const formData = translateOptionsToFormData(options);

  formData.forEach((property) => {
    const { name, targetAttribute, value } = property;
    optionsForm.elements[name][targetAttribute] = value;
  });
};

export { restoreOptionsFormState };
