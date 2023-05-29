import Vue from "vue";
import Router from "vue-router";
import  demoRoutes  from './pages.routes';

Vue.use(Router)

export const routes = [
    ...demoRoutes
  ]

  const router = new Router({
    mode: 'history',
    routes
  })

  export default router