import { getSlugifiedText } from './get-slugified-text.mjs';
import { handleCopyAsSlugChromeFallback } from './handle-copy-as-slug-chrome-fallback.mjs';
import { handleCopyAsSlug } from './handle-copy-as-slug.mjs';
import { getOptions } from './storage.mjs';

/**
 * Controls the copy clicks on context menu clicks
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus/OnClickData | menus.OnClickData}
 * @param {*} info Build in event info object
 */
const handleContextMenuClick = async (info) => {
  // get options for the utilities
  const options = await getOptions();

  // get menu properties from the event info
  const { menuItemId, selectionText } = info;

  // prepare slug ahead of clipboard write (sends trimmed string to the slugify method)
  const slugifiedText = getSlugifiedText(selectionText, options);

  // apply user click to the target menu item
  switch (menuItemId) {
    case 'copy-as-slug':
      try {
        handleCopyAsSlug(slugifiedText);
      } catch (error) {
        console.warn('Copy action has failed, trying a fallback solution with the legacy Clipboard APIs', error);
        handleCopyAsSlugChromeFallback(slugifiedText);
      }
      break;
  }
};

export { handleContextMenuClick };
