import store from 'store';
self.addEventListener('push', function(event) {
  event.waitUntil((async function() {
    await store.put('feature', 1, 'pushEvent');
    if (navigator.budget) {
      await store.put('feature', 1, 'navigator.budget');
      // https://wicg.github.io/budget-api/#enumdef-operationtype
      const reserved = await navigator.budget.reserve('silent-push');
      await store.put('feature', 1, 'navigator.budget.reserve');
      if (reserved) return;
    }
    self.registration.showNotification('Hmmm, how lucky you are', {
      body: 'Yay it works.',
      icon: 'https://p5.ssl.qhimg.com/t01245986c32f09718d.png',
    });
  })());
});
self.addEventListener('notificationclick', function(event) {

  event.notification.close();

  event.waitUntil(
    self.clients.openWindow('https://ispwaready.toxicjohann.com')
  );
});

self.oninstall = function() {
  self.skipWaiting();
};

self.onactivate = function() {
  if (self.clients && self.clients.claim) {
    self.clients.claim();
  }
};
