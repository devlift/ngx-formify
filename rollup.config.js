import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';

export default {
	input: 'index.ts',
	sourcemap: false,
	output: {
		file: 'dist/bundles/formify.umd.js',
		format: 'umd'
	},
	name: 'ngx-formify',
	plugins: [
		angular(),
		typescript({ typescript: require( 'typescript' ) })
	],
	globals: {
		'@angular/core': 'ng.core',
		'@angular/forms': 'ng.forms',
		'@angular/common': 'ng.common',
		'rxjs/Observable': 'Rx',
		'rxjs/ReplaySubject': 'Rx',
		'rxjs/add/operator/map': 'Rx.Observable.prototype',
		'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
		'rxjs/add/observable/fromEvent': 'Rx.Observable',
		'rxjs/add/observable/of': 'Rx.Observable'
	}
}