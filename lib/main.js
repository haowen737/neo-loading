'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = require('./main.vue');

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $vm = null;
exports.default = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!$vm) {
      var NeoLoadingTemplate = Vue.extend(_main2.default);

      var _$vm = new NeoLoadingTemplate({
        el: document.createElement('div')
      });

      var backgroundColor = options.backgroundColor,
          color = options.color,
          backgroundOpacity = options.backgroundOpacity;

      _$vm.backgroundColor = backgroundColor || '#FFFFFF';
      _$vm.backgroundOpacity = backgroundOpacity || '0.5';
      _$vm.color = color || '#000';

      document.body.appendChild(_$vm.$el);

      var neoLoading = function neoLoading() {};

      neoLoading.show = function () {
        _$vm.show = true;
      };
      neoLoading.hide = function () {
        _$vm.show = false;
      };

      Vue.prototype.$neoLoading = neoLoading;
    }
  }
};