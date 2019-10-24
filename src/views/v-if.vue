<template>
  <div class="out" v-on:click="change">
    <div class="inner" v-if="show">点击我可以切换显示隐藏</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    change: function() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.out {
  width: 100px;
  height: 100px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>