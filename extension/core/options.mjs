import { handleFormOptionsChange } from '../modules/handle-form-options-change.mjs';
import { handleFormOptionsInput } from '../modules/handle-form-options-input.mjs';
import { restoreOptionsFormState } from '../modules/restore-options-form-state.mjs';
import { getOptions } from '../modules/storage.mjs';
import { updateTestStringPreviewElement } from '../modules/update-test-string-preview-element.mjs';

// disable form submit by user (hitting enter key inside text fields will still captured by the "change" events)
document.forms.options.addEventListener('submit', (event) => void event.preventDefault());

// use the help of event bubbling to handle all "change"s in the form
document.forms.options.addEventListener('change', handleFormOptionsChange);

// watch user "input"s in the form to update test string preview
document.forms.options.addEventListener('input', handleFormOptionsInput);

// restore form fields with the saved options
(async () => {
  const options = await getOptions();
  restoreOptionsFormState(document.forms.options, options);
  updateTestStringPreviewElement(options);
})();
