const webpack = require('webpack')
const path = require('path')
const babelConfig = require('./babel-config')

const entry = () => {
    let entry = ['../src/index.js',]
    if (process.env.npm_lifecycle_event === 'develop') {
        entry.unshift(require.resolve('webpack-hot-middleware/client'))
    }
    return entry
}

const output = () => {
    let output = {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        // necessary for HMR to know where to load the hot update chunks
        publicPath: '/dist/',
    }

    if (process.env.npm_lifecycle_event === 'build') {
        output.path = path.resolve(__dirname, '../public')
    }

    return output
}

const modules = () => {
    let module = {
        rules: [
           {
            test: /\.js$/, use: {
               loader: 'babel-loader',
               options: babelConfig("../.babelrc"),
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

const devtool = () => {
    if (process.env.npm_lifecycle_event === 'develop') {
         return "cheap-module-source-map"
    }
    return false
}

const plugins = () => {
    let plugins = []
    if (process.env.npm_lifecycle_event === 'develop') {
        plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new webpack.NoEmitOnErrorsPlugin())
    }
    return plugins
}

module.exports = (env) => {
    return {
        entry: entry(),
        output: output(),
        module: modules(),
        devtool: devtool(),
        plugins: plugins(),
    }
}