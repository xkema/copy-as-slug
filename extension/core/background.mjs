import { handleContextMenuClick } from "../modules/handle-context-menu-click.mjs";
import { handleExtensionOnInstalled } from "../modules/handle-extension-on-installed.mjs";

// add the click listener to the context menu item
browser.contextMenus.onClicked.addListener(handleContextMenuClick);

// single time events to do on extension install
browser.runtime.onInstalled.addListener(handleExtensionOnInstalled);
