module.exports = async function (ctx, next) {
  const optionalLanguageReg = /zh|en/
  // accepts
  const locales = ctx.acceptsLanguages()
  const keys = ['locale', 'lang', 'language']
  // cookie
  keys.forEach(key => {
    const value = ctx.cookies.get(key)
    if(value) locales.unshift(value)
  })
  // query
  keys.forEach(key => {
    if(ctx.query[key]) locales.unshift(ctx.query[key])
  })
  ctx.locale = locales.reverse()
  .reduce((locale, curr) => {
    const match = curr.match(optionalLanguageReg)
    return match ? match[0] : locale
  }, 'en')
  await next()
}
