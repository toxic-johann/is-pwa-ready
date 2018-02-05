self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(() => {
    // Feature-detect
    if (self.registration.navigationPreload) {
      // Enable navigation preloads!
      return self.registration.navigationPreload.enable();
    }
    return self.clients.claim();
  });
});

self.addEventListener('fetch', function(event) {
  if (/\.jpg$/.test(event.request.url)) {
    console.log(event.preloadResponse);
    event.respondWith(Promise.resolve(event.preloadResponse)
      .then(response => response || fetch('http://cdn.toxicjohann.com/1.jpg', {
        mode: 'no-cors',
      }))
    );
  }
});
