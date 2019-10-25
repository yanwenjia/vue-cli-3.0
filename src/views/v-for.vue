<template>
  <div class="out">
    <div class="inner" v-for="person in list" v-bind:key="person.id">
        这是{{person.name}}
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    id:1,
                    name:"路人甲"
                },
                {
                    id:2,
                    name:"路人乙"
                }
            ]
        }
    }
};
</script>

<style>
</style>