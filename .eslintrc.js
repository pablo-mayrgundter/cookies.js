module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'max-len': ['error', 140],
    'no-irregular-whitespace': ['error'],
    'no-trailing-spaces': ['error'],
    'prefer-rest-params': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
  },
  reportUnusedDisableDirectives: true,
}
