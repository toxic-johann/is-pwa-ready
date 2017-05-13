import globalTest from './global/main'
import empty from './empty/main'
import postmessageTest from './postmessage/main'
import lifecycleTest from './lifecycle/main'
import syncTest from './sync/main'
import result from './result/main'
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
      await globalTest()
      await empty()
      return
    case '1':
      await lifecycleTest()
      await postmessageTest()
      await syncTest()
      await result()
      break
  }
})()
