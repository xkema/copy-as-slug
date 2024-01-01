import { translateFormDataToOptions } from './translate-form-data-to-options.mjs';
import { updateTestStringPreviewElement } from './update-test-string-preview-element.mjs';

/**
 * Handles the "input" events of the options form elements and updates test string preview on the options page.
 * This handler doesn't update the extension state. Changes are temporary until users focus-out of the text field or press enter inside the text field.
 * @param {*} event Standard event object form the "input" event
 */
const handleFormOptionsInput = async (event) => {
  // prevent form to capture this event ("input" event not the "change"), no need unless we don't have an "input" event listener on the parent elements
  event.stopPropagation();

  const options = translateFormDataToOptions(event.target, false);

  updateTestStringPreviewElement(options);
};

export { handleFormOptionsInput };
