// @flow
import webpack from 'webpack'
import fs from 'fs'

import htmlCreate from './server-html-string'
import createDirforAPI from './creatDirforAPI'

createDirforAPI('../lib/api/config.json')

const detail = fs.readFileSync('./api/config.json', 'utf-8')

const html = htmlCreate({
    style:"./styles.css",
    bundleURL: "./bundle.js",
    data:detail,
})

const createPublicDir = (path: string): void => {
    try {
        fs.accessSync(path, fs.constants.R_OK)
        try {
            fs.accessSync("../public", fs.constants.R_OK)
            try {
                fs.accessSync("../public/api", fs.constants.R_OK)
                fs.writeFileSync("../public/api/config.json", fs.readFileSync(path))
                return 'create /api/config.json'
            } catch (e) {
                fs.mkdirSync("../public/api")
                fs.writeFileSync("../public/api/config.json", fs.readFileSync(path))
                return 'create /api/config.json error 3'
            }
        } catch (e) {
            fs.mkdirSync("../public")
            fs.mkdirSync("../public/api")
            fs.writeFileSync("../public/api/config.json", fs.readFileSync(path))
            return 'create /api/config.json error 2'
        }
    } catch (e) {
        throw e
    }
}

const htmlCompiled = (config: any) => {
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

const build = async (path: string, config: any) => {
    try {
        createPublicDir(path)
        await htmlCompiled(config)
        return 'build success'
    } catch (e) {
        throw e
    }
}

export default build
