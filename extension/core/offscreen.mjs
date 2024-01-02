import { extensionApiNamespaceReplacer } from '../modules/extension-api-namespace-replacer.mjs';

extensionApiNamespaceReplacer();

// get the temporary element
const element = document.forms.offscreen.elements['offscreen.slugifiedText'];

// listen to the message coming from background page for the fallback
browser.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case 'copy-as-slug-chrome-workaround':
      try {
        element.textContent = message.slugifiedText;
        element.select();
        document.execCommand('copy');
      } catch (error) {
        console.error('Fallback API has also failed to copy the text.', error);
      } finally {
        window.close();
      }
      break;
  }
});
