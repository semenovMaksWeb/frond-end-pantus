<template>
  <div class="table-panel">
    <font-awesome
      :class="{ active: vidProduct === 'products-view-table' }"
      class="table-panel-icons"
      unicode="&#xf0c9;"
      @click="setVidProduct('products-view-table')"
    />
    <font-awesome
      :class="{ active: vidProduct === 'products-view-blog' }"
      class="table-panel-icons"
      unicode="&#xf009;"
      @click="setVidProduct('products-view-blog')"
    />
  </div>
</template>

<script lang="ts">
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import { SearchPageVidProduct } from '~/composition/search/search-page-vid-product'
export default {
  name: 'TablePanel',
  components: { FontAwesome },
  setup() {
    return { ...SearchPageVidProduct() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/search/filter-product/table-panel"
</style>
