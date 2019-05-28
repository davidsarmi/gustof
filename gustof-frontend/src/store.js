import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'login-layout',
    user: {}
  },
  mutations: {
    SET_LAYOUT (state, newLayout) {
      state.layout = newLayout
    },
    SET_USER (state, newUser) {
      state.user = newUser
    }
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})
