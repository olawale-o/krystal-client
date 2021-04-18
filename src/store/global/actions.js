export let actions = {
    loading({ commit }, { type, payload }) {   
        console.log(payload)
        commit({
            type: type,
            credentials: payload
        })
    }

}

