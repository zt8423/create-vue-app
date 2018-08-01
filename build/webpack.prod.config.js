const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
    devtool: false,
    output: { //输出目录
        path: path.resolve(__dirname, '../create-vue-app'), //打包后的js文件存放的地方
        chunkFilename: '[name].[chunkhash:8].js',
        publicPath: '/create-vue-app/' //公共路径在页面或者css引入图片需要这个路径
    },
    module: {
        rules: [{
            test: /\.(png|jpg|eot|svg|ttf|woff|woff2)$/,
            use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]']
        }],
    },
    plugins: [
        //设置全局的变量(webpack4.x不区分NODE_ENV)
        new webpack.DefinePlugin({
            'build_env': JSON.stringify('prod')
        }),
        new CleanWebpackPlugin('create-vue-app',{
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            favicon: 'favicon.ico',
            inject: true
        }),
        new webpack.optimize.AggressiveMergingPlugin(), //合并块
        new MiniCssExtractPlugin({
            chunkFilename: 'styles.[chunkhash:8].css'
        })
    ],
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks:{
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js/
                }
            }
        }
    }
})
