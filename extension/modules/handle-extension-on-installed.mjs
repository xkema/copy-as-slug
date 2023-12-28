import { createContextMenu } from './create-context-menu.mjs';
import { defaults, setOptions } from './storage.mjs';

/**
 * Sets default options and creates the context menu for a single time on extension install.
 */
const handleExtensionOnInstalled = async () => {
  // set extension defaults to the storage
  await setOptions(defaults);

  // create context menu
  createContextMenu();
};

export { handleExtensionOnInstalled };
