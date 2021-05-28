<template>
  <div class="container">
    <h1 class="h1">Все категории автозапчастей</h1>
    <filter-categories-search :catalog="true" />
    <div v-if="getCategories.length > 0" class="row-catalog-categories">
      <template v-for="data in getCategories">
        <categories-id-catalog
          v-if="data.visible"
          :key="data.id"
          :categories="data"
        />
      </template>
    </div>
  </div>
</template>

<script>
import CategoriesIdCatalog from '@/components/categories/categories-id-catalog'
import { PageCategories } from '~/composition/categories/page-categories'
import FilterCategoriesSearch from '~/components/search/filter-product/element/categories/filter-categories-search'

export default {
  name: 'PagesCategories',
  components: { FilterCategoriesSearch, CategoriesIdCatalog },
  setup() {
    return { ...PageCategories() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/categories/categories-catalog"
</style>
