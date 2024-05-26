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
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    project,
  },
  plugins: [
    "only-warn",
    "@stylistic",
    "import",
    "unused-imports",
    "perfectionist",
    "react",
    "react-refresh",
    "simple-import-sort",
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
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js", "**/*.css"],
  // add rules configurations here
  rules: {
    ...INTERNAL_RULES,
    ...IMPORT_RULES,
    ...PERFECTIONIST_RULES,
    ...SIMPLE_IMPORT_SORT_RULES,
    ...UNUSED_IMPORTS_RULES,
    "react-refresh/only-export-components": "warn",
    "react/react-in-jsx-scope": "off",
  },
};
