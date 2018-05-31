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

  var BounceUpLink = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', [_vm._v(" bounce up link ")]);
    },
    staticRenderFns: [],
    _scopeId: 'data-v-1cadf122',
    name: 'bounce-up-link',
    props: [],
    data: function data() {
      return {};
    },
    computed: {},
    methods: {},
    mounted: function mounted() {},
    components: {}
  };

  var components = _defineProperty({}, BounceUpLink.name, BounceUpLink);

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
  exports.BounceUpLink = BounceUpLink;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
