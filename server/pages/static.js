const send = require('koa-send')
module.exports = async function () {
  await send(this, this.path)
}
