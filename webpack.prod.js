var path = require('path');
const common = require('./webpack.config');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'code'),
    filename: 'sequencer.[contentHash].bundle.js',
  },
  plugins: [new CleanWebpackPlugin()]
});