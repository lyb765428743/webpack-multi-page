const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const utils = require('./utils');
// ���html����
let HTMLDirs = utils.getFileNameList('./src/html');
let HTMLPlugins = [];
// ����ļ����ϴ���
let entries = {};
HTMLDirs.forEach(page => {
  const htmlPlugin = new HtmlWebpackPlugin({
    hash:true,
    filename: `html/${page}.html`,
    template: path.resolve(__dirname, `../src/html/${page}.html`),
    chunks: [page, 'commons']
  });
  HTMLPlugins.push(htmlPlugin);
  entries[page] = path.resolve(__dirname, `../src/js/${page}.js`);
});
module.exports = {
  entry: entries,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // �������ָ��һ�� publicPath
              // Ĭ��ʹ�� webpackOptions.output�е�publicPath
              publicPath: '../',
              minimize: true
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
              minimize: true
            },
          },
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 5120,
          name: '[name].[hash].[ext]',
          publicPath: '../img/',
          outputPath: 'img'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
    ...HTMLPlugins
  ]
};