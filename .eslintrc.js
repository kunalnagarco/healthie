module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    '@typescript-eslint/interface-name-prefix': 'off',
    'import/order': [
      'error',
      {
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          'builtin',
          ['external', 'internal'],
          'parent',
          ['sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
