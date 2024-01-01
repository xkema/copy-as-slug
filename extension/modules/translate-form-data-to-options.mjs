import { defaults } from './storage.mjs';

/**
 * Collects form data from the options form manually and converts it to an extension options object with their proper types.
 * @param {EventTarget} eventTarget The event target of the user action.
 * @param {boolean} translateEventTargetOnly A flag to decide the target fields, all the options form fieds or the element currently edited.
 * @returns {*} Form data in a simple key-value object syntax.
 */
const translateFormDataToOptions = (eventTarget, translateEventTargetOnly = false) => {
  const options = {};

  let targets = [];

  if (translateEventTargetOnly) {
    targets.push(eventTarget);
  } else {
    targets = eventTarget.form.querySelectorAll('[name^="slugify."], [name^="extension."]');
  }

  targets.forEach((target) => {
    let value = null;

    switch (target.name) {
      case 'slugify.lowercase':
      case 'slugify.decamelize':
      case 'slugify.preserveLeadingUnderscore':
        value = target.checked;
        break;
      case 'slugify.separator':
      case 'extension.testString':
        value = target.value;
        break;
      case 'extension.maxSelectionLength':
        value = Number.parseInt(target.value);
        break;
    }

    if (value !== null && !Number.isNaN(value)) {
      options[target.name] = value;
    } else {
      options[target.name] = defaults[target.name];
      console.warn(`Incoming element's (${target.name}) option value (${value}) is not supported! Falling back to extension default value. (${defaults[target.name]}).`);
    }
  });

  return options;
};

export { translateFormDataToOptions };
