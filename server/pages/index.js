const fs = require('fs')
const locales = ['zh', 'en']
const i18n = locales.reduce((i18n, key) => {
  i18n[key] = JSON.parse(fs.readFileSync('./server/i18n/index/' + key + '.json', 'utf8'))
  return i18n
}, {})
module.exports = async function () {
  this.state = i18n[this.locale]
  await this.render('index')
}
