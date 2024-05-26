/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "@frontrunner/eslint-config/storybook.js",
    "@frontrunner/eslint-config/tailwind.js",
    "@frontrunner/eslint-config/testing-library.js",
    "@frontrunner/eslint-config/react.js",
  ],
};
