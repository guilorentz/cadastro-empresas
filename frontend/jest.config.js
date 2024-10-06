module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    moduleNameMapper: {
      '@app/(.*)': '<rootDir>/src/app/$1',
      '@assets/(.*)': '<rootDir>/src/assets/$1',
      '@environments/(.*)': '<rootDir>/src/environments/$1',
    },
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
  };