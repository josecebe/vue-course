export const increment = (state) => {
    state.count++;
    state.lastMutation = 'increment';
    state.lastInt = 1;
}

export const incrementBy = (state, val) => {
    state.count += val;
    state.lastMutation = 'increment';
    state.lastInt = val;
}

export const setLoading = (state, val)  => {
    state.isLoading = val;
}
