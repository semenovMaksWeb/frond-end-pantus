<template>
  <button
    v-if="offer.defaultCount !== offer.count"
    title="Обновить"
    class="cart-offer-edit-count"
    @click="cartOfferEditCount(offer)"
  >
    <font-awesome :unicode="'&#xf021;'" />
  </button>
</template>

<script lang="ts">
import { PropType } from 'vue'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import { CartOfferEditCount } from '~/composition/cart/cart-offer-edit-count'
export default {
  name: 'CartOfferEditCount',
  components: { FontAwesome },
  props: {
    offer: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
  setup() {
    return { ...CartOfferEditCount() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/cart/cart-offer-edit-count"
</style>
