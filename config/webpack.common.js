'use strict';

var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
	resolve: {
		extensions: ['.ts', '.js']
	}

	, output: {
		path: helpers.root('wwwroot/dist/webpack')
		, filename: '[name].js'
		, publicPath: '/'
	}

	, plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		})
	]
};
