const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
	devServer: {
		contentBase: './dist',
		open: true,
		hot: true,
		hotOnly: true
	},
	devtool: 'cheap-module-source-map',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{
									useBuiltIns: 'usage'
								}
							]
						]
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'images/',
						limit: 10240
					}
				}
			},
			{
				test: /\.(eot|ttf|woff|woff2|svg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]'
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {}
					},
					'sass-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    }
}
