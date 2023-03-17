export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  globals: {
  	'ts-jest': {
  		compiler: 'ts-node',
  	}
  }
}
