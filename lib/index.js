
const Koa = require('koa')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Send = require('koa-send')
const logger = require('koa-logger')
const Webpack = require('webpack')
const { devMiddleware, hotMiddleware} = require('koa-webpack-middleware/lib')
const webpackRequire = require('webpack-require')
const devConfig = require('./webpack.config')

const compile = Webpack(devConfig);

// webpackRequire(
    // devConfig.resolve(),
    // require('./webpack.config'),
    // require.resolve('./html'),
    // (error, factory) => {
    //     if (error) {
    //         console.log('Failed to require ./html.js');
    //         error.forEach(e => {
    //             console.log(e)
    //         });
    //         process.exit();
    //     }
    //     const HTML = factory();
    //     const app = new Koa();

        // try {
        //     const htmlElement = React.createElement(HTML);
        //     let html = ReactDOMServer.renderToStaticMarkup(htmlElement);
        //     html = `<!DOCTYPE html>\n${html}`;
        // } catch (e) {
        //     console.log(e.stack)
        //     throw e
        // }
//         app.use(logger());
//
//         app.use(devMiddleware(compile, {
//             hot: true,
//             noInfo: false,
//             quite: false,
//             lazy: false,
//             watchOptions: {
//                 aggregateTimeout: 300,
//                 poll: true,
//             },
//             publicPath: "/dist/",
//             index: "index.html",
//             headers: { "X-Custom-Header": "yes"},
//             stats: {
//                 colors: true
//             },
//         }));
//
//         app.use(hotMiddleware(compile, {
//             log: console.log,
//             path: '/__webpack_hmr',
//             heartbeat: 10 * 1000,
//         }));
//
//         // koa-send api incomplete
//         // app.use(async ctx => {
//         //     await Send(ctx, ctx.path, {root: __dirname, index: 'index.html'})
//         // });
//
//         app.use(ctx => {
//             ctx.body = html
//         });
//
//         app.on('error', err => console.error('server error', err));
//         app.listen(3000);
//         console.log('listening on port 3000');
//     }
// );

const htmlElement = React.createElement(require('./compiled-html'));
let html = ReactDOMServer.renderToStaticMarkup(htmlElement);
html = `<!DOCTYPE html>\n${html}`;

console.log(html);

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

//koa-send api incomplete
// app.use(async ctx => {
//    await Send(ctx, ctx.path, {root: __dirname, index: 'index.html'})
//     console.log(ctx);
// });


//TODO setting ROUTE elegant or using middleware such as koa-route
app.use(async ctx => {
    if (ctx.url === '/') {
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = html;
    }
    if (ctx.url === '/api/config.json') {
        console.log(ctx.path);
        ctx.type = 'application; charset=utf-8';
        await Send(ctx, ctx.path, {root: __dirname, index: 'config.json'})
    }
})

app.on('error', err => console.error('server error', err));
app.listen(3000);
console.log('listening on port 3000');
