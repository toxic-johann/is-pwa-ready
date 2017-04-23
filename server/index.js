const view = require('koa-view')
const Koa = require('koa')
const fs = require('fs')
const send = require('koa-send')
const bodyParser = require('koa-bodyparser')
const webpush = require('web-push')
const app = new Koa()
const state = JSON.parse(fs.readFileSync('./server/data/zh.json', 'utf8'))
app.use(view('./views'))
app.use(bodyParser())

app.use(async ctx => {
  const url = ctx.req.url
  if(url.match(/^\/askforpush/)) {
    ctx.body = 'ok, i send it'
    const {endpoint, auth, p256dh} = ctx.request.body
    const options = {
      TTL: 24 * 60 * 60,
      vapidDetails: {
        subject: 'mailto:sender@example.com',
        publicKey: 'BDm6z7ImnFDW6GJ3bwtFdR4ifKGE0CVGXNRfGJhWGm8gwX1sXHH9uq3zo6mYd7fkjVrzfiDHhS5gYfCbxj2g-Bo',
        privateKey: 'pFTDOvDu9zeG_-BNCEk9CUkgzd5XshH8Sk9QFkzAXJU'
      },
      headers: {
        'Authorization': 'key=AAAAvxKDXhg:APA91bEVV6bb2s2c6CE8Xsw0H5Jv8jwb1dSaf_oT6eZL3rKtl2dYrox1E7rahH5qrSYJ7pKhquhFYorFc64e48srojpB_fBXa6uxXNTg1zzF0jliNGm0ADDi11mjdI1TaIONDcIKSIkx'
      }
    }
    const pushSubscription = {
      endpoint,
      keys: {
        auth,
        p256dh
      }
    }
    webpush.sendNotification(pushSubscription, JSON.stringify({
      title: '看看这个浏览器能不能推送？',
      body: '可以哦'
    }), options)
    return
  }
  if(!url.match(/^\/(\/[\w-\.\?#=]+)?$|^\/static\/(js|css|img|font)\/[\w-\.\?#=]+$|^\/demos\/[\w-\.]+\/?(\/[\w-\.\?#=]+)?$|^\/favicon\.ico$/)) {
    return ctx.throw(403)
  }
  const accepts = ctx.accepts()
  const isDemo = url.match(/^\/demos/)
  const needHtml = accepts.indexOf('text/html') > -1 && !url.match(/(js|css|json)$/)
  if(url.match(/^\/static/)) {
    await send(ctx, ctx.path)
  } else if (isDemo && needHtml) {
    const path = url.split('?')[0]
    await send(ctx, path + 'index.html')
  } else if (isDemo) {
    await send(ctx, url)
  } else {
    ctx.state = state
    await ctx.render('index')
  }
})
app.listen(3000)
