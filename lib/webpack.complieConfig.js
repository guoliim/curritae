// @flow-weak
const webpack = require('webpack')
const path = require('path')
const babelConfig = require('./babel-config')

const entry = (script) => {
    let entry = ['../src/index.js',]
    if (script === 'develop') {
        entry.unshift(require.resolve('webpack-hot-middleware/client'))
    }
    return entry
}

const output = (script) => {
    let output = {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // necessary for HMR to know where to load the hot update chunks
        publicPath: '/dist/',
    }

    if (script === 'build') {
        output.path = path.resolve(__dirname, '../public')
    }

    return output
}

const modules = (script) => {
    let module = {
        rules: [
           {
            test: /\.js$/, use: {
               loader: 'babel-loader',
               options: babelConfig("../.babelrc", script),
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
    }
    return module
}

const devtool = (script):string => {
    if (script === 'develop') {
         return "cheap-module-source-map"
    }
    return false
}

const plugins = (script) => {
    let plugins = []
    if (script === 'develop') {
        plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }
    return plugins
}

//process.env.npm_lifecycle_event
module.exports = (script) => {
    return {
        entry: entry(script),
        output: output(script),
        module: modules(script),
        devtool: devtool(script),
        plugins: plugins(script),
    }
}