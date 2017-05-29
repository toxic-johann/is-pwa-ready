import store from 'store'
import {isNumeric, uuid} from 'utils'
import {featureKeys} from '../helper'
import {info, testTips} from '../helper'
function genRGB (score) {
  score = isNumeric(score) ? score : 0
  return [
    ~~(141 - 141 * score),
    ~~(49 + 101 * score),
    24
  ]
}
import Raven from 'raven'
export default async function () {
  info.timeoutTimer && clearTimeout(info.timeoutTimer)
  document.querySelector('tbody').innerHTML = ''
  let resultHTML = ''
  let fullScore = 0
  let totalScore = 0
  const result = {}
  for(let i = 0; i < featureKeys.length; i++) {
    const key = featureKeys[i]
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
    result[key] = score
    resultHTML += li
  }
  document.querySelector('.features tbody').innerHTML = resultHTML
  const rank = totalScore / fullScore
  const rgb = genRGB(rank)
  document.querySelector('.result').style.backgroundColor = `rgb(${rgb.toString()})`
  document.querySelector('.total-score').innerHTML = ~~(rank * 100)
  let schedule = await store.get('info', 'schedule')
  schedule = parseFloat(schedule || 0)
  schedule = ++schedule
  document.querySelector('.schedule span').innerHTML = ~~(schedule / info.totalSchedule * 100) + '%'
  await store.put('info', schedule, 'schedule')
  if(schedule !== info.totalSchedule) {
    info.timeoutTimer = setTimeout(async () => {
      Raven.setUserContext({result})
      Raven.captureMessage('test-failed-' + uuid(), {
        level: 'warning'
      })
      document.querySelector('.schedule').innerHTML = testTips.fail
    }, 15000)
  }
}
