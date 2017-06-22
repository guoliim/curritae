// @flow
import Koa from 'koa'
import Router from 'koa-router'
import send from 'koa-send'
import logger from 'koa-logger'
import Webpack from 'webpack'
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware/lib'

import compileConfig from './utils/webpack.complieConfig'
import htmlCreate from './utils/server-html-string'
import copyFile from './utils/copyFile'

console.log(compileConfig(process.env.npm_lifecycle_event))

const compile: any = Webpack(compileConfig(process.env.npm_lifecycle_event))

const html = htmlCreate({bundleURL: "./dist/bundle.js"})

const app = new Koa()
const router = new Router()

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
    // index: "index.html",
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

app.use(copyFile('../lib/api/config.json', './api/config.json',
    async (ctx, next) => { await next() }
))

router
    .get('/', ctx => {
        ctx.type = 'text/html; charset=utf-8'
        ctx.body = html
    })
    .get('/api/config.json', async ctx => {
        ctx.type = 'application; charset=utf-8';
        await send(ctx, ctx.path, {root: __dirname, index: 'config.json'})
    })
    .get('/img/:id', async ctx => {
        await send(ctx, ctx.path)
    })

app.use(router.routes());
app.use(router.allowedMethods());
app.on('error', err => console.error('server error', err));
app.listen(3000);
console.log('listening on port 3000');


