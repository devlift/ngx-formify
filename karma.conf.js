module.exports = (config) => {
	config.set({
		frameworks: ['jasmine', 'karma-typescript'],
		plugins: [
			require('karma-jasmine'),
			require('karma-jasmine-html-reporter'),
			require('karma-typescript'),
		],
		preprocessors: {
			'**/*.ts': ['karma-typescript'],
			'**/*.html': []
		},
		reporters: ['progress', 'karma-typescript'],
		files: [
			'node_modules/core-js/client/shim.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/zone.js/dist/long-stack-trace-zone.js',
			'node_modules/zone.js/dist/proxy.js',
			'node_modules/zone.js/dist/sync-test.js',
			'node_modules/zone.js/dist/jasmine-patch.js',
			'node_modules/zone.js/dist/async-test.js',
			'node_modules/zone.js/dist/fake-async-test.js',
			{ pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
			{ pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
			{ pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
			{ pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
			{ pattern: './src/**/*.ts' },
			{ pattern: './src/**/*.html' }
		],
		proxies: {
			'/src/': '/base/src/'
		},
		singleRun: false
	});
};