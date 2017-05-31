const path = require('path')
const webpack = require('webpack')

const config = {
    entry: ['babel-polyfill','./server-build2.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: {
                loader: 'babel-loader',
                options: {
                    "presets": [
                        "flow",
                        ["es2015", {
                            "es2015": {
                                "loose": true,
                                "modules": false
                            }
                        }],"stage-0","react"
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
    "resolve": {
        modules: ["../node_modules"]
    },
    "devtool": false,
    "plugins": [new webpack.ContextReplacementPlugin(
        /any-promise/, __dirname
    ),],
    "target": "node",
}

module.exports = config