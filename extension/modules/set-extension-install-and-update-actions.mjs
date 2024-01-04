/**
 * Sets "install" and "update" actions of the extension.
 * @param {*} details Built-in details object of the Extension APIs
 */
const setExtensionInstallAndUpdateActions = async (details) => {
  const { reason, previousVersion } = details;

  const manifest = browser.runtime.getManifest();

  switch (reason) {
    case 'install':
      await browser.runtime.openOptionsPage();
      browser.tabs.create({
        'url': 'https://github.com/xkema/copy-as-slug/blob/main/README.md',
        'active': true,
      });
      break;
    case 'update':
      if (previousVersion !== manifest.version) {
        browser.tabs.create({ 'url': 'https://github.com/xkema/copy-as-slug/blob/main/CHANGELOG.md' });
      }
      break;
  }
};

export { setExtensionInstallAndUpdateActions };
