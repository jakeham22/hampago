module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "google",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "array-bracket-spacing": ["error"],
    "constructor-super": ["error"],
    "for-direction": ["error"],
    "getter-return": ["error"],
    "no-async-promise-executor": ["error"],
    "no-class-assign": ["error"],
    "no-compare-neg-zero": ["error"],
    "no-cond-assign": ["error"],
    "no-const-assign": ["error"],
    "no-control-regex": ["error"],
    "no-debugger": ["error"],
    "no-dupe-args": ["error"],
    "no-dupe-class-members": ["error"],
    "no-dupe-else-if": ["error"],
    "no-dupe-keys": ["error"],
    camelcase: ["error"],
    "no-var": ["error"],
    "object-curly-spacing": ["error"],
    "padding-line-between-statements": ["error"],
  },
  env: {
    es6: true,
  },
};
