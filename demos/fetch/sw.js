console.log("fetch", this.fetch);

if (this.fetch) {
  console.log("Attempting fetch");
  fetch('./').then(function(res) {
    console.log("Response", res);
    return res.text();
  }).then(function(text) {
    console.log("body", text);
  }).catch(function(err) {
    console.error(err);
  }).then(function() {
    console.log("Attempting JSON fetch");
    return fetch('./json.json');
  }).then(function(res) {
    console.log("Response", res);
    return res.json();
  }).then(function(data) {
    console.log("body", data);
  }).catch(function(err) {
    console.error(err);
  }).then(function() {
    console.log("Attempting fetch outside of scope");
    return fetch('/');
  }).then(function(res) {
    console.log("Response", res);
    return res.text();
  }).then(function(text) {
    console.log("body", text);
  }).catch(function(err) {
    console.error(err);
  });
}

this.onmessage = function(event) {
  function log () {
    console.log.apply(console, arguments);
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
    

  log("fetch", this.fetch);

  if (this.fetch) {
    log("Attempting fetch");
    fetch('./').then(function(res) {
      log("./ => Response", res);
      return res.text();
    }).then(function(text) {
      log("./ => body", JSON.stringify(text));
    }).catch(function(err) {
      console.error(err);
    }).then(function() {
      log("Attempting JSON fetch");
      return fetch('./json.json');
    }).then(function(res) {
      log("./json.json => Response", res);
      return res.json();
    }).then(function(data) {
      log("./json.json => body", JSON.stringify(data));
    }).catch(function(err) {
      console.error(err);
    }).then(function() {
      log("Attempting fetch outside of scope");
      return fetch('/');
    }).then(function(res) {
      log("/ => Response", res);
      return res.text();
    }).then(function(text) {
      log("/ => body", text);
    }).catch(function(err) {
      console.error(err);
    });
  }
}

