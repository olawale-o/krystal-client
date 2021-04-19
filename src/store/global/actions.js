export let actions = {
    loading({ commit }, { type, payload }) {   
        commit({
            type: type,
            credentials: payload
        })
    }

}

