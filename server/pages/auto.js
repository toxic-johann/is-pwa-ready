const send = require('koa-send')
const fs = require('fs')
const locales = ['zh', 'en']
const i18n = locales.reduce((i18n, key) => {
  i18n[key] = JSON.parse(fs.readFileSync('./server/i18n/auto/' + key + '.json', 'utf8'))
  return i18n
}, {})
const serverData = locales.reduce((serverData, key) => {
  serverData[key] = JSON.parse(fs.readFileSync('./server/i18n/auto/front/' + key + '.json', 'utf8'))
  return serverData
}, {})
module.exports = async function () {
  const url = this.req.url
  const needSW = url.match(/-sw\.js$/)
  if(needSW) {
    await send(this, '/static/js' + this.path)
    return
  }
  if(url.match(/\/auto\/cache\//)) {
    this.body = JSON.stringify({data: url})
    return
  }
  this.state = i18n[this.locale]
  this.setServerData(serverData[this.locale])
  await this.render('auto')
}
