import {featureKeys, infoKeys, copyTips} from '../helper'
import {isNumeric, uuid} from 'utils'
import store from 'store'
import Clipboard from 'clipboard'
import sweetAlert from 'sweetalert'
import 'sweetalert/dist/sweetalert.css'
import Raven from 'raven'
export default async function () {
  const summary = {
    info: {},
    feature: {}
  }
  async function setSummary (kind, keys) {
    for(let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const score = await store.get(kind, key)
      if(isNumeric(score)) {
        summary[kind][key] = parseFloat(score)
      } else {
        try {
          summary[kind][key] = JSON.parse(score)
        } catch (error) {
          summary[kind][key] = score
        }
      }
    }
  }
  await setSummary('info', infoKeys)
  await setSummary('feature', featureKeys)
  const json = JSON.stringify(summary, null, 2)
  document.querySelector('.summary code').innerHTML = json
  const clipboard = new Clipboard(document.querySelector('.summary button'), {
    text () {return json}
  })
  clipboard.on('success', evt => sweetAlert({
    title: copyTips.success.title,
    type: 'success',
    showCancelButton: true,
    confirmButtonText: copyTips.success.confirmButtonText
  }, isConfirm => {
    if(isConfirm) {
      location.href = 'https://github.com/toxic-johann/is-pwa-ready/issues'
    }
  }))
  clipboard.on('error', evt => sweetAlert({
    title: copyTips.error.title,
    text: copyTips.error.text,
    type: 'error'
  }))
  document.querySelector('.summary').classList.add('show')
  Raven.setUserContext(summary)
  Raven.captureMessage('test-result-' + uuid(), {
    level: 'info'
  })
  return summary
}
