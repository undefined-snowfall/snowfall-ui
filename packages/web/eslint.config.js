import global from 'globals'
import js from '@eslint/js'

const globals = (() => {
  const eslintEntries = []
  for (const [g, rw] of Object.entries(global.browser)) {
    eslintEntries.push([g, rw ? 'writable' : 'readonly'])
  }
  return Object.fromEntries(eslintEntries)
})()

export default [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_'
        }
      ]
    },
    ignores: ['**/*.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals
    }
  }
]
