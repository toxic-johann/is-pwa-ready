global.isString = str => typeof str === 'string' || str instanceof String

global.encodeStr = str => {
  if(!global.isString(str)) {
    str = JSON.stringify(str)
  }
  return str && str
  .replace(/\\/g, '\\\\')
  .replace(/'/g, '\\x27')
  .replace(/"/g, '\\x22')
  .replace(/\//g, '\\/')
  .replace(/\n/g, '\\n')
  .replace(/\r/g, '\\r')
}
global.JSON = JSON

global.isObject = obj => Object(obj) === obj &&
  String(obj) === '[object Object]' &&
  typeof obj !== 'function' &&
  !Array.isArray(obj)

global.genTraversalHandler = function (fn) {
  function recursiveFn (source) {
    if(Array.isArray(source)) {
      return source.map(each => recursiveFn(each))
    }
    if(global.isObject(source)) {
      return Object.keys(source).reduce((target, key) => {
        target[key] = recursiveFn(source[key])
        return target
      }, {})
    }
    return fn(source)
  };
  return recursiveFn
}

const encodeStrObject = global.genTraversalHandler(function (str) {
  return global.encodeStr(str)
})

module.exports = async function (ctx, next) {
  ctx.setServerData = function (obj) {
    const serverData = (this.state && this.state.serverData) || {}
    for(const key in obj) {
      const oriObj = serverData[key] || {}
      serverData[key] = Object.assign(oriObj, encodeStrObject(obj[key]))
    }
    Object.assign(this.state, {serverData})
    // so that i can use JSON in nunjucks
    ctx.state.JSON = ctx.state.JSON || JSON
  }
  await next()
}
