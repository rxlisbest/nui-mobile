import { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/demo/register/Index.vue')
  }
]

export default routes
