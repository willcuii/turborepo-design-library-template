const { rules } = require('./rules');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['testing-library'],
  // add rules configurations here
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/*.{spec,test}.*'],
      rules: { ...rules['testing-library'] },
    },
  ],
};
