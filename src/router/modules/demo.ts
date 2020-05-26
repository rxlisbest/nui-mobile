import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/demo/user/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/demo/user/Register.vue')
  }
]

export default routes
