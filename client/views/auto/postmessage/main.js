import store from 'store'
import {promisifyOneTimeEventListener, sleep} from 'utils'
let messageChannel
function genWaiter () {
  const tasks = []
  if (window.MessageChannel) {
    messageChannel = new MessageChannel()
    console.log(messageChannel.port1.addEventListener)
    // tasks.push(promisifyOneTimeEventListener(async event => {
    //   console.log('Got reply from serviceWorker via channel', event.data)
    //   await store.put('feature', 0.8, 'main-msg-got')
    //   await store.put('feature', 'messageChannel.port1', 'main-msg-got-by')
    // }, messageChannel.port1, 'message'))
    // it's better to use onmessage as some version may be addEventListener bug
    messageChannel.port1.onmessage = async event => {
      console.log('Got reply from serviceWorker via channel', event.data)
      await store.put('feature', 0.8, 'main-msg-got')
      await store.put('feature', 'messageChannel.port1', 'main-msg-got-by')
    }
    // messageChannel.port1.addEventListener('message', async event => {
    //   console.log('Got reply from serviceWorker via channel', event.data)
    //   await store.put('feature', 0.8, 'main-msg-got')
    //   await store.put('feature', 'messageChannel.port1', 'main-msg-got-by')
    // })
  }
  return Promise.race(tasks.concat([
    promisifyOneTimeEventListener(async error => {
      console.error(error)
      await store.put('feature', 0, 'main-msg-got')
    }, window, 'error'),
    promisifyOneTimeEventListener(async event => {
      console.warn('Got reply from serviceWorker via window', event.data)
      await store.put('feature', 0.5, 'main-msg-got')
      await store.put('feature', 'window', 'main-msg-got-by')
    }, window, 'message'),
    promisifyOneTimeEventListener(async event => {
      console.log('Got reply from serviceWorker via navigator.serviceWorker', event.data)
      await store.put('feature', 1, 'main-msg-got')
      await store.put('feature', 'navigator.serviceWorker', 'main-msg-got-by')
    }, navigator.serviceWorker, 'message')
  ]))
}
export default async function () {
  const hasSW = !!navigator.serviceWorker
  if(!hasSW) return
  const messageWaiter = genWaiter()
  console.log(navigator.serviceWorker)
  const activatedWaiter = Promise.race([
    promisifyOneTimeEventListener(evt => console.log('controllerchange'), navigator.serviceWorker, 'controllerchange'),
    sleep(3000)
  ])
  const reg = await navigator.serviceWorker.register('/auto/postmessage-sw.js', {scope: '/auto/'})
  console.log('Registered!', reg)
  await activatedWaiter
  try {
    console.log(reg.active.postMessage, 'ready')
    reg.active.postMessage({
      text: 'Hi!',
      port: messageChannel && messageChannel.port2
    }, [messageChannel && messageChannel.port2])
    await store.put('feature', 1, 'main-msg-send')
  } catch (err) {
    console.error(err)
    // getting a cloning error in Firefox
    reg.active.postMessage({
      text: 'Hi!'
    })
    await store.put('feature', 0.5, 'main-msg-send')
  }
  await Promise.race([
    messageWaiter,
    sleep(3000)
  ])
  const list = [
    'sw-msg-send',
    'sw-msg-got',
    'main-msg-send',
    'main-msg-got',
  ]
  let point = 0
  for(let i = list.length - 1; i > -1; i--) {
    const bias = await store.get('feature', list[i])
    point += parseFloat(bias)
  }
  await store.put('feature', point / list.length, 'postMessage')
  await reg.unregister()
  console.log('Unregistered')
}
