import webpack from 'webpack'

const webpackCompile = (config) => {

    return new Promise((resolve, reject) => {
        webpack(config, (err, stats) => {
            if (err || stats.hasErrors()) {
                reject('can not webpacking')
            }
            resolve('webpack successful')
        })
    })
}

export default webpackCompile
