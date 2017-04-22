const view = require('koa-view')
const Koa = require('koa')
const fs = require('fs')
const send = require('koa-send')
const app = new Koa()
const state = JSON.parse(fs.readFileSync('./server/data/zh.json', 'utf8'))
app.use(view('./views'))

app.use(async ctx => {
  const url = ctx.req.url
  const accepts = ctx.accepts()
  const isDemo = url.match(/^\/demos/)
  const needHtml = accepts.indexOf('text/html') > -1
  console.log(url, ctx.accepts(), needHtml)
  if(url.match(/^\/static/)) {
    await send(ctx, ctx.path)
  } else if (isDemo && needHtml) {
    await send(ctx, url + 'index.html')
  } else if (isDemo) {
    await send(ctx, url)
  } else {
    ctx.state = state
    await ctx.render('index')
  }
})

app.listen(3000)
