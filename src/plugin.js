import AccessGate from './AccessGate.vue';
import AccessGateModule from './index';
module.exports = {
  install: function (Vue, options) {
    Vue.component('access-gate', AccessGate);
    options.store.registerModule('AccessGate', AccessGateModule);
  }
};
