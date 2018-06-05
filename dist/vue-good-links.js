/**
 * vue-good-links v0.0.1
 * (c) 2018-present xaksis <shay@crayonbits.com>
 * https://github.com/xaksis/vue-good-links
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.vueGoodLinks = {})));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
      nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function() {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
        (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? (other + '') : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : (reIsBadHex.test(value) ? NAN : +value);
  }

  var lodash_debounce = debounce;

  var VglWave = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        staticClass: "vgl-wave-wrap",
        on: {
          "mouseover": _vm.startAnimating,
          "mouseleave": _vm.stopAnimating
        }
      }, _vm._l(_vm.letters, function (l, idx) {
        return _c('span', {
          key: idx,
          staticClass: "vgl-lettr",
          class: {
            'vgl-active': _vm.activeIndex === idx
          }
        }, [_c('span', {
          staticClass: "vgl-lettr-inner"
        }, [_vm._v(_vm._s(l))]), _c('span', {
          staticStyle: {
            "opacity": "0"
          }
        }, [_vm._v(_vm._s(l))])]);
      }));
    },
    staticRenderFns: [],
    name: 'bounce-up-link',
    props: {
      text: {
        type: String,
        default: 'Sample Text'
      }
    },
    data: function data() {
      return {
        activeIndex: -1,
        timeouts: [],
        intervals: []
      };
    },
    computed: {
      letters: function letters() {
        return this.text ? this.text.split('') : '';
      }
    },
    methods: {
      startAnimating: lodash_debounce(function () {
        var _this = this;

        var delay = 150; // if animation is already going, we don't need to do anything

        if (this.activeIndex > -1) return;

        var _loop = function _loop(i) {
          _this.timeouts.push(setTimeout(function () {
            // start animating right away
            _this.activeIndex = i; // repeat animation for as long as I'm hovering

            _this.intervals.push(setInterval(function () {
              _this.activeIndex = i;
            }, _this.letters.length * delay));
          }, i * delay));
        };

        for (var i = 0; i < this.letters.length; i++) {
          _loop(i);
        }
      }, 150),
      stopAnimating: lodash_debounce(function () {
        for (var i = 0; i < this.timeouts.length; i++) {
          clearTimeout(this.timeouts[i]);
          clearInterval(this.intervals[i]);
        }

        this.timeouts = [];
        this.intervals = [];
        this.activeIndex = -1;
      }, 150)
    },
    mounted: function mounted() {},
    components: {}
  };

  var VglRollup = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        staticClass: "vgl-rollup-wrap",
        style: {
          height: _vm.spanHeight
        },
        on: {
          "mouseover": _vm.startAnimating,
          "mouseleave": _vm.stopAnimating
        }
      }, [_c('span', {
        staticClass: "vgl-rollup-original",
        style: _vm.originalSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        staticClass: "vgl-rollup-bold",
        style: _vm.boldSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        ref: "originalText",
        staticStyle: {
          "opacity": "0",
          "font-weight": "bold"
        }
      }, [_vm._v(_vm._s(_vm.text))])]);
    },
    staticRenderFns: [],
    name: 'vgl-rollup',
    props: {
      text: {
        type: String,
        default: 'Sample Text'
      }
    },
    data: function data() {
      return {
        active: false,
        spanHeight: 0
      };
    },
    computed: {
      originalSpanStyle: function originalSpanStyle() {
        return {
          top: this.active ? "-".concat(this.spanHeight) : 0
        };
      },
      boldSpanStyle: function boldSpanStyle() {
        return {
          top: this.active ? 0 : "".concat(this.spanHeight)
        };
      }
    },
    methods: {
      startAnimating: lodash_debounce(function () {
        this.active = true;
      }, 150),
      stopAnimating: lodash_debounce(function () {
        this.active = false;
      }, 150),
      init: function init() {
        var originalSpan = this.$refs.originalText;
        var spanStyle = window.getComputedStyle(originalSpan, null);
        var spanHeight = spanStyle.fontSize;
        var num = parseInt(spanHeight.substring(0, spanHeight.length - 2), 10) * 1.2;
        this.spanHeight = "".concat(num, "px");
      }
    },
    mounted: function mounted() {
      this.init();
    },
    components: {}
  };

  var VglSlidein = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        staticClass: "vgl-slidein-wrap",
        style: {
          width: _vm.spanWidth
        },
        on: {
          "mouseover": _vm.startAnimating,
          "mouseleave": _vm.stopAnimating
        }
      }, [_c('span', {
        staticClass: "vgl-slidein-original",
        style: _vm.internalOriginalSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        staticClass: "vgl-slidein-bold",
        style: _vm.internalBoldSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        ref: "originalText",
        staticStyle: {
          "opacity": "0"
        }
      }, [_vm._v(_vm._s(_vm.text))])]);
    },
    staticRenderFns: [],
    name: 'vgl-slidein',
    props: {
      text: {
        type: String,
        default: 'Sample Text'
      },
      replaceSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {
            backgroundColor: 'black',
            color: 'white',
            padding: '0px 5px'
          };
        }
      },
      originalSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {
            padding: '0px 5px'
          };
        }
      }
    },
    data: function data() {
      return {
        active: false,
        spanWidth: 0
      };
    },
    computed: {
      internalOriginalSpanStyle: function internalOriginalSpanStyle() {
        return Object.assign({}, this.originalSpanStyle, {
          left: this.active ? "".concat(this.spanWidth) : 0
        });
      },
      internalBoldSpanStyle: function internalBoldSpanStyle() {
        return Object.assign({}, this.replaceSpanStyle, {
          left: this.active ? 0 : "-".concat(this.spanWidth)
        });
      }
    },
    methods: {
      startAnimating: lodash_debounce(function () {
        this.active = true;
      }, 150),
      stopAnimating: lodash_debounce(function () {
        this.active = false;
      }, 150),
      init: function init() {
        var horizontalPadding = 5;
        var originalSpan = this.$refs.originalText;
        console.log(originalSpan.offsetWidth);
        this.spanWidth = "".concat(originalSpan.offsetWidth + horizontalPadding * 2, "px");
      }
    },
    mounted: function mounted() {
      this.init();
    },
    components: {}
  };

  var VglGhost = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        staticClass: "vgl-ghost-wrap",
        on: {
          "mouseover": _vm.startAnimating,
          "mouseleave": _vm.stopAnimating
        }
      }, [_c('span', {
        staticClass: "vgl-ghost-original"
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        staticClass: "vgl-ghost-bold",
        class: {
          'vgl-active': _vm.active
        }
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        ref: "originalText",
        staticStyle: {
          "opacity": "0"
        }
      }, [_vm._v(_vm._s(_vm.text))])]);
    },
    staticRenderFns: [],
    name: 'vgl-ghost',
    props: {
      text: {
        type: String,
        default: 'Sample Text'
      },
      replaceSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {};
        }
      },
      originalSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {};
        }
      }
    },
    data: function data() {
      return {
        active: false,
        spanWidth: 0
      };
    },
    computed: {},
    methods: {
      startAnimating: lodash_debounce(function () {
        this.active = true;
      }, 150),
      stopAnimating: lodash_debounce(function () {
        this.active = false;
      }, 150),
      init: function init() {
        var horizontalPadding = 5;
        var originalSpan = this.$refs.originalText; // console.log(originalSpan.offsetWidth);

        this.spanWidth = "".concat(originalSpan.offsetWidth + horizontalPadding * 2, "px");
      }
    },
    mounted: function mounted() {},
    components: {}
  };

  var VglSwing = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        staticClass: "vgl-swing-wrap",
        class: {
          'vgl-active': _vm.active
        },
        on: {
          "mouseover": _vm.startAnimating,
          "mouseleave": _vm.stopAnimating
        }
      }, [_c('span', {
        staticClass: "vgl-swing-original",
        style: _vm.internalOriginalSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        staticClass: "vgl-swing-bold",
        style: _vm.internalBoldSpanStyle
      }, [_vm._v(_vm._s(_vm.text))])]);
    },
    staticRenderFns: [],
    name: 'vgl-swing',
    props: {
      text: {
        type: String,
        default: 'Sample Text'
      },
      replaceSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {
            padding: '0px 5px'
          };
        }
      },
      originalSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {
            padding: '0px 5px'
          };
        }
      }
    },
    data: function data() {
      return {
        active: false,
        spanWidth: 0
      };
    },
    computed: {
      internalOriginalSpanStyle: function internalOriginalSpanStyle() {
        return Object.assign({}, this.originalSpanStyle, {
          left: this.active ? "".concat(this.spanWidth) : 0
        });
      },
      internalBoldSpanStyle: function internalBoldSpanStyle() {
        return Object.assign({}, this.replaceSpanStyle, {
          left: this.active ? 0 : "-".concat(this.spanWidth)
        });
      }
    },
    methods: {
      startAnimating: lodash_debounce(function () {
        this.active = true;
      }, 150),
      stopAnimating: lodash_debounce(function () {
        this.active = false;
      }, 150),
      init: function init() {
        var horizontalPadding = 5;
        var originalSpan = this.$refs.originalText; // console.log(originalSpan.offsetWidth);

        this.spanWidth = "".concat(originalSpan.offsetWidth + horizontalPadding * 2, "px");
      }
    },
    mounted: function mounted() {},
    components: {}
  };

  var VglRotate = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('span', {
        staticClass: "vgl-rotate-wrap",
        class: {
          'vgl-active': _vm.active
        },
        on: {
          "mouseover": _vm.startAnimating,
          "mouseleave": _vm.stopAnimating
        }
      }, [_c('span', {
        staticClass: "vgl-rotate-bold",
        style: _vm.internalBoldSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        staticClass: "vgl-rotate-original",
        style: _vm.internalOriginalSpanStyle
      }, [_vm._v(_vm._s(_vm.text))]), _vm._v(" "), _c('span', {
        ref: "originalText",
        staticStyle: {
          "opacity": "0"
        },
        style: _vm.internalBoldSpanStyle
      }, [_vm._v(_vm._s(_vm.text))])]);
    },
    staticRenderFns: [],
    name: 'vgl-rotate',
    props: {
      text: {
        type: String,
        default: 'Sample Text'
      },
      replaceSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {};
        }
      },
      originalSpanStyle: {
        type: Object,
        // eslint-disable-next-line
        default: function _default() {
          return {};
        }
      }
    },
    data: function data() {
      return {
        active: false,
        spanWidth: 0
      };
    },
    computed: {
      internalOriginalSpanStyle: function internalOriginalSpanStyle() {
        return Object.assign({}, this.originalSpanStyle, {
          padding: '0px 5px',
          transformOrigin: "50% 50% -".concat(this.spanWidth)
        });
      },
      internalBoldSpanStyle: function internalBoldSpanStyle() {
        return Object.assign({}, this.replaceSpanStyle, {
          padding: '0px 5px',
          transformOrigin: "50% 50% ".concat(this.spanWidth)
        });
      }
    },
    methods: {
      startAnimating: lodash_debounce(function () {
        this.active = true;
      }, 150),
      stopAnimating: lodash_debounce(function () {
        this.active = false;
      }, 150),
      init: function init() {
        var originalSpan = this.$refs.originalText; // console.log(originalSpan.offsetWidth);

        this.spanWidth = "".concat(originalSpan.offsetWidth / 2, "px");
      }
    },
    mounted: function mounted() {
      this.init();
    },
    components: {}
  };

  var _components;
  var components = (_components = {}, _defineProperty(_components, VglWave.name, VglWave), _defineProperty(_components, VglRollup.name, VglRollup), _defineProperty(_components, VglSlidein.name, VglSlidein), _defineProperty(_components, VglGhost.name, VglGhost), _defineProperty(_components, VglSwing.name, VglSwing), _defineProperty(_components, VglRotate.name, VglRotate), _components);

  function install(Vue, options) {
    if (options && options.components) {
      options.components.forEach(function (c) {
        return Vue.component(c.name, components[c.name]);
      });
    } else {
      Object.keys(components).forEach(function (key) {
        Vue.component(key, components[key]);
      });
    }
  } // Automatic installation if Vue has been added to the global scope.


  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use({
      install: install
    });
  }

  var index = {
    install: install
  };

  exports.default = index;
  exports.VglWave = VglWave;
  exports.VglRollup = VglRollup;
  exports.VglSlidein = VglSlidein;
  exports.VglGhost = VglGhost;
  exports.VglSwing = VglSwing;
  exports.VglRotate = VglRotate;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
