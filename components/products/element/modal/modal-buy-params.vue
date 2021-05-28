<template>
  <div class="modal-buy-params">
    <div class="modal-buy-params-name">{{ name }}</div>
    <div class="modal-buy-params-value">
      <slot>{{ value }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ModalBuyParams',
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-modal-buy-params"
</style>
