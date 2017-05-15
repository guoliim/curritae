const resolve = require('babel-core/lib/helpers/resolve')
const fs = require('fs')
const json5 = require('json5')
const R = require('ramda')

const findBabelrc = (path) => {
    try {
        const babelrc = fs.readFileSync(path, 'utf-8')
        return json5.parse(babelrc)
    } catch (error) {
        if (error.code === 'ENOENT') {
            return null
        } else {
            throw error
        }
    }
}

const normalizeConfig = config => {
    return Object.assign({}, config)
}

module.exports = babelConfig = path => {
    const babelrc = findBabelrc(path)
    console.log(babelrc);

    //npm_lifecycle_event for script
    if (process.env.npm_lifecycle_event === 'develop') {
        babelrc.presets.unshift('react-hmre')
    }
    console.log(babelrc);
    return normalizeConfig(babelrc)
}

