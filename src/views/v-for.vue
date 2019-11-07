<template>
  <div class="out">
    <div
      class="inner"
      v-for="person in list"
      v-bind:key="person.id"
    >
      这是{{person.name}}
    </div>
    <div
      class="addstore"
      @click="addStoreCount"
    >
      点击我然后去Vuex路由看状态变化
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: "路人甲"
        },
        {
          id: 2,
          name: "路人乙"
        }
      ]
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
.addstore {
  line-height: 100px;
}
</style>