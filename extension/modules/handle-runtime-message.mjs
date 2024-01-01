import { setOptions } from './storage.mjs';

/**
 * Handles runtime messages by the message `type` property.
 * @param {*} message A custom message object with a `type` and `options` properties.
 */
const handleRuntimeMessage = (message) => {
  switch (message.type) {
    case 'options-update':
      setOptions(message.options);
      break;
  }
};

export { handleRuntimeMessage };
