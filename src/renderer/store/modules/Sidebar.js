const state = {
  menu_open: false
}

const getters = {
  menuStatus: (state) => state.menu_open
}

const mutations = {
  TOGGLE_MENU (state) {
    state.menu_open = !state.menu_open
  }
}

const actions = {
  toggleMenuStatus ({ commit }) {
    commit('TOGGLE_MENU')
  }
}

export default {
  actions,
  state,
  mutations,
  getters
}
