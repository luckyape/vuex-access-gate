export default {
    schemaGroups(state) {
      var lockedGates = state.gates.filter(group => group.locked);
      return lockedGates;
    }
}
