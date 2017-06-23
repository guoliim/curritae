import fs from 'fs'
import { copySync } from 'fs-extra'

const copyFile = (src, dest, fn = () => (true)) => {

    const copy = () => {
        copySync(src, dest)
        // return fn for koa2 middleware check for typeof fn === 'function'
        return fn
    }

    return fs.existsSync(src) ? copy(src, dest, fn) : `the ${src} does not exist`
}

export default copyFile
