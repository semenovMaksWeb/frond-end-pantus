<template>
  <div class="container">
    <h1 class="h1">Все бренды автозапчастей</h1>
    <template v-if="getBrandActive">
      <filter-brand-search
        v-if="getBrand.length > 0"
        :data="getBrand"
        :res="getBrandPage"
        @dataset="getBrandView = $event"
        @value="value = $event"
      />
      <div class="row row-catalog-brand">
        <brand-id-catalog
          v-for="brand in getBrandView"
          :key="brand.id"
          :brand="brand"
        />
      </div>
      <error404
        v-if="getBrandView.length < 0"
        text="Бредны на этой странице не найдены"
      />
      <base-pagination
        v-if="getBrandView.length > 0 && value === 0"
        :count-element="getBrand.length"
        :limit-element="getLimitPage"
        :limit-pagination="5"
        @click="setBrands"
      />
    </template>
  </div>
</template>

<script>
import { PageBrand } from '@/composition/brand/page-brand'
import BasePagination from '@/components/base/pagination/base-pagination'
import BrandIdCatalog from '@/components/brand/brand-id-catalog'
import Error404 from '~/components/base/error/404'
import FilterBrandSearch from '~/components/search/filter-product/element/brand/filter-brand-search'

export default {
  name: 'PagesBrands',
  components: { FilterBrandSearch, Error404, BrandIdCatalog, BasePagination },
  setup() {
    return { ...PageBrand() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/brand/brand-catalog"
</style>
