const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: {
        "svg-path-polyfill.min": "./src/index.js",
    	"svg-path-polyfill": "./src/index.js"
	},
	devtool: "source-map",
  	output: {
    	path: path.resolve(__dirname, 'build'),
    	filename: "[name].js"
	},
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [
        new webpack.BannerPlugin('https://github.com/ThePedestrian/svg-path-polyfill\n\nCopyright 2018-2019 Uffaz Nathaniel\n\nMIT License.\n')
    ]
};