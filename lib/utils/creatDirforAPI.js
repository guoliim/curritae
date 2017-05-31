import fs from 'fs'

const createDirforAPI = (path: string) => {
    try {
        fs.accessSync(path, fs.constants.R_OK)
        try {
            fs.accessSync("./api", fs.constants.R_OK)
            fs.writeFileSync("./api/config.json", fs.readFileSync(path))
        } catch (e) {
            fs.mkdirSync("./api")
            fs.writeFileSync("./api/config.json", fs.readFileSync(path))
        }
    } catch (e) {
        throw "You must have ./api/config.json in /lib"
    }
}

export default createDirforAPI