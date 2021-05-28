<template>
  <div class="catalog-id-product">
    <nuxt-link
      v-for="elem in pageCatalogSelected.children"
      :key="elem.id"
      class="link link-hover-main catalog-id-product-link"
      :to="getRoutePath + '/' + elem.code"
      >{{ elem.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CatalogInterface } from '~/interface/catalog/catalog.interface'
export default {
  name: 'CatalogIdProduct',
  props: {
    getRoutePath: {
      type: String,
    },
    pageCatalogSelected: {
      type: Object as PropType<CatalogInterface[]>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/base/catalog-id-product.sass"
</style>
