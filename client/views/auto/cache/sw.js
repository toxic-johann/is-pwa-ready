import store from 'store'
self.oninstall = function (event) {
  const baseUrl = '/auto/cache/'
  event.waitUntil((async () => {
    const cache = await caches.open('cache-test-v1')
    const hasCache = await caches.has('cache-test-v1')
    await store.put('feature', Number(hasCache), 'caches.open')
    await store.put('feature', Number(hasCache), 'caches.has')
    console.log('open a cache', cache)
    const urlPut = baseUrl + 'put'
    const resPut = await fetch(urlPut)
    await cache.put(urlPut, resPut)
    await store.put('feature', 0.5, 'cache.put')
    const matchPut = await cache.match(urlPut)
    await store.put('feature', 0.5, 'cache.match')
    const checkPut = await matchPut.json()
    if(checkPut.data === urlPut) {
      console.log('put and match a request', checkPut)
      await store.put('feature', 1, 'cache.put')
      await store.put('feature', 1, 'cache.match')
    }
    const urlAdd = baseUrl + 'add'
    await cache.add(urlAdd)
    await store.put('feature', 0.5, 'cache.add')
    const matchAdd = await cache.match(urlAdd)
    const checkAdd = await matchAdd.json()
    if(checkAdd.data === urlAdd) {
      console.log('add and match a request', checkAdd)
      await store.put('feature', 1, 'cache.add')
    }
    const keys = await cache.keys()
    console.log(keys, 'check cache.keys')
    if(keys.length >= 2) {
      console.log('cache.keys passed')
      await store.put('feature', 1, 'cache.keys')
    }
    await cache.delete(urlPut)
    await store.put('feature', 0.5, 'cache.delete')
    const nullPutCache = await cache.match(urlPut)
    if(!nullPutCache) {
      console.log('check cache.delete')
      await store.put('feature', 1, 'cache.delete')
    }
    const urlAddAllArr = [
      baseUrl + 1,
      baseUrl + 2,
      baseUrl + 3,
      baseUrl + 4,
    ]
    await cache.addAll(urlAddAllArr)
    await store.put('feature', 0.5, 'cache.addAll')
    console.log('ddAll')
    const keys2 = await cache.keys()
    const matchAddAll = await cache.match(urlAddAllArr[3])
    const checkAddAll = await matchAddAll.json()
    console.log(keys2, checkAddAll.data, 'checkAddAll')
    if(keys2.length >= 5 && checkAddAll.data === urlAddAllArr[3]) {
      await store.put('feature', 1, 'cache.addAll')
    }
    const matchAll = await cache.matchAll(baseUrl)
    if(matchAll.length >= 5) {
      await store.put('feature', 1, 'cache.matchAll')
    }
    await caches.delete('cache-test-v1')
    const hasCache2 = await caches.has('cache-test-v1')
    await store.put('feature', Number(!hasCache2), 'caches.delete')
  })())
  self.skipWaiting()
}

self.onactivate = function () {
  if(self.clients && self.clients.claim) {
    self.clients.claim()
  }
}

self.addEventListener('sync', function (event) {
  store.put('feature', 1, 'syncEvent')
})
