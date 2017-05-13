import store from 'store'
import {sleep, promisifyOneTimeEventListener} from 'utils'
const list = [
  'activeEvent',
  'active.waitUntil',
  'clients.claim',
  'fetchEvent',
  'installEvent',
  'install.waitUntil',
  'navigator.serviceWorker',
  'oncontrollerchange',
  'self.skipWaiting',
]
async function controllerchangeCauseByNormalInstall (evt) {
  console.log('serviceWorker now has a new actived one')
  console.log('this event will trigger after install.waitUntil and before active.waitUntil')
  if(!evt) {
    const score = await store.get('feature', 'oncontrollerchange')
    if(parseFloat(score) === 1) return
    await store.put('feature', 0, 'oncontrollerchange')
  } else {
    await store.put('feature', 1, 'oncontrollerchange')
  }
  console.log('if has not active controller, this should be trigger earlier that actived event')
  const activeWaitUntilScore = await store.get('feature', 'active.waitUntil')
  if(activeWaitUntilScore && parseFloat(activeWaitUntilScore) > 0) {
    console.error('the active.waitUntil trigger before oncontrollerchange')
    await store.put('feature', activeWaitUntilScore, 'active.waitUntil')
  }
}
function genWaiter (fn) {
  return Promise.race([
    promisifyOneTimeEventListener(fn, navigator.serviceWorker, 'controllerchange'),
    sleep(3000).then(fn)
  ])
}

export default async function () {
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
  // register test, including install event, controllerchange, active event
  const reg = await navigator.serviceWorker.register('/auto/lifecycle-sw.js')
  console.log('Registered!', reg)
  await waiter
  await sleep(3000)
  const activeWaitUntilScore = await store.get('feature', 'active.waitUntil')
  await store.put('feature', (parseFloat(activeWaitUntilScore) || 0) + 0.5, 'active.waitUntil')
  // use fetch event to test client.claims effect
  const response = await fetch('/whoareyou.json')
  const clarify = await response.json()
  console.log('clarify who controll the page', clarify)
  if(clarify['i am'] === 'lifecycle-sw') {
    const clientsclaimScore = await store.get('feature', 'clients.claim')
    await store.put('feature', (parseFloat(clientsclaimScore) || 0) + 0.5, 'clients.claim')
  }
  // unregister test
  await reg.unregister()
  console.log('Unregistered')
}
