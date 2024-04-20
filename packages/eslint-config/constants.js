module.exports = {
  INTERNAL_RULES: {
    "arrow-body-style": "error",
    camelcase: ["error", { ignoreDestructuring: true, properties: "never" }],
    "consistent-return": "error",
    curly: ["error", "all"],
    eqeqeq: "error",
    "no-console": "warn",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-nested-ternary": "error",
    "no-return-await": "error",
    "no-underscore-dangle": "error",
    "no-use-before-define": "error",
    "no-plusplus": "off",
    "require-await": "error",
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/key-spacing": [
      "error",
      { beforeColon: false, afterColon: true, mode: "strict" },
    ],
    "@stylistic/keyword-spacing": ["error", { before: true, after: true }],
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "block-like" },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "any", prev: "directive", next: "directive" },
    ],
    "@stylistic/semi": ["error", "always"],
  },
  // https://github.com/import-js/eslint-plugin-import
  IMPORT_RULES: {
    "import/first": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
  // https://eslint-plugin-perfectionist.azat.io/
  PERFECTIONIST_RULES: {
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-jsx-props": [
      "error",
      { groups: ["ids", "unknown"], "custom-groups": { ids: ["key", "id"] } },
    ],
    "perfectionist/sort-union-types": "error",
    "perfectionist/sort-objects": [
      "error",
      { groups: ["ids", "unknown"], "custom-groups": { ids: ["key", "id"] } },
    ],
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-exports": "error",
    "perfectionist/sort-named-exports": "error",
  },
  // https://github.com/lydell/eslint-plugin-simple-import-sort
  SIMPLE_IMPORT_SORT_RULES: {
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          ["^react", "^@?\\w"],
          ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"],
          ["^.+\\.s?css$"],
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
        ],
      },
    ],
  },
  // https://github.com/sweepline/eslint-plugin-unused-imports
  UNUSED_IMPORTS_RULES: {
    "unused-imports/no-unused-imports": "error",
  },
};
