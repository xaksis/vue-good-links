/**
 * vue-good-links v0.0.1
 * (c) 2018-present xaksis <shay@crayonbits.com>
 * https://github.com/xaksis/vue-good-links
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var debounce = _interopDefault(require('lodash.debounce'));

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
    startAnimating: debounce(function () {
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
    stopAnimating: debounce(function () {
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
    startAnimating: debounce(function () {
      this.active = true;
    }, 150),
    stopAnimating: debounce(function () {
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
    startAnimating: debounce(function () {
      this.active = true;
    }, 150),
    stopAnimating: debounce(function () {
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
    startAnimating: debounce(function () {
      this.active = true;
    }, 150),
    stopAnimating: debounce(function () {
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
    startAnimating: debounce(function () {
      this.active = true;
    }, 150),
    stopAnimating: debounce(function () {
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
    startAnimating: debounce(function () {
      this.active = true;
    }, 150),
    stopAnimating: debounce(function () {
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
