import { RouteConfig } from 'vue-router'
import loginRouter from './login'

const routes: Array<RouteConfig> = [
  ...loginRouter,
]

export default routes
