const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // aura-ui-effects/components são ESM-only (sem export "require"); o mapper
    // aponta para o dist e o SWC transpila via transformIgnorePatterns abaixo.
    '^aura-ui-effects$': '<rootDir>/node_modules/aura-ui-effects/dist/index.js',
    '^aura-ui-effects/(.*)$': '<rootDir>/node_modules/aura-ui-effects/dist/$1.js',
    '^aura-ui-components$': '<rootDir>/node_modules/aura-ui-components/dist/index.js',
    '^aura-ui-components/(.*)$': '<rootDir>/node_modules/aura-ui-components/dist/$1.js',
  },
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    'src/app/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/**/_*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
}

module.exports = createJestConfig(customJestConfig)
