import Vue from 'vue'
import Vuex from 'vuex'
// import mine from './modules/mine'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // mine,
    home
  }
})
export default store
