// jest.config.js
const JSDOMEnvironment = require('jest-environment-jsdom');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	globals: {
		'ts-jest': {
			tsconfig: {
				esModuleInterop: true
			}
		}
	},
	testEnvironmentOptions: {
		resources: 'usable',
		features: {
			FetchExternalResources: ['script', 'link'],
			ProcessExternalResources: ['script']
		}
	},
	setupFilesAfterEnv: ['./src/setupTests.ts']
};
