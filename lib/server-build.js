import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import fs from 'fs'
import JSON5 from 'json5'
import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import compress from 'koa-compress'
import send from 'koa-send'

import webpackConfig from './utils/webpack.complieConfig'
import copyFile from './utils/copyFile'
import Container from './views2/components/Container'
import htmlCreate from './utils/server-html-string'
import webpackCompile from './utils/webpackCompile'

const fileProcess = () => {

    copyFile('../lib/api/config.json', './api/config.json')
    return fs.readFileSync('./api/config.json', 'utf-8')
}

const context = {}
const htmlElement = ReactDOMServer.renderToString(
    <StaticRouter location='/' context={context}>
        <Container detail={JSON5.parse(fileProcess())}/>
    </StaticRouter>
)

const htmlString = htmlCreate({
    style:"./utils/dist/styles.css",
    html:htmlElement,
    data:fileProcess(),
    bundleURL:'./utils/dist/bundle.js',
})

const api = () => {

    const app = new Koa()
    const router = new Router()

    app.use(logger())
    app.use(compress({
        filter: (content_type) => (/(text|application)/i.test(content_type)),
        threshold: 2048,
        flush: require('zlib').Z_SYNC_FLUSH,
    }))

    router
        .get('/', ctx => {
            ctx.type = 'text/html; charset=utf-8'
            // ctx.body = html
            ctx.body = htmlString
        })
        .get('/img/:id', async ctx => {
            await send(ctx, ctx.path)
        })
        .get('/utils/dist/:id', async ctx => {
            await send(ctx, ctx.path)
        })
        .get('/api/config.json', async ctx => {
            ctx.type = 'application; charset=utf-8';
            await send(ctx, ctx.path, {root: __dirname, index: 'config.json'})
        })
        .get('/service-worker.js', async ctx => {
            await send(ctx, ctx.path, {root: __dirname, index: 'service-worker.js'})
        })

    app.use(router.routes())
    app.use(router.allowedMethods())
    app.on('error', err => console.error('server error', err))
    app.listen(3000);
    console.log('listening on port 3000')
}

const server = async () => {

    try {
        await webpackCompile(webpackConfig(process.env.npm_lifecycle_event))
        api()
    } catch (e) {
        throw e
    }
}

server()




