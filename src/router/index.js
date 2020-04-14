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
      component: () => import(/* webpackChunkName: "Codes" */ '../components/Services')
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
