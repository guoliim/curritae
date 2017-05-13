
const Koa = require('koa');
const Send = require('koa-send');
const logger = require('koa-logger');
const Webpack = require('webpack');
const { devMiddleware, hotMiddleware} = require('koa-webpack-middleware/lib');
const devConfig = require('./webpack.config');
const compile = Webpack(devConfig);
const app = new Koa();

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

// koa-send api incomplete
app.use(async ctx => {
   await Send(ctx, ctx.path, {root: __dirname, index: 'index.html'})
});

app.on('error', err => console.error('server error', err));
app.listen(3000);
console.log('listening on port 3000');
