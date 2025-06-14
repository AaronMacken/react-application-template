module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-restricted-exports': ['error', { restrictedNamedExports: ['then'] }],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'
    ],
    'react/function-component-definition': ['off']
  },
  overrides: [
    {
      files: ['webpack.**.js', 'paths.js'],
      parserOptions: {
        project: null
      }
    }
  ]
};
