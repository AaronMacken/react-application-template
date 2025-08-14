module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts,jsx,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.ts',
    '!src/constants/**',
    '!src/customTypes/**',
  ],
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
  global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
