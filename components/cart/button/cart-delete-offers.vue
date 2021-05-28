<template>
  <button
    title="удалить"
    class="button link-hover-button cart-delete-offers"
    @click="cartDelete(id)"
  >
    <font-awesome unicode="&#xf00d;" />
  </button>
</template>

<script lang="ts">
import { CartDelete } from '~/composition/cart/cart-delete'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'

export default {
  name: 'CartDeleteOffers',
  components: { FontAwesome },
  props: {
    id: {
      type: Number,
    },
  },
  setup() {
    return { ...CartDelete() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/cart/cart-delete-offers"
</style>
