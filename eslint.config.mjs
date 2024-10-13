import antfu from '@antfu/eslint-config';

export default [
  ...antfu(),
  {
    files: ['jest.config.ts', 'jest.setup.ts', 'src/**/*.tsx', 'src/**/*.ts', 'test/**/*.tsx', 'test/**/*.ts'],
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      '@next/eslint-plugin-next': require('@next/eslint-plugin-next'), // Add Next.js ESLint plugin
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // React-specific rules
      'react/jsx-uses-react': 'off', // Not needed for React 17+ with the new JSX transform
      'react/react-in-jsx-scope': 'off', // Not needed for React 17+ with the new JSX transform
      'react-hooks/rules-of-hooks': 'error', // Enforce the rules of Hooks
      'react-hooks/exhaustive-deps': 'error', // Warn about missing dependencies in useEffect

      // Next.js-specific rules
      '@next/next/no-img-element': 'error', // Prevent <img>
      '@next/next/no-page-custom-font': 'error', // Force next/font
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
