module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['react-app', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'off',
    'no-sequences': 'off',
    'no-unused-expressions': 'off',
  },
};
