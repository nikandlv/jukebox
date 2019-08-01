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
    },
    {
      id: 8,
      title: 'Yellow',
      artist: 'Rich Brian',
      artwork: '/static/demo/habiba.jpg',
      stream: '/static/demo/music.mp3'
    },
    {
      id: 8,
      title: 'Ali sorena',
      artist: 'Negar',
      artwork: 'http://sakhamusic.ir/wp-content/uploads/2016/03/Ali-Sorena-%E2%80%93-Negar.jpg',
      stream: 'http://dl.sakhamusic.ir/94/esfand/09/03%20Negar%20(Prod.%20Ehsan%20Ziya)_2.mp3'
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
