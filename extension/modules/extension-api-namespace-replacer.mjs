/**
 * Replaces `browser.*` namespace with `chrome.*` if there is no `browser.*` global.
 *
 * This methods needs to be called on all contexes uses these namspaces.
 *
 * This is not a polyfill, just a name replacement.
 */
const extensionApiNamespaceReplacer = () => {
  // if statement is copied from "webextension-polyfill"
  if (typeof globalThis.browser === 'undefined' || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
    globalThis.browser = chrome;
  }
};

export { extensionApiNamespaceReplacer };
