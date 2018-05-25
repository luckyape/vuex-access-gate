export default {
    setLock(state, args) {
        state.gates[args.index].locked = args.locked;
    },
    setGates(state, config) {
        state.gates = config.gates
        state.submit = config.submit
    }
}
