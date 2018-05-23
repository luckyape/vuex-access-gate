export default {
    schemaGroups(state) {
      return state.gates.filter(group => group.locked);
    }
}
