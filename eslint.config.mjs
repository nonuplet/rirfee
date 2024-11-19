import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import tsLint from '@typescript-eslint/eslint-plugin'
import js from '@eslint/js'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import prettierConfig from '@vue/eslint-config-prettier'

export default [
  ...pluginVue.configs['flat/recommended'],
  js.configs.recommended,
  ...vueTsEslintConfig(),
  prettierConfig,
  {
    plugins: {
      '@typescript-eslint/eslint-plugin': tsLint,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 12,
      },
    },
  },
]
