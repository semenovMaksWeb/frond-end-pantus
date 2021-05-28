<template>
  <component :is="component">
    <span v-if="linkOffers.quantity > 0" class="product-offer-blog-quantity">
      {{ linkOffers.quantity }}
      {{ linkProduct.params.measure }}
    </span>
    <!-- под заказ сколько дней -->
    <span
      v-else-if="linkProduct.brand.deliveryDelay != 0"
      class="product-offer-blog-delivery"
    >
      Под заказ:
      {{ linkProduct.brand.deliveryDelay }} дн.
    </span>
    <!-- под запросу  -->
    <span v-else class="product-offer-blog-delivery">По запросу</span>
  </component>
</template>

<script lang="ts">
import { PropType } from 'vue'
import {
  TypeCartProduct,
  TypeOfferProduct,
} from '~/interface/products/products.interface'

export default {
  name: 'ProductOfferQuantity',
  props: {
    component: {
      request: true,
      type: String,
    },
    linkProduct: {
      request: true,
      type: Object as PropType<TypeCartProduct>,
    },
    linkOffers: {
      request: true,
      type: Object as PropType<TypeOfferProduct>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-offer-quantity"
</style>
