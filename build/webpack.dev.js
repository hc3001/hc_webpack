const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig = {
    mode: 'development',
	devServer: {
		contentBase: './dist',
		open: 'Google Chrome',
		hot: true,
		hotOnly: true,
	},
	devtool: 'eval-cheap-module-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    }
}

module.exports = merge(commonConfig, devConfig)
