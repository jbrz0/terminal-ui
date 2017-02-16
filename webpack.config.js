"use strict";
var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');

// const HOST = process.env.HOST || "localhost";
// const PORT = process.env.PORT || "8888";

const HOST = process.env.HOST || "138.197.125.219";
const PORT = process.env.PORT || "5000";

// global css
loaders.push({
	test: /\.css$/,
	exclude: /[\/\\]src[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css'
	]
});
// local scss modules
loaders.push({
	test: /\.scss$/,
	exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap',
		'postcss',
		'sass'
	]
});

// local css modules
loaders.push({
	test: /\.css$/,
	exclude: /[\/\\](node_modules|bower_components|public\/)[\/\\]/,
	loaders: [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&sourceMap'
	]
});

module.exports = {
	entry: [
		// 'react-hot-loader/patch',
		'./src/index.jsx' // your app's entry point
	],
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		publicPath: '/',
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders
	},
	devServer: {
		contentBase: "./public",
		// do not print bundle build stats
		noInfo: true,
		// enable HMR
		hot: false,
		// embed the webpack-dev-server runtime into the bundle
		inline: true,
		// serve index.html in place of 404 responses to allow HTML5 history
		historyApiFallback: true,
		port: PORT,
		host: HOST
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
			template: './src/template.html',
			favicon: './favicon.ico',
		}),
		new webpack.DefinePlugin({
			"process.env": {
				BROWSER: JSON.stringify(true)
			}
		}),
		new FaviconsWebpackPlugin('./src/img/favicon.png'),
	]
};
