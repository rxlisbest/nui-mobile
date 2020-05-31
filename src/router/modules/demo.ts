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

let demoRoutes: Array<RouteConfig> = []
for (let route of routes) {
  route.path = '/demo' + route.path
  route.name = 'Demo' + route.name
  demoRoutes.push(route)
}

export default demoRoutes
