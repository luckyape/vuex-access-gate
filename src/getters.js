export default {
    lockedGates(state, getters, rootState) {
        let lockedGates = [];
        if(state.gates) {
          lockedGates = state.gates.filter(gate => gate.locked).map(gate => gate.group);
        }
        if(!lockedGates.length) {
          state.accessGate.active = false;
        }
        return lockedGates;
    },
    schemaGroups(state) {
      return state.gates.filter(group => group.locked);
    }
}
