'use strict';

var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@ DEV @@@@@@@@@@@@@@@@@@@@@@@@@@\n');

module.exports = webpackMerge(commonConfig, {
	entry: {
		// main: './app/main.ts'
		'polyfills': './app/polyfills.ts',
		'vendor': './app/vendor.ts',
		'app': './app/main.ts'
	}

	, module: {
		rules: [
			{
				test: /\.ts$/,
				// loader: 'awesome-typescript-loader!angular2-template-loader'
				loaders: [
					'awesome-typescript-loader'
					, 'angular2-template-loader'
					, 'source-map-loader'
				]
				// , loaders: [
				// 	// {
				// 	// 	loader: 'awesome-typescript-loader'
				// 	// 	, options: { configFileName: helpers.root('tsconfig.json') }
				// 	// }
				// 	// , 'angular2-template-loader'
				// ]
			}, {
				test: /\.html$/
				, loader: 'html-loader'
			}
		]
	}
});
