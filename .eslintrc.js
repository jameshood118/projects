module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential', '@vue/prettier'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'space-before-function-paren': ['error', 'never'],
    'no-unused-vars': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        singleQuote: true,
        semi: false
      }
    ]
  },
}
