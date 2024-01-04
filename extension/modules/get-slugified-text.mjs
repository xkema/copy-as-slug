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
    'separator': options['slugify.separator'],
    'lowercase': options['slugify.lowercase'],
    'decamelize': options['slugify.decamelize'],
    'preserveLeadingUnderscore': options['slugify.preserveLeadingUnderscore'],
    'preserveTrailingDash': options['slugify.preserveTrailingDash'],
  };

  // max selection length
  const maxSelectionLength = options['extension.maxSelectionLength'];

  return slugify(text.substring(0, maxSelectionLength), slugifyOptions);
};

export { getSlugifiedText };
