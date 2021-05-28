<template>
  <nuxt-link
    :title="product.productCard.name"
    class="product-link-main"
    :class="classLink"
    :to="
      '/products/' +
      product.productCard.id +
      '/' +
      product.productCard.sku.normalized +
      '-' +
      product.productCard.brand.code
    "
    >{{ product.productCard.name }}
  </nuxt-link>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { TypeProductVuex } from '~/interface/products/products.interface'

export default {
  name: 'ProductLinkId',
  props: {
    classLink: {
      type: String,
      default: 'link link-hover-main',
    },
    product: {
      type: Object as () => PropType<TypeProductVuex>,
    },
  },
}
</script>
<style lang="sass">
@import "assets/sass/products/product-link-id"
</style>
