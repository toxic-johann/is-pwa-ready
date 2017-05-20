import test from './test'
import store from 'store'
import {sleep} from 'utils'
export default async function () {
  await test(window, 0)
  const hasSW = !!navigator.serviceWorker
  // test if we suggest navigator.serviceWorker
  await store.put('feature', Number(hasSW), 'navigator.serviceWorker')
  if(!hasSW) return
  const sw = await navigator.serviceWorker.register('/auto/global-sw.js', {scope: '/auto/'})
  console.log('Registered!', sw)
  await store.put('feature', 1, 'Registered')
  await sleep(3000)
  await sw.unregister()
  console.log('Unregistered')
  await store.put('feature', 1, 'Unregistered')
}
