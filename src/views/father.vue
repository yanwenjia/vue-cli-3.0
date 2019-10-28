<template>
  <div class="father">
    这是父组件，他的num的值是{{num}}
    <div>
      下面的内容是子组件
      <Child props1="这是父组件传递下来的props" :fatherFun="fatherFun" />
    </div>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  data() {
    return {
      num: 0
    };
  },
  components: {
    Child
  },
  methods: {
    fatherFun: function() {
      this.num ++ 
    }
  }
};
</script>
<style scoped>
.father {
  border: 1px solid red;
  padding: 100px;
}
</style>