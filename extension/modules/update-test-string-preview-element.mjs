import { getSlugifiedText } from './get-slugified-text.mjs';

/**
 * Updates test string preview element with the user "input" on the options page.
 * @param {*} options Extension options.
 */
const updateTestStringPreviewElement = (options) => {
  // get test string preview element
  const testStringPreviewElement = document.getElementById('test-string-preview');

  // set preview element (text is test string here, not a user-selected item)
  testStringPreviewElement.textContent = getSlugifiedText(options['extension.testString'], options);
};

export { updateTestStringPreviewElement };
