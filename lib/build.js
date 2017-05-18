import build from './build-static'
import config from './webpack.complieConfig'

build('../lib/api/config.json', config(process.env.npm_lifecycle_event))
