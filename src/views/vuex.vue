<template>
  <div class="vuex">
    现在的Count的值：：{{this.$store.state.count}}
    <div
      class="add"
      @click="addStoreCount"
    >
      点击我store将变化(你也可以去v-for模块点击改变count的值)
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      storeCount: this.$store.state.count
    };
  },
  methods: {
    addStoreCount: function() {
      this.$store.commit("add");
    }
  }
};
</script>
<style lang="less" scoped>
.add {
  line-height: 100px;
}
</style>