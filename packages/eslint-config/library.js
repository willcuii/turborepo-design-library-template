const { resolve } = require('node:path');

const { rules } = require('./rules');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:import/typescript',
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
    'simple-import-sort',
    'perfectionist',
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
  ignorePatterns: ['node_modules/', 'dist/'],
  rules: {
    ...rules.base,
    ...rules.import,
    ...rules.perfectionist,
    ...rules['simple-import-sort'],
    ...rules.stylistic,
    ...rules['unused-imports'],
  },
};
