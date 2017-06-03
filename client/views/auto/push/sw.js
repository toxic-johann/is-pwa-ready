import store from 'store'
self.addEventListener('push', function (event) {
  // const options = event.data.json()
  // console.log(options)
  // event.waitUntil(self.registration.showNotification(options.title, options))
  event.waitUntil(self.registration.showNotification('Hmmm, how lucky you are', {
    body: 'Yay it works.',
    icon: 'https://p5.ssl.qhimg.com/t01245986c32f09718d.png'
  }))
  store.put('feature', 1, 'pushEvent')
})
self.addEventListener('notificationclick', function (event) {

  event.notification.close()

  event.waitUntil(
    self.clients.openWindow('https://ispwaready.toxicjohann.com')
  )
})

self.oninstall = function (event) {
  self.skipWaiting()
}

self.onactivate = function () {
  if(self.clients && self.clients.claim) {
    self.clients.claim()
  }
}
