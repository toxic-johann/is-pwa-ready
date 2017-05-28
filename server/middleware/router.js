const RouteRecognizer = require('route-recognizer')
const glob = require('glob')
const router = new RouteRecognizer()
class Router {
  constructor (paths = []) {
    this.multiAdd(paths)
  }
  add (paths) {
    paths = Array.isArray(paths) ? paths : [paths]
    router.add(paths)
  }
  multiAdd (paths) {
    paths = Array.isArray(paths) ? paths : [paths]
    paths.forEach(path => router.add([path]))
  }
  async install (ctx, next) {
    const assemblyLine = router.recognize(ctx.path) || []
    for(let i = 0; i < assemblyLine.length; i++) {
      const {handler, params} = assemblyLine[i]
      delete params['']
      Object.assign(ctx.request.query, params)
      await handler.apply(ctx, [ctx])
    }
    await next()
  }
}
const pages = glob.sync('./server/pages/*')
const paths = pages.reduce((paths, each) => {
  const path = each.replace(/^\.\/server\/pages|\.js$/g, '')
  const handler = require(each.replace(/^\.\/server/, '..'))
  paths.push({path, handler})
  if(path === '/auto') {
    paths.push({path: '/auto/', handler})
  }
  return paths
}, [
  {path: '/', handler: require('../pages/index.js')},
  {path: '/static/*', handler: require('../pages/static.js')},
  {path: '/demos/*', handler: require('../pages/demos.js')},
  {path: '/auto/*', handler: require('../pages/auto.js')},
  {path: '/sw.js', handler: require('../pages/sw.js')},
  {path: '/googleb2d01223dfd5850d.html', handler: require('../pages/googleb2d01223dfd5850d.js')}
])
module.exports = new Router(paths)
