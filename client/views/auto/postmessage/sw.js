import store from 'store'
import {sleep} from 'utils'
self.onmessage = async function (event) {
  await store.put('feature', 1, 'sw-msg-got')
  await store.put('feature', Number(!!self.clients.matchAll), 'clients.matchAll')
  console.log('Got message in SW', event.data && event.data.text)
  if (event.source) {
    console.log('event.source present')
    event.source.postMessage('Woop!')
    await store.put('feature', 1, 'sw-msg-send')
    await store.put('feature', 'event.source', 'sw-msg-send-by')
    return
  }
  if (self.clients && self.clients.matchAll) {
    console.log('Attempting postMessage via clients API')
    self.clients.matchAll().then(function (clients) {
      for (const client of clients) {
        client.postMessage('Whoop! (via client api)')
      }
    })
    await store.put('feature', 0.8, 'sw-msg-send')
    await store.put('feature', 'self.clients', 'sw-msg-send-by')
    return
  }
  if (event.data.port) {
    event.data.port.postMessage('Woop!')
    await store.put('feature', 0.5, 'sw-msg-send')
    await store.put('feature', 'event.data.port', 'sw-msg-send-by')
    return
  }
  console.log('No useful return channel')
  await store.put('feature', 0, 'sw-msg-send')
  await store.put('feature', 'nothing', 'sw-msg-send-by')
  return
}

self.oninstall = function (event) {
  event.waitUntil((async function (resolve) {
    await sleep(1000)
  }))
  self.skipWaiting()
}

self.onactivate = function () {
  if(self.clients.claim) {
    self.clients.claim()
  }
}
