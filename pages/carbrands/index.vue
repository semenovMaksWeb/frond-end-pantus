<template>
  <div class="container">
    <h1 class="h1">Запчасти для автомобилей по их маркам</h1>
    <filter-brand-search
      v-if="getCarbrands.length > 0"
      :data="getCarbrands"
      :res="getCarbrands"
      @dataset="getCarbrandsView = $event"
    />
    <div class="row carbrands">
      <carbrands-id-catalog
        v-for="data in getCarbrandsView"
        :key="data.id"
        :carbrands="data"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PageCarbrands } from '@/composition/carbrands/page-carbrands'
import CarbrandsIdCatalog from '~/components/carbrands/carbrands-id-catalog.vue'
import FilterBrandSearch from '~/components/search/filter-product/element/brand/filter-brand-search.vue'

export default Vue.extend({
  name: 'PagesCarbrands',
  components: { FilterBrandSearch, CarbrandsIdCatalog },
  setup() {
    return { ...PageCarbrands() }
  },
})
</script>
<style lang="sass">
@import "assets/sass/carbrands/carbrands-catalog"
</style>
