export let mutations = {
    loading: (state, { credentials }) => state.isLoading = credentials,
    editing: (state, { credentials }) => state.isEditing = credentials,
}