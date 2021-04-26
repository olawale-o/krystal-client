export let actions = {
    loading({ commit }, { type, payload }) {   
        commit({
            type: type,
            credentials: payload
        })
    },
    editing({ commit }, { type, payload }) {   
        commit({
            type: type,
            credentials: payload
        })
    },
    error({ commit }, { type, payload }) {   
        commit({
            type: type,
            credentials: payload
        })
    }

}

