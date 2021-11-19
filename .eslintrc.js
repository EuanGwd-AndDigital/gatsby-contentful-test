module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
  ],
  plugins: [`@typescript-eslint`, `prettier`],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: `module`,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {},
}
