/**
 * Handler for the `copy-as-slug` context menu action.
 * @param {string} slugifiedText Slugified text to be copied to the clipboard.
 * @returns {*} A Promise fulfilled after clipboard updates. (whatever `navigator.clipboard.writeText` returns)
 */
const handleCopyAsSlug = (slugifiedText) => {
  try {
    return navigator.clipboard.writeText(slugifiedText);
  } catch (error) {
    console.error(error);
  }
};

export { handleCopyAsSlug };
