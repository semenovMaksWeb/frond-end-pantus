<template>
  <div>
    <input
      class="base-input cart-count-offers-input"
      type="text"
      :value="offers.count"
      @input="cartCountOffers(offers, $event.target.value)"
      @blur="cartErrorFalse(offers, $event.target.value)"
    />
    <div v-if="error.check" class="text-error">
      {{ error.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import { CartCountOffers } from '~/composition/cart/cart-count-offers'

export default {
  name: 'CartCountOffers',
  props: {
    offers: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
  setup() {
    return { ...CartCountOffers() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-input"
@import "assets/sass/cart/cart-count-offers"
</style>
