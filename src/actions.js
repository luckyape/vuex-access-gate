
export default {
  unlockGates(context) {
    const gates = context.state.gates;
    let unlocked = true;
    for (let i = 0; i < gates.length; i++) {
      let keepOut = gates[i].tryLock(context.rootState);
      unlocked = (keepOut)? false : unlocked;
      context.commit('setLock',{index: i, locked: keepOut});
    }
    if(unlocked) {
      context.state.accessGate.locked = false
    }
  },
}
