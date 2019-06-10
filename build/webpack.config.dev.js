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
    overlay: true, // �����ҳ������ʾ����
    open: true,
    // open: true, // �����Զ��������
    // stats: "errors-only", //stats: "errors-only"��ʾֻ��ӡ����
    hot: true, // �����ȸ���
    openPage:'html/'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ]
});