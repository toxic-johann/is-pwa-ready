import Store from './indexeddb.js'
export default new Store({
  name: 'test',
  version: 1,
  objectStores: ['feature', 'info']
})
