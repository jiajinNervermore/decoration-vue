import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'

Vue.use(VueRouter)

  const routes = [
    {path:'/',
    meta:{
      title:'主页—春晓室内设计工作室'
    },
    component:Index},
    {
      path: '/about',
      name: 'About',
      meta:{
        title:'关于公司—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "About" */ '../components/About')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      meta:{
        title:'画廊—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Gallery" */ '../components/Gallery')
    },
    {
      path: '/services',
      name: 'Services',
      meta:{
        title:'服务—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "services" */ '../components/Services')
    },
    {
      path: '/register',
      name: 'Register',
      meta:{
        title:'注册—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "register" */ '../views/Register')
    },
    {
      path: '/login',
      name: 'Login',
      meta:{
        title:'登录—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/Login')
    },
    {
      path: '/update',
      name: 'Update',
      meta:{
        title:'用户资料修改—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "update" */ '../components/Update')
    },
    {
      path: '/messageBoard',
      name: 'Message',
      meta:{
        title:'留言—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "message" */ '../views/MessageBoard')
    },
    {
      path: '/avatar',
      name: 'Avatar',
      meta:{
        title:'头像—春晓室内设计工作室'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Avatar" */ '../components/Avatar')
    },
    {
      path: '/*',
      component: () => import('../views/PageNotFound.vue'),
    meta: {		//路由的元数据——其中可以指定任意的数据
      title: '页面没有找到 — 春晓室内设计工作室'
    }
    }
]

const router = new VueRouter({
  routes,mode:"history"
})
router.beforeEach((to, from, next)=>{
	//修改index.html中的页面title，值为即将跳转到的路由组件的meta.title属性
	if(to.meta  &&  to.meta.title){	
		document.title = to.meta.title
	}
	//守卫放行，继续执行后续的路由中的代码
	next()
})
export default router
