import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '@/demo/login/Index.vue')
  },
  {
    path: '/login/mobile',
    name: 'LoginMobile',
    component: () => import(/* webpackChunkName: "about" */ '@/demo/login/Mobile.vue')
  }
]

export default routes
