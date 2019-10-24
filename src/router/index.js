import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Vif from '../views/v-if.vue'

Vue.use(VueRouter)

export const routes = [{
  path: '/v-if',
  name: 'v-if',
  component: Vif
}, ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router