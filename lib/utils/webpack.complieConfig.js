// @flow-weak
import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
// import WorkboxPlugin from 'workbox-webpack-plugin'
import babelConfig from './babel-config'

const entry = (script) => {
    let entry = ['../lib/views2/index.js',]

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
        output.path = path.resolve(__dirname, '../../public')
    }

    return output
}

const cssSpilit = (script) => {

    let css = [ 'style-loader',
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
            },
        },
        'postcss-loader',
    ]

    return script === 'build' || script === 'server' ?
        ExtractTextPlugin.extract([ 'css-loader', 'postcss-loader' ]) : css
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
              use: cssSpilit(script),
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

const devtool = (script): string => (script === 'develop' ? "cheap-module-source-map" : false)

const plugins = (script) => {

    let plugins = []

    switch(script) {
        case 'develop' :
            plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
            plugins.push(new webpack.HotModuleReplacementPlugin())
            plugins.push(new webpack.NoEmitOnErrorsPlugin())
            return plugins
        case 'build' :
        case 'server' :
            plugins.push(new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }))
            plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
            plugins.push(new ExtractTextPlugin('styles.css'))
            plugins.push(new webpack.optimize.DedupePlugin())
            plugins.push(new webpack.optimize.UglifyJsPlugin())
            return plugins
        default :
            return plugins
    }
}

const target = (script) => 'web'


//process.env.npm_lifecycle_event
const config = (script) => {
    // process.env.NODE_ENV = 'production'
    return {
        entry: entry(script),
        output: output(script),
        module: modules(script),
        devtool: devtool(script),
        plugins: plugins(script),
        target: target(script),
    }
}

export default config