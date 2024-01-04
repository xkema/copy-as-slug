/**
 * Converts options object to form data as selector and value pairs.
 * @param {*} options Options object.
 * @returns {Array} Array of objects with the info of the "selector", it's "value" and "target attribute" to be modified.
 */
const translateOptionsToFormData = (options) => {
  const formData = [];

  // set form field values
  for (const [name, value] of Object.entries(options)) {
    // create a default change object
    const formDataPropertyDefaults = {
      name,
      value,
      'targetAttribute': 'value',
    };

    // apply value assignment by the type of the option
    switch (name) {
      case 'slugify.lowercase':
      case 'slugify.decamelize':
      case 'slugify.preserveLeadingUnderscore':
      case 'slugify.preserveTrailingDash':
        formDataPropertyDefaults.targetAttribute = 'checked';
        break;
      case 'slugify.separator':
        // no change needed for string inputs
        break;
      case 'extension.testString':
        // `targetAttribute` should be `textContent` in here but `<textarea>` element doesn't update it's full changed content on the incoming event.
        // `value` attribute is not a part of `<textarea>` element but still works.
        formDataPropertyDefaults.targetAttribute = 'value';
        break;
      case 'extension.maxSelectionLength':
        formDataPropertyDefaults.value = value.toString();
        break;
    }

    formData.push(formDataPropertyDefaults);
  }
  return formData;
};

export { translateOptionsToFormData };
