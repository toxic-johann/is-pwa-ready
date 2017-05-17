const jsonlint = require('jsonlint')
const glob = require('glob')
const fs = require('fs')
const files = glob.sync('./server/i18n/**/*.json')
for(const key of files) {
  jsonlint.parse(fs.readFileSync(key, 'utf8'))
}
