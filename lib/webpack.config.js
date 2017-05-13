const path = require('path');
const webpack = require('webpack');

const config = {
    entry: [
        //TODO MARK
        require.resolve('webpack-hot-middleware/client'),
        '../src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // necessary for HMR to know where to load the hot update chunks
        publicPath: '/dist/',
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
                            'react-hmre',
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
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};

module.exports = config;
