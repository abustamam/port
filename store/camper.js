import axios from 'axios'

const recentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
const allUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

export const state = {
  loading: true,
  sortBy: 'all',
  users: null
}

export const mutations = {
  updateUsers(state, data) {
    state.users = data
    state.loading = false
  }
}

export const actions = {
  fetchUsers(context) {
    const {state: {sortBy}, commit} = context
    const url = sortBy === 'all' ? allUrl : recentUrl
    return axios
      .get(url)
      .then(res => commit('updateUsers', res.data))
      .catch(err => console.error({err}))
  }
}