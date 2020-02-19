import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/Game.vue')
  }
]

const router = new VueRouter({
  //base: process.env.BASE_URL,
  mode:'hash',
  routes
})

export default router
