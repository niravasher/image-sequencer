var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  resolve: {
    alias: {
      'gpu.js': './node_modules/gpu.js/src/index.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'babel-loader'
        ],
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|jpg|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'imgs'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // ..
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};