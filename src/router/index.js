import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createUser',
    name: 'createUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/createUser.vue')
  },
  {
    path: '/modifyUser/:user',
    name: 'modifyUser',
    component: () => import(/* webpackChunkName: "about" */ '../components/modifyUser.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
