const fs = require('fs')
module.exports = async function () {
  if(process.env.NODE_ENV === 'production') {
    return
  }
  const locales = ['zh']
  const i18n = locales.reduce((i18n, key) => {
    i18n[key] = JSON.parse(fs.readFileSync('./server/i18n/index/' + key + '.json', 'utf8'))
    return i18n
  }, {})
  const result = this.request.body
  i18n.zh.features = i18n.zh.features.map(each => {
    const {id} = each
    if(result.feature[id] === undefined) return each
    each[result.b] = each[result.b] || {}
    each[result.b].supported = parseFloat(result.feature[id])
    each[result.b].minVersion = Math.min(each[result.b].minVersion || 9999, parseFloat(result.info.browser.major))
    return each
  })
  fs.writeFileSync('./server/i18n/index/zh.json', JSON.stringify(i18n.zh, null, 2))
  this.body = 'work'
}
