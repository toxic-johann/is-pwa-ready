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
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.4.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
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
/* harmony export (immutable) */ __webpack_exports__["i"] = obj2search;
/* harmony export (immutable) */ __webpack_exports__["h"] = promisifyOneTimeEventListener;
/* harmony export (immutable) */ __webpack_exports__["g"] = uuid;
/* unused harmony export S4 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_assert__ = __webpack_require__(9);
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

// 生成uuid
function uuid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
// 生成四个随机数
function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__indexeddb_js__ = __webpack_require__(20);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0__indexeddb_js__["a" /* default */]({
  name: 'test',
  version: 1,
  objectStores: ['feature', 'info']
}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1),
    core = __webpack_require__(0),
    hide = __webpack_require__(12),
    redefine = __webpack_require__(37),
    ctx = __webpack_require__(28),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
      key,
      own,
      out,
      exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(13),
    defined = __webpack_require__(10);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 9 */
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

var util = __webpack_require__(50);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(33),
    createDesc = __webpack_require__(36);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(35),
    enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(14),
    toIObject = __webpack_require__(8),
    isEnum = __webpack_require__(15).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it),
        keys = getKeys(O),
        length = keys.length,
        i = 0,
        result = [],
        key;
    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_object_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_fn_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_fn_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_entries__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_fn_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_object_assign__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_fn_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_fn_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assert__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_assert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_assert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_utils__ = __webpack_require__(2);
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
var behaviors = ['add', 'put', 'get', 'getAll', 'getAllKeys', 'clear'].reduce(function (behaviors, key) {
  behaviors[key] = function (objectStore) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var request = objectStore[key].apply(objectStore, args);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_utils__["a" /* isPromise */])(request)) {
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

    __WEBPACK_IMPORTED_MODULE_3_assert___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_utils__["b" /* isString */])(name), 'name must to be String');
    __WEBPACK_IMPORTED_MODULE_3_assert___default()(Array.isArray(objectStores), 'objectStores must to be Array');
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
          __WEBPACK_IMPORTED_MODULE_3_assert___default()(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_utils__["b" /* isString */])(setting) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_utils__["c" /* isObject */])(setting), 'value in objectStores Array must be String or Object');

          var _ref3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_utils__["b" /* isString */])(setting) ? { name: setting } : setting,
              name = _ref3.name,
              _ref3$indexs = _ref3.indexs,
              indexs = _ref3$indexs === undefined ? [] : _ref3$indexs,
              option = _ref3.option;

          __WEBPACK_IMPORTED_MODULE_3_assert___default()(Array.isArray(indexs), 'indexs attr of objectStores can only be Array');
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
module.exports = __webpack_require__(0).Object.entries;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
module.exports = __webpack_require__(0).Object.values;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(8),
    toLength = __webpack_require__(41),
    toIndex = __webpack_require__(40);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;
    // Array#includes uses SameValueZero equality algorithm
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
      // Array#toIndex ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    document = __webpack_require__(1).document
// in old IE typeof document.createElement is 'object'
,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(29)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)

var getKeys = __webpack_require__(14),
    gOPS = __webpack_require__(34),
    pIE = __webpack_require__(15),
    toObject = __webpack_require__(42),
    IObject = __webpack_require__(13),
    $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {},
      B = {},
      S = Symbol(),
      K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target),
      aLen = arguments.length,
      index = 1,
      getSymbols = gOPS.f,
      isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]),
        keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
        length = keys.length,
        j = 0,
        key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(25),
    IE8_DOM_DEFINE = __webpack_require__(31),
    toPrimitive = __webpack_require__(43),
    dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11),
    toIObject = __webpack_require__(8),
    arrayIndexOf = __webpack_require__(26)(false),
    IE_PROTO = __webpack_require__(38)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1),
    hide = __webpack_require__(12),
    has = __webpack_require__(11),
    SRC = __webpack_require__(18)('src'),
    TO_STRING = 'toString',
    $toString = Function[TO_STRING],
    TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(0).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else {
    if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else {
      if (O[key]) O[key] = val;else hide(O, key, val);
    }
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(39)('keys'),
    uid = __webpack_require__(18);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17),
    max = Math.max,
    min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(10);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(32) });

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5),
    $entries = __webpack_require__(16)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5),
    $values = __webpack_require__(16)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isBuffer(arg) {
  return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
};

/***/ }),
/* 50 */
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

exports.isBuffer = __webpack_require__(49);

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
exports.inherits = __webpack_require__(47);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19), __webpack_require__(48)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    }(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  }(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return featureKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return infoKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return copyTips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return testTips; });
var featureKeys = ['Promise', 'Request', 'Response', 'indexedDB', 'indexedDB.getAll', 'navigator.serviceWorker', 'Registered', 'installEvent', 'installEvent.waitUntil', 'self.skipWaiting', 'oncontrollerchange', 'navigator.serviceWorker.ready', 'activateEvent', 'activateEvent.waitUntil', 'clients.claim', 'lifecycle', 'clients.matchAll', 'Unregistered', 'fetch', 'fetchEvent', 'fetchEvent.request', 'fetchEvent.respondWith', 'Cache', 'caches', 'cache.add', 'cache.addAll', 'cache.delete', 'cache.match', 'cache.put', 'cache.keys', 'caches.delete', 'caches.has', 'caches.open', 'postMessage', 'main-msg-got', 'main-msg-got-by', 'main-msg-send', 'sw-msg-got', 'sw-msg-send', 'sw-msg-send-by', 'syncEvent', 'Notification', 'pushManager.subscribe', 'pushManager.getSubscription', 'pushManager.permissionState', 'pushSubscription.unsubscribe'];
var infoKeys = ['browser', 'os', 'device'];

var info = {
  totalSchedule: 0,
  timeoutTimer: null
};

var copyTips = window.SD.copyTips;
var testTips = window.SD.testTips;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /* , mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike === null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T = void 0;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue = void 0;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}
document.querySelector('.lang-switch').addEventListener('click', function (evt) {
  evt.preventDefault();
  var lang = Array.from(evt.target.classList).indexOf('zh') > -1 ? 'zh' : 'en';
  var date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  document.cookie = 'lang=' + lang + '; expires=' + date.toUTCString + '; path=/';
  location.search = '';
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function _interopRequireWildcard(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
};

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = __webpack_require__(55);

var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(51);

var _defaultParams = __webpack_require__(58);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = __webpack_require__(95);

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
}(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);

var list = ['Request', 'Response', 'fetch', 'Cache', 'caches', 'Promise', 'Notification', 'indexedDB', 'indexedDB.getAll'];
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
        if (feature !== 'indexedDB.getAll') {
          result[feature] = Number(!!context[feature]);
        } else {
          return Promise.resolve().then(function () {
            return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].getAll('feature');
          }).then(function (_resp) {
            allTest = _resp;

            result['indexedDB.getAll'] = Number(!!allTest);
          }).catch(function (err) {
            console.error(err);
            result['indexedDB.getAll'] = 0;
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Raven = void 0;
if (false) {
  Raven = require('raven-js');
  Raven.config('https://9bd060da7aa44954b3c6ced68ffd00cc@sentry.io/173014').install();
  window.addEventListener('unhandledrejection', function (event) {
    Raven.captureException(event.reason);
    console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason);
  });
} else {
  Raven = {
    context: {},
    setUserContext: function setUserContext(context) {
      Object.assign(this.context, context);
    },
    captureMessage: function captureMessage(msg) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$level = _ref.level,
          level = _ref$level === undefined ? 'error' : _ref$level;

      console[level] ? console[level](msg, this.context) : console.log(msg, this.context);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Raven);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

/***/ }),
/* 59 */
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

/***/ }),
/* 60 */
/***/ (function(module, exports) {

(function (self) {
  'use strict';

  if (self.fetch) {
    return;
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && function () {
      try {
        new Blob();
        return true;
      } catch (e) {
        return false;
      }
    }(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

    var isDataView = function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    };

    var isArrayBufferView = ArrayBuffer.isView || function (obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value;
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function next() {
        var value = items.shift();
        return { done: value === undefined, value: value };
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function () {
        return iterator;
      };
    }

    return iterator;
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function (value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function (header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function (name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function (name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ',' + value : value;
  };

  Headers.prototype['delete'] = function (name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function (name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null;
  };

  Headers.prototype.has = function (name) {
    return this.map.hasOwnProperty(normalizeName(name));
  };

  Headers.prototype.set = function (name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function (callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push(name);
    });
    return iteratorFor(items);
  };

  Headers.prototype.values = function () {
    var items = [];
    this.forEach(function (value) {
      items.push(value);
    });
    return iteratorFor(items);
  };

  Headers.prototype.entries = function () {
    var items = [];
    this.forEach(function (value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items);
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'));
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function (resolve, reject) {
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
    });
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise;
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise;
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('');
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0);
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer;
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function (body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type');
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function () {
        var rejected = consumed(this);
        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob');
        } else {
          return Promise.resolve(new Blob([this._bodyText]));
        }
      };

      this.arrayBuffer = function () {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
        } else {
          return this.blob().then(readBlobAsArrayBuffer);
        }
      };
    }

    this.text = function () {
      var rejected = consumed(this);
      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text');
      } else {
        return Promise.resolve(this._bodyText);
      }
    };

    if (support.formData) {
      this.formData = function () {
        return this.text().then(decode);
      };
    }

    this.json = function () {
      return this.text().then(JSON.parse);
    };

    return this;
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method;
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }
    this._initBody(body);
  }

  Request.prototype.clone = function () {
    return new Request(this, { body: this._bodyInit });
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function (bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form;
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function (line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers;
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function () {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    });
  };

  Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function (url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function (input, init) {
    return new Promise(function (resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function () {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function (value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    });
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);


var list = ['cache.add', 'cache.addAll', 'cache.delete', 'cache.match', 'cache.put', 'cache.keys', 'caches.delete', 'caches.has', 'caches.open'];
function genWaiter() {
  return Promise.race([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function () {}, navigator.serviceWorker, 'controllerchange'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000)]);
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

  var i, hasSW, waiter, reg;
  return Promise.resolve().then(function () {
    i = list.length - 1;
    return _recursive();
  }).then(function () {
    hasSW = !!navigator.serviceWorker;

    if (!!hasSW) {
      return Promise.resolve().then(function () {
        waiter = genWaiter();
        return navigator.serviceWorker.register('/auto/cache-sw.js', { scope: '/auto/' });
      }).then(function (_resp) {
        reg = _resp;
        return waiter;
      }).then(function () {
        return reg.unregister();
      }).then(function () {
        console.log('cache test finished');
      });
    }
  }).then(function () {});
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils__ = __webpack_require__(2);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var search, _search$step, step, hasSW;

  return Promise.resolve().then(function () {
    search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils__["e" /* search2obj */])();
    _search$step = search.step;
    step = _search$step === undefined ? 0 : _search$step;

    step = parseInt(step);
    step++;
    hasSW = !!navigator.serviceWorker;

    if (hasSW) {
      return navigator.serviceWorker.register('/auto/empty-sw.js', { scope: '/auto/' });
    }
  }).then(function () {
    location.search = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils__["i" /* obj2search */])(Object.assign(search, { step: step }));
  });
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ua_parser_js__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ua_parser_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ua_parser_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(3);


var parser = new __WEBPACK_IMPORTED_MODULE_0_ua_parser_js___default.a();

var _parser$getResult = parser.getResult(),
    browser = _parser$getResult.browser,
    os = _parser$getResult.os,
    device = _parser$getResult.device;

document.querySelector('.browser span').innerHTML = browser.name + ' ' + browser.version;
document.querySelector('.os span').innerHTML = os.name + ' ' + os.version;
document.querySelector('.device span').innerHTML = device.type + ' ' + device.model + ' ' + device.vendor;
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return Promise.resolve().then(function () {
    return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('info', JSON.stringify(browser), 'browser');
  }).then(function () {
    return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('info', JSON.stringify(os), 'os');
  }).then(function () {
    return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('info', JSON.stringify(device), 'device');
  }).then(function () {});
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__test__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function () {
  var hasSW, sw;
  return Promise.resolve().then(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__test__["a" /* default */])(window, 0);
  }).then(function () {
    hasSW = !!navigator.serviceWorker;
    // test if we suggest navigator.serviceWorker

    return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('feature', Number(hasSW), 'navigator.serviceWorker');
  }).then(function () {
    if (!!hasSW) {
      return Promise.resolve().then(function () {
        return navigator.serviceWorker.register('/auto/global-sw.js', { scope: '/auto/' });
      }).then(function (_resp) {
        sw = _resp;

        console.log('Registered!', sw);
        return __WEBPACK_IMPORTED_MODULE_1_store__["a" /* default */].put('feature', 1, 'Registered');
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils__["d" /* sleep */])(3000);
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var hasSW, reg;
  return Promise.resolve().then(function () {
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].clear('feature');
  }).then(function () {
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].clear('info');
  }).then(function () {
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('info', 0, 'schedule');
  }).then(function () {
    hasSW = !!navigator.serviceWorker;

    if (!!hasSW) {
      return Promise.resolve().then(function () {
        return navigator.serviceWorker.getRegistration();
      }).then(function (_resp) {
        reg = _resp;

        if (reg) {
          return Promise.resolve().then(function () {
            return reg.unregitster;
          }).then(function (_resp) {
            _resp && reg.unregitster();
          });
        }
      });
    }
  }).then(function () {});
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);


var list = ['activateEvent', 'activateEvent.waitUntil', 'clients.claim', 'fetchEvent', 'installEvent', 'installEvent.waitUntil', 'navigator.serviceWorker', 'oncontrollerchange', 'self.skipWaiting'];
function controllerchangeCauseByNormalInstall(evt) {
  var score, activateWaitUntilScore, _test;

  return Promise.resolve().then(function () {
    console.log('serviceWorker now has a new activated one');
    console.log('this event will trigger after installEvent.waitUntil and before activateEvent.waitUntil');
    _test = !evt;

    if (_test) {
      return Promise.resolve().then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', 'oncontrollerchange');
      }).then(function (_resp) {
        score = _resp;
      });
    }
  }).then(function () {
    if (!(_test && parseFloat(score) === 1)) {
      return Promise.resolve().then(function () {
        if (_test) {
          return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, 'oncontrollerchange');
        } else {
          return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'oncontrollerchange');
        }
      }).then(function () {
        console.log('if has not activate controller, this should be trigger earlier that activated event');
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', 'activateEvent.waitUntil');
      }).then(function (_resp) {
        activateWaitUntilScore = _resp;

        if (activateWaitUntilScore && parseFloat(activateWaitUntilScore) > 0) {
          console.error('the activateEvent.waitUntil trigger before oncontrollerchange');
          return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', activateWaitUntilScore, 'activateEvent.waitUntil');
        }
      });
    }
  }).then(function () {});
}
function genWaiter(fn) {
  return Promise.race([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(fn, navigator.serviceWorker, 'controllerchange'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000).then(fn)]);
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

  function _recursive2() {
    if (_i < list.length) {
      return Promise.resolve().then(function () {
        key = list[_i];
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', key);
      }).then(function (_resp) {
        score = _resp;

        sum += parseFloat(score);
        _i++;
        return _recursive2();
      });
    }
  }

  var i, hasSW, waiter, reg, activateWaitUntilScore, response, clarify, clientsclaimScore, sum, _i, key, score, _test2;

  return Promise.resolve().then(function () {
    __webpack_require__(60);
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
        navigator.serviceWorker.ready.then(function () {
          return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'navigator.serviceWorker.ready');
        });
        waiter = genWaiter(controllerchangeCauseByNormalInstall);
        // register test, including install event, controllerchange, activate event

        return navigator.serviceWorker.register('/auto/lifecycle-sw.js', { scope: '/auto/' });
      }).then(function (_resp) {
        reg = _resp;

        console.log('Registered!', reg);
        // wait for actived event fininshed
        return waiter;
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000);
      }).then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', 'activateEvent.waitUntil');
      }).then(function (_resp) {
        activateWaitUntilScore = _resp;
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', (parseFloat(activateWaitUntilScore) || 0) + 0.5, 'activateEvent.waitUntil');
      }).then(function () {
        return fetch('/whoareyou.json');
      }).then(function (_resp) {
        response = _resp;
        _test2 = response.ok;
        // unregister test

        if (_test2) {
          return Promise.resolve().then(function () {
            return response.json();
          }).then(function (_resp) {
            clarify = _resp;

            console.log('clarify who controll the page', clarify);
          });
        }
      }).then(function () {
        if (_test2 && clarify['i am'] === 'lifecycle-sw') {
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
        sum = 0;
        _i = 0;
        return _recursive2();
      }).then(function () {
        sum /= list.length;
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', sum, 'lifecycle');
      });
    }
  }).then(function () {});
});

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);


var messageChannel = void 0;
function genWaiter() {
  var tasks = [];
  if (window.MessageChannel) {
    messageChannel = new MessageChannel();
    console.log(messageChannel.port1.addEventListener);
    // tasks.push(promisifyOneTimeEventListener(async event => {
    //   console.log('Got reply from serviceWorker via channel', event.data)
    //   await store.put('feature', 0.8, 'main-msg-got')
    //   await store.put('feature', 'messageChannel.port1', 'main-msg-got-by')
    // }, messageChannel.port1, 'message'))
    // it's better to use onmessage as some version may be addEventListener bug
    messageChannel.port1.onmessage = function (event) {
      return Promise.resolve().then(function () {
        console.log('Got reply from serviceWorker via channel', event.data);
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0.8, 'main-msg-got');
      }).then(function () {
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 'messageChannel.port1', 'main-msg-got-by');
      }).then(function () {});
    };
    // messageChannel.port1.addEventListener('message', async event => {
    //   console.log('Got reply from serviceWorker via channel', event.data)
    //   await store.put('feature', 0.8, 'main-msg-got')
    //   await store.put('feature', 'messageChannel.port1', 'main-msg-got-by')
    // })
  }
  return Promise.race(tasks.concat([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function (error) {
    return Promise.resolve().then(function () {
      console.error(error);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, 'main-msg-got');
    }).then(function () {});
  }, window, 'error'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function (event) {
    return Promise.resolve().then(function () {
      console.warn('Got reply from serviceWorker via window', event.data);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0.5, 'main-msg-got');
    }).then(function () {
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 'window', 'main-msg-got-by');
    }).then(function () {});
  }, window, 'message'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function (event) {
    return Promise.resolve().then(function () {
      console.log('Got reply from serviceWorker via navigator.serviceWorker', event.data);
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'main-msg-got');
    }).then(function () {
      return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 'navigator.serviceWorker', 'main-msg-got-by');
    }).then(function () {});
  }, navigator.serviceWorker, 'message')]));
}
/* harmony default export */ __webpack_exports__["a"] = (function () {
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

  var hasSW, messageWaiter, activatedWaiter, reg, list, point, i, bias;
  return Promise.resolve().then(function () {
    hasSW = !!navigator.serviceWorker;

    if (!!hasSW) {
      return Promise.resolve().then(function () {
        messageWaiter = genWaiter();

        console.log(navigator.serviceWorker);
        activatedWaiter = Promise.race([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function (evt) {
          return console.log('controllerchange');
        }, navigator.serviceWorker, 'controllerchange'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000)]);
        return navigator.serviceWorker.register('/auto/postmessage-sw.js', { scope: '/auto/' });
      }).then(function (_resp) {
        reg = _resp;

        console.log('Registered!', reg);
        return activatedWaiter;
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
        return Promise.race([messageWaiter, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000)]);
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
    }
  }).then(function () {});
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);


var list = ['pushManager.subscribe', 'pushManager.getSubscription', 'pushSubscription.unsubscribe', 'pushManager.permissionState', 'pushManager.denied'];
function genWaiter() {
  return Promise.race([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function () {}, navigator.serviceWorker, 'controllerchange'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000)]);
}

function urlB64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
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

  var i, hasSW, waiter, reg, pushManager, permissionState, subscription, sub, p256dh, auth;
  return Promise.resolve().then(function () {
    __webpack_require__(60);
    i = list.length - 1;
    return _recursive();
  }).then(function () {
    hasSW = !!navigator.serviceWorker;

    if (!!hasSW) {
      return Promise.resolve().then(function () {
        waiter = genWaiter();
        return navigator.serviceWorker.register('/auto/push-sw.js', { scope: '/auto/' });
      }).then(function (_resp) {
        reg = _resp;
        return waiter;
      }).then(function () {
        pushManager = reg.pushManager;

        if (!pushManager) {
          console.log('no pushManager');
          return reg.unregister();
        } else {
          return Promise.resolve().then(function () {
            console.log('pushManager found');
            return Promise.resolve().then(function () {
              return pushManager.permissionState({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array('BDm6z7ImnFDW6GJ3bwtFdR4ifKGE0CVGXNRfGJhWGm8gwX1sXHH9uq3zo6mYd7fkjVrzfiDHhS5gYfCbxj2g-Bo')
              });
            }).then(function (_resp) {
              permissionState = _resp;
              return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'pushManager.permissionState');
            }).then(function () {
              return reg.unregister();
            }).then(function () {
              return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'pushManager.denied');
            }).then(function () {
              if (permissionState === 'denied') {
                console.log('permission denied');

                return;
              }
            }).catch(function (err) {
              console.error(err);
            });
          }).then(function () {
            return pushManager.getSubscription();
          }).then(function (_resp) {
            subscription = _resp;
            return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'pushManager.getSubscription');
          }).then(function () {
            console.log('pushManager.getSubscription work', subscription);
            if (subscription) {
              return Promise.resolve().then(function () {
                return subscription.unsubscribe();
              }).then(function () {
                return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'pushSubscription.unsubscribe');
              }).then(function () {
                console.log('older subscription remove');
              });
            }
          }).then(function () {
            console.log('ready to subscribe');
            sub = void 0;

            try {
              pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlB64ToUint8Array('BDm6z7ImnFDW6GJ3bwtFdR4ifKGE0CVGXNRfGJhWGm8gwX1sXHH9uq3zo6mYd7fkjVrzfiDHhS5gYfCbxj2g-Bo')
              }).then(function (sth) {
                sub = sth;
              });
            } catch (err) {
              console.error(err);
            }
            // when i use Promise.race on firefox
            // it do not work as i want
            // so i give up and use sleep
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(5000);
          }).then(function () {
            if (sub) {
              return Promise.resolve().then(function () {
                console.log('pushManager.subscribe work', sub);
                p256dh = btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('p256dh'))));
                auth = btoa(String.fromCharCode.apply(null, new Uint8Array(sub.getKey('auth'))));
                return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'pushManager.subscribe');
              }).then(function () {
                return Promise.resolve().then(function () {
                  return fetch('/askforpush', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      endpoint: sub.endpoint,
                      p256dh: p256dh,
                      auth: auth
                    })
                  });
                }).catch(function (err) {
                  console.error(err);
                });
              }).then(function () {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(5000);
              }).then(function () {
                return sub.unsubscribe();
              }).then(function () {
                console.log('subscription.unsubscribe work');
                return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 1, 'pushSubscription.unsubscribe');
              }).then(function () {
                return reg.unregister();
              }).then(function () {
                console.log('unregister');
              });
            } else {
              return Promise.resolve().then(function () {
                return reg.unregister();
              }).then(function () {
                console.log('unregister');
                return;
              });
            }
          });
        }
      });
    }
  }).then(function () {});
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven__ = __webpack_require__(57);




function genRGB(score) {
  score = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["f" /* isNumeric */])(score) ? score : 0;
  return [~~(141 - 141 * score), ~~(49 + 101 * score), 24];
}

/* harmony default export */ __webpack_exports__["a"] = (function () {
  function _recursive() {
    if (i < __WEBPACK_IMPORTED_MODULE_2__helper__["c" /* featureKeys */].length) {
      return Promise.resolve().then(function () {
        key = __WEBPACK_IMPORTED_MODULE_2__helper__["c" /* featureKeys */][i];
        return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('feature', key);
      }).then(function (_resp) {
        scoreStr = _resp;
        isNote = scoreStr && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["f" /* isNumeric */])(scoreStr);
        score = isNote ? scoreStr : parseFloat(scoreStr || 0);
        _rgb = isNote ? [0, 0, 0] : genRGB(score);

        fullScore = isNote ? fullScore : fullScore + 1;
        totalScore = isNote ? totalScore : totalScore + score;
        li = '\n    <tr style="color: rgb(' + _rgb.toString() + ')">\n      <td class="key">' + key + '</td>\n      <td class="' + (isNote ? 'note' : 'score') + '">' + (isNote ? score : score * 100) + '</td>\n    </tr>\n    ';

        result[key] = score;
        resultHTML += li;
        i++;
        return _recursive();
      });
    }
  }

  var resultHTML, fullScore, totalScore, result, i, key, scoreStr, isNote, score, _rgb, li, rank, rgb, schedule;

  return Promise.resolve().then(function () {
    __WEBPACK_IMPORTED_MODULE_2__helper__["a" /* info */].timeoutTimer && clearTimeout(__WEBPACK_IMPORTED_MODULE_2__helper__["a" /* info */].timeoutTimer);
    document.querySelector('tbody').innerHTML = '';
    resultHTML = '';
    fullScore = 0;
    totalScore = 0;
    result = {};
    i = 0;
    return _recursive();
  }).then(function () {
    document.querySelector('.features tbody').innerHTML = resultHTML;
    rank = totalScore / fullScore;
    rgb = genRGB(rank);

    document.querySelector('.result').style.backgroundColor = 'rgb(' + rgb.toString() + ')';
    document.querySelector('.total-score').innerHTML = ~~(rank * 100);
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].get('info', 'schedule');
  }).then(function (_resp) {
    schedule = _resp;

    schedule = parseFloat(schedule || 0);
    schedule = ++schedule;
    document.querySelector('.schedule span').innerHTML = ~~(schedule / __WEBPACK_IMPORTED_MODULE_2__helper__["a" /* info */].totalSchedule * 100) + '%';
    return __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('info', schedule, 'schedule');
  }).then(function () {
    if (schedule !== __WEBPACK_IMPORTED_MODULE_2__helper__["a" /* info */].totalSchedule) {
      __WEBPACK_IMPORTED_MODULE_2__helper__["a" /* info */].timeoutTimer = setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_3_raven__["a" /* default */].setUserContext({ result: result });
        __WEBPACK_IMPORTED_MODULE_3_raven__["a" /* default */].captureMessage('test-failed-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* uuid */])(), {
          level: 'warning'
        });
        document.querySelector('.schedule').innerHTML = __WEBPACK_IMPORTED_MODULE_2__helper__["e" /* testTips */].fail;
      }, 15000);
    }
  });
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert_dist_sweetalert_css__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert_dist_sweetalert_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert_dist_sweetalert_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_raven__ = __webpack_require__(57);







/* harmony default export */ __webpack_exports__["a"] = (function () {
  function setSummary(kind, keys) {
    function _recursive() {
      var _test;

      return Promise.resolve().then(function () {
        _test = i < keys.length;

        if (_test) {
          return Promise.resolve().then(function () {
            key = keys[i];
            return __WEBPACK_IMPORTED_MODULE_2_store__["a" /* default */].get(kind, key);
          }).then(function (_resp) {
            score = _resp;
          });
        }
      }).then(function () {
        if (_test && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["f" /* isNumeric */])(score)) {
          summary[kind][key] = parseFloat(score);
        } else {
          if (_test) {
            try {
              summary[kind][key] = JSON.parse(score);
            } catch (error) {
              summary[kind][key] = score;
            }
          }
        }

        if (_test) {
          i++;
          return _recursive();
        }
      });
    }

    var i, key, score;
    return Promise.resolve().then(function () {
      i = 0;
      return _recursive();
    }).then(function () {});
  }
  var summary, json, clipboard;
  return Promise.resolve().then(function () {
    summary = {
      info: {},
      feature: {}
    };
    return setSummary('info', __WEBPACK_IMPORTED_MODULE_0__helper__["b" /* infoKeys */]);
  }).then(function () {
    return setSummary('feature', __WEBPACK_IMPORTED_MODULE_0__helper__["c" /* featureKeys */]);
  }).then(function () {
    json = JSON.stringify(summary, null, 2);

    document.querySelector('.summary code').innerHTML = json;
    clipboard = new __WEBPACK_IMPORTED_MODULE_3_clipboard___default.a(document.querySelector('.summary button'), {
      text: function text() {
        return json;
      }
    });

    clipboard.on('success', function (evt) {
      return __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
        title: __WEBPACK_IMPORTED_MODULE_0__helper__["d" /* copyTips */].success.title,
        type: 'success',
        showCancelButton: true,
        confirmButtonText: __WEBPACK_IMPORTED_MODULE_0__helper__["d" /* copyTips */].success.confirmButtonText
      }, function (isConfirm) {
        if (isConfirm) {
          location.href = 'https://github.com/toxic-johann/is-pwa-ready/issues';
        }
      });
    });
    clipboard.on('error', function (evt) {
      return __WEBPACK_IMPORTED_MODULE_4_sweetalert___default()({
        title: __WEBPACK_IMPORTED_MODULE_0__helper__["d" /* copyTips */].error.title,
        text: __WEBPACK_IMPORTED_MODULE_0__helper__["d" /* copyTips */].error.text,
        type: 'error'
      });
    });
    document.querySelector('.summary').classList.add('show');
    __WEBPACK_IMPORTED_MODULE_6_raven__["a" /* default */].setUserContext(summary);
    __WEBPACK_IMPORTED_MODULE_6_raven__["a" /* default */].captureMessage('test-result-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["g" /* uuid */])(), {
      level: 'info'
    });
    return summary;
  });
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var hasSW, activatedWaiter, reg, tags;
  return Promise.resolve().then(function () {
    hasSW = !!navigator.serviceWorker;

    if (!!hasSW) {
      return Promise.resolve().then(function () {
        __WEBPACK_IMPORTED_MODULE_0_store__["a" /* default */].put('feature', 0, 'syncEvent');
        activatedWaiter = Promise.race([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["h" /* promisifyOneTimeEventListener */])(function (evt) {
          return console.log('controllerchange');
        }, navigator.serviceWorker, 'controllerchange'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["d" /* sleep */])(3000)]);
        return navigator.serviceWorker.register('/auto/sync-sw.js', { scope: '/auto/' });
      }).then(function (_resp) {
        reg = _resp;
        return activatedWaiter;
      }).then(function () {
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
      });
    }
  }).then(function () {});
});

/***/ }),
/* 72 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_index__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_main__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__empty_main__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__postmessage_main__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lifecycle_main__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sync_main__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__result_main__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__init_main__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__env_main__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__summary_main__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cache_main__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__push_main__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_css__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vconsole__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vconsole___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vconsole__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helper__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_views_common_raven__ = __webpack_require__(57);

















window.addEventListener('unhandledrejection', function (event) {
  console.warn('WARNING: Unhandled promise rejection. Shame on you! Reason: ' + event.reason);
});
__WEBPACK_IMPORTED_MODULE_15__helper__["a" /* info */].totalSchedule = 8;

var _search2obj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_utils__["e" /* search2obj */])(),
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__init_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__env_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__global_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__empty_main__["a" /* default */])();
      }).then(function () {
        return;
      });
    }
  }).then(function () {
    if (!_brokenOut && (_match || '1' === _discriminant)) {
      return Promise.resolve().then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__lifecycle_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__postmessage_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__sync_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__cache_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__push_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__result_main__["a" /* default */])();
      }).then(function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__summary_main__["a" /* default */])();
      }).then(function () {
        _brokenOut = true;
        _match = true;
      });
    }
  }).then(function () {});
})();

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(92)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('select'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.select);
        global.clipboardAction = mod.exports;
    }
})(this, function (module, _select) {
    'use strict';

    var _select2 = _interopRequireDefault(_select);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);

            this.resolveOptions(options);
            this.initSelection();
        }

        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */

        _createClass(ClipboardAction, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = options.action;
                this.container = options.container;
                this.emitter = options.emitter;
                this.target = options.target;
                this.text = options.text;
                this.trigger = options.trigger;

                this.selectedText = '';
            }
        }, {
            key: 'initSelection',
            value: function initSelection() {
                if (this.text) {
                    this.selectFake();
                } else if (this.target) {
                    this.selectTarget();
                }
            }
        }, {
            key: 'selectFake',
            value: function selectFake() {
                var _this = this;

                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                this.removeFake();

                this.fakeHandlerCallback = function () {
                    return _this.removeFake();
                };
                this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                this.fakeElem = document.createElement('textarea');
                // Prevent zooming on iOS
                this.fakeElem.style.fontSize = '12pt';
                // Reset box model
                this.fakeElem.style.border = '0';
                this.fakeElem.style.padding = '0';
                this.fakeElem.style.margin = '0';
                // Move element out of screen horizontally
                this.fakeElem.style.position = 'absolute';
                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                // Move element to the same position vertically
                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                this.fakeElem.style.top = yPosition + 'px';

                this.fakeElem.setAttribute('readonly', '');
                this.fakeElem.value = this.text;

                this.container.appendChild(this.fakeElem);

                this.selectedText = (0, _select2.default)(this.fakeElem);
                this.copyText();
            }
        }, {
            key: 'removeFake',
            value: function removeFake() {
                if (this.fakeHandler) {
                    this.container.removeEventListener('click', this.fakeHandlerCallback);
                    this.fakeHandler = null;
                    this.fakeHandlerCallback = null;
                }

                if (this.fakeElem) {
                    this.container.removeChild(this.fakeElem);
                    this.fakeElem = null;
                }
            }
        }, {
            key: 'selectTarget',
            value: function selectTarget() {
                this.selectedText = (0, _select2.default)(this.target);
                this.copyText();
            }
        }, {
            key: 'copyText',
            value: function copyText() {
                var succeeded = void 0;

                try {
                    succeeded = document.execCommand(this.action);
                } catch (err) {
                    succeeded = false;
                }

                this.handleResult(succeeded);
            }
        }, {
            key: 'handleResult',
            value: function handleResult(succeeded) {
                this.emitter.emit(succeeded ? 'success' : 'error', {
                    action: this.action,
                    text: this.selectedText,
                    trigger: this.trigger,
                    clearSelection: this.clearSelection.bind(this)
                });
            }
        }, {
            key: 'clearSelection',
            value: function clearSelection() {
                if (this.trigger) {
                    this.trigger.focus();
                }

                window.getSelection().removeAllRanges();
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.removeFake();
            }
        }, {
            key: 'action',
            set: function set() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                this._action = action;

                if (this._action !== 'copy' && this._action !== 'cut') {
                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
                }
            },
            get: function get() {
                return this._action;
            }
        }, {
            key: 'target',
            set: function set(target) {
                if (target !== undefined) {
                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }

                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        }

                        this._target = target;
                    } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                    }
                }
            },
            get: function get() {
                return this._target;
            }
        }]);

        return ClipboardAction;
    }();

    module.exports = ClipboardAction;
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(85), __webpack_require__(87), __webpack_require__(91)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
        global.clipboard = mod.exports;
    }
})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
    'use strict';

    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

    var _goodListener2 = _interopRequireDefault(_goodListener);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);

        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */
        function Clipboard(trigger, options) {
            _classCallCheck(this, Clipboard);

            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
        }

        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */

        _createClass(Clipboard, [{
            key: 'resolveOptions',
            value: function resolveOptions() {
                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                this.container = _typeof(options.container) === 'object' ? options.container : document.body;
            }
        }, {
            key: 'listenClick',
            value: function listenClick(trigger) {
                var _this2 = this;

                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                    return _this2.onClick(e);
                });
            }
        }, {
            key: 'onClick',
            value: function onClick(e) {
                var trigger = e.delegateTarget || e.currentTarget;

                if (this.clipboardAction) {
                    this.clipboardAction = null;
                }

                this.clipboardAction = new _clipboardAction2.default({
                    action: this.action(trigger),
                    target: this.target(trigger),
                    text: this.text(trigger),
                    container: this.container,
                    trigger: trigger,
                    emitter: this
                });
            }
        }, {
            key: 'defaultAction',
            value: function defaultAction(trigger) {
                return getAttributeValue('action', trigger);
            }
        }, {
            key: 'defaultTarget',
            value: function defaultTarget(trigger) {
                var selector = getAttributeValue('target', trigger);

                if (selector) {
                    return document.querySelector(selector);
                }
            }
        }, {
            key: 'defaultText',
            value: function defaultText(trigger) {
                return getAttributeValue('text', trigger);
            }
        }, {
            key: 'destroy',
            value: function destroy() {
                this.listener.destroy();

                if (this.clipboardAction) {
                    this.clipboardAction.destroy();
                    this.clipboardAction = null;
                }
            }
        }], [{
            key: 'isSupported',
            value: function isSupported() {
                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                var actions = typeof action === 'string' ? [action] : action;
                var support = !!document.queryCommandSupported;

                actions.forEach(function (action) {
                    support = support && !!document.queryCommandSupported(action);
                });

                return support;
            }
        }]);

        return Clipboard;
    }(_tinyEmitter2.default);

    /**
     * Helper function to retrieve attribute value.
     * @param {String} suffix
     * @param {Element} element
     */
    function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
            return;
        }

        return element.getAttribute(attribute);
    }

    module.exports = Clipboard;
});

/***/ }),
/* 87 */
/***/ (function(module, exports) {

function E() {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function on(name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function once(name, callback, ctx) {
    var self = this;
    function listener() {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback;
    return this.on(name, listener, ctx);
  },

  emit: function emit(name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function off(name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    liveEvents.length ? e[name] = liveEvents : delete e[name];

    return this;
  }
};

module.exports = E;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest(element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (element.matches(selector)) return element;
        element = element.parentNode;
    }
}

module.exports = closest;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(88);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function destroy() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    };
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function (e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    };
}

module.exports = delegate;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function (value) {
  return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function (value) {
  var type = Object.prototype.toString.call(value);

  return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function (value) {
  return typeof value === 'string' || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function (value) {
  var type = Object.prototype.toString.call(value);

  return type === '[object Function]';
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(90);
var delegate = __webpack_require__(89);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    } else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    } else if (is.string(target)) {
        return listenSelector(target, type, callback);
    } else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function destroy() {
            node.removeEventListener(type, callback);
        }
    };
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function (node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function destroy() {
            Array.prototype.forEach.call(nodeList, function (node) {
                node.removeEventListener(type, callback);
            });
        }
    };
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    } else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = __webpack_require__(55);

var _getModal = __webpack_require__(54);

var _hasClass$isDescendant = __webpack_require__(51);

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = __webpack_require__(51);

var _setFocusStyle = __webpack_require__(54);

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = __webpack_require__(55);

var _getModal$getInput$setFocusStyle = __webpack_require__(54);

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(51);

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _interopRequireWildcard = function _interopRequireWildcard(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
};

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(51);

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(55);

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(54);

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = __webpack_require__(93);

var _handleKeyDown = __webpack_require__(94);

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = __webpack_require__(58);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = __webpack_require__(96);

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, _swal;

exports['default'] = sweetAlert = _swal = function swal() {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations === 'undefined' ? 'undefined' : _typeof(customizations)) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + (typeof customizations === 'undefined' ? 'undefined' : _typeof(customizations)));
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  _swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = _swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if ((typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = _swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = _swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = _swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = _swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = _swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * UAParser.js v0.7.12
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION = '0.7.12',
        EMPTY = '',
        UNKNOWN = '?',
        FUNC_TYPE = 'function',
        UNDEF_TYPE = 'undefined',
        OBJ_TYPE = 'object',
        STR_TYPE = 'string',
        MAJOR = 'major',
        // deprecated
    MODEL = 'model',
        NAME = 'name',
        TYPE = 'type',
        VENDOR = 'vendor',
        VERSION = 'version',
        ARCHITECTURE = 'architecture',
        CONSOLE = 'console',
        MOBILE = 'mobile',
        TABLET = 'tablet',
        SMARTTV = 'smarttv',
        WEARABLE = 'wearable',
        EMBEDDED = 'embedded';

    ///////////
    // Helper
    //////////


    var util = {
        extend: function extend(regexes, extensions) {
            var margedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    margedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    margedRegexes[i] = regexes[i];
                }
            }
            return margedRegexes;
        },
        has: function has(str1, str2) {
            if (typeof str1 === "string") {
                return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
            } else {
                return false;
            }
        },
        lowerize: function lowerize(str) {
            return str.toLowerCase();
        },
        major: function major(version) {
            return (typeof version === 'undefined' ? 'undefined' : _typeof(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
        },
        trim: function trim(str) {
            return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        }
    };

    ///////////////
    // Map helper
    //////////////


    var mapper = {

        rgx: function rgx() {

            var result,
                i = 0,
                j,
                k,
                p,
                q,
                matches,
                match,
                args = arguments;

            // loop through all regexes maps
            while (i < args.length && !matches) {

                var regex = args[i],
                    // even sequence (0,2,4,..)
                props = args[i + 1]; // odd sequence (1,3,5,..)

                // construct object barebones
                if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === UNDEF_TYPE) {
                    result = {};
                    for (p in props) {
                        if (props.hasOwnProperty(p)) {
                            q = props[p];
                            if ((typeof q === 'undefined' ? 'undefined' : _typeof(q)) === OBJ_TYPE) {
                                result[q[0]] = undefined;
                            } else {
                                result[q] = undefined;
                            }
                        }
                    }
                }

                // try matching uastring with regexes
                j = k = 0;
                while (j < regex.length && !matches) {
                    matches = regex[j++].exec(this.getUA());
                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if ((typeof q === 'undefined' ? 'undefined' : _typeof(q)) === OBJ_TYPE && q.length > 0) {
                                if (q.length == 2) {
                                    if (_typeof(q[1]) == FUNC_TYPE) {
                                        // assign modified match
                                        result[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        result[q[0]] = q[1];
                                    }
                                } else if (q.length == 3) {
                                    // check whether function or regex
                                    if (_typeof(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        result[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        result[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length == 4) {
                                    result[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                result[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
            return result;
        },

        str: function str(_str, map) {

            for (var i in map) {
                // check if array
                if (_typeof(map[i]) === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (util.has(map[i][j], _str)) {
                            return i === UNKNOWN ? undefined : i;
                        }
                    }
                } else if (util.has(map[i], _str)) {
                    return i === UNKNOWN ? undefined : i;
                }
            }
            return _str;
        }
    };

    ///////////////
    // String map
    //////////////


    var maps = {

        browser: {
            oldsafari: {
                version: {
                    '1.0': '/8',
                    '1.2': '/1',
                    '1.3': '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/'
                }
            }
        },

        device: {
            amazon: {
                model: {
                    'Fire Phone': ['SD', 'KF']
                }
            },
            sprint: {
                model: {
                    'Evo Shift 4G': '7373KT'
                },
                vendor: {
                    'HTC': 'APA',
                    'Sprint': 'Sprint'
                }
            }
        },

        os: {
            windows: {
                version: {
                    'ME': '4.90',
                    'NT 3.11': 'NT3.51',
                    'NT 4.0': 'NT4.0',
                    '2000': 'NT 5.0',
                    'XP': ['NT 5.1', 'NT 5.2'],
                    'Vista': 'NT 6.0',
                    '7': 'NT 6.1',
                    '8': 'NT 6.2',
                    '8.1': 'NT 6.3',
                    '10': ['NT 6.4', 'NT 10.0'],
                    'RT': 'ARM'
                }
            }
        }
    };

    //////////////
    // Regex map
    /////////////


    var regexes = {

        browser: [[

        // Presto based
        /(opera\smini)\/([\w\.-]+)/i, // Opera Mini
        /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, // Opera Mobi/Tablet
        /(opera).+version\/([\w\.]+)/i, // Opera > 9.80
        /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
        ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
        ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
        ], [[NAME, 'Opera'], VERSION], [

        // Mixed
        /(kindle)\/([\w\.]+)/i, // Kindle
        /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
        // Lunascape/Maxthon/Netfront/Jasmine/Blazer

        // Trident based
        /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
        // Avant/IEMobile/SlimBrowser/Baidu
        /(?:ms|\()(ie)\s([\w\.]+)/i, // Internet Explorer

        // Webkit/KHTML based
        /(rekonq)\/([\w\.]+)*/i, // Rekonq
        /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i
        // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS
        ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
        ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
        ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
        ], [[NAME, 'Yandex'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
        ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
        ], [[NAME, 'WeChat'], VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
        ], [VERSION, [NAME, 'MIUI Browser']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
        ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
        ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
        // Chrome/OmniWeb/Arora/Tizen/Nokia
        /(qqbrowser)[\/\s]?([\w\.]+)/i
        // QQBrowser
        ], [NAME, VERSION], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i
        // UCBrowser
        ], [[NAME, 'UCBrowser'], VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
        ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
        ], [[NAME, 'Chrome'], VERSION], [/;fbav\/([\w\.]+);/i // Facebook App for iOS
        ], [VERSION, [NAME, 'Facebook']], [/fxios\/([\w\.-]+)/i // Firefox for iOS
        ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
        ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
        ], [VERSION, NAME], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
        ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, // Konqueror
        /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [

        // Gecko based
        /(navigator|netscape)\/([\w\.-]+)/i // Netscape
        ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, // Swiftfox
        /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
        // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
        /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
        // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
        /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, // Mozilla

        // Other
        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
        // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
        /(links)\s\(([\w\.]+)/i, // Links
        /(gobrowser)\/?([\w\.]+)*/i, // GoBrowser
        /(ice\s?browser)\/v?([\w\._]+)/i, // ICE Browser
        /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
        ], [NAME, VERSION]

        /* /////////////////////
        // Media players BEGIN
        ////////////////////////
         , [
         /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
        /(coremedia) v((\d+)[\w\._]+)/i
        ], [NAME, VERSION], [
         /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
        ], [NAME, VERSION], [
         /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
        ], [NAME, VERSION], [
         /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                            // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                            // NSPlayer/PSP-InternetRadioPlayer/Videos
        /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
        /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
        /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
        ], [NAME, VERSION], [
        /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
        ], [NAME, VERSION], [
         /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
        ], [[NAME, 'Flip Player'], VERSION], [
         /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                            // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
        ], [NAME], [
         /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                            // Gstreamer
        ], [NAME, VERSION], [
         /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
        /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                            // Java/urllib/requests/wget/cURL
        /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
        ], [NAME, VERSION], [
         /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
        ], [[NAME, /_/g, ' '], VERSION], [
         /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                            // MPlayer SVN
        ], [NAME, VERSION], [
         /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
        ], [NAME, VERSION], [
         /(mplayer)/i,                                                       // MPlayer (no other info)
        /(yourmuze)/i,                                                      // YourMuze
        /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
        ], [NAME], [
         /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
        ], [NAME, VERSION], [
         /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
        ], [NAME, VERSION], [
         /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
        ], [NAME, VERSION], [
         /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
        /(winamp)\s((\d+)[\w\.-]+)/i,
        /(winamp)mpeg\/((\d+)[\w\.-]+)/i
        ], [NAME, VERSION], [
         /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                            // inlight radio
        ], [NAME], [
         /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                            // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                            // SoundTap/Totem/Stagefright/Streamium
        ], [NAME, VERSION], [
         /(smp)((\d+)[\d\.]+)/i                                              // SMP
        ], [NAME, VERSION], [
         /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
        /(vlc)\/((\d+)[\w\.-]+)/i,
        /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
        /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
        /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
        ], [NAME, VERSION], [
         /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
        /(windows-media-player)\/((\d+)[\w\.-]+)/i
        ], [[NAME, /-/g, ' '], VERSION], [
         /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                            // Windows Media Server
        ], [VERSION, [NAME, 'Windows']], [
         /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
        ], [NAME, VERSION], [
         /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
        /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
        ], [[NAME, 'rad.io'], VERSION]
         //////////////////////
        // Media players END
        ////////////////////*/

        ],

        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
        ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
        ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
        ], [[ARCHITECTURE, 'ia32']], [

        // PocketPC mistakenly identified as PowerPC
        /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
        ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
        ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
        // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
        ], [[ARCHITECTURE, util.lowerize]]],

        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
        ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
        ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
        ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, // Archos
        /(hp).+(touchpad)/i, // HP TouchPad
        /(hp).+(tablet)/i, // HP Tablet
        /(kindle)\/([\w\.]+)/i, // Kindle
        /\s(nook)[\w\s]+build\/(\w+)/i, // Nook
        /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
        ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
        ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
        ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
        ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
        ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, // BlackBerry
        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
        // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Huawei/Meizu/Motorola/Polytron
        /(hp)\s([\w\s]+\w)/i, // HP iPAQ
        /(asus)-?(\w+)/i // Asus
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
        ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
        // Asus Tablets
        /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, // Sony
        /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Phone'], [TYPE, MOBILE]], [/\s(ouya)\s/i, // Ouya
        /(nintendo)\s([wids3u]+)/i // Nintendo
        ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
        ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
        ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
        ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
        ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, // HTC
        /(zte)-(\w+)*/i, // ZTE
        /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
        // Alcatel/GeeksPhone/Huawei/Lenovo/Nexian/Panasonic/Sony
        ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
        ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/(nexus\s6p)/i // Huawei Nexus 6P
        ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
        ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
        ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [

        // Motorola
        /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
        ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
        ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [// Samsung
        /smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
        ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, // Nokia
        /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
        ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
        ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
        ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, // LG
        /lg[e;\s\/-]+(\w+)*/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
        ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
        ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(glass)\s\d/i // Google Glass
        ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+(\w+)\s+build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
        /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, // Xiaomi Hongmi
        /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i // Xiaomi Mi
        ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+a000(1)\s+build/i // OnePlus
        ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/\s(tablet)[;\/]/i, // Unidentifiable Tablet
        /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
        ], [[TYPE, util.lowerize], VENDOR, MODEL]

        /*//////////////////////////
        // TODO: move to string map
        ////////////////////////////
         /(C6603)/i                                                          // Sony Xperia Z C6603
        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
        /(C6903)/i                                                          // Sony Xperia Z 1
        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
         /(R1001)/i                                                          // Oppo R1001
        ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [
        /(X9006)/i                                                          // Oppo Find 7a
        ], [[MODEL, 'Find 7a'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
        /(R2001)/i                                                          // Oppo YOYO R2001
        ], [[MODEL, 'Yoyo R2001'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
        /(R815)/i                                                           // Oppo Clover R815
        ], [[MODEL, 'Clover R815'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
         /(U707)/i                                                          // Oppo Find Way S
        ], [[MODEL, 'Find Way S'], [VENDOR, 'Oppo'], [TYPE, MOBILE]], [
         /(T3C)/i                                                            // Advan Vandroid T3C
        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
         /(V972M)/i                                                          // ZTE V972M
        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
         /////////////
        // END TODO
        ///////////*/

        ],

        engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
        ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, // Presto
        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m
        /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, // KHTML/Tasman/Links
        /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
        ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
        ], [VERSION, NAME]],

        os: [[

        // Windows based
        /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
        ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, // Windows RT
        /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, // Windows Phone
        /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [

        // Mobile/Embedded OS
        /\((bb)(10);/i // BlackBerry 10
        ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, // Blackberry
        /(tizen)[\/\s]([\w\.]+)/i, // Tizen
        /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
        // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
        /linux;.+(sailfish);/i // Sailfish OS
        ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
        ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
        ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
        ], [[NAME, 'Firefox OS'], VERSION], [

        // Console
        /(nintendo|playstation)\s([wids34portablevu]+)/i, // Nintendo/Playstation

        // GNU/Linux based
        /(mint)[\/\s\(]?(\w+)*/i, // Mint
        /(mageia|vectorlinux)[;\s]/i, // Mageia/VectorLinux
        /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
        // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
        // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
        /(hurd|linux)\s?([\w\.]+)*/i, // Hurd/Linux
        /(gnu)\s?([\w\.]+)*/i // GNU
        ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
        ], [[NAME, 'Chromium OS'], VERSION], [

        // Solaris
        /(sunos)\s?([\w\.]+\d)*/i // Solaris
        ], [[NAME, 'Solaris'], VERSION], [

        // BSD based
        /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
        ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
        ], [NAME, VERSION], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i // iOS
        ], [[NAME, 'iOS'], [VERSION, /_/g, '.']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
        ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

        // Other
        /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, // Solaris
        /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, // AIX
        /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
        // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
        /(unix)\s?([\w\.]+)*/i // UNIX
        ], [NAME, VERSION]]
    };

    /////////////////
    // Constructor
    ////////////////


    var UAParser = function UAParser(uastring, extensions) {

        if (!(this instanceof UAParser)) {
            return new UAParser(uastring, extensions).getResult();
        }

        var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
        var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var browser = mapper.rgx.apply(this, rgxmap.browser);
            browser.major = util.major(browser.version);
            return browser;
        };
        this.getCPU = function () {
            return mapper.rgx.apply(this, rgxmap.cpu);
        };
        this.getDevice = function () {
            return mapper.rgx.apply(this, rgxmap.device);
        };
        this.getEngine = function () {
            return mapper.rgx.apply(this, rgxmap.engine);
        };
        this.getOS = function () {
            return mapper.rgx.apply(this, rgxmap.os);
        };
        this.getResult = function () {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        };
        this.getUA = function () {
            return ua;
        };
        this.setUA = function (uastring) {
            ua = uastring;
            return this;
        };
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER = {
        NAME: NAME,
        MAJOR: MAJOR, // deprecated
        VERSION: VERSION
    };
    UAParser.CPU = {
        ARCHITECTURE: ARCHITECTURE
    };
    UAParser.DEVICE = {
        MODEL: MODEL,
        VENDOR: VENDOR,
        TYPE: TYPE,
        CONSOLE: CONSOLE,
        MOBILE: MOBILE,
        SMARTTV: SMARTTV,
        TABLET: TABLET,
        WEARABLE: WEARABLE,
        EMBEDDED: EMBEDDED
    };
    UAParser.ENGINE = {
        NAME: NAME,
        VERSION: VERSION
    };
    UAParser.OS = {
        NAME: NAME,
        VERSION: VERSION
    };

    ///////////
    // Export
    //////////


    // check js environment
    if (( false ? 'undefined' : _typeof(exports)) !== UNDEF_TYPE) {
        // nodejs env
        if (( false ? 'undefined' : _typeof(module)) !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if (( false ? 'undefined' : _typeof(__webpack_require__(100))) === FUNC_TYPE && __webpack_require__(101)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return UAParser;
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = window.jQuery || window.Zepto;
    if ((typeof $ === 'undefined' ? 'undefined' : _typeof($)) !== UNDEF_TYPE) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (uastring) {
            parser.setUA(uastring);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }
})((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? window : this);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(59)(module)))

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);