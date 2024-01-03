# Copy as Slug - Browser Extension

A Browser Extension to copy a selected text as-slug on a web page. On right-click, the extension will add `Copy as-slug` context menu item is a text is selected on the page.

```bash
npm run build:slugify # to manually build slugify library to the `extension/lib/slugify-es6.mjs` as an ESM
npm run lint
npm run replace:manifest # to replace Firefox/Chrome-specific manifest keys
npm run copy:mvp.css
npm run build:firefox
```

## Notes

This extension is primarily built for the [Firefox Browser](https://www.mozilla.org/en-US/firefox/new/). It also works on Chrome Browser but is not guarranteed. (*The modern "Clipboard API" is not fully compatible with the Chrome Extensions' permission management system.*)

## Folder Organization

- `bin/` - Helper utilities for development
- `extension/` - The extension folder
  - `assets/`
    - `img/`
  - `core/` - Main extension scripts (`background.mjs`, `options.mjs`, ...)
    - `views/` - View HTML & CSS (`options.html`, `options.css`, ...)
  - `lib/` - 3rd-party libraries
  - `modules/` - Utilities as ESM
- `other/` - Raw assets, store descriptions, ...

## Todo

- [ ] Add `placeholder` attributes
- [ ] Correct default HTML validation event target focus problem caused by parent event listening.

## Credits

- [sindresorhus/slugify](https://github.com/sindresorhus/slugify "sindresorhus/slugify: Slugify a string")
- [andybrewer/mvp](https://github.com/andybrewer/mvp/ "andybrewer/mvp: MVP.css — Minimalist classless CSS stylesheet for HTML elements")
