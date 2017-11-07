'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = require('./main.vue');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $vm = void 0;
exports.default = {
  install: function install(Vue) {
    if (!$vm) {
      var PageLoadingTemplate = Vue.extend(_main2.default);

      var _$vm = new PageLoadingTemplate({
        el: document.createElement('div')
      });

      document.body.appendChild(_$vm.$el);

      var pageLoading = function pageLoading() {};

      pageLoading.show = function () {
        _$vm.show = true;
      };
      pageLoading.hide = function () {
        _$vm.show = false;
      };

      Vue.prototype.$pageLoading = pageLoading;
    }
  }
};