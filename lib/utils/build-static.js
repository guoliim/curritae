// @flow
import webpack from 'webpack'
import fs from 'fs'

import htmlCreate from './server-html-string'
import copyFile from './copyFile'

const detail = fs.readFileSync('./api/config.json', 'utf-8')

const html = htmlCreate({
    style: "./styles.css",
    bundleURL: "./bundle.js",
    data: detail,
})

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

const build = async (src: string, dest: string, config: any) => {

    try {
        copyFile(src, dest)
        await htmlCompiled(config)
        return 'build success'
    } catch (e) {
        throw e
    }
}

export default build
