
const Koa = require('koa')
const send = require('koa-send')
const logger = require('koa-logger')
const app = new Koa()

app.use(logger())

// 单一加载 并不需要 async await
app.use(ctx => {
    send(ctx, './index.html')
});

app.listen(3000);
console.log('listening on port 3000');
