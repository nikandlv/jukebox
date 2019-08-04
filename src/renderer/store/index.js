import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'
import Store from 'electron-store'
import modules from './modules'
let clear = false
if (clear) {
  const store = new Store({ name: 'vuex' })
  store.clear()
}
Vue.use(Vuex)
export default new Vuex.Store({
  modules,
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
  strict: process.env.NODE_ENV !== 'production'
})
