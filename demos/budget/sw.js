self.addEventListener('push', function (event) {
  // const options = event.data.json()
  // console.log(options)
  // event.waitUntil(self.registration.showNotification(options.title, options))
  event.waitUntil(self.registration.showNotification('ceshi', {
    body: 'Yay it works.',
    icon: 'https://p5.ssl.qhimg.com/t01245986c32f09718d.png',
    badge: 'images/badge.png'
  }))
})
self.addEventListener('notificationclick', function (event) {

  event.notification.close()

  event.waitUntil(
    clients.openWindow('https://ispwaready.toxic.johann.com')
  )
})
