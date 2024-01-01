import { handleContextMenuClick } from '../modules/handle-context-menu-click.mjs';
import { handleExtensionOnInstalled } from '../modules/handle-extension-on-installed.mjs';
import { handleRuntimeMessage } from '../modules/handle-runtime-message.mjs';

// add the click listener to the context menu item
browser.contextMenus.onClicked.addListener(handleContextMenuClick);

// add the listener for extension runtime messaging
browser.runtime.onMessage.addListener(handleRuntimeMessage);

// single time events to do on extension install
browser.runtime.onInstalled.addListener(handleExtensionOnInstalled);
