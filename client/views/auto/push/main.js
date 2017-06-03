import store from 'store'
import {sleep, promisifyOneTimeEventListener} from 'utils'
const list = [
  'pushManager.subscribe',
  'pushManager.getSubscription',
  'pushSubscription.unsubscribe',
  'pushManager.permissionState',
  'pushManager.denied'
]
function genWaiter () {
  return Promise.race([
    promisifyOneTimeEventListener(() => {}, navigator.serviceWorker, 'controllerchange'),
    sleep(3000)
  ])
}

function urlB64ToUint8Array (base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default async function () {
  require('whatwg-fetch')
  for(let i = list.length - 1; i > -1; i--) {
    await store.put('feature', 0, list[i])
  }
  const hasSW = !!navigator.serviceWorker
  if(!hasSW) return
  const waiter = genWaiter()
  const reg = await navigator.serviceWorker.register('/auto/push-sw.js', {scope: '/auto/'})
  await waiter
  const pushManager = reg.pushManager
  if(!pushManager) {
    console.log('no pushManager')
    await reg.unregister()
    return
  }
  console.log('pushManager found')
  try {
    const permissionState = await pushManager.permissionState({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array('BDm6z7ImnFDW6GJ3bwtFdR4ifKGE0CVGXNRfGJhWGm8gwX1sXHH9uq3zo6mYd7fkjVrzfiDHhS5gYfCbxj2g-Bo')
    })
    await store.put('feature', 1, 'pushManager.permissionState')
    if(permissionState === 'denied') {
      console.log('permission denied')
      await reg.unregister()
      await store.put('feature', 1, 'pushManager.denied')
      return
    }
  } catch (err) {
    console.error(err)
  }
  const subscription = await pushManager.getSubscription()
  await store.put('feature', 1, 'pushManager.getSubscription')
  console.log('pushManager.getSubscription work', subscription)
  if(subscription) {
    await subscription.unsubscribe()
    await store.put('feature', 1, 'pushSubscription.unsubscribe')
    console.log('older subscription remove')
  }
  console.log('ready to subscribe')
  let sub
  try {
    pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlB64ToUint8Array('BDm6z7ImnFDW6GJ3bwtFdR4ifKGE0CVGXNRfGJhWGm8gwX1sXHH9uq3zo6mYd7fkjVrzfiDHhS5gYfCbxj2g-Bo')
    }).then(sth => {sub = sth})
  } catch (err) {
    console.error(err)
  }
  // when i use Promise.race on firefox
  // it do not work as i want
  // so i give up and use sleep
  await sleep(5000)
  if(sub) {
    console.log('pushManager.subscribe work', sub)
    const p256dh = btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('p256dh'))))
    const auth = btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('auth'))))
    await store.put('feature', 1, 'pushManager.subscribe')
    try {
      await fetch('/askforpush', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          endpoint: sub.endpoint,
          p256dh,
          auth
        })
      })
    } catch (err) {
      console.error(err)
    }
    await sleep(5000)
    await sub.unsubscribe()
    console.log('subscription.unsubscribe work')
    await store.put('feature', 1, 'pushSubscription.unsubscribe')
    await reg.unregister()
    console.log('unregister')
  } else {
    await reg.unregister()
    console.log('unregister')
    return
  }
}
