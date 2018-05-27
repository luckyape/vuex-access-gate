import AccessGateComponent from './AccessGate.vue';
import AccessGateModule from './index';

function install (Vue, args) {
  args.Store.registerModule('accessGate', AccessGateModule);
  args.Store.commit('accessGate/setOptions', args.options);
  Vue.component('access-gate', AccessGateComponent);
}
export default {
  install
};
