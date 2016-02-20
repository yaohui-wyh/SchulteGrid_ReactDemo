var webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: ['./src/main.js'],
    resolve: {extensions: ['', '.js', '.jsx']},
    output: {
        path: path.join(__dirname + '/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader: "babel",
                exclude: /node_modules/,
                query: {presets: ['react']}
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