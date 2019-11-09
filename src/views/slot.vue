<template>
  <slot-c>
    <template v-slot:top>
      <div>top</div>
    </template>
    <div>middle</div>
    <template v-slot:bottom>
      <div>bottom</div>
    </template>
  </slot-c>
</template>
<script>
import SlotC from './slotC'
export default {
    components:{SlotC}
}
</script>
<style scoped>
</style>