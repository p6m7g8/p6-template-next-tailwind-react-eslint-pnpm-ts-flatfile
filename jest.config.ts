import nextJest from 'next/jest';
import type { Config } from 'jest';

// Create Jest config using Next.js defaults
const createJestConfig = nextJest({
  dir: './src', // Path to your Next.js app's root directory
});

// Custom Jest configuration
const customJestConfig: Config = {
  testEnvironment: 'jsdom', // Use jsdom for testing browser-like behavior
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Alias for your src directory
  },
  testMatch: ['<rootDir>/test/**/*.test.{ts,tsx}'], // Matches .ts and .tsx test files
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'swc', // Use SWC for transformation
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Optionally add Jest setup
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // File extensions Jest should handle
};

// Export the combined Jest configuration
export default createJestConfig(customJestConfig);
