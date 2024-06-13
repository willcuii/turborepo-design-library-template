/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['plugin:tailwindcss/recommended'],
  // add rules configurations here
  rules: {
    'tailwindcss/no-custom-classname': 'off',
  },
};
