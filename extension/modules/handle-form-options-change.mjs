import { translateFormDataToOptions } from './translate-form-data-to-options.mjs';

/**
 * Handles the "change" events of the options form elements and sends an `options-update` signal with the updates.
 * @param {*} event Standard JavaScript event for "change".
 */
const handleFormOptionsChange = (event) => {
  const options = translateFormDataToOptions(event.target, true);

  // send signal to set options
  browser.runtime.sendMessage({
    'type': 'options-update',
    options,
  });
};

export { handleFormOptionsChange };
