import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Vif from '../views/v-if.vue'
import Vfor from '../views/v-for.vue'
import Vmodel from '../views/v-model.vue'
import LifeCycle from '../views/life-cycle.vue'
import Computed from '../views/computed.vue'
import Father from '../views/father.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/v-if',
    name: 'v-if',
    component: Vif
  },
  {
    path: '/v-for',
    name: 'v-for',
    component: Vfor
  },
  {
    path: '/v-model',
    name: 'v-model',
    component: Vmodel
  },
  {
    path: '/life-cycle',
    name: '生命周期',
    component: LifeCycle
  },
  {
    path: '/computed',
    name: '计算属性',
    component: Computed
  },
  {
    path: '/componentuse',
    name: '组件调用',
    component: Father
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router