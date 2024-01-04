import { createContextMenu } from './create-context-menu.mjs';
import { setExtensionInstallAndUpdateActions } from './set-extension-install-and-update-actions.mjs';
import { defaults, setOptions } from './storage.mjs';

/**
 * Sets default options and creates the context menu for a single time on extension install.
 * @param {object} details Details object with the installation data.
 */
const handleExtensionOnInstalled = async (details) => {
  // set extension defaults to the storage
  await setOptions(defaults);

  // set extension "install" and "update" actions
  setExtensionInstallAndUpdateActions(details);

  // create context menu
  createContextMenu();
};

export { handleExtensionOnInstalled };
