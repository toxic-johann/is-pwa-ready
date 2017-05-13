import store from 'store'
self.addEventListener('install', function (event) {
  self.skipWaiting()
})

self.addEventListener('sync', function (event) {
  store.put('feature', 1, 'syncEvent')
})
