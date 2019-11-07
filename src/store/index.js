import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      console.log(state)
      state.count++
    }
  },
  actions: { // 1.Action 提交的是 mutation，而不是直接变更状态. 2.Action 可以包含任意异步操作
    add(context) {
      setTimeout(() => {
        context.commit("add")
      }, 2000)
    }
  },
  modules: {
  }
})
