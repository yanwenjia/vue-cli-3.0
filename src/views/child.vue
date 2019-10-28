<template>
  <div class="child">
    这是子组件
    <div v-if="props1">{{props1}}</div>
    <div v-on:click="fatherFun">点击可以给父组件设置num的值</div>
  </div>
</template>
<script>
export default {
  props: {
    props1: String,
    fatherFun: Function
  }
};
</script>
<style scoped>
.child {
  border: 1px solid yellowgreen;
  padding: 100px;
}
</style>