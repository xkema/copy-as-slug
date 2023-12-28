import slugify from '../lib/slugify-es6.mjs';
import { getOptions } from './storage.mjs';

/**
 * Controls the copy clicks on context menu clicks
 * @param {*} info Build in event info object
 */
const handleContextMenuClick = async (info) => {
  // get options for the utilities
  const {
    lowercase,
    decamelize,
    preserveLeadingUnderscore,
    separator,
    maxSelectionLength,
  } = await getOptions();

  // set supported slugify options
  const slugifyOptions = {
    'lowercase': lowercase,
    'decamelize': decamelize,
    'preserveLeadingUnderscore': preserveLeadingUnderscore,
    'separator': separator,
  };

  // get menu properties from the event info
  const { menuItemId, selectionText } = info;

  // apply user click to the target menu item
  switch (menuItemId) {
    case 'copy-as-slug':
      if (selectionText.length > maxSelectionLength) {
        console.warn(`Selection length ("${selectionText.length}") is more than "${maxSelectionLength}" characters!`);
      } else {
        const selectionTextSlugified = slugify(selectionText, slugifyOptions);
        navigator.clipboard.writeText(selectionTextSlugified).then(() => { });
      }
      break;
  }
};

export { handleContextMenuClick };
