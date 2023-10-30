module.exports = {
  extends: ['prettier', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    // Required for certain syntax usages
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
