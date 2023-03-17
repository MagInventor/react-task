export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	textMatch: ['**/__tests__/**/*.test.ts'],
	collectCoverage: true,
	coverageDirectory: 'coverage',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
}
