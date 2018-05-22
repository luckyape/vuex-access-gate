export default {
    setLock(state, args) {
        state.gates[args.index].locked = args.locked;
    },
}
