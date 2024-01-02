/**
 * Fallback handler for Chrome for the `copy-as-slug` context menu action.
 *
 * This is a Google Chrome only solution. Calling this method might cause unhandled errors on different environments.
 * @param {string} slugifiedText Slugified text to be copied to the clipboard.
 */
const handleCopyAsSlugChromeFallback = async (slugifiedText) => {
  // create a temporary document with the `offscreen` migration API
  await browser.offscreen.createDocument({
    'url': './core/views/offscreen.html',
    'reasons': [browser.offscreen.Reason.CLIPBOARD],
    'justification': 'Thank you!! Google Chrome for providing us with this extraordinarily brilliant workaround.',
  });

  // send a message to this temporary document
  browser.runtime.sendMessage({
    'type': 'copy-as-slug-chrome-workaround',
    slugifiedText,
  });
};

export { handleCopyAsSlugChromeFallback };
