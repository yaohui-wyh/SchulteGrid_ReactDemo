const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: ['./src/main.js'],
  resolve: {extensions: ['.js', '.jsx']},
  output: {path: path.join(__dirname + '/dist/'), filename: 'bundle.js', publicPath: '/dist/'},
  module: {
    loaders: [
      {
        test: /\.js|jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  }
};