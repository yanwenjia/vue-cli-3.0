<template>
  <div v-if="show">点击我可以切换显示隐藏</div>
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
</style>