import store from 'store'
const list = [
  'Request',
  'Response',
  'fetch',
  'Cache',
  'caches',
  'Promise',
  'Notification',
  'indexedDB',
  'getAll'
]
export default async function (context = window, base) {
  const result = list.reduce(async (result, feature) => {
    if(feature !== 'getAll') {
      result[feature] = Number(!!context[feature])
    } else {
      try {
        const allTest = await store.getAll('feature')
        result['getAll'] = Number(!!allTest)
      } catch (err) {
        console.error(err)
        result['getAll'] = 0
      }
    }
    const data = await store.get('feature', feature)
    base = Number.isInteger(base) ? base : (parseFloat(data) || 0)
    await store.put('feature', result[feature] / 2 + base, feature)
    return result
  }, {})
  return result
}
