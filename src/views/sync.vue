<template>
  <div class="sync">
    <input type="text" v-model="modal" />
    <div>
      下面是子组件
      <div class="op">操作</div>
      <button class="button" @click="add">添加sync</button>
      <button class="button" @click="remove">移除sync(在下面输入的时候，观察控制台会报错)</button>
      <sync-child v-if="sync" :fModal.sync="modal"></sync-child>
      <sync-child v-else :fModal="modal"></sync-child>
    </div>
  </div>
</template>
<script>
import syncChild from './syncChild'
export default {
    components:{syncChild},
    data(){
        return {
            sync:true,
            modal:''
        }
    },
    methods:{
      add(){
        console.log("add")
        this.sync = true
      },
      remove(){
        console.log("remove")
        this.sync = false
      }
    }
}
</script>
<style scoped>
.button {
  padding: 10px;
  margin: 10px;
}
.op {
  margin-top: 20px;
}
</style>