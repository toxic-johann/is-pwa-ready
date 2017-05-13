import store from 'store'
export default async function () {
  await store.clear('feature')
  await store.clear('info')
  await store.put('info', 0, 'schedule')
}
