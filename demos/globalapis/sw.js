this.onmessage = function(event) {
  function log () {
    var msg = Array.prototype.slice.call(arguments).join();
    if (event && event.source) {
      console.log("event.source present");
      event.source.postMessage(msg);
    }
    else if (self.clients) {
      console.log("Attempting postMessage via clients API");
      clients.matchAll().then(function(clients) {
        for (var client of clients) {
          client.postMessage(msg);
        }
      });
    }
    else if (event &&event.data.port) {
      event.data.port.postMessage(msg);
    }
    else {
      console.log('No useful return channel', msg);
    }
  }
    

  log("SW startup");
  log("Request", this.Request);
  log("Response", this.Response);
  log("fetch", this.fetch);
  log("Cache", this.Cache);
  log("caches", this.caches);
  log("getAll", this.getAll);
  log('promise', Promise);
}
  