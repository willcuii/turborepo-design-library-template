const { resolve } = require('node:path');

const { rules } = require('./rules');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    project,
  },
  plugins: [
    '@stylistic',
    '@typescript-eslint',
    'import',
    'unused-imports',
    'perfectionist',
    'react',
    'react-refresh',
    'simple-import-sort',
  ],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js', '**/*.css'],
  // add rules configurations here
  rules: {
    ...rules.base,
    ...rules.import,
    ...rules.perfectionist,
    ...rules['simple-import-sort'],
    ...rules.stylistic,
    ...rules['unused-imports'],
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
};
