import store from 'store'
self.oninstall = function () {
  self.skipWaiting()
}

self.onactivate = function () {
  self.clients.claim()
}

self.addEventListener('sync', function (event) {
  store.put('feature', 1, 'syncEvent')
})
