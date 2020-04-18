import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
axios.defaults.baseURL="http://127.0.0.1:5050";
axios.defaults.headers.post['Content-Type'] = 'application/json'  //所有POST请求内容类型
axios.defaults.withCredentials = true;
Vue.prototype.axios=axios;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
