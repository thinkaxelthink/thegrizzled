module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'vue',
  plugins: ['html'],
  'env': {
    'browser': true,
    'node': true
  },
  'rules': {
    'semi': 0,
    'arrow-parens': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'no-restricted-imports': [2, 'lodash'],
    'operator-linebreak': 0,
    'no-restricted-globals': [2, 'find']
  }
}
