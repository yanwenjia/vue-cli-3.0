<template>
    <div class="sync-child">
        <input type="text" v-model="fModal" @input="change">
    </div>
</template>
<script>
export default {
    name:'sync-child',
    props:{
        fModal:{
            type:String,
            required: true
        }
    },
    methods:{
        change(e){
            console.log(e.target.value)
            this.$emit("update:fModal",e.target.value)
        }
    }
}
</script>
<style scoped>
.sync-child{
    margin-top :20px;
}
</style>