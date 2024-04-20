const { resolve } = require("node:path");

const {
  INTERNAL_RULES,
  IMPORT_RULES,
  PERFECTIONIST_RULES,
  SIMPLE_IMPORT_SORT_RULES,
  UNUSED_IMPORTS_RULES,
} = require("./constants");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  parserOptions: {
    project,
  },
  plugins: [
    "only-warn",
    "@stylistic",
    "import",
    "unused-imports",
    "simple-import-sort",
    "perfectionist",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    ...INTERNAL_RULES,
    ...IMPORT_RULES,
    ...PERFECTIONIST_RULES,
    ...SIMPLE_IMPORT_SORT_RULES,
    ...UNUSED_IMPORTS_RULES,
  },
};
