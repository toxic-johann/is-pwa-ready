import test from './test'
import store from 'store'
export default async function () {
  await test(window, 0)
  const hasSW = !!navigator.serviceWorker
  // test if we suggest navigator.serviceWorker
  await store.put('feature', Number(hasSW), 'navigator.serviceWorker')
  if(!hasSW) return
  const sw = await navigator.serviceWorker.register('/auto/global-sw.js')
  console.log('Registered!', sw)
  await store.put('feature', 1, 'Registered')
  await sw.unregister()
  console.log('Unregistered')
  await store.put('feature', 1, 'Unregistered')
}
