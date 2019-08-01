const state = {
  fullscreen_mode: false,
  currently_playing: 0,
  queue: [
    {
      id: 8,
      title: 'Yellow',
      artist: 'Rich Brian',
      artwork: '/static/demo/yellow.jpeg',
      stream: '/static/demo/music.mp3'
    }
  ]
}

const getters = {
  fullscreenStatus: (state) => state.fullscreen_mode,
  currentlyPlaying: (state) => state.currently_playing,
  playerQueue: (state) => state.queue
}

const mutations = {
  TOGGLE_FULLSCREEN (state) {
    state.fullscreen_mode = !state.fullscreen_mode
  },
  PLAY_QUEUE_ITEM (state, index) {
    state.currently_playing = index
  }
}

const actions = {
  toggleFullscreenStatus ({ commit }) {
    commit('TOGGLE_FULLSCREEN')
  },
  playQueueItem ({ commit }, index) {
    commit('PLAY_QUEUE_ITEM', index)
  }
}

export default {
  actions,
  state,
  mutations,
  getters
}
