import UAParser from 'ua-parser-js'
import store from 'store'
const parser = new UAParser()
const {browser, os, device} = parser.getResult()
document.querySelector('.browser span').innerHTML = browser.name + ' ' + browser.version
document.querySelector('.os span').innerHTML = os.name + ' ' + os.version
document.querySelector('.device span').innerHTML = device.type + ' ' + device.model + ' ' + device.vendor
export default async function () {
  await store.put('info', JSON.stringify(browser), 'browser')
  await store.put('info', JSON.stringify(os), 'os')
  await store.put('info', JSON.stringify(device), 'device')
}
