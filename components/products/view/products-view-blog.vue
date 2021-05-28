<template>
  <div class="row product-view-blog">
    <product-blog
      v-for="elem in product"
      :key="elem.productCard.id"
      :product="elem"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import ProductBlog from '~/components/products/product/product-blog.vue'
import { TypeProductVuex } from '~/interface/products/products.interface'

export default {
  name: 'ProductsViewBlog',
  components: { ProductBlog },
  // components: { ProductBlog },
  props: {
    product: {
      type: Array as () => PropType<TypeProductVuex>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/products/product-element"
</style>
