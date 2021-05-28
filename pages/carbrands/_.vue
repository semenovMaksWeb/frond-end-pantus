<template>
  <div class="container">
    <h2 class="h2">Запчасти для а/м {{ textTitle }} по моделям</h2>
    <catalog-id-product
      v-if="pageCatalogSelected"
      :get-route-path="getRoutePath"
      :page-catalog-selected="pageCatalogSelected"
    />
    <products-view-blog
      v-if="getProductFilter.length > 0"
      :product="getProductFilter"
    />
    <product404 v-else-if="getFlagProduct" />
  </div>
</template>

<script lang="ts">
import { PageCarbrandsCode } from '~/composition/carbrands/page-carbrands-code'

export default {
  name: 'CarbrandsProduct',
  components: {
    Product404: () => import('~/components/products/element/product-404.vue'),
    CatalogIdProduct: () =>
      import('~/components/base/catalog-id-product/catalog-id-product.vue'),
    ProductsViewBlog: () =>
      import('~/components/products/view/products-view-blog.vue'),
  },
  setup() {
    return { ...PageCarbrandsCode() }
  },
}
</script>

<!--<style scoped></style>-->
