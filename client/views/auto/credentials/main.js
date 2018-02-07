import store from 'store';
export default async function() {
  if (!navigator.credentials) return;
  store.put('feature', 1, 'navigator.credentials');
  store.put('feature', Number('create' in navigator.credentials), 'navigator.credentials.create');
  store.put('feature', Number('store' in navigator.credentials), 'navigator.credentials.store');
  store.put('feature', Number('get' in navigator.credentials), 'navigator.credentials.get');
  store.put('feature', Number('preventSilentAccess' in navigator.credentials), 'navigator.credentials.preventSilentAccess');
}
