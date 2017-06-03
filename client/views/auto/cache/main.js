import store from 'store'
import {sleep, promisifyOneTimeEventListener} from 'utils'
const list = [
  'cache.add',
  'cache.addAll',
  'cache.delete',
  'cache.match',
  'cache.put',
  'cache.keys',
  'caches.delete',
  'caches.has',
  'caches.open'
]
function genWaiter () {
  return Promise.race([
    promisifyOneTimeEventListener(() => {}, navigator.serviceWorker, 'controllerchange'),
    sleep(3000)
  ])
}
export default async function () {
  for(let i = list.length - 1; i > -1; i--) {
    await store.put('feature', 0, list[i])
  }
  const hasSW = !!navigator.serviceWorker
  if(!hasSW) return
  const waiter = genWaiter()
  const reg = await navigator.serviceWorker.register('/auto/cache-sw.js', {scope: '/auto/'})
  await waiter
  await reg.unregister()
  console.log('cache test finished')
}
