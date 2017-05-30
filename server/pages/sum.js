const fs = require('fs')
module.exports = async function () {
  if(process.env.NODE_ENV === 'production') {
    return
  }
  const locales = ['zh', 'en']
  const i18n = locales.reduce((i18n, key) => {
    i18n[key] = JSON.parse(fs.readFileSync('./server/i18n/index/' + key + '.json', 'utf8'))
    return i18n
  }, {})
  locales.map(key => {
    const json = i18n[key]
    json.browsers.forEach(({id} = {}) => {
      const sum = json.features.reduce((prev, curr) => {
        if(curr.id === 'ready') return prev
        prev += (curr[id] || {supported: 0}).supported
        return prev
      }, 0)
      json.features[0][id] = json.features[0][id] || {}
      json.features[0][id].supported = Math.min(1, +(sum / (json.features.length - 1)).toFixed(1) + 0.01)
    })
    json.browsers.sort((a, b) => {
      return json.features[0][b.id].supported - json.features[0][a.id].supported
    })
    fs.writeFileSync('./server/i18n/index/' + key + '.json', JSON.stringify(i18n[key], null, 2))
  })
  this.body = 'work'
}
