<template>
  <div>
    这是一个数字：：：{{num}}
    <div class="click" v-on:click="myClick">点击之后数字会随机变化</div>
    <div>
        数字的新值是{{newValue}}
    </div>
    <div>数字的旧值是{{oldVaue}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0,
      newValue: 0,
      oldVaue: 0
    };
  },
  methods:{
      myClick: function(){
          let num = parseInt(Math.random() * 100)
          this.num = num
      }
  },
  watch: {
      num: function(n,o){
          this.newValue = n
          this.oldVaue = o
      }
  }
};
</script>
<style scoped>
.click {
  line-height: 100px;
}
</style>
