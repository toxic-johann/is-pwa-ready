const send = require('koa-send');
const fs = require('fs');
const path = require('path');
module.exports = async function() {
  const url = this.req.url;
  const needHtml = (this.accepts().indexOf('text/html') > -1 ||
    this.is('text/html')) &&
    !url.match(/(js|css|json)$/);
  if (needHtml) {
    await send(this, this.path + '/index.html');
    return;
  }
  // https://stackoverflow.com/questions/30782247/gcm-to-chrome-general-help-unable-to-subscribe-no-sender-id manifest must use manifest type
  if (/manifest\.json$/.test(url)) {
    const manifest = fs.readFileSync(path.resolve(__dirname, '../../demos/pushsubscribe/manifest.json'), 'utf8');
    this.body = manifest;
    this.type = 'application/manifest+json';
    // this.type = 'application/json'
    return;
  }
  await send(this, url);
};
