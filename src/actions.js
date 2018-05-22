
export default {
  unlockGates(context) {
    const gates = context.state.gates;
    for (let i = 0; i < gates.length; i++) {
      let isLocked = gates[i].tryLock(context.rootState);
      context.commit('setLock',{index: i, locked: isLocked});
    }
  },
}
