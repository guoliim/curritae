import React from 'react'
import ReactDOMServer from 'react-dom/server'
import createFragment from 'react-addons-create-fragment'
import { StaticRouter } from 'react-router'
import fs from 'fs'
import path from 'path'
import JSON5 from 'json5'
import Koa from 'koa'
import Router from 'koa-router'
import logger from 'koa-logger'
import send from 'koa-send'
import webpack from 'webpack'

import webpackConfig from './webpack.complieConfig'
import Container from './views/components/Container'
import Html from './server-html'
import htmlCreate from './server-html-string'


const createPublicDir = (path: string) => {
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

createPublicDir('../lib/api/config.json')

const detail = fs.readFileSync('./api/config.json', 'utf-8')

const context = {}
const htmlElement = ReactDOMServer.renderToString(
    <StaticRouter location='/' context={context}>
        <Container detail={JSON5.parse(detail)}/>
    </StaticRouter>
)

const html = `<!DOCTYPE html>\n ${ReactDOMServer.renderToStaticMarkup(
    <Html data={detail} body={htmlElement} />)}`

const htmlString = htmlCreate(detail, htmlElement)

const webpackCompile = () => {
    return new Promise((resolve, reject) => {
        webpack(webpackConfig(process.env.npm_lifecycle_event), (err, stats) => {
            if (err || stats.hasErrors()) {
                reject('can not webpacking')
            }
            resolve('create success')
        })
    })
}

const server = async () => {
    try {
        await webpackCompile()

        const app = new Koa()
        const router = new Router()

        app.use(logger())

        router
            .get('/', ctx => {
                ctx.type = 'text/html; charset=utf-8'
                // ctx.body = html
                ctx.body = htmlString
            })
            .get('/style/:id', async ctx => {
                await send(ctx, ctx.path)
            })
            .get('/img/:id', async ctx => {
                await send(ctx, ctx.path)
            })
            .get('/dist/:id', async ctx => {
                await send(ctx, ctx.path)
            })
            .get('/api/config.json', async ctx => {
                ctx.type = 'application; charset=utf-8';
                await send(ctx, ctx.path, {root: __dirname, index: 'config.json'})
            })

        app.use(router.routes());
        app.use(router.allowedMethods());
        app.on('error', err => console.error('server error', err));
        app.listen(3000);
        console.log('listening on port 3000');

    } catch (e) {
        throw e
    }
}

server()




