import UAParser from 'ua-parser-js'
const parser = new UAParser()
const {browser, os, device} = parser.getResult()
document.querySelector('.browser span').innerHTML = browser.name + ' ' + browser.version
document.querySelector('.os span').innerHTML = os.name + ' ' + os.version
document.querySelector('.device span').innerHTML = device.type + ' ' + device.model + ' ' + device.vendor
