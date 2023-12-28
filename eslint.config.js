import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    files: ["**/*.mjs"],
    ignores: ["**/lib/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.webextensions,
        ...globals.browser,
      },
    },
    plugins: {
      '@stylistic/js': stylisticJs,
      'jsdoc': jsdoc,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...stylisticJs.configs['all-flat'].rules,
      ...jsdoc.configs['flat/recommended-error'].rules,
      // overrides to above rules
      '@stylistic/js/object-curly-spacing': ['error', 'always'],
      '@stylistic/js/indent': ['error', 2, { SwitchCase: 1 }],
      '@stylistic/js/padded-blocks': ['error', 'never'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/function-call-argument-newline': ['error', 'never'],
      '@stylistic/js/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/js/array-element-newline': ['error', 'consistent'],
      '@stylistic/js/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
      'jsdoc/require-jsdoc': ['error', { require: { ArrowFunctionExpression: true } }],
    },
  },
];
