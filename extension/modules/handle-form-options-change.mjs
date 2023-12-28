import { setOption } from './storage.mjs';

/**
 * Handles the "change" events of the options form elements.
 *
 * Always gets a single signal from user activity, no need to worry about multiple changes on multiple fields.
 * @param {*} event Standard JS event for "change".
 */
const handleFormOptionsChange = async (event) => {
  // field value to be set
  let value = null;

  switch (event.target.name) {
    case 'lowercase':
    case 'decamelize':
    case 'preserveLeadingUnderscore':
      value = event.target.checked;
      break;
    case 'separator':
      value = event.target.value;
      break;
    case 'maxSelectionLength':
      value = Number.parseInt(event.target.value);
      break;
  }

  if (value !== null && !Number.isNaN(value)) {
    await setOption({ [`${event.target.name}`]: value });
  } else {
    console.warn(`Incoming option value (${value}) is not supported!`);
  }
};

export { handleFormOptionsChange };
