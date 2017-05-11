
const Koa = require('koa')
const send = require('koa-send')
const serve = require('koa-static')
const logger = require('koa-logger')
const app = new Koa()

app.use(logger())

// koa-send api incomplete
app.use(async ctx => {
   await send(ctx, ctx.path, {root: __dirname, index: 'index.html'})
});

// app.use(serve('./', {index: 'index.html'}))

app.on('error', err => console.error('server error', err))

app.listen(3000);
console.log('listening on port 3000');
