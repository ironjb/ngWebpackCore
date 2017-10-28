'use strict';

var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var ngToolsWebpack = require('@ngtools/webpack');
var helpers = require('./helpers');

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@ PROD @@@@@@@@@@@@@@@@@@@@@@@@@@\n');

module.exports = webpackMerge(commonConfig, {
	entry: {
		'polyfills': './app/polyfills.ts',
		'vendor': './app/vendor.ts',
		'app': './app/main-webpack-aot.ts'
	}

	, module: {
		rules: [
			{
				test: /\.ts$/,
				loader: '@ngtools/webpack'
			}, {
				test: /\.html$/
				, loader: 'html-loader'
			}
		]
	}

	, plugins: [
		// AoT plugin.
		new ngToolsWebpack.AotPlugin({
			tsConfigPath: './tsconfig-webpack-aot.json'
		}),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		})
	]
});
