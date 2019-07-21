import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    task: [
      {
        title: 'title1',
        status: 'stock',
        info: 'text',
        rating: 0
      },
      {
        title: 'title2',
        status: 'running',
        info: 'text',
        rating: 0
      },
      {
        title: 'title3',
        status: 'completion',
        info: 'text',
        rating: 0
      }
    ]
  },
  mutations: {
    updatelist (state, payload) {
      state.task = payload.list
    }
  },
  actions: {
    updatelist ({ commit }, list) {
      commit('updatelist', { list })
    }
  }
})
