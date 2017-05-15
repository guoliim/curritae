const webpack = require('webpack')
const config = require('./webpack.complieConfig')
const fs = require('fs')
const React = require('react')
const ReactDOMServer = require('react-dom/server')

const htmlElement = React.createElement(require('./builded-html'))
let html = ReactDOMServer.renderToStaticMarkup(htmlElement)
html = `<!DOCTYPE html>\n${html}`

const createPublicDir = (path) => {
    try {
        fs.accessSync("./api/config.json", fs.constants.R_OK)
        try {
            fs.accessSync("../public", fs.constants.R_OK)
            try {
                fs.accessSync("../public/api", fs.constants.R_OK)
                fs.writeFileSync("../public/api/config.json", fs.readFileSync('./api/config.json'))
            } catch (e) {
                fs.mkdirSync("../public/api")
                fs.writeFileSync("../public/api/config.json", fs.readFileSync('./api/config.json'))
            }
        } catch (e) {
            fs.mkdirSync("../public")
            fs.mkdirSync("../public/api")
            fs.writeFileSync("../public/api/config.json", fs.readFileSync('./api/config.json'))
        }
    } catch (e) {
        throw "You must have ./api/config.json in /lib"
    }
}

const htmlCompiled = (config) => {
    return new Promise((resolve, reject) => {
        webpack(config, (err, stats) => {
            if (err || stats.hasErrors()) {
                reject('can not webpacking')
            }
            fs.writeFileSync('../public/index.html', html)
            resolve('create index.html')
        })
    })
}

const build = async (path, config) => {
    try {
        createPublicDir(path)
        await htmlCompiled(config)
    } catch (e) {
        throw e
    }
}

build('./api/config.json', config())
