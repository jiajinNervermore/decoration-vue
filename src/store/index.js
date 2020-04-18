import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    URL : 'http://127.0.0.1:5050/',
    companyDesc:{},
    userInfo: {}				//当前登录的用户信息
  },
  mutations: {
    setCompany(state,company){
      state.companyDesc = company
    },
	  setUserInfo(state, info){			//修改用户登录信息
		  state.userInfo = info
	  }
  },
  actions: {
  },
  modules: {
  }
})
