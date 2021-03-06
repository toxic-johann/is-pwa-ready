const fs = require('fs');
module.exports = async function() {
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  const locales = [ 'zh', 'en' ];
  const i18n = locales.reduce((i18n, key) => {
    i18n[key] = JSON.parse(fs.readFileSync('./server/i18n/index/' + key + '.json', 'utf8'));
    return i18n;
  }, {});
  const result = this.request.body;
  locales.forEach(key => {
    i18n[key].features = i18n[key].features.map(each => {
      const { id } = each;
      if (result.feature[id] === undefined) return each;
      each[result.b] = each[result.b] || {};
      const originSupported = each[result.b].supported;
      const currentSupported = parseFloat(result.feature[id]);
      const originMinVersion = each[result.b].minVersion || 9999;
      const currentMinVersion = parseFloat(result.info.browser.major);
      each[result.b].supported = currentSupported;
      each[result.b].minVersion = originSupported <= 0 && currentSupported > 0
        ? currentMinVersion
        : Math.min(originMinVersion, currentMinVersion);
      return each;
    });
    fs.writeFileSync('./server/i18n/index/' + key + '.json', JSON.stringify(i18n[key], null, 2));
  });
  this.body = 'work';
};
