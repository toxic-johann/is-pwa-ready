const send = require('koa-send')
module.exports = async function () {
  const url = this.req.url
  const needHtml = (this.accepts().indexOf('text/html') > -1 ||
    this.is('text/html')) &&
    !url.match(/(js|css|json)$/)
  if(needHtml) {
    await send(this, this.path + '/index.html')
    return
  }
  await send(this, url)
}
