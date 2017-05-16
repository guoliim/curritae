// @flow
import Koa from 'koa'
import Router from 'koa-router'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Send from 'koa-send'
import logger from 'koa-logger'
import Webpack from 'webpack'
import fs from 'fs'
import { devMiddleware, hotMiddleware} from 'koa-webpack-middleware/lib'
import compileConfig from './webpack.complieConfig'

const compile: any = Webpack(compileConfig())

const htmlElement: any = React.createElement(require('./develop-html'));
let html: string = ReactDOMServer.renderToStaticMarkup(htmlElement);
html = `<!DOCTYPE html>\n${html}`;

const app = new Koa();
const router = new Router();

const createPublicDir = (path: string) => {
    try {
        fs.accessSync(path, fs.constants.R_OK)
        try {
            fs.accessSync("./api", fs.constants.R_OK)
            fs.writeFileSync("./api/config.json", fs.readFileSync(path))

            return async (ctx, next) => { await next() }
        } catch (e) {
            fs.mkdirSync("./api")
            fs.writeFileSync("./api/config.json", fs.readFileSync(path))

            return async (ctx, next) => { await next() }
        }
    } catch (e) {
        throw "You must have ./api/config.json in /lib"
    }
}

app.use(logger())

app.use(devMiddleware(compile, {
    hot: true,
    noInfo: false,
    quite: false,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
    },
    publicPath: "/dist/",
    index: "index.html",
    headers: { "X-Custom-Header": "yes"},
    stats: {
        colors: true
    },
}))

app.use(hotMiddleware(compile, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
}))

// for different router, can not simply set a response type for all response
// watch the ctx stats log by request different url to find this issues
// TODO setting ROUTE elegant or using middleware such as koa-router

app.use(createPublicDir('../lib/api/config.json'))

router
    .get('/', ctx => {
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = html;
    })
    .get('/api/config.json', async ctx => {
        ctx.type = 'application; charset=utf-8';
        await Send(ctx, ctx.path, {root: __dirname, index: 'config.json'})
    })

app.use(router.routes());
app.use(router.allowedMethods());
app.on('error', err => console.error('server error', err));
app.listen(3000);
console.log('listening on port 3000');
