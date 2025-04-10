module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'
    ],
    'react/react-in-jsx-scope': 'off',
    'no-restricted-exports': [
      'error',
      {
        restrictedNamedExports: ['then']
      }
    ]
  }
};
