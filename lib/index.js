
const Koa = require('koa')
const Router = require('koa-router')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Send = require('koa-send')
const logger = require('koa-logger')
const Webpack = require('webpack')
const { devMiddleware, hotMiddleware} = require('koa-webpack-middleware/lib')
const compileConfig = require('./webpack.complieConfig')

const compile = Webpack(compileConfig())

const htmlElement = React.createElement(require('./compiled-html'));
let html = ReactDOMServer.renderToStaticMarkup(htmlElement);
html = `<!DOCTYPE html>\n${html}`;

const app = new Koa();
const router = new Router();

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
