import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'

Vue.use(VueRouter)

  const routes = [
    {path:'/',component:Index},
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "About" */ '../components/About')
    },
    {
      path: '/codes',
      name: 'Codes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Codes" */ '../components/Codes')
    },
    {
      path: '/contact',
      name: 'Contact',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Contact" */ '../components/Contact')
    },
    {
      path: '/gallery',
      name: 'Gallery',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Gallery" */ '../components/Gallery')
    },
    {
      path: '/services',
      name: 'Services',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Codes" */ '../components/Services')
    }
]

const router = new VueRouter({
  routes,mode:"history"
})

export default router
