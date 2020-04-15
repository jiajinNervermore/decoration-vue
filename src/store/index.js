import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    URL : 'http://127.0.0.1:5050/',
    companyDesc:{}
  },
  mutations: {
    setCompany(state,company){
      state.companyDesc = company
    }
  },
  actions: {
  },
  modules: {
  }
})
