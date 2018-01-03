import store from 'store';

export default async function() {
  // add to home screen
  await store.put('feature', Number('BeforeInstallPromptEvent' in window), 'BeforeInstallPromptEvent');
  const hasSW = !!navigator.serviceWorker;
  if (!hasSW) return;
  const registration = await navigator.serviceWorker.register('/auto/empty-sw.js', { scope: '/auto/' });
  await store.put('feature', Number('navigationPreload' in registration), 'navigationPreload');
}
