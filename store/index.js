export const actions = {
  nuxtServerInit ({commit, dispatch}) {
    dispatch('camper/fetchUsers')
  }
}
