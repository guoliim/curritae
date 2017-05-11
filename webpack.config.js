const path = require('path');

const config = {
    entry: {
        'app': './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', { 'module': false }],
                            'react',
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader',
                     {
                         loader: 'css-loader',
                         options: {
                             importLoaders: 1,
                         },
                     },
                     'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ]
    },
    devtool: "cheap-eval-source-map",
};

module.exports = config;
