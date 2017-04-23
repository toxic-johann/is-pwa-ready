self.oninstall = function () {
  self.skipWaiting();
};

self.onactivate = function() {
  clients.claim();
};

self.onmessage = function(event) {
  if (event.data == 'claim') {
    clients.claim();
  }
};


self.onfetch = function(event) {
  var url = new URL(event.request.url);
  if (url.pathname.endsWith('/404.json')) {
    event.respondWith(
      new Response('{"This came from": "The ServiceWorker 2"}', {
        headers: {
          "Content-Type": "application/json"
        }
      })
    );
  }
};
