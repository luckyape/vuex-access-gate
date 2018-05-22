import AccessGate from './AccessGate.vue';
import AccessGateStore from './index';
module.exports = {
  install: function (Vue, options) {
    Vue.component('access-gate', AccessGate);
    Vue.registerModule('desiredModuleName', yourModule);
  }
};
