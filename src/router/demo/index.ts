import { RouteConfig } from 'vue-router'
import loginRouter from './login'
import registerRouter from './register'

const routes: Array<RouteConfig> = [
  ...loginRouter,
  ...registerRouter,
]

export default routes
