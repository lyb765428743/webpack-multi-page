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
    // �Զ����� dist �ļ���
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, `../`)
    }),
  ],
  optimization: {
    minimize: false,
    splitChunks: {
      minSize: 5120,//�ļ��������ֵʱ��ȡ
      name: 'commons',//�����ļ���
      chunks: 'all',
      minChunks: 2  //���ô����������ֵʱ��ȡ
    }
  }
});