<template>
    <div>
        <div>
            原来的数字{{num}}
        </div>
        <div>
            {{newNum}}
        </div>
        <div class="click" v-on:click="myClick">
            点击我看之后的变化
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return (
            {
                num: 1
            }
        )
    },
    // 计算属性
    computed:{
        newNum: function(){
            return this.num + "00000"
        }
    },
    methods: {
        myClick: function(){
            this.num ++
        }
    }
}
</script>
<style scoped>
.click{
    line-height: 100px;
}
</style>