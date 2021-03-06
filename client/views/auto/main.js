import VConsole from 'vconsole';
new VConsole();
import '../common/index';
import globalTest from './global/main';
import empty from './empty/main';
import postmessageTest from './postmessage/main';
import lifecycleTest from './lifecycle/main';
import syncTest from './sync/main';
import result from './result/main';
import init from './init/main';
import env from './env/main';
import summary from './summary/main';
import cache from './cache/main';
import push from './push/main';
import storage from './storage/main';
import manifest from './manifest/main';
import credentials from './credentials/main';
import { search2obj } from 'utils';
import './main.css';
import { info } from './helper';
import 'views/common/raven';
window.addEventListener('unhandledrejection', function(event) {
  console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason);
});
info.totalSchedule = 11;
const { step = '0' } = search2obj();
(async function main() {
  // await push()
  switch (step) {
    case '0':
      await init();
      await env();
      await result();
      await globalTest();
      await result();
      await storage();
      await result();
      await credentials();
      await result();
      await empty();
      return;
    case '1':
      await result();
      await lifecycleTest();
      await result();
      await postmessageTest();
      await result();
      await syncTest();
      await result();
      await cache();
      await result();
      await manifest();
      await result();
      await push();
      await result();
      await summary();
      break;
    default:
      break;
  }
})();
