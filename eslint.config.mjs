import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended', // TypeScript rules
    ],
    rules: {
      // Add TypeScript-specific rules here
    },
  },
})
