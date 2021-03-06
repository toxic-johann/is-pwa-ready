import store from 'store';
import { sleep, promisifyOneTimeEventListener } from 'utils';
import Raven from 'raven-js';
export default async function() {
  const hasSW = !!navigator.serviceWorker;
  if (!hasSW) return;
  store.put('feature', 0, 'syncEvent');
  let reg;
  try {
    const activatedWaiter = Promise.race([
      promisifyOneTimeEventListener(() => console.log('controllerchange'), navigator.serviceWorker, 'controllerchange'),
      sleep(3000),
    ]);
    reg = await navigator.serviceWorker.register('/auto/sync-sw.js', { scope: '/auto/' });
    await activatedWaiter;
  } catch (error) {
    Raven.captureException(error);
  }
  try {
    const tags = await reg.sync.getTags();
    if (tags.includes('syncTest')) console.log("There's already a background sync pending");
  } catch (error) {
    console.error('It broke (probably sync not supported or flag not enabled)');
    console.error(error.message);
    return;
  }
  try {
    reg.sync.register('syncTest');
    console.log('Sync registered');
  } catch (error) {
    console.error('It broke');
    console.error(error.message);
  }
  await sleep(1000);
  await reg.unregister();
}
