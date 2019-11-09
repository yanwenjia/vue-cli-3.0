<template>
    <div class="slot">
        <div class="top">
            <slot name="top"></slot>
        </div>
        <div class="middle">
            <slot></slot>
        </div>
        <div class="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>