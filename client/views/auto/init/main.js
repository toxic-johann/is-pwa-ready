import store from 'store'
export default async function () {
  await store.clear('feature')
  await store.clear('info')
  await store.put('info', 0, 'schedule')
  const hasSW = !!navigator.serviceWorker
  if(!hasSW) return
  const reg = await navigator.serviceWorker.getRegistration()
  if(reg) {
    await reg.unregitster && reg.unregitster()
  }
}
