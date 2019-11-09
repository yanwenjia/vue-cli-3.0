import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Vif from '../views/v-if.vue'
import Vfor from '../views/v-for.vue'
import Vmodel from '../views/v-model.vue'
import LifeCycle from '../views/life-cycle.vue'
import Computed from '../views/computed.vue'
import Father from '../views/father.vue'
import Watch from '../views/watch.vue'
import Vuex from '../views/vuex.vue'
import Sync from '../views/sync.vue'
import Slot from '../views/slot.vue'

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
    path: '/watch',
    name: '监听',
    component: Watch
  },
  {
    path: '/componentuse',
    name: '组件调用',
    component: Father
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: Vuex
  },
  {
    path: '/sync',
    name: 'sync',
    component: Sync
  },
  {
    path: '/slot',
    name: 'slot',
    component: Slot
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由守卫
// router.beforeEach((to, from, next) => {
//   console.log("to::::", to)
//   console.log("from", from)
//   console.log("next", next)
//   next();
// })

export default router