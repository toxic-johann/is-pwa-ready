import store from 'store'
import {sleep} from 'utils'

let installWaitUntilFlag = false
let skipWaitingFlag = false
self.oninstall = function (event) {
  store.put('feature', 1, 'installEvent')
  console.log('Install event', event)
  console.log('.replace', event.replace)
  console.log('self.skipWaiting', self.skipWaiting)

  if (event.waitUntil) {
    console.log('Testing waitUntil:')
    event.waitUntil((async function (resolve) {
      await sleep(1000)
      console.log('This should appear before activate')
      installWaitUntilFlag = true
    })())
  }
  skipWaitingFlag = true
  // omit waiting period so that we can activate
  // skipWaiting will kick out the current activateone so that we can activate this sw
  self.skipWaiting()
}

self.onactivate = function (event) {
  console.log('Activate event', event)
  console.log('.waitUntil', event.waitUntil)
  store.put('feature', 1, 'activateEvent')
  store.put('feature', Number(installWaitUntilFlag), 'installEvent.waitUntil')
  store.put('feature', Number(skipWaitingFlag), 'self.skipWaiting')
  console.log('try to waitUntil')
  event.waitUntil((async function () {
    console.log('waitUntil')
    await sleep(1000)
    console.log('This should appear before total controll')
    await store.put('feature', 0.5, 'activateEvent.waitUntil')
    // clients.claim can let out page can actually controll the page
    // without this our page will be controller until total reload
    if(self.clients.claim) {
      await store.put('feature', 0.5, 'clients.claim')
      // self.clients.claim()
    }
  })())
}

// use fetch event to test is it realy to be control
self.onfetch = function (event) {
  console.log('Fetch event', event)
  store.put('feature', Number(!!event), 'fetchEvent')
  const list = ['request', 'respondWith']
  for(let i = list.length - 1; i > -1; i--) {
    const key = list[i]
    console.log('.' + key, event[key])
    store.put('feature', Number(!!event[key]), 'fetchEvent.' + key)
  }
  const url = new URL(event.request.url)
  if (url.pathname.endsWith('/whoareyou.json')) {
    event.respondWith(
      new Response('{"i am": "lifecycle-sw"}', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    )
  }
}

