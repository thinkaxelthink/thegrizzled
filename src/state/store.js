import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from 'state/mutationTypes'

Vue.use(Vuex)

const state = {
  deck: [],
  route: null
}

const mutations = {
  'router/ROUTE_CHANGED': function(state, to) {
    state.route = to;
  },
}

const plugins = []

const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  plugins,
  modules: {}
})

export default store

export function dispatch(type, ...data) {
  store.dispatch(type, ...data)
}

export function commit(type, ...data) {
  store.commit(type, ...data)
}
