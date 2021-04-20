

export const gigsMutations = {

    fetchAllGigs(state,payload) {
        state.gigs = payload.credentials
    },

    newGigs(state,payload) {
        state.gigs = [payload.credentials,...state.gigs]
    },

    deleteGig(state,{ credentials }) {
        state.gigs = state.gigs.filter((gig) => gig.id != credentials)
    },

    editGig(state,{ credentials }) {
        state.gigs = [credentials,...state.gigs]
    },

    singleGig(state,{ credentials }) {
        state.gig = state.gigs.find((gig) => gig.id == credentials)
    },


}