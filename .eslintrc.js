module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "max-params": ["error", {max: 5} ],
    "no-await-in-loop": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "prefer-const": "error",
  },
}
