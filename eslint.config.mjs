import antfu from '@antfu/eslint-config'

export default [
  ...antfu(),
  {
    files: ['*.tsx', '*.ts'],
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Add React-specific rules here if needed
      'react/jsx-uses-react': 'off', // Not needed for React 17+ with new JSX transform
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+ with new JSX transform
      'react-hooks/rules-of-hooks': 'error', // Enforce the rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in useEffect
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

