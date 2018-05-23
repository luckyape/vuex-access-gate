export default {
    setLock(state, args) {
        state.gates[args.index].locked = args.locked;
    },
    setGates(state, gates) {
        state.gates = gates
    }
}
