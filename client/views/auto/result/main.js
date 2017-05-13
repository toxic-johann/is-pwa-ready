import store from 'store'
import {isNumeric} from 'utils'
function genRGB (score) {
  return [
    141 - 141 * score,
    49 + 101 * score,
    24
  ]
}
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
  let fullScore = 0
  let totalScore = 0
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const scoreStr = await store.get('feature', key)
    const isNote = scoreStr && !isNumeric(scoreStr)
    const score = isNote ? scoreStr : parseFloat(scoreStr || 0)
    const rgb = isNote
      ? [0, 0, 0]
      : genRGB(score)
    fullScore = isNote ? fullScore : fullScore + 1
    totalScore = isNote ? totalScore : totalScore + score
    const li = `
    <tr style="color: rgb(${rgb.toString()})">
      <td class="key">${key}</td>
      <td class="${isNote ? 'note' : 'score'}">${isNote ? score : score * 100}</td>
    </tr>
    `
    resultHTML += li
  }
  document.querySelector('tbody').innerHTML = resultHTML
  const rank = totalScore / fullScore
  const rgb = genRGB(rank)
  document.querySelector('.result').style.backgroundColor = `rgb(${rgb.toString()})`
  document.querySelector('.total-score').innerHTML = ~~(rank * 100)
}
