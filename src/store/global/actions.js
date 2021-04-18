export let actions = {
    loading({ commit }, { type, credentials }) {   
        console.log(credentials)
        commit({
            type: type,
            credentials: credentials
        })
    }

}

