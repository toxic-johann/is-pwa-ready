import 'core-js/fn/object/values'
import 'core-js/fn/object/entries'
import 'core-js/fn/object/assign'
import assert from 'assert'
import {isString, isObject, isPromise} from 'utils'
const methods = {
  close () {
    this.db.close()
  }
}
function behaveAll (fn) {
  return function (objectStore, datas) {
    datas = Array.isArray(datas) ? datas : [datas]
    datas.forEach(data => {
      data = Array.isArray(data) ? data : [data]
      fn(objectStore, ...data)
    })
  }
}
const behaviors = ['add', 'put', 'get', 'getAll', 'getAllKeys', 'clear'].reduce((behaviors, key) => {
  behaviors[key] = function (objectStore, ...args) {
    const request = objectStore[key](...args)
    if(isPromise(request)) {
      return request
    } else {
      return new Promise((resolve, reject) => {
        request.onsuccess = event => resolve(event.target.result)
        request.onerror = err => reject(err)
      })
    }
  }
  return behaviors
}, {})
Object.assign(behaviors, ['add', 'put'].forEach(([key, fn]) => {
  behaviors[key + 'all'] = behaveAll(fn)
}))

class Store {
  constructor ({
    name = 'test',
    objectStores = [],
    version = 1
  } = {}) {
    assert(isString(name), 'name must to be String')
    assert(Array.isArray(objectStores), 'objectStores must to be Array')
    this.isReady = false
    this.init()
    this._ready = new Promise((resolve, reject) => {
      const request = indexedDB.open(name, parseInt(version) || 1)
      request.onerror = err => {
        console.error(err)
        reject(err)
      }
      request.onsuccess = event => {
        this.db = event.target.result
        this.isReady = true
        resolve()
      }
      request.onupgradeneeded = event => {
        const db = event.target.result
        this.db = db
        Object.values(objectStores).forEach(setting => {
          assert(isString(setting) || isObject(setting), 'value in objectStores Array must be String or Object')
          const {name, indexs = [], option} = isString(setting) ? {name: setting} : setting
          assert(Array.isArray(indexs), 'indexs attr of objectStores can only be Array')
          const objectStore = db.createObjectStore(name, option)
          indexs.forEach(({name, key, option} = {}) => {
            objectStore.createIndex(name, key, option)
          })
        })
      }
      this.request = request
    })
  }
  init () {
    Object.entries(behaviors).forEach(([key, fn]) => {
      methods[key] = this.bindTransaction(fn, this)
    })
    Object.entries(methods).forEach(([key, fn]) => {
      Object.defineProperty(this.__proto__, key, {
        value: this.bindReady(fn, this)
      })
    })
  }
  bindReady (fn, context = this) {
    return (...args) => this.ready().then(() => fn.call(context, ...args))
  }
  bindTransaction (fn, context = this) {
    return (name, ...args) => {
      const trans = this.db.transaction(name, 'readwrite')
      const objectStore = trans.objectStore(name)
      return fn.call(this, objectStore, ...args)
    }
  }
  ready () {
    return this.isReady ? Promise.resolve() : this._ready
  }
}
export default Store
