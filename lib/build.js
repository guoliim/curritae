import build from './utils/build-static'
import config from './utils/webpack.complieConfig'

build('../lib/api/config.json', config(process.env.npm_lifecycle_event))
