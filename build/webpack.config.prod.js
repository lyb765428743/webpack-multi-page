const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackBase = require('./webpack.config.base.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(webpackBase, {
  mode:'production',
  devtool: 'inline-source-map',
  plugins: [
    new UglifyJSPlugin(),
    new OptimizeCssAssetsPlugin(),
    // 自动清理 dist 文件夹
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, `../`)
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      minSize: 5120,//文件大于这个值时提取
      name: 'commons',//设置文件名
      chunks: 'all',
      minChunks: 2  //引用次数超过这个值时提取
    }
  }
});