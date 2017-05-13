import globalTest from './global/main'
import empty from './empty/main'
import postmessageTest from './postmessage/main'
import lifecycleTest from './lifecycle/main'
import syncTest from './sync/main'
import result from './result/main'
import './env/main'
import {search2obj} from 'utils'
import './main.css'
import 'vconsole'
window.addEventListener('unhandledrejection', function (event) {
  console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason)
})
const {step = '0'} = search2obj();
(async function main () {
  switch (step) {
    case '0':
      await result()
      await globalTest()
      await result()
      await empty()
      await result()
      return
    case '1':
      await result()
      await lifecycleTest()
      await result()
      await postmessageTest()
      await result()
      await syncTest()
      await result()
      break
  }
})()
