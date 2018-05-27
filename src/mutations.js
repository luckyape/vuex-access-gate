

export default {
    setLock(state, args) {
        state.gates[args.index].locked = args.locked;
    },
    setOptions(state, config) {
        Object.assign(state.submitOptions, config.submitOptions);
        delete config.submitOptions;
        Object.assign(state, config);
    },
    openGate(state) {
        state.accessGate.locked = false;
    },
}
