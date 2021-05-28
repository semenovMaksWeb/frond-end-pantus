<template>
  <div class="container">
    <h2 class="h2">Товар категории: {{ textTitle }}</h2>
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
import { PageCategoriesCode } from '~/composition/categories/page-categories-code'

export default {
  name: 'CategoriesProduct',
  components: {
    Product404: () => import('~/components/products/element/product-404.vue'),
    CatalogIdProduct: () =>
      import('~/components/base/catalog-id-product/catalog-id-product.vue'),
    ProductsViewBlog: () =>
      import('~/components/products/view/products-view-blog.vue'),
  },
  setup() {
    return { ...PageCategoriesCode() }
  },
}
</script>

<!--<style scoped></style>-->
