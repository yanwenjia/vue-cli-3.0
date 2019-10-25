<template>
  <div class="out" v-on:click="update">{{num}}</div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    };
  },
  methods: {
    update: function() {
      this.num++;
    }
  },
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    alert("mounted");
  },
  beforeUpdate() {
    alert("beforeUpdate");
  },
  updated() {
    alert("updated");
  },
  beforeDestroy() {
    alert("beforeDestroy");
  },
  destroyed() {
    alert("destroyed");
  }
};
</script>

<style scoped>
.out {
  width: 100px;
  height: 100px;
  background-color: aqua;
}
</style>