const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const pluginReact = require('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-cond-assign': 'warn',
      'no-empty': 'off',
      'react/no-unescaped-entities': 'off',
      'no-undef': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      'no-undef': 'off',
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
