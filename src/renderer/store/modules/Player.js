const state = {
  fullscreen_mode: false
}

const getters = {
  fullscreenStatus: (state) => state.fullscreen_mode
}

const mutations = {
  TOGGLE_FULLSCREEN (state) {
    state.fullscreen_mode = !state.fullscreen_mode
  }
}

const actions = {
  toggleFullscreenStatus ({ commit }) {
    commit('TOGGLE_FULLSCREEN')
  }
}

export default {
  actions,
  state,
  mutations,
  getters
}
