/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ["testing-library"],
  // add rules configurations here
  overrides: [
    {
      files: ["**/__tests__/**/*", "**/*.{spec,test}.*"],
      rules: {
        "testing-library/prefer-user-event": "error",
        "testing-library/no-await-sync-queries": "error",
        "testing-library/no-debugging-utils": "error",
        "testing-library/no-dom-import": "error",
        "testing-library/no-promise-in-fire-event": "error",
        "testing-library/no-unnecessary-act": "error",
        "testing-library/prefer-find-by": "error",
        "testing-library/prefer-presence-queries": "error",
        "testing-library/prefer-screen-queries": "error",
      },
    },
  ],
};
