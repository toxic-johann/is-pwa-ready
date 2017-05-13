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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export inWindowScope */
/* harmony export (immutable) */ __webpack_exports__["c"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["f"] = isNumeric;
/* unused harmony export isEmpty */
/* unused harmony export isEvent */
/* unused harmony export isBlob */
/* unused harmony export isFile */
/* unused harmony export isDate */
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["a"] = isPromise;
/* harmony export (immutable) */ __webpack_exports__["d"] = sleep;
/* harmony export (immutable) */ __webpack_exports__["e"] = search2obj;
/* harmony export (immutable) */ __webpack_exports__["h"] = obj2search;
/* harmony export (immutable) */ __webpack_exports__["g"] = promisifyOneTimeEventListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assert__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };


// **********************  判断   ************************
// 用于一些关键判断
// ********************************************************
// **********************  环境判断   ************************
/**
 * @module uitls
 * @description 工具集
 */
/**
 * [inWindowScope 判断是否在window域内]
 * @returns {Boolean}
 */
var inWindowScope = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
// **********************  类型判断   ************************
/**
 * 判断是否是对象
 * @param  {anything}  obj 传入对象
 * @return {Boolean}     [description]
 */
function isObject(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && typeof obj !== 'function' && !Array.isArray(obj);
}
/**
 * 判断是否为数字
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isNumeric(obj) {
  return !Array.isArray(obj) && obj - Number.parseFloat(obj) + 1 >= 0;
}

/**
 * 判断是否为空
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 * @example
 * "", {}, [], 0, null, undefined, false 为空
 */
function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (isObject(obj)) {
    return Object.keys(obj).length === 0;
  } else {
    return !obj;
  }
}
/**
 * 判断是否为事件
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isEvent(obj) {
  return obj instanceof Event || obj.originalEvent instanceof Event;
}
/**
 * 判断是否为blob
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isBlob(obj) {
  return obj instanceof Blob;
}
/**
 * 判断是否为file上传的文件
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isFile(obj) {
  return isBlob(obj) && isString(obj.name);
}
/**
 * 判断是否为日期对象
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isDate(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}
/**
 * 判断是否是string
 * @param  {anything}  str [description]
 * @return {Boolean}     [description]
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * 判断是否是promise
 * @param  {anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * 配合async/await使用，延迟一段时间
 * @param  {Number} duration 休眠时长
 * @return {Promise}         用于异步操作
 */
function sleep(duration) {
  __WEBPACK_IMPORTED_MODULE_0_assert___default()(Number.isInteger(duration), 'onlym accept interger');
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}
// *************************query与对象转换*******************************
// 将search字符串解析为json对象
// 只是简易写法，如果需求比较多，请引入qs
// npm install qs --save
// 并使用之
function search2obj() {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.search;

  var ret = {};
  if (!search || search.length < 2) {
    return ret;
  }
  search = search.slice(1);
  search = search.split('&');
  search.map(function (each) {
    each = each.split('=');
    ret[each[0]] = each[1];
  });
  return ret;
}
// 将json对象拼接为search字符串
// 只是简易写法，如果需求比较多，请引入qs
// npm install qs --save
// 并使用之
function obj2search(obj) {
  var ret = [];
  for (var each in obj) {
    ret.push(each + '=' + obj[each]);
  }
  return '?' + ret.join('&');
}
/**
 * generate one-time event listener and wrap in promise
 * @param  {Function} fn the handler of event
 * @param  {Object}   target Object to listen on
 * @param  {String}   event  event type
 * @return {Promise}     so that we can use promise
 */
function promisifyOneTimeEventListener(fn, target, event) {
  return new Promise(function (resolve, reject) {
    function handler(evt) {
      Promise.resolve(fn(evt)).then(function () {
        target.removeEventListener(event, handler);
        resolve();
      }).catch(reject);
    }
    target.addEventListener(event, handler);
  });
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexeddb_js__ = __webpack_require__(4);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__indexeddb_js__["a" /* default */]({
  name: 'test',
  version: 1,
  objectStores: ['feature', 'info']
}));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(8);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = function foo() {}.name === 'foo';
function pToString(obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' + name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

    // 7.2. If the expected value is a Date object, the actual value is
    // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

    // 7.3 If the expected value is a RegExp object, the actual value is
    // equivalent if it is also a RegExp object with the same source and
    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;

    // 7.4. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
  } else if ((actual === null || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) !== 'object') && (expected === null || (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) !== 'object')) {
    return strict ? actual === expected : actual == expected;

    // If both values are instances of typed arrays, wrap their underlying
    // ArrayBuffers in a Buffer each to increase performance
    // This optimization requires the arrays to have the same type as checked by
    // Object.prototype.toString (aka pToString). Never perform binary
    // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
    // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;

    // 7.5 For all other Object pairs, including Array objects, equivalence is
    // determined by having the same number of owned properties (as verified
    // with Object.prototype.hasOwnProperty.call), the same set of keys
    // (although not necessarily the same order), equivalent values for every
    // corresponding key, and an identical 'prototype' property. Note: this
    // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || { actual: [], expected: [] };

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined) return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length) return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i]) return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}

// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function (block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function (block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function (err) {
  if (err) throw err;
};

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = this;

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(0);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var methods = {
  close: function close() {
    this.db.close();
  }
};
function behaveAll(fn) {
  return function (objectStore, datas) {
    datas = Array.isArray(datas) ? datas : [datas];
    datas.forEach(function (data) {
      data = Array.isArray(data) ? data : [data];
      fn.apply(undefined, [objectStore].concat(data));
    });
  };
}
var behaviors = ['add', 'put', 'get', 'getAll', 'getAllKeys'].reduce(function (behaviors, key) {
  behaviors[key] = function (objectStore) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var request = objectStore[key].apply(objectStore, args);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["a" /* isPromise */])(request)) {
      return request;
    } else {
      return new Promise(function (resolve, reject) {
        request.onsuccess = function (event) {
          return resolve(event.target.result);
        };
        request.onerror = function (err) {
          return reject(err);
        };
      });
    }
  };
  return behaviors;
}, {});
Object.assign(behaviors, ['add', 'put'].forEach(function (_ref) {
  var key = _ref[0],
      fn = _ref[1];

  behaviors[key + 'all'] = behaveAll(fn);
}));

var Store = function () {
  function Store() {
    var _this = this;

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$name = _ref2.name,
        name = _ref2$name === undefined ? 'test' : _ref2$name,
        _ref2$objectStores = _ref2.objectStores,
        objectStores = _ref2$objectStores === undefined ? [] : _ref2$objectStores,
        _ref2$version = _ref2.version,
        version = _ref2$version === undefined ? 1 : _ref2$version;

    _classCallCheck(this, Store);

    __WEBPACK_IMPORTED_MODULE_0_assert___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["b" /* isString */])(name), 'name must to be String');
    __WEBPACK_IMPORTED_MODULE_0_assert___default()(Array.isArray(objectStores), 'objectStores must to be Array');
    this.isReady = false;
    this.init();
    this._ready = new Promise(function (resolve, reject) {
      var request = indexedDB.open(name, parseInt(version) || 1);
      request.onerror = function (err) {
        console.error(err);
        reject(err);
      };
      request.onsuccess = function (event) {
        _this.db = event.target.result;
        _this.isReady = true;
        resolve();
      };
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        _this.db = db;
        Object.values(objectStores).forEach(function (setting) {
          __WEBPACK_IMPORTED_MODULE_0_assert___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["b" /* isString */])(setting) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["c" /* isObject */])(setting), 'value in objectStores Array must be String or Object');

          var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["b" /* isString */])(setting) ? { name: setting } : setting,
              name = _ref3.name,
              _ref3$indexs = _ref3.indexs,
              indexs = _ref3$indexs === undefined ? [] : _ref3$indexs,
              option = _ref3.option;

          __WEBPACK_IMPORTED_MODULE_0_assert___default()(Array.isArray(indexs), 'indexs attr of objectStores can only be Array');
          var objectStore = db.createObjectStore(name, option);
          indexs.forEach(function () {
            var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                name = _ref4.name,
                key = _ref4.key,
                option = _ref4.option;

            objectStore.createIndex(name, key, option);
          });
        });
      };
      _this.request = request;
    });
  }

  Store.prototype.init = function init() {
    var _this2 = this;

    Object.entries(behaviors).forEach(function (_ref5) {
      var key = _ref5[0],
          fn = _ref5[1];

      methods[key] = _this2.bindTransaction(fn, _this2);
    });
    Object.entries(methods).forEach(function (_ref6) {
      var key = _ref6[0],
          fn = _ref6[1];

      Object.defineProperty(_this2.__proto__, key, {
        value: _this2.bindReady(fn, _this2)
      });
    });
  };

  Store.prototype.bindReady = function bindReady(fn) {
    var _this3 = this;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this3.ready().then(function () {
        return fn.call.apply(fn, [context].concat(args));
      });
    };
  };

  Store.prototype.bindTransaction = function bindTransaction(fn) {
    var _this4 = this;

    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

    return function (name) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var trans = _this4.db.transaction(name, 'readwrite');
      var objectStore = trans.objectStore(name);
      return fn.call.apply(fn, [_this4, objectStore].concat(args));
    };
  };

  Store.prototype.ready = function ready() {
    return this.isReady ? Promise.resolve() : this._ready;
  };

  return Store;
}();

/* harmony default export */ __webpack_exports__["a"] = (Store);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isBuffer(arg) {
  return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s':
        return String(args[i++]);
      case '%d':
        return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};

// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;
exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = __webpack_require__.i({"NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }
  return debugs[set];
};

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;

// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};

  array.forEach(function (val, idx) {
    hash[val] = true;
  });

  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) &&
  // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect &&
  // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(7);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}

// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};

/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(5);

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(6)))

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(1);

var list = ['Request', 'Response', 'fetch', 'Cache', 'caches', 'Promise', 'Notification', 'indexedDB', 'getAll'];
/* harmony default export */ __webpack_exports__["a"] = (function () {
  var context,
      base,
      result,
      _arguments = arguments;
  return Promise.resolve().then(function () {
    context = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : window;
    base = _arguments[1];
    result = list.reduce(function (result, feature) {
      var allTest, data;
      return Promise.resolve().then(function () {
        if (feature !== 'getAll') {
          result[feature] = Number(!!context[feature]);
        } else {
          return Promise.resolve().then(function () {
            return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].getAll('feature');
          }).then(function (_resp) {
            allTest = _resp;

            result['getAll'] = Number(!!allTest);
          }).catch(function (err) {
            console.error(err);
            result['getAll'] = 0;
          });
        }
      }).then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', feature);
      }).then(function (_resp) {
        data = _resp;

        base = Number.isInteger(base) ? base : parseFloat(data) || 0;
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', result[feature] / 2 + base, feature);
      }).then(function () {
        return result;
      });
    }, {});

    return result;
  });
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (function main() {
  var search, _search$step, step;

  return Promise.resolve().then(function () {
    search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils__["e" /* search2obj */])();
    _search$step = search.step;
    step = _search$step === undefined ? 0 : _search$step;

    step = parseInt(step);
    step++;
    return navigator.serviceWorker.register('/auto/empty-sw.js');
  }).then(function () {
    location.search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils__["h" /* obj2search */])(Object.assign(search, { step: step }));
  });
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = (function main() {
  var hasSW, sw;
  return Promise.resolve().then(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */])(window, 0);
  }).then(function () {
    hasSW = !!navigator.serviceWorker;
    // test if we suggest navigator.serviceworker

    return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('feature', Number(hasSW), 'navigator.serviceWorker');
  }).then(function () {
    if (!!hasSW) {
      return Promise.resolve().then(function () {
        return navigator.serviceWorker.register('/auto/global-sw.js');
      }).then(function (_resp) {
        sw = _resp;

        console.log('Registered!', sw);
        return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('feature', 1, 'Registered');
      }).then(function () {
        return sw.unregister();
      }).then(function () {
        console.log('Unregistered');
        return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('feature', 1, 'Unregistered');
      });
    }
  }).then(function () {});
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(0);


var list = ['activeEvent', 'active.waitUntil', 'clients.claim', 'fetchEvent', 'installEvent', 'install.waitUntil', 'navigator.serviceWorker', 'oncontrollerchange', 'self.skipWaiting'];
function controllerchangeCauseByNormalInstall(evt) {
  var activeWaitUntilScore;
  return Promise.resolve().then(function () {
    console.log('serviceWorker now has a new actived one');
    console.log('this event will trigger after install.waitUntil and before active.waitUntil');
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'oncontrollerchange');
  }).then(function () {
    console.log('if has not active controller, this should be trigger earlier that actived event');
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', 'active.waitUntil');
  }).then(function (_resp) {
    activeWaitUntilScore = _resp;

    if (activeWaitUntilScore && parseFloat(activeWaitUntilScore) > 0) {
      console.error('the active.waitUntil trigger before oncontrollerchange');
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, activeWaitUntilScore);
    }
  }).then(function () {});
}
function genWaiter(fn) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* promisifyOneTimeEventListener */])(fn, navigator.serviceWorker, 'controllerchange');
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  function _recursive() {
    if (i > -1) {
      return Promise.resolve().then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, list[i]);
      }).then(function () {
        i--;
        return _recursive();
      });
    }
  }

  var i, hasSW, waiter, reg, activeWaitUntilScore, response, clarify, clientsclaimScore;
  return Promise.resolve().then(function () {
    // init all the feature as zero
    i = list.length - 1;
    return _recursive();
  }).then(function () {
    // generate waiter for controller change
    hasSW = !!navigator.serviceWorker;

    if (!!hasSW) {
      return Promise.resolve().then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'navigator.serviceWorker');
      }).then(function () {
        waiter = genWaiter(controllerchangeCauseByNormalInstall);
        // register test, including install event, controllerchange, active event

        return navigator.serviceWorker.register('/auto/lifecycle-sw.js');
      }).then(function (_resp) {
        reg = _resp;

        console.log('Registered!', reg);
        return waiter;
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000);
      }).then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', 'active.waitUntil');
      }).then(function (_resp) {
        activeWaitUntilScore = _resp;
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', (parseFloat(activeWaitUntilScore) || 0) + 0.5, 'active.waitUntil');
      }).then(function () {
        return fetch('/whoareyou.json');
      }).then(function (_resp) {
        // use fetch event to test client.claims effect
        response = _resp;
        return response.json();
      }).then(function (_resp) {
        clarify = _resp;

        console.log('clarify who controll the page', clarify);
        // unregister test

        if (clarify['i am'] === 'lifecycle-sw') {
          return Promise.resolve().then(function () {
            return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', 'clients.claim');
          }).then(function (_resp) {
            clientsclaimScore = _resp;
            return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', (parseFloat(clientsclaimScore) || 0) + 0.5, 'clients.claim');
          });
        }
      }).then(function () {
        return reg.unregister();
      }).then(function () {
        console.log('Unregistered');
      });
    }
  }).then(function () {});
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(0);


var messageChannel = void 0;
function genWaiter() {
  var tasks = [];
  if (window.MessageChannel) {
    messageChannel = new MessageChannel();
    console.log(messageChannel.port1.addEventListener);
    tasks.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* promisifyOneTimeEventListener */])(function (event) {
      return Promise.resolve().then(function () {
        console.log('Got reply from serviceWorker via channel', event.data);
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0.8, 'main-msg-got');
      }).then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 'messageChannel.port1', 'main-msg-got-by');
      }).then(function () {});
    }, messageChannel.port1, 'message'));
  }
  return Promise.race(tasks.concat([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* promisifyOneTimeEventListener */])(function (error) {
    return Promise.resolve().then(function () {
      console.error(error);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, 'main-msg-got');
    }).then(function () {});
  }, window, 'error'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* promisifyOneTimeEventListener */])(function (event) {
    return Promise.resolve().then(function () {
      console.warn('Got reply from serviceWorker via window', event.data);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0.5, 'main-msg-got');
    }).then(function () {
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 'window', 'main-msg-got-by');
    }).then(function () {});
  }, window, 'message'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* promisifyOneTimeEventListener */])(function (event) {
    return Promise.resolve().then(function () {
      console.log('Got reply from serviceWorker via navigator.serviceWorker', event.data);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'main-msg-got');
    }).then(function () {
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 'navigator.serviceWorker', 'main-msg-got-by');
    }).then(function () {});
  }, navigator.serviceWorker, 'message')]));
}
/* harmony default export */ __webpack_exports__["a"] = (function main() {
  function _recursive() {
    if (i > -1) {
      return Promise.resolve().then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', list[i]);
      }).then(function (_resp) {
        bias = _resp;

        point += parseFloat(bias);
        i--;
        return _recursive();
      });
    }
  }

  var messageWaiter, activedWaiter, reg, list, point, i, bias;
  return Promise.resolve().then(function () {
    messageWaiter = genWaiter();

    console.log(navigator.serviceWorker);
    activedWaiter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* promisifyOneTimeEventListener */])(function (evt) {
      return console.log('controllerchange');
    }, navigator.serviceWorker, 'controllerchange');
    return navigator.serviceWorker.register('/auto/postmessage-sw.js', { scope: '/auto/' });
  }).then(function (_resp) {
    reg = _resp;

    console.log('Registered!', reg);
    return activedWaiter;
  }).then(function () {
    return Promise.resolve().then(function () {
      console.log(reg.active.postMessage, 'ready');
      reg.active.postMessage({
        text: 'Hi!',
        port: messageChannel && messageChannel.port2
      }, [messageChannel && messageChannel.port2]);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'main-msg-send');
    }).catch(function (err) {
      console.error(err);
      // getting a cloning error in Firefox
      reg.active.postMessage({
        text: 'Hi!'
      });
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0.5, 'main-msg-send');
    });
  }).then(function () {
    return messageWaiter;
  }).then(function () {
    list = ['sw-msg-send', 'sw-msg-got', 'main-msg-send', 'main-msg-got'];
    point = 0;
    i = list.length - 1;
    return _recursive();
  }).then(function () {
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', point / list.length, 'postMessage');
  }).then(function () {
    return reg.unregister();
  }).then(function () {
    console.log('Unregistered');
  });
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  function _recursive() {
    if (i < keys.length) {
      return Promise.resolve().then(function () {
        key = keys[i];
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', key);
      }).then(function (_resp) {
        scoreStr = _resp;
        isNote = scoreStr && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["f" /* isNumeric */])(scoreStr);
        score = isNote ? scoreStr : parseFloat(scoreStr || 0);
        rgb = isNote ? [0, 0, 0] : [255 - 255 * score, 150 * score, 0];
        li = '\n    <tr style="color: rgb(' + rgb.toString() + ')">\n      <td class="key">' + key + '</td>\n      <td class="' + (isNote ? 'note' : 'score') + '">' + score + '</td>\n    </tr>\n    ';

        resultHTML += li;
        i++;
        return _recursive();
      });
    }
  }

  var keys, resultHTML, i, key, scoreStr, isNote, score, rgb, li;
  return Promise.resolve().then(function () {
    document.querySelector('tbody').innerHTML = '';
    keys = ['Cache', 'Notification', 'Promise', 'Registered', 'Request', 'Response', 'Unregistered', 'active.waitUntil', 'activeEvent', 'caches', 'clients.claim', 'fetch', 'fetchEvent', 'fetchEvent.request', 'fetchEvent.respondWith', 'getAll', 'indexedDB', 'install.waitUntil', 'installEvent', 'main-msg-got', 'main-msg-got-by', 'main-msg-send', 'navigator.serviceWorker', 'oncontrollerchange', 'postMessage', 'self.skipWaiting', 'sw-msg-got', 'sw-msg-send', 'sw-msg-send-by', 'syncEvent'];
    resultHTML = '';
    i = 0;
    return _recursive();
  }).then(function () {
    document.querySelector('tbody').innerHTML = resultHTML;
  });
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var reg, tags;
  return Promise.resolve().then(function () {
    __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, 'syncEvent');
    return navigator.serviceWorker.register('/auto/sync-sw.js');
  }).then(function (_resp) {
    reg = _resp;
    return Promise.resolve().then(function () {
      return reg.sync.getTags();
    }).then(function (_resp) {
      tags = _resp;

      if (tags.includes('syncTest')) {
        console.log("There's already a background sync pending");
      }
    }).catch(function (error) {
      console.error('It broke (probably sync not supported or flag not enabled)');
      console.error(error.message);
      return;
    });
  }).then(function () {
    try {
      reg.sync.register('syncTest');
      console.log('Sync registered');
    } catch (error) {
      console.error('It broke');
      console.error(error.message);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(1000);
  }).then(function () {
    return reg.unregister();
  }).then(function () {});
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * vconsole v2.5.2 (https://github.com/WechatFE/vConsole)
 * Copyright 2016, WechatFE Team
 * MIT license
 */
!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.vConsole = t() : e.vConsole = t();
}(this, function () {
  return function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;var l = o[n] = { exports: {}, id: n, loaded: !1 };return e[n].call(l.exports, l, l.exports, t), l.loaded = !0, l.exports;
    }var o = {};return t.m = e, t.c = o, t.p = "", t(0);
  }([function (e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { "default": e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = o(1),
        i = n(l),
        r = o(15),
        a = n(r),
        c = o(16),
        s = n(c),
        d = o(23),
        u = n(d),
        v = o(25),
        f = n(v),
        p = new i["default"](),
        b = new s["default"]("default", "Log");p.addPlugin(b);var g = new u["default"]("system", "System");p.addPlugin(g);var h = new f["default"]("network", "Network");p.addPlugin(h), p.VConsolePlugin = a["default"], t["default"] = p, e.exports = t["default"];
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }return t["default"] = e, t;
    }function l(e) {
      return e && e.__esModule ? e : { "default": e };
    }function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var r = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        a = o(2),
        c = l(a),
        s = o(3),
        d = n(s),
        u = o(4),
        v = l(u);o(6);var f = o(10),
        p = l(f),
        b = o(11),
        g = l(b),
        h = o(12),
        m = l(h),
        y = o(13),
        _ = l(y),
        w = o(14),
        x = l(w),
        k = function () {
      function e() {
        i(this, e);var t = this;this.version = c["default"].version, this.html = p["default"], this.$dom = null, this.activedTab = "", this.tabList = [], this.pluginList = {}, this.isReady = !1, this.switchPos = { x: 10, y: 10, startX: 0, startY: 0, endX: 0, endY: 0 }, this.tool = d, this.$ = v["default"];var o = function o() {
          t._render(), t._mockTap(), t._bindEvent(), t._autoRun();
        };void 0 !== document ? "complete" == document.readyState ? o() : v["default"].bind(window, "load", o) : !function () {
          var e = void 0,
              t = function n() {
            document && "complete" == document.readyState ? (e && clearTimeout(e), o()) : e = setTimeout(n, 1);
          };e = setTimeout(t, 1);
        }();
      }return r(e, [{ key: "_render", value: function value() {
          var e = "#__vconsole";if (!v["default"].one(e)) {
            var t = document.createElement("div");t.innerHTML = this.html, document.documentElement.insertAdjacentElement("beforeend", t.children[0]);
          }this.$dom = v["default"].one(e);var o = v["default"].one(".vc-switch", this.$dom),
              n = 1 * d.getStorage("switch_x"),
              l = 1 * d.getStorage("switch_y");(n || l) && (n + o.offsetWidth > document.documentElement.offsetWidth && (n = document.documentElement.offsetWidth - o.offsetWidth), l + o.offsetHeight > document.documentElement.offsetHeight && (l = document.documentElement.offsetHeight - o.offsetHeight), 0 > n && (n = 0), 0 > l && (l = 0), this.switchPos.x = n, this.switchPos.y = l, v["default"].one(".vc-switch").style.right = n + "px", v["default"].one(".vc-switch").style.bottom = l + "px"), v["default"].one(".vc-mask", this.$dom).style.display = "none";
        } }, { key: "_mockTap", value: function value() {
          var e = 700,
              t = 10,
              o = void 0,
              n = void 0,
              l = void 0,
              i = !1,
              r = null;this.$dom.addEventListener("touchstart", function (e) {
            if (void 0 === o) {
              var t = e.targetTouches[0];n = t.pageX, l = t.pageY, o = e.timeStamp, r = e.target.nodeType === Node.TEXT_NODE ? e.target.parentNode : e.target;
            }
          }, !1), this.$dom.addEventListener("touchmove", function (e) {
            var o = e.changedTouches[0];(Math.abs(o.pageX - n) > t || Math.abs(o.pageY - l) > t) && (i = !0);
          }), this.$dom.addEventListener("touchend", function (t) {
            if (i === !1 && t.timeStamp - o < e && null != r) {
              var n = r.tagName.toLowerCase(),
                  l = !1;switch (n) {case "textarea":
                  l = !0;break;case "input":
                  switch (r.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
                      l = !1;break;default:
                      l = !r.disabled && !r.readOnly;}}l ? r.focus() : t.preventDefault();var a = t.changedTouches[0],
                  c = document.createEvent("MouseEvents");c.initMouseEvent("click", !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent = !0, c.initEvent("click", !0, !0), r.dispatchEvent(c);
            }o = void 0, i = !1, r = null;
          }, !1);
        } }, { key: "_bindEvent", value: function value() {
          var e = this,
              t = v["default"].one(".vc-switch", e.$dom);v["default"].bind(t, "touchstart", function (t) {
            e.switchPos.startX = t.touches[0].pageX, e.switchPos.startY = t.touches[0].pageY;
          }), v["default"].bind(t, "touchend", function (t) {
            e.switchPos.x = e.switchPos.endX, e.switchPos.y = e.switchPos.endY, e.switchPos.startX = 0, e.switchPos.startY = 0, e.switchPos.endX = 0, e.switchPos.endY = 0, d.setStorage("switch_x", e.switchPos.x), d.setStorage("switch_y", e.switchPos.y);
          }), v["default"].bind(t, "touchmove", function (o) {
            if (o.touches.length > 0) {
              var n = o.touches[0].pageX - e.switchPos.startX,
                  l = o.touches[0].pageY - e.switchPos.startY,
                  i = e.switchPos.x - n,
                  r = e.switchPos.y - l;i + t.offsetWidth > document.documentElement.offsetWidth && (i = document.documentElement.offsetWidth - t.offsetWidth), r + t.offsetHeight > document.documentElement.offsetHeight && (r = document.documentElement.offsetHeight - t.offsetHeight), 0 > i && (i = 0), 0 > r && (r = 0), t.style.right = i + "px", t.style.bottom = r + "px", e.switchPos.endX = i, e.switchPos.endY = r, o.preventDefault();
            }
          }), v["default"].bind(v["default"].one(".vc-switch", e.$dom), "click", function () {
            e.show();
          }), v["default"].bind(v["default"].one(".vc-hide", e.$dom), "click", function () {
            e.hide();
          }), v["default"].bind(v["default"].one(".vc-mask", e.$dom), "click", function (t) {
            return t.target != v["default"].one(".vc-mask") ? !1 : void e.hide();
          }), v["default"].delegate(v["default"].one(".vc-tabbar", e.$dom), "click", ".vc-tab", function (t) {
            var o = this.dataset.tab;o != e.activedTab && e.showTab(o);
          }), v["default"].bind(v["default"].one(".vc-panel", e.$dom), "transitionend webkitTransitionEnd oTransitionEnd otransitionend", function (t) {
            return t.target != v["default"].one(".vc-panel") ? !1 : void (v["default"].hasClass(e.$dom, "vc-toggle") || (t.target.style.display = "none"));
          });var o = v["default"].one(".vc-content", e.$dom),
              n = !1;v["default"].bind(o, "touchstart", function (e) {
            var t = o.scrollTop,
                l = o.scrollHeight,
                i = t + o.offsetHeight;0 === t ? (o.scrollTop = 1, 0 === o.scrollTop && (v["default"].hasClass(e.target, "vc-cmd-input") || (n = !0))) : i === l && (o.scrollTop = t - 1, o.scrollTop === t && (v["default"].hasClass(e.target, "vc-cmd-input") || (n = !0)));
          }), v["default"].bind(o, "touchmove", function (e) {
            n && e.preventDefault();
          }), v["default"].bind(o, "touchend", function (e) {
            n = !1;
          });
        } }, { key: "_autoRun", value: function value() {
          this.isReady = !0;for (var e in this.pluginList) {
            this._initPlugin(this.pluginList[e]);
          }this.tabList.length > 0 && this.showTab(this.tabList[0]);
        } }, { key: "_initPlugin", value: function value(e) {
          var t = this;e.trigger("init"), e.trigger("renderTab", function (o) {
            t.tabList.push(e.id);var n = v["default"].render(g["default"], { id: e.id, name: e.name });v["default"].one(".vc-tabbar", t.$dom).insertAdjacentElement("beforeend", n);var l = v["default"].render(m["default"], { id: e.id });o && (d.isString(o) ? l.innerHTML += o : d.isFunction(o.appendTo) ? o.appendTo(l) : d.isElement(o) && l.insertAdjacentElement("beforeend", o)), v["default"].one(".vc-content", t.$dom).insertAdjacentElement("beforeend", l);
          }), e.trigger("addTopBar", function (o) {
            if (o) for (var n = v["default"].one(".vc-topbar", t.$dom), l = function l(t) {
              var l = o[t],
                  i = v["default"].render(_["default"], { name: l.name || "Undefined", className: l.className || "", pluginID: e.id });if (l.data) for (var r in l.data) {
                i.dataset[r] = l.data[r];
              }d.isFunction(l.onClick) && v["default"].bind(i, "click", function (t) {
                var o = l.onClick.call(i);o === !1 || (v["default"].removeClass(v["default"].all(".vc-topbar-" + e.id), "vc-actived"), v["default"].addClass(i, "vc-actived"));
              }), n.insertAdjacentElement("beforeend", i);
            }, i = 0; i < o.length; i++) {
              l(i);
            }
          }), e.trigger("addTool", function (t) {
            if (t) for (var o = v["default"].one(".vc-tool-last"), n = function n(_n) {
              var l = t[_n],
                  i = v["default"].render(x["default"], { name: l.name || "Undefined", pluginID: e.id });1 == l.global && v["default"].addClass(i, "vc-global-tool"), d.isFunction(l.onClick) && v["default"].bind(i, "click", function (e) {
                l.onClick.call(i);
              }), o.parentNode.insertBefore(i, o);
            }, l = 0; l < t.length; l++) {
              n(l);
            }
          }), e.trigger("ready");
        } }, { key: "_triggerPluginsEvent", value: function value(e) {
          for (var t in this.pluginList) {
            this.pluginList[t].trigger(e);
          }
        } }, { key: "_triggerPluginEvent", value: function value(e, t) {
          var o = this.pluginList[e];o && o.trigger(t);
        } }, { key: "addPlugin", value: function value(e) {
          return void 0 !== this.pluginList[e.id] ? (console.warn("Plugin " + e.id + " has already been added."), !1) : (this.pluginList[e.id] = e, this.isReady && (this._initPlugin(e), 1 == this.tabList.length && this.showTab(this.tabList[0])), !0);
        } }, { key: "removePlugin", value: function value(e) {
          e = (e + "").toLowerCase();var t = this.pluginList[e];if (void 0 === t) return console.warn("Plugin " + e + " does not exist."), !1;if (t.trigger("remove"), this.isReady) {
            var o = v["default"].one("#__vc_tab_" + e);o && o.parentNode.removeChild(o);for (var n = v["default"].all(".vc-topbar-" + e, this.$dom), l = 0; l < n.length; l++) {
              n[l].parentNode.removeChild(n[l]);
            }var i = v["default"].one("#__vc_log_" + e);i && i.parentNode.removeChild(i);for (var r = v["default"].all(".vc-tool-" + e, this.$dom), a = 0; a < r.length; a++) {
              r[a].parentNode.removeChild(r[a]);
            }
          }var c = this.tabList.indexOf(e);c > -1 && this.tabList.splice(c, 1);try {
            delete this.pluginList[e];
          } catch (s) {
            this.pluginList[e] = void 0;
          }return this.activedTab == e && this.tabList.length > 0 && this.showTab(this.tabList[0]), !0;
        } }, { key: "show", value: function value() {
          var e = this,
              t = v["default"].one(".vc-panel", this.$dom);t.style.display = "block", setTimeout(function () {
            v["default"].addClass(e.$dom, "vc-toggle"), e._triggerPluginsEvent("showConsole");var t = v["default"].one(".vc-mask", e.$dom);t.style.display = "block";
          }, 10);
        } }, { key: "hide", value: function value() {
          v["default"].removeClass(this.$dom, "vc-toggle"), this._triggerPluginsEvent("hideConsole");var e = v["default"].one(".vc-mask", this.$dom),
              t = v["default"].one(".vc-panel", this.$dom);v["default"].bind(e, "transitionend", function (o) {
            e.style.display = "none", t.style.display = "none";
          });
        } }, { key: "showTab", value: function value(e) {
          var t = v["default"].one("#__vc_log_" + e);v["default"].removeClass(v["default"].all(".vc-tab", this.$dom), "vc-actived"), v["default"].addClass(v["default"].one("#__vc_tab_" + e), "vc-actived"), v["default"].removeClass(v["default"].all(".vc-logbox", this.$dom), "vc-actived"), v["default"].addClass(t, "vc-actived");var o = v["default"].all(".vc-topbar-" + e, this.$dom);v["default"].removeClass(v["default"].all(".vc-toptab", this.$dom), "vc-toggle"), v["default"].addClass(o, "vc-toggle"), o.length > 0 ? v["default"].addClass(v["default"].one(".vc-content", this.$dom), "vc-has-topbar") : v["default"].removeClass(v["default"].one(".vc-content", this.$dom), "vc-has-topbar"), v["default"].removeClass(v["default"].all(".vc-tool", this.$dom), "vc-toggle"), v["default"].addClass(v["default"].all(".vc-tool-" + e, this.$dom), "vc-toggle"), this._triggerPluginEvent(this.activedTab, "hide"), this.activedTab = e, this._triggerPluginEvent(this.activedTab, "show");
        } }]), e;
    }();t["default"] = k, e.exports = t["default"];
  }, function (e, t) {
    e.exports = { name: "vconsole", version: "2.5.2", description: "A lightweight, extendable front-end developer tool for mobile web page.", homepage: "https://github.com/WechatFE/vConsole", main: "dist/vconsole.min.js", scripts: { test: "mocha", dist: "webpack && npm test" }, keywords: ["console", "debug", "mobile"], repository: { type: "git", url: "git+https://github.com/WechatFE/vConsole.git" }, dependencies: {}, devDependencies: { "babel-core": "^6.7.7", "babel-loader": "^6.2.4", "babel-plugin-add-module-exports": "^0.1.4", "babel-preset-es2015": "^6.6.0", "babel-preset-stage-3": "^6.5.0", chai: "^3.5.0", "css-loader": "^0.23.1", "extract-text-webpack-plugin": "^1.0.1", "html-loader": "^0.4.3", jsdom: "^9.2.1", "json-loader": "^0.5.4", less: "^2.5.3", "less-loader": "^2.2.3", mocha: "^2.5.3", "style-loader": "^0.13.1", webpack: "~1.12.11" }, author: "WechatFE Team", license: "MIT" };
  }, function (e, t) {
    "use strict";
    function o(e) {
      var t = e > 0 ? new Date(e) : new Date(),
          o = t.getDate() < 10 ? "0" + t.getDate() : t.getDate(),
          n = t.getMonth() < 9 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1,
          l = t.getFullYear(),
          i = t.getHours() < 10 ? "0" + t.getHours() : t.getHours(),
          r = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes(),
          a = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds(),
          c = t.getMilliseconds() < 10 ? "0" + t.getMilliseconds() : t.getMilliseconds();return 100 > c && (c = "0" + c), { time: +t, year: l, month: n, day: o, hour: i, minute: r, second: a, millisecond: c };
    }function n(e) {
      return "[object Number]" == Object.prototype.toString.call(e);
    }function l(e) {
      return "[object String]" == Object.prototype.toString.call(e);
    }function i(e) {
      return "[object Array]" == Object.prototype.toString.call(e);
    }function r(e) {
      return "[object Boolean]" == Object.prototype.toString.call(e);
    }function a(e) {
      return "[object Undefined]" == Object.prototype.toString.call(e);
    }function c(e) {
      return "[object Null]" == Object.prototype.toString.call(e);
    }function s(e) {
      return "[object Symbol]" == Object.prototype.toString.call(e);
    }function d(e) {
      return !("[object Object]" != Object.prototype.toString.call(e) && (n(e) || l(e) || r(e) || i(e) || c(e) || u(e) || a(e) || s(e)));
    }function u(e) {
      return "[object Function]" == Object.prototype.toString.call(e);
    }function v(e) {
      return "object" === ("undefined" == typeof HTMLElement ? "undefined" : y(HTMLElement)) ? e instanceof HTMLElement : e && "object" === ("undefined" == typeof e ? "undefined" : y(e)) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    }function f(e) {
      return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML;
    }function p(e) {
      function t(e) {
        for (var t = p.length - 1; t >= 0; t--) {
          if (p[t].child == e) return !0;
        }return !1;
      }function o(e) {
        if (d(e)) {
          if (t(e)) return void (v += "CircularObject");p.push({ parent: parent, child: e });var b = Object.keys(e);v += "{", f++;for (var g = 0; g < b.length; g++) {
            var h = b[g];e.hasOwnProperty && !e.hasOwnProperty(h) || (v += h + ": ", o(e[h], e), g < b.length - 1 && (v += ", "));
          }f--, v += "}", p.pop();
        } else if (i(e)) {
          if (t(e)) return void (v += "CircularArray");p.push({ parent: parent, child: e }), v += "[", f++;for (var m = 0; m < e.length; m++) {
            o(e[m], e), m < e.length - 1 && (v += ", ");
          }f--, v += "]", p.pop();
        } else v += l(e) ? '"' + e + '"' : n(e) ? e : r(e) ? e : c(e) ? "null" : a(e) ? "undefined" : u(e) ? "function()" : s(e) ? "symbol" : "unknown";
      }var v = "",
          f = 0,
          p = [];return o(e, null), v;
    }function b(e) {
      if (!d(e) && !i(e)) return [];var t = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          o = [];for (var n in e) {
        t.indexOf(n) < 0 && o.push(n);
      }return o = o.sort();
    }function g(e) {
      return Object.prototype.toString.call(e).replace("[object ", "").replace("]", "");
    }function h(e, t) {
      window.localStorage && (e = "vConsole_" + e, localStorage.setItem(e, t));
    }function m(e) {
      return window.localStorage ? (e = "vConsole_" + e, localStorage.getItem(e)) : void 0;
    }Object.defineProperty(t, "__esModule", { value: !0 });var y = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    };t.getDate = o, t.isNumber = n, t.isString = l, t.isArray = i, t.isBoolean = r, t.isUndefined = a, t.isNull = c, t.isSymbol = s, t.isObject = d, t.isFunction = u, t.isElement = v, t.htmlEncode = f, t.JSONStringify = p, t.getObjAllKeys = b, t.getObjName = g, t.setStorage = h, t.getStorage = m;
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { "default": e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var l = o(3),
        i = o(5),
        r = n(i),
        a = {};a.one = function (e, t) {
      return t ? t.querySelector(e) : document.querySelector(e);
    }, a.all = function (e, t) {
      var o = void 0,
          n = [];return o = t ? t.querySelectorAll(e) : document.querySelectorAll(e), o && o.length > 0 && (n = Array.prototype.slice.call(o)), n;
    }, a.addClass = function (e, t) {
      if (e) {
        (0, l.isArray)(e) || (e = [e]);for (var o = 0; o < e.length; o++) {
          var n = e[o].className || "",
              i = n.split(" ");i.indexOf(t) > -1 || (i.push(t), e[o].className = i.join(" "));
        }
      }
    }, a.removeClass = function (e, t) {
      if (e) {
        (0, l.isArray)(e) || (e = [e]);for (var o = 0; o < e.length; o++) {
          for (var n = e[o].className.split(" "), i = 0; i < n.length; i++) {
            n[i] == t && (n[i] = "");
          }e[o].className = n.join(" ").trim();
        }
      }
    }, a.hasClass = function (e, t) {
      if (!e) return !1;for (var o = e.className.split(" "), n = 0; n < o.length; n++) {
        if (o[n] == t) return !0;
      }return !1;
    }, a.bind = function (e, t, o, n) {
      if (e) {
        void 0 === n && (n = !1), (0, l.isArray)(e) || (e = [e]);for (var i = 0; i < e.length; i++) {
          e[i].addEventListener(t, o, n);
        }
      }
    }, a.delegate = function (e, t, o, n) {
      e && e.addEventListener(t, function (t) {
        var l = a.all(o, e);if (l) e: for (var i = 0; i < l.length; i++) {
          for (var r = t.target; r;) {
            if (r == l[i]) {
              n.call(r, t);break e;
            }if (r = r.parentNode, r == e) break;
          }
        }
      }, !1);
    }, a.render = r["default"], t["default"] = a, e.exports = t["default"];
  }, function (e, t) {
    "use strict";
    function o(e, t, o) {
      var n = /\{\{([^\}]+)\}\}/g,
          l = "var arr = [];\n",
          i = 0,
          r = [],
          a = function a(e, t) {
        "" !== e && (l += t ? e.match(/^ ?else/g) ? "} " + e + " {\n" : e.match(/\/(if|for|switch)/g) ? "}\n" : e.match(/^ ?if|for|switch/g) ? e + " {\n" : e.match(/^ ?(break|continue) ?$/g) ? e + ";\n" : e.match(/^ ?(case|default)/g) ? e + ":\n" : "arr.push(" + e + ");\n" : 'arr.push("' + e.replace(/"/g, '\\"') + '");\n');
      };for (e = e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g, "$1{{"), e = e.replace(/^\n/, "").replace(/\n/g, "\\\n"); r = n.exec(e);) {
        a(e.slice(i, r.index), !1), a(r[1], !0), i = r.index + r[0].length;
      }a(e.substr(i, e.length - i), !1), l += 'return arr.join("");', l = "with (this) {\n" + l + "\n}";var c = new Function(l).apply(t);if (!o) {
        var s = document.createElement("div");s.innerHTML = c, c = s.children[0];
      }return c;
    }Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = o, e.exports = t["default"];
  }, function (e, t, o) {
    var n = o(7);"string" == typeof n && (n = [[e.id, n, ""]]);o(9)(n, {});n.locals && (e.exports = n.locals);
  }, function (e, t, o) {
    t = e.exports = o(8)(), t.push([e.id, '#__vconsole{color:#000;font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#__vconsole .vc-max-height{max-height:250px}#__vconsole .vc-max-height-line{max-height:44px}#__vconsole .vc-min-height{min-height:40px}#__vconsole .vc-switch{display:block;position:fixed;right:10px;bottom:10px;color:#fff;background-color:#04be02;line-height:1;font-size:14px;padding:8px 16px;z-index:10000;border-radius:4px;box-shadow:0 0 8px rgba(0,0,0,.4)}#__vconsole .vc-mask{top:0;background:transparent;z-index:10001;transition:background .3s;-webkit-tap-highlight-color:transparent;overflow-y:scroll}#__vconsole .vc-mask,#__vconsole .vc-panel{display:none;position:fixed;left:0;right:0;bottom:0}#__vconsole .vc-panel{min-height:85%;z-index:10002;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}#__vconsole .vc-tabbar{border-bottom:1px solid #d9d9d9;overflow-x:auto;height:39px;width:auto;white-space:nowrap}#__vconsole .vc-tabbar .vc-tab{display:inline-block;line-height:39px;padding:0 15px;border-right:1px solid #d9d9d9;text-decoration:none;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-tabbar .vc-tab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-tabbar .vc-tab.vc-actived{background-color:#fff}#__vconsole .vc-content{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:absolute;top:40px;left:0;right:0;bottom:40px;-webkit-overflow-scrolling:touch}#__vconsole .vc-content.vc-has-topbar{top:71px}#__vconsole .vc-topbar{background-color:#fbf9fe;display:flex;display:-webkit-box;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;width:100%}#__vconsole .vc-topbar .vc-toptab{display:none;flex:1;-webkit-box-flex:1;line-height:30px;padding:0 15px;border-bottom:1px solid #d9d9d9;text-decoration:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-topbar .vc-toptab.vc-toggle{display:block}#__vconsole .vc-topbar .vc-toptab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid #3e82f7}#__vconsole .vc-logbox{display:none;position:relative;min-height:100%}#__vconsole .vc-logbox i{font-style:normal}#__vconsole .vc-logbox .vc-log{-webkit-tap-highlight-color:transparent}#__vconsole .vc-logbox .vc-log:empty:before{content:"Empty";color:#999;position:absolute;top:45%;left:0;right:0;bottom:0;font-size:15px;text-align:center}#__vconsole .vc-logbox .vc-item{margin:0;padding:6px 8px;overflow:hidden;line-height:1.3;border-bottom:1px solid #eee;word-break:break-word}#__vconsole .vc-logbox .vc-item-info{color:#6a5acd}#__vconsole .vc-logbox .vc-item-debug{color:#daa520}#__vconsole .vc-logbox .vc-item-warn{color:orange;border-color:#ffb930;background-color:#fffacd}#__vconsole .vc-logbox .vc-item-error{color:#dc143c;border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item{display:none}#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error,#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn{display:block}#__vconsole .vc-logbox .vc-item .vc-item-content{margin-right:60px;display:block}#__vconsole .vc-logbox .vc-item .vc-item-meta{color:#888;float:right;width:60px;text-align:right}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-content{margin-right:0}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-meta{display:none}#__vconsole .vc-logbox .vc-item .vc-item-code{display:block;white-space:pre-wrap;overflow:auto;position:relative}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output{padding-left:12px}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\203A";position:absolute;top:-3px;left:0;font-size:16px;color:#6a5acd}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\2039"}#__vconsole .vc-logbox .vc-item .vc-fold{display:block;overflow:auto;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer{display:block;font-style:italic;padding-left:10px;position:relative}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before{content:"";position:absolute;top:4px;left:2px;width:0;height:0;border:4px solid transparent;border-left-color:#000}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before{top:6px;left:0;border-top-color:#000;border-left-color:transparent}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner{display:none;margin-left:10px}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle{display:block}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key{margin-left:10px}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key{margin-left:0}#__vconsole .vc-logbox .vc-code-key{color:#905}#__vconsole .vc-logbox .vc-code-private-key{color:#d391b5}#__vconsole .vc-logbox .vc-code-function{color:#905;font-style:italic}#__vconsole .vc-logbox .vc-code-boolean,#__vconsole .vc-logbox .vc-code-number{color:#0086b3}#__vconsole .vc-logbox .vc-code-string{color:#183691}#__vconsole .vc-logbox .vc-code-null,#__vconsole .vc-logbox .vc-code-undefined{color:#666}#__vconsole .vc-logbox .vc-cmd{position:absolute;height:40px;left:0;right:0;bottom:0;border-top:1px solid #d9d9d9;display:block!important}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap{display:block;height:28px;margin-right:40px;padding:6px 8px}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:12px}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder{line-height:28px}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn{position:absolute;top:0;right:0;bottom:0;width:40px;border:none;background-color:#efeff4;outline:none;-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-logbox .vc-group .vc-group-preview{-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-group .vc-group-preview:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-group .vc-group-detail{display:none;padding:0 0 10px 20px;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail{display:block}#__vconsole .vc-logbox .vc-table .vc-table-row{display:flex;display:-webkit-flex;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;overflow:hidden;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border{border-left:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-col{flex:1;-webkit-box-flex:1;padding:3px 4px;border-left:1px solid #eee;overflow:auto;white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-table .vc-table-col:first-child{border:none}#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col{padding:0 4px;font-size:12px}#__vconsole .vc-logbox .vc-table .vc-table-col-2{flex:2;-webkit-box-flex:2}#__vconsole .vc-logbox .vc-table .vc-table-col-3{flex:3;-webkit-box-flex:3}#__vconsole .vc-logbox .vc-table .vc-table-col-4{flex:4;-webkit-box-flex:4}#__vconsole .vc-logbox .vc-table .vc-table-col-5{flex:5;-webkit-box-flex:5}#__vconsole .vc-logbox .vc-table .vc-table-col-6{flex:6;-webkit-box-flex:6}#__vconsole .vc-logbox .vc-table .vc-table-row-error{border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col{color:#dc143c;border-color:#f4a0ab}#__vconsole .vc-logbox .vc-table .vc-table-col-title{font-weight:700}#__vconsole .vc-logbox.vc-actived{display:block}#__vconsole .vc-toolbar{border-top:1px solid #d9d9d9;line-height:39px;position:absolute;left:0;right:0;bottom:0;display:flex;display:-webkit-box;flex-direction:row;-webkit-box-direction:row}#__vconsole .vc-toolbar .vc-tool{display:none;text-decoration:none;color:#000;width:50%;flex:1;-webkit-box-flex:1;text-align:center;position:relative;-webkit-touch-callout:none}#__vconsole .vc-toolbar .vc-tool.vc-global-tool,#__vconsole .vc-toolbar .vc-tool.vc-toggle{display:block}#__vconsole .vc-toolbar .vc-tool:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-toolbar .vc-tool:after{content:" ";position:absolute;top:7px;bottom:7px;right:0;border-left:1px solid #d9d9d9}#__vconsole .vc-toolbar .vc-tool-last:after{border:none}#__vconsole.vc-toggle .vc-switch{display:none}#__vconsole.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}#__vconsole.vc-toggle .vc-panel{-webkit-transform:translate(0);transform:translate(0)}', ""]);
  }, function (e, t) {
    "use strict";
    e.exports = function () {
      var e = [];return e.toString = function () {
        for (var e = [], t = 0; t < this.length; t++) {
          var o = this[t];o[2] ? e.push("@media " + o[2] + "{" + o[1] + "}") : e.push(o[1]);
        }return e.join("");
      }, e.i = function (t, o) {
        "string" == typeof t && (t = [[null, t, ""]]);for (var n = {}, l = 0; l < this.length; l++) {
          var i = this[l][0];"number" == typeof i && (n[i] = !0);
        }for (l = 0; l < t.length; l++) {
          var r = t[l];"number" == typeof r[0] && n[r[0]] || (o && !r[2] ? r[2] = o : o && (r[2] = "(" + r[2] + ") and (" + o + ")"), e.push(r));
        }
      }, e;
    };
  }, function (e, t, o) {
    function n(e, t) {
      for (var o = 0; o < e.length; o++) {
        var n = e[o],
            l = f[n.id];if (l) {
          l.refs++;for (var i = 0; i < l.parts.length; i++) {
            l.parts[i](n.parts[i]);
          }for (; i < n.parts.length; i++) {
            l.parts.push(s(n.parts[i], t));
          }
        } else {
          for (var r = [], i = 0; i < n.parts.length; i++) {
            r.push(s(n.parts[i], t));
          }f[n.id] = { id: n.id, refs: 1, parts: r };
        }
      }
    }function l(e) {
      for (var t = [], o = {}, n = 0; n < e.length; n++) {
        var l = e[n],
            i = l[0],
            r = l[1],
            a = l[2],
            c = l[3],
            s = { css: r, media: a, sourceMap: c };o[i] ? o[i].parts.push(s) : t.push(o[i] = { id: i, parts: [s] });
      }return t;
    }function i(e, t) {
      var o = g(),
          n = y[y.length - 1];if ("top" === e.insertAt) n ? n.nextSibling ? o.insertBefore(t, n.nextSibling) : o.appendChild(t) : o.insertBefore(t, o.firstChild), y.push(t);else {
        if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t);
      }
    }function r(e) {
      e.parentNode.removeChild(e);var t = y.indexOf(e);t >= 0 && y.splice(t, 1);
    }function a(e) {
      var t = document.createElement("style");return t.type = "text/css", i(e, t), t;
    }function c(e) {
      var t = document.createElement("link");return t.rel = "stylesheet", i(e, t), t;
    }function s(e, t) {
      var o, n, l;if (t.singleton) {
        var i = m++;o = h || (h = a(t)), n = d.bind(null, o, i, !1), l = d.bind(null, o, i, !0);
      } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = c(t), n = v.bind(null, o), l = function l() {
        r(o), o.href && URL.revokeObjectURL(o.href);
      }) : (o = a(t), n = u.bind(null, o), l = function l() {
        r(o);
      });return n(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;n(e = t);
        } else l();
      };
    }function d(e, t, o, n) {
      var l = o ? "" : n.css;if (e.styleSheet) e.styleSheet.cssText = _(t, l);else {
        var i = document.createTextNode(l),
            r = e.childNodes;r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(i, r[t]) : e.appendChild(i);
      }
    }function u(e, t) {
      var o = t.css,
          n = t.media;if (n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = o;else {
        for (; e.firstChild;) {
          e.removeChild(e.firstChild);
        }e.appendChild(document.createTextNode(o));
      }
    }function v(e, t) {
      var o = t.css,
          n = t.sourceMap;n && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");var l = new Blob([o], { type: "text/css" }),
          i = e.href;e.href = URL.createObjectURL(l), i && URL.revokeObjectURL(i);
    }var f = {},
        p = function p(e) {
      var t;return function () {
        return "undefined" == typeof t && (t = e.apply(this, arguments)), t;
      };
    },
        b = p(function () {
      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
      );
    }),
        g = p(function () {
      return document.head || document.getElementsByTagName("head")[0];
    }),
        h = null,
        m = 0,
        y = [];e.exports = function (e, t) {
      t = t || {}, "undefined" == typeof t.singleton && (t.singleton = b()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");var o = l(e);return n(o, t), function (e) {
        for (var i = [], r = 0; r < o.length; r++) {
          var a = o[r],
              c = f[a.id];c.refs--, i.push(c);
        }if (e) {
          var s = l(e);n(s, t);
        }for (var r = 0; r < i.length; r++) {
          var c = i[r];if (0 === c.refs) {
            for (var d = 0; d < c.parts.length; d++) {
              c.parts[d]();
            }delete f[c.id];
          }
        }
      };
    };var _ = function () {
      var e = [];return function (t, o) {
        return e[t] = o, e.filter(Boolean).join("\n");
      };
    }();
  }, function (e, t) {
    e.exports = '<div id=__vconsole class=""> <div class=vc-switch>vConsole</div> <div class=vc-mask> </div> <div class=vc-panel> <div class=vc-tabbar> </div> <div class=vc-topbar> </div> <div class=vc-content> </div> <div class=vc-toolbar> <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a> </div> </div> </div>';
  }, function (e, t) {
    e.exports = "<a class=vc-tab data-tab={{id}} id=__vc_tab_{{id}}>{{name}}</a>";
  }, function (e, t) {
    e.exports = "<div class=vc-logbox id=__vc_log_{{id}}> </div>";
  }, function (e, t) {
    e.exports = '<a href=javascript:; class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>';
  }, function (e, t) {
    e.exports = '<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>';
  }, function (e, t) {
    "use strict";
    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(t, "__esModule", { value: !0 });var n = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        l = function () {
      function e(t) {
        var n = arguments.length <= 1 || void 0 === arguments[1] ? "newPlugin" : arguments[1];o(this, e), this.id = t, this.name = n, this.eventList = {};
      }return n(e, [{ key: "on", value: function value(e, t) {
          return this.eventList[e] = t, this;
        } }, { key: "trigger", value: function value(e, t) {
          if ("function" == typeof this.eventList[e]) this.eventList[e].call(this, t);else {
            var o = "on" + e.charAt(0).toUpperCase() + e.slice(1);"function" == typeof this[o] && this[o].call(this, t);
          }return this;
        } }, { key: "id", get: function get() {
          return this._id;
        }, set: function set(e) {
          if (!e) throw "Plugin ID cannot be empty";this._id = e.toLowerCase();
        } }, { key: "name", get: function get() {
          return this._name;
        }, set: function set(e) {
          if (!e) throw "Plugin name cannot be empty";this._name = e;
        } }]), e;
    }();t["default"] = l, e.exports = t["default"];
  }, function (module, exports, __webpack_require__) {
    "use strict";
    function _interopRequireWildcard(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }return t["default"] = e, t;
    }function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { "default": e };
    }function _classCallCheck(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function _possibleConstructorReturn(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function _inherits(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        _get = function e(t, o, n) {
      null === t && (t = Function.prototype);var l = Object.getOwnPropertyDescriptor(t, o);if (void 0 === l) {
        var i = Object.getPrototypeOf(t);return null === i ? void 0 : e(i, o, n);
      }if ("value" in l) return l.value;var r = l.get;if (void 0 !== r) return r.call(n);
    },
        _query = __webpack_require__(4),
        _query2 = _interopRequireDefault(_query),
        _tool = __webpack_require__(3),
        tool = _interopRequireWildcard(_tool),
        _log = __webpack_require__(17),
        _log2 = _interopRequireDefault(_log),
        _tabbox_default = __webpack_require__(21),
        _tabbox_default2 = _interopRequireDefault(_tabbox_default),
        _item_code = __webpack_require__(22),
        _item_code2 = _interopRequireDefault(_item_code),
        VConsoleDefaultTab = function (_VConsoleLogTab) {
      function VConsoleDefaultTab() {
        var e;_classCallCheck(this, VConsoleDefaultTab);for (var t = arguments.length, o = Array(t), n = 0; t > n; n++) {
          o[n] = arguments[n];
        }var l = _possibleConstructorReturn(this, (e = Object.getPrototypeOf(VConsoleDefaultTab)).call.apply(e, [this].concat(o)));return l.tplTabbox = _tabbox_default2["default"], l.windowOnError = null, l;
      }return _inherits(VConsoleDefaultTab, _VConsoleLogTab), _createClass(VConsoleDefaultTab, [{ key: "onReady", value: function value() {
          var e = this;_get(Object.getPrototypeOf(VConsoleDefaultTab.prototype), "onReady", this).call(this), _query2["default"].bind(_query2["default"].one(".vc-cmd", this.$tabbox), "submit", function (t) {
            t.preventDefault();var o = _query2["default"].one(".vc-cmd-input", t.target),
                n = o.value;o.value = "", "" !== n && e.evalCommand(n);
          });
        } }, { key: "mockConsole", value: function value() {
          _get(Object.getPrototypeOf(VConsoleDefaultTab.prototype), "mockConsole", this).call(this);var e = this;tool.isFunction(window.onerror) && (this.windowOnError = window.onerror), window.onerror = function (t, o, n, l, i) {
            var r = t;o && (r += "\n" + o.replace(location.origin, "")), (n || l) && (r += ":" + n + ":" + l), e.printLog({ logType: "error", logs: [r], noOrigin: !0 }), tool.isFunction(e.windowOnError) && e.windowOnError.call(window, t, o, n, l, i);
          };
        } }, { key: "evalCommand", value: function evalCommand(cmd) {
          this.printLog({ logType: "log", content: _query2["default"].render(_item_code2["default"], { content: cmd, type: "input" }), noMeta: !0, style: "" });try {
            var result = eval(cmd),
                $content = void 0;tool.isArray(result) || tool.isObject(result) ? $content = this.getFoldedLine(result) : (tool.isNull(result) ? result = "null" : tool.isUndefined(result) ? result = "undefined" : tool.isFunction(result) ? result = "function()" : tool.isString(result) && (result = '"' + result + '"'), $content = _query2["default"].render(_item_code2["default"], { content: result, type: "output" })), this.printLog({ logType: "log", content: $content, noMeta: !0, style: "" });
          } catch (e) {
            this.printLog({ logType: "error", logs: [e.message], noMeta: !0, style: "" });
          }
        } }]), VConsoleDefaultTab;
    }(_log2["default"]);exports["default"] = VConsoleDefaultTab, module.exports = exports["default"];
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { "default": e };
    }function l(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }return t["default"] = e, t;
    }function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function r(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        s = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        d = o(3),
        u = l(d),
        v = o(4),
        f = n(v),
        p = o(15),
        b = n(p),
        g = o(18),
        h = n(g),
        m = o(19),
        y = n(m),
        _ = o(20),
        w = n(_),
        x = function (e) {
      function t() {
        var e;i(this, t);for (var o = arguments.length, n = Array(o), l = 0; o > l; l++) {
          n[l] = arguments[l];
        }var a = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));return a.tplTabbox = "", a.allowUnformattedLog = !0, a.isReady = !1, a.isShow = !1, a.$tabbox = null, a.console = {}, a.logList = [], a.isInBottom = !0, a.mockConsole(), a;
      }return a(t, e), s(t, [{ key: "onInit", value: function value() {
          this.$tabbox = f["default"].render(this.tplTabbox, {});
        } }, { key: "onRenderTab", value: function value(e) {
          e(this.$tabbox);
        } }, { key: "onAddTopBar", value: function value(e) {
          for (var t = this, o = ["All", "Log", "Info", "Warn", "Error"], n = [], l = 0; l < o.length; l++) {
            n.push({ name: o[l], data: { type: o[l].toLowerCase() }, className: "", onClick: function onClick() {
                return f["default"].hasClass(this, "vc-actived") ? !1 : void t.showLogType(this.dataset.type || "all");
              } });
          }n[0].className = "vc-actived", e(n);
        } }, { key: "onAddTool", value: function value(e) {
          var t = this,
              o = [{ name: "Clear", global: !1, onClick: function onClick() {
              t.clearLog();
            } }];e(o);
        } }, { key: "onReady", value: function value() {
          var e = this;e.isReady = !0;var t = f["default"].all(".vc-subtab", e.$tabbox);f["default"].bind(t, "click", function (o) {
            if (o.preventDefault(), f["default"].hasClass(this, "vc-actived")) return !1;f["default"].removeClass(t, "vc-actived"), f["default"].addClass(this, "vc-actived");var n = this.dataset.type,
                l = f["default"].one(".vc-log", e.$tabbox);f["default"].removeClass(l, "vc-log-partly-log"), f["default"].removeClass(l, "vc-log-partly-info"), f["default"].removeClass(l, "vc-log-partly-warn"), f["default"].removeClass(l, "vc-log-partly-error"), "all" == n ? f["default"].removeClass(l, "vc-log-partly") : (f["default"].addClass(l, "vc-log-partly"), f["default"].addClass(l, "vc-log-partly-" + n));
          });var o = f["default"].one(".vc-content");f["default"].bind(o, "scroll", function (t) {
            e.isShow && (o.scrollTop + o.offsetHeight >= o.scrollHeight ? e.isInBottom = !0 : e.isInBottom = !1);
          });for (var n = 0; n < e.logList.length; n++) {
            e.printLog(e.logList[n]);
          }e.logList = [];
        } }, { key: "onRemove", value: function value() {
          window.console.log = this.console.log, window.console.info = this.console.info, window.console.warn = this.console.warn, window.console.debug = this.console.debug, window.console.error = this.console.error, this.console = {};
        } }, { key: "onShow", value: function value() {
          this.isShow = !0, 1 == this.isInBottom && this.scrollToBottom();
        } }, { key: "onHide", value: function value() {
          this.isShow = !1;
        } }, { key: "onShowConsole", value: function value() {
          1 == this.isInBottom && this.scrollToBottom();
        } }, { key: "showLogType", value: function value(e) {
          var t = f["default"].one(".vc-log", this.$tabbox);f["default"].removeClass(t, "vc-log-partly-log"), f["default"].removeClass(t, "vc-log-partly-info"), f["default"].removeClass(t, "vc-log-partly-warn"), f["default"].removeClass(t, "vc-log-partly-error"), "all" == e ? f["default"].removeClass(t, "vc-log-partly") : (f["default"].addClass(t, "vc-log-partly"), f["default"].addClass(t, "vc-log-partly-" + e));
        } }, { key: "scrollToBottom", value: function value() {
          var e = f["default"].one(".vc-content");e.scrollTop = e.scrollHeight - e.offsetHeight;
        } }, { key: "mockConsole", value: function value() {
          var e = this;window.console ? (this.console.log = window.console.log, this.console.info = window.console.info, this.console.warn = window.console.warn, this.console.debug = window.console.debug, this.console.error = window.console.error) : window.console = {}, window.console.log = function () {
            e.printLog({ logType: "log", logs: arguments });
          }, window.console.info = function () {
            e.printLog({ logType: "info", logs: arguments });
          }, window.console.warn = function () {
            e.printLog({ logType: "warn", logs: arguments });
          }, window.console.debug = function () {
            e.printLog({ logType: "debug", logs: arguments });
          }, window.console.error = function () {
            e.printLog({ logType: "error", logs: arguments });
          };
        } }, { key: "clearLog", value: function value() {
          f["default"].one(".vc-log", this.$tabbox).innerHTML = "";
        } }, { key: "printOriginLog", value: function value(e) {
          "function" == typeof this.console[e.logType] && this.console[e.logType].apply(window.console, e.logs);
        } }, { key: "printLog", value: function value(e) {
          var t = e.logs || [];if (t.length || e.content) {
            t = [].slice.call(t || []);var o = !0,
                n = /^\[(\w+)\] ?/i,
                l = "";if (u.isString(t[0])) {
              var i = t[0].match(n);null !== i && i.length > 0 && (l = i[1].toLowerCase());
            }if (l ? o = l == this.id : 0 == this.allowUnformattedLog && (o = !1), !o) return void (e.noOrigin || this.printOriginLog(e));if (e.date || (e.date = +new Date()), !this.isReady) return void this.logList.push(e);if (u.isString(t[0]) && (t[0] = t[0].replace(n, ""), "" === t[0] && t.shift()), !e.meta) {
              var r = u.getDate(e.date);e.meta = r.hour + ":" + r.minute + ":" + r.second;
            }for (var a = f["default"].render(h["default"], { logType: e.logType, noMeta: !!e.noMeta, meta: e.meta, style: e.style || "" }), s = f["default"].one(".vc-item-content", a), d = 0; d < t.length; d++) {
              var v = void 0;try {
                if ("" === t[d]) continue;v = u.isFunction(t[d]) ? "<span> " + t[d].toString() + "</span>" : u.isObject(t[d]) || u.isArray(t[d]) ? this.getFoldedLine(t[d]) : "<span> " + u.htmlEncode(t[d]).replace(/\n/g, "<br/>") + "</span>";
              } catch (p) {
                v = "<span> [" + c(t[d]) + "]</span>";
              }v && ("string" == typeof v ? s.insertAdjacentHTML("beforeend", v) : s.insertAdjacentElement("beforeend", v));
            }u.isObject(e.content) && s.insertAdjacentElement("beforeend", e.content), f["default"].one(".vc-log", this.$tabbox).insertAdjacentElement("beforeend", a), this.isInBottom && this.scrollToBottom(), e.noOrigin || this.printOriginLog(e);
          }
        } }, { key: "getFoldedLine", value: function value(e, t) {
          var o = this;if (!t) {
            var n = u.JSONStringify(e),
                l = n.substr(0, 26);t = u.getObjName(e), n.length > 26 && (l += "..."), t += " " + l;
          }var i = f["default"].render(y["default"], { outer: t, lineType: "obj" });return f["default"].bind(f["default"].one(".vc-fold-outer", i), "click", function (t) {
            t.preventDefault(), t.stopPropagation(), f["default"].hasClass(i, "vc-toggle") ? (f["default"].removeClass(i, "vc-toggle"), f["default"].removeClass(f["default"].one(".vc-fold-inner", i), "vc-toggle"), f["default"].removeClass(f["default"].one(".vc-fold-outer", i), "vc-toggle")) : (f["default"].addClass(i, "vc-toggle"), f["default"].addClass(f["default"].one(".vc-fold-inner", i), "vc-toggle"), f["default"].addClass(f["default"].one(".vc-fold-outer", i), "vc-toggle"));var n = f["default"].one(".vc-fold-inner", i);if (0 == n.children.length && e) {
              for (var l = u.getObjAllKeys(e), r = 0; r < l.length; r++) {
                var a = e[l[r]],
                    c = "undefined",
                    s = "";u.isString(a) ? (c = "string", a = '"' + a + '"') : u.isNumber(a) ? c = "number" : u.isBoolean(a) ? c = "boolean" : u.isNull(a) ? (c = "null", a = "null") : u.isUndefined(a) ? (c = "undefined", a = "undefined") : u.isFunction(a) ? (c = "function", a = "function()") : u.isSymbol(a) && (c = "symbol");var d = void 0;if (u.isArray(a)) {
                  var v = u.getObjName(a) + "[" + a.length + "]";d = o.getFoldedLine(a, f["default"].render(w["default"], { key: l[r], keyType: s, value: v, valueType: "array" }, !0));
                } else if (u.isObject(a)) {
                  var p = u.getObjName(a);d = o.getFoldedLine(a, f["default"].render(w["default"], { key: u.htmlEncode(l[r]), keyType: s, value: p, valueType: "object" }, !0));
                } else {
                  e.hasOwnProperty && !e.hasOwnProperty(l[r]) && (s = "private");var b = { lineType: "kv", key: u.htmlEncode(l[r]), keyType: s, value: u.htmlEncode(a), valueType: c };d = f["default"].render(y["default"], b);
                }n.insertAdjacentElement("beforeend", d);
              }if (u.isObject(e)) {
                var g = e.__proto__,
                    h = void 0;h = u.isObject(g) ? o.getFoldedLine(g, f["default"].render(w["default"], { key: "__proto__", keyType: "private", value: u.getObjName(g), valueType: "object" }, !0)) : f["default"].render(w["default"], { key: "__proto__", keyType: "private", value: "null", valueType: "null" }), n.insertAdjacentElement("beforeend", h);
              }
            }return !1;
          }), i;
        } }]), t;
    }(b["default"]);t["default"] = x, e.exports = t["default"];
  }, function (e, t) {
    e.exports = '<div class="vc-item vc-item-{{logType}} {{if (!noMeta)}}vc-item-nometa{{/if}} {{style}}"> <span class=vc-item-meta>{{if (!noMeta)}}{{meta}}{{/if}}</span> <div class=vc-item-content></div> </div>';
  }, function (e, t) {
    e.exports = "<div class=vc-fold> {{if (lineType == 'obj')}} <i class=vc-fold-outer>{{outer}}</i> <div class=vc-fold-inner></div> {{else if (lineType == 'value')}} <i class=vc-code-{{valueType}}>{{value}}</i> {{else if (lineType == 'kv')}} <i class=\"vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}\">{{key}}</i>: <i class=vc-code-{{valueType}}>{{value}}</i> {{/if}} </div>";
  }, function (e, t) {
    e.exports = '<span> <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class=vc-code-{{valueType}}>{{value}}</i> </span>';
  }, function (e, t) {
    e.exports = "<div> <div class=vc-log style=padding-bottom:40px></div> <form class=vc-cmd> <button class=vc-cmd-btn type=submit>OK</button> <div class=vc-cmd-input-wrap> <textarea class=vc-cmd-input placeholder=command...></textarea> </div> </form> </div>";
  }, function (e, t) {
    e.exports = '<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>';
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { "default": e };
    }function l(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }return t["default"] = e, t;
    }function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function r(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var c = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        s = function g(e, t, o) {
      null === e && (e = Function.prototype);var n = Object.getOwnPropertyDescriptor(e, t);if (void 0 === n) {
        var l = Object.getPrototypeOf(e);return null === l ? void 0 : g(l, t, o);
      }if ("value" in n) return n.value;var i = n.get;if (void 0 !== i) return i.call(o);
    },
        d = o(3),
        u = (l(d), o(17)),
        v = n(u),
        f = o(24),
        p = n(f),
        b = function (e) {
      function t() {
        var e;i(this, t);for (var o = arguments.length, n = Array(o), l = 0; o > l; l++) {
          n[l] = arguments[l];
        }var a = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));return a.tplTabbox = p["default"], a.allowUnformattedLog = !1, a;
      }return a(t, e), c(t, [{ key: "onInit", value: function value() {
          s(Object.getPrototypeOf(t.prototype), "onInit", this).call(this), this.printSystemInfo();
        } }, { key: "printSystemInfo", value: function value() {
          var e = navigator.userAgent,
              t = "",
              o = e.match(/(ipod).*\s([\d_]+)/i),
              n = e.match(/(ipad).*\s([\d_]+)/i),
              l = e.match(/(iphone)\sos\s([\d_]+)/i),
              i = e.match(/(android)\s([\d\.]+)/i);t = "Unknown", i ? t = "Android " + i[2] : l ? t = "iPhone, iOS " + l[2].replace(/_/g, ".") : n ? t = "iPad, iOS " + n[2].replace(/_/g, ".") : o && (t = "iPod, iOS " + o[2].replace(/_/g, "."));var r = t,
              a = e.match(/MicroMessenger\/([\d\.]+)/i);t = "Unknown", a && a[1] ? (t = a[1], r += ", WeChat " + t, console.info("[system]", "System:", r)) : console.info("[system]", "System:", r), t = "Unknown", t = "https:" == location.protocol ? "HTTPS" : "http:" == location.protocol ? "HTTP" : location.protocol.replace(":", ""), r = t;var c = e.toLowerCase().match(/ nettype\/([^ ]+)/g);t = "Unknown", c && c[0] ? (c = c[0].split("/"), t = c[1], r += ", " + t, console.info("[system]", "Network:", r)) : console.info("[system]", "Protocol:", r), console.info("[system]", "UA:", e), setTimeout(function () {
            var e = window.performance || window.msPerformance || window.webkitPerformance;if (e && e.timing) {
              var t = e.timing;t.navigationStart && console.info("[system]", "navigationStart:", t.navigationStart), t.navigationStart && t.domainLookupStart && console.info("[system]", "navigation:", t.domainLookupStart - t.navigationStart + "ms"), t.domainLookupEnd && t.domainLookupStart && console.info("[system]", "dns:", t.domainLookupEnd - t.domainLookupStart + "ms"), t.connectEnd && t.connectStart && (t.connectEnd && t.secureConnectionStart ? console.info("[system]", "tcp (ssl):", t.connectEnd - t.connectStart + "ms (" + (t.connectEnd - t.secureConnectionStart) + "ms)") : console.info("[system]", "tcp:", t.connectEnd - t.connectStart + "ms")), t.responseStart && t.requestStart && console.info("[system]", "request:", t.responseStart - t.requestStart + "ms"), t.responseEnd && t.responseStart && console.info("[system]", "response:", t.responseEnd - t.responseStart + "ms"), t.domComplete && t.domLoading && (t.domContentLoadedEventStart && t.domLoading ? console.info("[system]", "domComplete (domLoaded):", t.domComplete - t.domLoading + "ms (" + (t.domContentLoadedEventStart - t.domLoading) + "ms)") : console.info("[system]", "domComplete:", t.domComplete - t.domLoading + "ms")), t.loadEventEnd && t.loadEventStart && console.info("[system]", "loadEvent:", t.loadEventEnd - t.loadEventStart + "ms"), t.navigationStart && t.loadEventEnd && console.info("[system]", "total (DOM):", t.loadEventEnd - t.navigationStart + "ms (" + (t.domComplete - t.navigationStart) + "ms)");
            }
          }, 0);
        } }]), t;
    }(v["default"]);t["default"] = b, e.exports = t["default"];
  }, function (e, t) {
    e.exports = "<div> <div class=vc-log></div> </div>";
  }, function (e, t, o) {
    "use strict";
    function n(e) {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var o in e) {
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      }return t["default"] = e, t;
    }function l(e) {
      return e && e.__esModule ? e : { "default": e };
    }function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }function r(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) && "function" != typeof t ? e : t;
    }function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }Object.defineProperty(t, "__esModule", { value: !0 });var c = function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var n = t[o];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t;
      };
    }(),
        s = o(4),
        d = l(s),
        u = o(3),
        v = n(u),
        f = o(15),
        p = l(f),
        b = o(26),
        g = l(b),
        h = o(27),
        m = l(h),
        y = o(28),
        _ = l(y),
        w = function (e) {
      function t() {
        var e;i(this, t);for (var o = arguments.length, n = Array(o), l = 0; o > l; l++) {
          n[l] = arguments[l];
        }var a = r(this, (e = Object.getPrototypeOf(t)).call.apply(e, [this].concat(n)));return a.$tabbox = d["default"].render(g["default"], {}), a.$header = null, a.reqList = {}, a.domList = {}, a.isReady = !1, a.isShow = !1, a.isInBottom = !0, a._open = void 0, a._send = void 0, a.mockAjax(), a;
      }return a(t, e), c(t, [{ key: "onRenderTab", value: function value(e) {
          e(this.$tabbox);
        } }, { key: "onAddTool", value: function value(e) {
          var t = this,
              o = [{ name: "Clear", global: !1, onClick: function onClick(e) {
              t.clearLog();
            } }];e(o);
        } }, { key: "onReady", value: function value() {
          var e = this;e.isReady = !0, this.renderHeader(), d["default"].delegate(d["default"].one(".vc-log", this.$tabbox), "click", ".vc-group-preview", function (e) {
            var t = this.parentNode;d["default"].hasClass(t, "vc-actived") ? d["default"].removeClass(t, "vc-actived") : d["default"].addClass(t, "vc-actived"), e.preventDefault();
          });var t = d["default"].one(".vc-content");d["default"].bind(t, "scroll", function (o) {
            e.isShow && (t.scrollTop + t.offsetHeight >= t.scrollHeight ? e.isInBottom = !0 : e.isInBottom = !1);
          });for (var o in e.reqList) {
            e.updateRequest(o, {});
          }
        } }, { key: "onRemove", value: function value() {
          window.XMLHttpRequest && (window.XMLHttpRequest.prototype.open = this._open, window.XMLHttpRequest.prototype.send = this._send, this._open = void 0, this._send = void 0);
        } }, { key: "onShow", value: function value() {
          this.isShow = !0, 1 == this.isInBottom && this.scrollToBottom();
        } }, { key: "onHide", value: function value() {
          this.isShow = !1;
        } }, { key: "onShowConsole", value: function value() {
          1 == this.isInBottom && this.scrollToBottom();
        } }, { key: "scrollToBottom", value: function value() {
          var e = d["default"].one(".vc-content");e.scrollTop = e.scrollHeight - e.offsetHeight;
        } }, { key: "clearLog", value: function value() {
          this.reqList = {};for (var e in this.domList) {
            this.domList[e].remove(), this.domList[e] = void 0;
          }this.domList = {}, this.renderHeader();
        } }, { key: "renderHeader", value: function value() {
          var e = Object.keys(this.reqList).length,
              t = d["default"].render(m["default"], { count: e }),
              o = d["default"].one(".vc-log", this.$tabbox);this.$header ? this.$header.parentNode.replaceChild(t, this.$header) : o.parentNode.insertBefore(t, o), this.$header = t;
        } }, { key: "updateRequest", value: function value(e, t) {
          var o = Object.keys(this.reqList).length,
              n = this.reqList[e] || {};for (var l in t) {
            n[l] = t[l];
          }if (this.reqList[e] = n, this.isReady) {
            var i = { url: n.url, status: n.status || "-", type: "-", costTime: n.costTime > 0 ? n.costTime + "ms" : "-", header: n.header, response: v.htmlEncode(n.response) };n.readyState <= 1 ? i.status = "Pending" : n.readyState < 4 && (i.status = "Loading");var r = d["default"].render(_["default"], i),
                a = this.domList[e];n.status >= 400 && d["default"].addClass(d["default"].one(".vc-group-preview", r), "vc-table-row-error"), a ? a.parentNode.replaceChild(r, a) : d["default"].one(".vc-log", this.$tabbox).insertAdjacentElement("beforeend", r), this.domList[e] = r;var c = Object.keys(this.reqList).length;c != o && this.renderHeader(), this.isInBottom && this.scrollToBottom();
          }
        } }, { key: "mockAjax", value: function value() {
          var e = window.XMLHttpRequest;if (e) {
            var t = this,
                o = window.XMLHttpRequest.prototype.open,
                n = window.XMLHttpRequest.prototype.send;t._open = o, t._send = n, window.XMLHttpRequest.prototype.open = function () {
              var e = this,
                  n = [].slice.call(arguments),
                  l = n[1],
                  i = t.getUniqueID();e._requestID = i;var r = e.onreadystatechange || function () {};return e.onreadystatechange = function () {
                var o = t.reqList[i] || {};if (o.url = l, o.readyState = e.readyState, 0 == e.readyState) o.startTime = +new Date();else if (1 == e.readyState) o.startTime = +new Date();else if (2 == e.readyState) {
                  o.header = {};for (var n = e.getAllResponseHeaders() || "", a = n.split("\n"), c = 0; c < a.length; c++) {
                    var s = a[c];if (s) {
                      var d = s.split(": "),
                          u = d[0],
                          v = d.slice(1).join(": ");o.header[u] = v;
                    }
                  }
                } else 3 == e.readyState || 4 == e.readyState && (o.status = e.status, o.endTime = +new Date(), o.costTime = o.endTime - (o.startTime || o.endTime), o.response = e.response);return e._noVConsole || t.updateRequest(i, o), r.apply(e, arguments);
              }, o.apply(e, n);
            };
          }
        } }, { key: "getUniqueID", value: function value() {
          var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = 16 * Math.random() | 0,
                o = "x" == e ? t : 3 & t | 8;return o.toString(16);
          });return e;
        } }]), t;
    }(p["default"]);t["default"] = w, e.exports = t["default"];
  }, function (e, t) {
    e.exports = "<div class=vc-table> <div class=vc-log></div> </div>";
  }, function (e, t) {
    e.exports = '<dl class=vc-table-row> <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd> <dd class=vc-table-col>Status</dd> <dd class=vc-table-col>Time</dd> </dl>';
  }, function (e, t) {
    e.exports = '<div class=vc-group> <dl class="vc-table-row vc-group-preview"> <dd class="vc-table-col vc-table-col-4">{{url}}</dd> <dd class=vc-table-col>{{status}}</dd> <dd class=vc-table-col>{{costTime}}</dd> </dl> <div class=vc-group-detail> <div> <dl class="vc-table-row vc-left-border"> <dt class="vc-table-col vc-table-col-title">Headers</dt> </dl> {{for (var key in header)}} <div class="vc-table-row vc-left-border vc-small"> <div class="vc-table-col vc-table-col-2">{{key}}</div> <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div> </div> {{/for}} </div> <div> <dl class="vc-table-row vc-left-border"> <dt class="vc-table-col vc-table-col-title">Response</dt> </dl> <div class="vc-table-row vc-left-border vc-small"> <pre class="vc-table-col vc-max-height vc-min-height">{{response}}</pre> </div> </div> </div> </div>';
  }]);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_main__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__empty_main__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__postmessage_main__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lifecycle_main__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sync_main__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__result_main__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vconsole__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vconsole___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vconsole__);









window.addEventListener('unhandledrejection', function (event) {
  console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason);
});

var _search2obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_utils__["e" /* search2obj */])(),
    _search2obj$step = _search2obj.step,
    step = _search2obj$step === undefined ? '0' : _search2obj$step;

(function main() {
  var _discriminant, _match, _brokenOut;

  return Promise.resolve().then(function () {
    _discriminant = step;
    _match = false;
    _brokenOut = false;

    if (!_brokenOut && (_match || '0' === _discriminant)) {
      return Promise.resolve().then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__global_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__empty_main__["a" /* default */])();
      }).then(function () {
        return;
      });
    }
  }).then(function () {
    if (!_brokenOut && (_match || '1' === _discriminant)) {
      return Promise.resolve().then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__lifecycle_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__postmessage_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__sync_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__result_main__["a" /* default */])();
      }).then(function () {
        _brokenOut = true;
        _match = true;
      });
    }
  }).then(function () {});
})();

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })
/******/ ]);