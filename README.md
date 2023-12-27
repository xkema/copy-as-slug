
# slugify-browser-extension

A Browser Extension to copy selected texts as-slug

```bash
# manually build slugify library to the `extension/modules/slugify-es6.mjs` as an ESM
npm run build:slugify
```

## Folder Organization

- `extension/` - The extension folder
  - `assets/`
    - `img/`
  - `core/` - Main extension scripts (`background.mjs`, `popup.mjs`, ...)
    - `views/` - View HTML & CSS (`options.html`, `options.css`, ...)
  - `lib/` - 3rd party libraries
  - `modules/` - Utilities as ESM

## Todo

- [ ] Add `placeholder` attributes

## Issues

- [ ] Correct default HTML validation event target focus problem caused by parent event listening.
