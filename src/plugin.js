import AccessGateComponent from './AccessGate.vue';
import AccessGateModule from './index';

function install (Vue, options) {
  options.Store.registerModule('accessGate', AccessGateModule);
  options.Store.commit('accessGate/setGates',  options.gates);
  Vue.component('access-gate', AccessGateComponent);
}
export default {
  install
};
