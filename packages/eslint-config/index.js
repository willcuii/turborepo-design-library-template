'use strict';

var require$$0 = require('node:path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

var constants = {
  INTERNAL_RULES: {
    "arrow-body-style": "error",
    camelcase: ["error", {
      ignoreDestructuring: true,
      properties: "never"
    }],
    "consistent-return": "error",
    curly: ["error", "all"],
    eqeqeq: "error",
    "no-console": "warn",
    "no-empty": ["error", {
      allowEmptyCatch: true
    }],
    "no-nested-ternary": "error",
    "no-return-await": "error",
    "no-underscore-dangle": "error",
    "no-use-before-define": "error",
    "no-plusplus": "off",
    "require-await": "error",
    "@stylistic/eol-last": ["error", "always"],
    "@stylistic/key-spacing": ["error", {
      beforeColon: false,
      afterColon: true,
      mode: "strict"
    }],
    "@stylistic/keyword-spacing": ["error", {
      before: true,
      after: true
    }],
    "@stylistic/linebreak-style": ["error", "unix"],
    "@stylistic/padding-line-between-statements": ["error", {
      blankLine: "always",
      prev: "*",
      next: "return"
    }, {
      blankLine: "always",
      prev: "*",
      next: "block-like"
    }, {
      blankLine: "always",
      prev: "block-like",
      next: "*"
    }, {
      blankLine: "always",
      prev: ["const", "let", "var"],
      next: "*"
    }, {
      blankLine: "any",
      prev: ["const", "let", "var"],
      next: ["const", "let", "var"]
    }, {
      blankLine: "always",
      prev: "directive",
      next: "*"
    }, {
      blankLine: "any",
      prev: "directive",
      next: "directive"
    }],
    "@stylistic/semi": ["error", "always"]
  },
  // https://github.com/import-js/eslint-plugin-import
  IMPORT_RULES: {
    "import/first": "error",
    "import/no-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", {
      devDependencies: true
    }]
  },
  // https://eslint-plugin-perfectionist.azat.io/
  PERFECTIONIST_RULES: {
    "perfectionist/sort-interfaces": "error",
    "perfectionist/sort-jsx-props": ["error", {
      groups: ["ids", "unknown"],
      "custom-groups": {
        ids: ["key", "id"]
      }
    }],
    "perfectionist/sort-union-types": "error",
    "perfectionist/sort-objects": ["error", {
      groups: ["ids", "unknown"],
      "custom-groups": {
        ids: ["key", "id"]
      }
    }],
    "perfectionist/sort-object-types": "error",
    "perfectionist/sort-exports": "error",
    "perfectionist/sort-named-exports": "error"
  },
  // https://github.com/lydell/eslint-plugin-simple-import-sort
  SIMPLE_IMPORT_SORT_RULES: {
    "simple-import-sort/imports": ["error", {
      groups: [["^react", "^@?\\w"], ["^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)"], ["^.+\\.s?css$"], ["^\\.\\.(?!/?$)", "^\\.\\./?$", "^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]]
    }]
  },
  // https://github.com/sweepline/eslint-plugin-unused-imports
  UNUSED_IMPORTS_RULES: {
    "unused-imports/no-unused-imports": "error"
  }
};

const {
  resolve: resolve$2
} = require$$0__default["default"];
const {
  INTERNAL_RULES: INTERNAL_RULES$1,
  IMPORT_RULES: IMPORT_RULES$1,
  PERFECTIONIST_RULES: PERFECTIONIST_RULES$1,
  SIMPLE_IMPORT_SORT_RULES: SIMPLE_IMPORT_SORT_RULES$1,
  UNUSED_IMPORTS_RULES: UNUSED_IMPORTS_RULES$1
} = constants;
const project$1 = resolve$2(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 */

/** @type {import("eslint").Linter.Config} */
({
  extends: ["airbnb", "airbnb-typescript", "prettier", "plugin:import/recommended", "plugin:import/typescript"],
  parserOptions: {
    project: project$1
  },
  plugins: ["only-warn", "@stylistic", "import", "unused-imports", "simple-import-sort", "perfectionist"],
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: project$1
      }
    }
  },
  ignorePatterns: ["node_modules/", "dist/"],
  rules: {
    ...INTERNAL_RULES$1,
    ...IMPORT_RULES$1,
    ...PERFECTIONIST_RULES$1,
    ...SIMPLE_IMPORT_SORT_RULES$1,
    ...UNUSED_IMPORTS_RULES$1
  }
});

const {
  resolve: resolve$1
} = require$$0__default["default"];
const {
  INTERNAL_RULES,
  IMPORT_RULES,
  PERFECTIONIST_RULES,
  SIMPLE_IMPORT_SORT_RULES,
  UNUSED_IMPORTS_RULES
} = constants;
const project = resolve$1(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes React.
 */

/** @type {import("eslint").Linter.Config} */
({
  extends: ["airbnb", "airbnb-typescript", "prettier", "plugin:import/recommended", "plugin:import/typescript", "plugin:react/recommended", "plugin:react-hooks/recommended"],
  parserOptions: {
    project
  },
  plugins: ["only-warn", "@stylistic", "import", "unused-imports", "perfectionist", "react", "react-refresh", "simple-import-sort"],
  globals: {
    React: true,
    JSX: true
  },
  settings: {
    "import/resolver": {
      typescript: {
        project
      }
    }
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
    "react/react-in-jsx-scope": "off"
  }
});

const {
  resolve
} = require$$0__default["default"];
resolve(process.cwd(), "tsconfig.json");
