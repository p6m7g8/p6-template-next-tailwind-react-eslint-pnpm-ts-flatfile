import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default antfu({
//  files: ['jest.config.ts', 'jest.setup.tsx', 'src/**/*.tsx', 'src/**/*.ts', 'test/**/*.tsx', 'test/**/*.ts'],
  plugins: {
    react,
    'react-hooks': reactHooks,
    '@next/eslint-plugin-next': nextPlugin,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // '@next/next/no-img-element': 'error',
    // '@next/next/no-page-custom-font': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
})
