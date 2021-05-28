<template>
  <div class="filter-catalog-wrapper">
    <div class="filter-title filter-catalog-get-row" @click="toggleClick">
      <span class="link-hover-main">Бренд</span>
      <filter-button-get :toggle="toggle" />
    </div>
    <div v-if="toggle">
      <filter-brand-search
        :data="getBrand"
        :res="getBrand"
        @dataset="brandView = $event"
      />
      <VirtualList
        ref="scroll"
        class="filter-overflow"
        :keeps="15"
        :data-key="'id'"
        :data-sources="brandView"
        :data-component="componentsName"
      />
    </div>
  </div>
</template>

<script lang="ts">
import VirtualList from 'vue-virtual-scroll-list'
import FilterBrandSearch from '@/components/search/filter-product/element/brand/filter-brand-search.vue'
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import FilterButtonGet from '~/components/search/filter-button/filter-button-get.vue'
import { FilterBrand } from '~/composition/search/filter-brand/filter-brand'

export default {
  name: 'FilterProductBrand',
  components: {
    FilterButtonGet,
    FilterBrandSearch,
    VirtualList,
  },
  setup() {
    return { ...FilterBrand(), ...ToggleClick() }
  },
}
</script>
