var messages = [];
function log () {
  console.log.apply(console, arguments);
  var args = Array.prototype.slice.call(arguments);
  messages.push(args.join());
}
log("SW startup");

this.oninstall = function(event) {
  log("Install event", event);
  log(".replace", event.replace);
  log("self.skipWaiting", self.skipWaiting);

  if (event.waitUntil) {
    log("Testing waitUntil:");
    event.waitUntil(new Promise(function(resolve) {
      setTimeout(function() {
        log("This should appear before activate");
        resolve();
      }, 1000);
    }));
  }
};

this.onactivate = function(event) {
  log("Activate event", event);
  log(".waitUntil", event.waitUntil);
  event.waitUntil(new Promise(function(resolve) {
    setTimeout(function() {
      log("This should appear before activated");
      resolve();
    }, 1000);
  }));
};

this.onmessage = function(event) {
  function windowlog (msg) {
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
  event.waitUntil(new Promise(function(resolve) {
    setTimeout(function() {
      for(var i = 0; i < messages.length; i++) {
        windowlog(messages[i])
      }
    }, 3000);
  }));
      
}
  

