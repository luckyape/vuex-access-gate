
export default {
  unlockGates(context, route) {
    const gates = context.state.gates;
    const bypass = route && context.state.bypassRoutes.length && context.state.bypassRoutes.indexOf(route) > -1;
    let unlocked = true;
    if(!bypass) {
      for (let i = 0; i < gates.length; i++) {
        let keepOut = gates[i].tryLock(context.rootState);
        unlocked = (keepOut)? false : unlocked;
        context.commit('setLock',{index: i, locked: keepOut});
      }
    }
    if(unlocked) {
      context.commit('openGate');
    }
  },
}
