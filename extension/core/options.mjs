import { handleFormOptionsChange } from '../modules/handle-form-options-change.mjs';
import { restoreOptionsFormState } from '../modules/restore-options-form-state.mjs';
import { getOptions } from '../modules/storage.mjs';

// disable form submit by user (hitting enter key inside text fields will still captured by the "change" events)
document.forms.options.addEventListener('submit', (event) => void event.preventDefault());

// use the help of event bubbling to handle all changes in the form
document.forms.options.addEventListener('change', handleFormOptionsChange);

// restore form fields with the saved options
(async () => {
  restoreOptionsFormState(document.forms.options, await getOptions());
})();
