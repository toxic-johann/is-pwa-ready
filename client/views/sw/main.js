const cacheKey = 'v1'
self.addEventListener('install', event => {
  event.waitUntil(
    fetch('/')
    .then(response => {
      caches.open(cacheKey)
      .then(cache => {
        cache.put('/', response)
        self.skipWaiting()
      })
    })
  )
})

self.addEventListener('active', event => self.clients.claim())

function remote (request) {
  const noCors = !request.url.match(location.origin)
  return (noCors
    ? fetch(request.url, {'no-cors': true})
    : fetch(request)
  ).then(response => {
    const copy = response.clone()
    if(response.ok) {
      caches.open(cacheKey).then(cache => cache.put(request, response))
    }
    return copy
  }).catch(err => {
    throw err
  })
}

function local (request) {
  return caches.match(request)
}

// 监听fetch
self.addEventListener('fetch', event => {
  const request = event.request
  const {method, url, headers} = request
  if(method === 'GET') {
    if(headers.get('Accept').indexOf('text/html') !== -1 || url.match(/(css|js)$/)) {
      const remoteAsk = remote(request)
      event.respondWith(local(request).then(cacheResponse => cacheResponse || remoteAsk))
    } else if (url.match(/(png|jpg|jpeg)$/)) {
      event.respondWith(local(request).then(cacheResponse => cacheResponse || remote(request)))
    }
  }
})
