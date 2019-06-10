const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.base.js');
const path = require('path')
const webpack = require('webpack');
module.exports = merge(webpackBase, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    publicPath:'/',
    host: "127.0.0.1",
    overlay: true, // 浏览器页面上显示错误
    open: true,
    // open: true, // 开启自动打开浏览器
    // stats: "errors-only", //stats: "errors-only"表示只打印错误：
    hot: true, // 开启热更新
    openPage:'html/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});