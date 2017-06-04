/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ({

/***/ 84:
/***/ (function(module, exports) {

var cacheKey = 'v1';
self.addEventListener('install', function (event) {
  event.waitUntil(fetch('/').then(function (response) {
    caches.open(cacheKey).then(function (cache) {
      cache.put('/', response);
      self.skipWaiting();
    });
  }));
});

self.addEventListener('active', function (event) {
  return self.clients.claim();
});

function remote(request) {
  var noCors = !request.url.match(location.origin);
  return (noCors ? fetch(request.url, { 'no-cors': true }) : fetch(request)).then(function (response) {
    var copy = response.clone();
    if (response.ok) {
      caches.open(cacheKey).then(function (cache) {
        return cache.put(request, response);
      });
    }
    return copy;
  }).catch(function (err) {
    throw err;
  });
}

function local(request) {
  return caches.match(request);
}

// 监听fetch
self.addEventListener('fetch', function (event) {
  var request = event.request;
  var method = request.method,
      url = request.url,
      headers = request.headers;

  if (method === 'GET') {
    if (headers.get('Accept').indexOf('text/html') !== -1 || url.match(/(css|js)$/)) {
      var remoteAsk = remote(request);
      event.respondWith(local(request).then(function (cacheResponse) {
        return cacheResponse || remoteAsk;
      }));
    } else if (url.match(/(png|jpg|jpeg)$/)) {
      event.respondWith(local(request).then(function (cacheResponse) {
        return cacheResponse || remote(request);
      }));
    }
  }
});

/***/ })

/******/ });