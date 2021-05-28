<template>
  <div>
    <input
      v-model="count"
      class="base-input"
      @input="countOffers(offers)"
      @blur="errorFalse(offers)"
    />
    <div v-if="error.check" class="text-error">
      {{ error.text }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { ProductInputCountOffers } from '~/composition/products/product-input-count-offers'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import { TypeOfferProduct } from '~/interface/products/products.interface'

export default {
  name: 'ProductCountOffers',
  props: {
    offers: {
      type: Object as PropType<TypeOfferProduct>,
    },
    cart: {
      type: Object as PropType<CartOfferInterface>,
    },
  },
  setup(props: any, { emit }: { emit: Function }) {
    return { ...ProductInputCountOffers(props.cart, emit) }
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/base-input"
</style>
