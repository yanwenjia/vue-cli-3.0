<template>
  <div class="out">
    <input type="text" v-model="text" />
    <div class="value">您输入的值是：{{text}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "这是默认值，可以随便更改"
    };
  }
};
</script>

<style>
input{
    width: 100%;
    line-height: 50px;
}
.value{
    line-height: 50px;
}
</style>