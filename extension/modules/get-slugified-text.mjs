import slugify from '../lib/slugify-es6.mjs';

/**
 * Wraps `slugify()` function to pass extra logic brought by the extension.
 * @param {*} text Text to be slugified, either user selection or test string.
 * @param {*} options Extension options fetched for slugifing.
 * @returns {string} Slugified string.
 */
const getSlugifiedText = (text, options) => {
  // extract slugify options manually
  const slugifyOptions = {
    'decamelize': options['slugify.decamelize'],
    'lowercase': options['slugify.lowercase'],
    'preserveLeadingUnderscore': options['slugify.preserveLeadingUnderscore'],
    'separator': options['slugify.separator'],
  };

  // max selection length
  const maxSelectionLength = options['extension.maxSelectionLength'];

  return slugify(text.substring(0, maxSelectionLength), slugifyOptions);
};

export { getSlugifiedText };
