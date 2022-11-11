module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended", "plugin:nuxt/recommended"],
  plugins: [],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "no-irregular-whitespace": ["off"],
    "no-console": ["off"],
  },
};