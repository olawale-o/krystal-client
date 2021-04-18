

export const gigsMutations = {

    fetchAllGigs(state,payload) {
        state.gigs = payload.credentials
    },

    newGigs(state,payload) {
        state.gigs = [payload.credentials,...state.gigs]
    },


}