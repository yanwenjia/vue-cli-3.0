import Vue from 'vue'

Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
      // 聚焦元素
    //   el.focus()
      el.onblur = function(){
          alert('失去焦点')
      }
    },
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    bind: function(){

    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
    update: function (){

    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function(){

    },
    //只调用一次，指令与元素解绑时调用。
    unbind: function(){
        console.log('解除绑定')
    }
  })