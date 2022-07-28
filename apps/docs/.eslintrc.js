module.exports = {
  ...require('config/eslint-next'),
  root: true,
  extends: ['custom', 'plugin:storybook/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
