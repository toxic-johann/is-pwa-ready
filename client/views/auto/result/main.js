import store from 'store'
import {isNumeric} from 'utils'
export default async function () {
  document.querySelector('tbody').innerHTML = ''
  const keys = [
    'Cache',
    'Notification',
    'Promise',
    'Registered',
    'Request',
    'Response',
    'Unregistered',
    'active.waitUntil',
    'activeEvent',
    'caches',
    'clients.claim',
    'fetch',
    'fetchEvent',
    'fetchEvent.request',
    'fetchEvent.respondWith',
    'getAll',
    'indexedDB',
    'install.waitUntil',
    'installEvent',
    'main-msg-got',
    'main-msg-got-by',
    'main-msg-send',
    'navigator.serviceWorker',
    'oncontrollerchange',
    'postMessage',
    'self.skipWaiting',
    'sw-msg-got',
    'sw-msg-send',
    'sw-msg-send-by',
    'syncEvent'
  ]
  let resultHTML = ''
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const scoreStr = await store.get('feature', key)
    const isNote = scoreStr && !isNumeric(scoreStr)
    const score = isNote ? scoreStr : parseFloat(scoreStr || 0)
    const rgb = isNote
      ? [0, 0, 0]
      : [
        255 - 255 * score,
        150 * score,
        0
      ]
    const li = `
    <tr style="color: rgb(${rgb.toString()})">
      <td class="key">${key}</td>
      <td class="${isNote ? 'note' : 'score'}">${score}</td>
    </tr>
    `
    resultHTML += li
  }
  document.querySelector('tbody').innerHTML = resultHTML
}
