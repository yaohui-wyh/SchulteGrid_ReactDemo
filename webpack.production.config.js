const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['./src/main.js'],
  resolve: {extensions: ['.js', '.jsx']},
  output: {path: path.join(__dirname + '/dist'), filename: 'bundle.js'},
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ]
};