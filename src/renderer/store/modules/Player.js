const state = {
  fullscreen_mode: false,
  currently_playing: {
    id: 8,
    title: 'Yellow',
    artist: 'Rich Brian',
    artwork: '/static/demo/yellow.jpeg',
    stream: '/static/demo/music.mp3'
  }
}

const getters = {
  fullscreenStatus: (state) => state.fullscreen_mode,
  currentlyPlaying: (state) => state.currently_playing
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
