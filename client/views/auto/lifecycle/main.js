import store from 'store'
import {sleep, promisifyOneTimeEventListener} from 'utils'
const list = [
  'activateEvent',
  'activateEvent.waitUntil',
  'clients.claim',
  'fetchEvent',
  'installEvent',
  'installEvent.waitUntil',
  'navigator.serviceWorker',
  'oncontrollerchange',
  'self.skipWaiting',
]
async function controllerchangeCauseByNormalInstall (evt) {
  console.log('serviceWorker now has a new activated one')
  console.log('this event will trigger after installEvent.waitUntil and before activateEvent.waitUntil')
  if(!evt) {
    const score = await store.get('feature', 'oncontrollerchange')
    if(parseFloat(score) === 1) return
    await store.put('feature', 0, 'oncontrollerchange')
  } else {
    await store.put('feature', 1, 'oncontrollerchange')
  }
  console.log('if has not activate controller, this should be trigger earlier that activated event')
  const activateWaitUntilScore = await store.get('feature', 'activateEvent.waitUntil')
  if(activateWaitUntilScore && parseFloat(activateWaitUntilScore) > 0) {
    console.error('the activateEvent.waitUntil trigger before oncontrollerchange')
    await store.put('feature', activateWaitUntilScore, 'activateEvent.waitUntil')
  }
}
function genWaiter (fn) {
  return Promise.race([
    promisifyOneTimeEventListener(fn, navigator.serviceWorker, 'controllerchange'),
    sleep(3000).then(fn)
  ])
}

export default async function () {
  require('whatwg-fetch')
  // init all the feature as zero
  for(let i = list.length - 1; i > -1; i--) {
    await store.put('feature', 0, list[i])
  }
  // generate waiter for controller change
  const hasSW = !!navigator.serviceWorker
  if(!hasSW) return
  await store.put('feature', 1, 'navigator.serviceWorker')
  navigator.serviceWorker.ready.then(() => store.put('feature', 1, 'navigator.serviceWorker.ready'))
  const waiter = genWaiter(controllerchangeCauseByNormalInstall)
  // register test, including install event, controllerchange, activate event
  const reg = await navigator.serviceWorker.register('/auto/lifecycle-sw.js', {scope: '/auto/'})
  console.log('Registered!', reg)
  await waiter
  // wait for actived event fininshed
  await sleep(3000)
  const activateWaitUntilScore = await store.get('feature', 'activateEvent.waitUntil')
  await store.put('feature', (parseFloat(activateWaitUntilScore) || 0) + 0.5, 'activateEvent.waitUntil')
  const response = await fetch('/whoareyou.json')
  if(response.ok) {
    const clarify = await response.json()
    console.log('clarify who controll the page', clarify)
    if(clarify['i am'] === 'lifecycle-sw') {
      const clientsclaimScore = await store.get('feature', 'clients.claim')
      await store.put('feature', (parseFloat(clientsclaimScore) || 0) + 0.5, 'clients.claim')
    }
  }
  // unregister test
  await reg.unregister()
  console.log('Unregistered')
  let sum = 0
  for(let i = 0; i < list.length; i++) {
    const key = list[i]
    const score = await store.get('feature', key)
    sum += parseFloat(score)
  }
  sum /= list.length
  await store.put('feature', sum, 'lifecycle')
}
