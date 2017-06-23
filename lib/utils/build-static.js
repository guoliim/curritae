// @flow
import fs from 'fs'

import htmlCreate from './server-html-string'
import copyFile from './copyFile'
import webpackCompile from './webpackCompile'

const detail = fs.readFileSync('./api/config.json', 'utf-8')
const html = htmlCreate({
    style: "./styles.css",
    bundleURL: "./bundle.js",
    data: detail,
})

const build = async (src: string, dest: string, config: any) => {

    try {
        copyFile(src, dest)
        await webpackCompile(config)
        fs.writeFileSync('../public/index.html', html)
        return 'build success'
    } catch (e) {
        throw e
    }
}

export default build
