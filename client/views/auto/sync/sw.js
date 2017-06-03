import store from 'store'
self.oninstall = function () {
  self.skipWaiting()
}

self.onactivate = function () {
  if(self.clients.claim) {
    self.clients.claim()
  }
}

self.addEventListener('sync', function (event) {
  store.put('feature', 1, 'syncEvent')
})
