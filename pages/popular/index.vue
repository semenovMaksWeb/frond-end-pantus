<template>
  <div class="container">
    <h1 class="h1">Популярные товары</h1>
    <ProductsViewBlog :product="getProductsPopular" />
  </div>
</template>

<script lang="ts">
import { PageProductsPopular } from '~/composition/products/page-products-popular'
import ProductsViewBlog from '~/components/products/view/products-view-blog.vue'

export default {
  name: 'PagePopular',
  components: { ProductsViewBlog },
  setup() {
    return { ...PageProductsPopular() }
  },
}
</script>
