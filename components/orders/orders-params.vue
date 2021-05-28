<template>
  <div class="orders-params row">
    <div class="orders-params-name col">{{ name }}</div>
    <div class="orders-params-value col">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'OrdersParams',
  props: {
    value: {
      type: String,
    },
    name: {
      type: String,
    },
  },
}
</script>
<style lang="sass">
@import "assets/sass/order/orders-params"
</style>
