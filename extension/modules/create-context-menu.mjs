/**
 * Creates the context menu with the extension's "copy-as-slug" feature.
 */
const createContextMenu = () => {
  // main context menu item to copy as-slug
  browser.contextMenus.create({
    'id': 'copy-as-slug',
    'title': 'Copy as-slug ("%s")',
    'contexts': ['selection'],
  });
};

export { createContextMenu };
