module.exports = {
  extends: 'recommended',
  rules: {
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_'
      }
    ]
  }
}
