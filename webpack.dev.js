var path = require('path');
var webpack = require('webpack');
const common = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'code'),
    filename: 'sequencer.js',
  }
});