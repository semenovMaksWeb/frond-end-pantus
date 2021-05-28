<template>
  <div class="filter-product-wrapper">
    <div
      class="filter-product__get filter-catalog-get-row"
      @click="toggleClick"
    >
      <img
        width="40"
        height="40"
        :src="require('~/assets/img/search/other-filters-red-5.a9edc5e.svg')"
      />
      <span class="link-hover-main">Все фильтры</span>
      <filter-button-get :toggle="toggle" />
    </div>
    <div v-show="toggle" class="filter-product-catalog-wrapper">
      <filter-product-brand />
      <filter-product-categories />
      <div class="row-gutters filter-product-buttons-wrapper">
        <filter-button-submit />
        <button
          class="button filter-product-button__reset"
          @click="resetCategories()"
        >
          Сбросить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FilterProductBrand from '~/components/search/filter-product/blog/filter-product-brand.vue'
import FilterProductCategories from '~/components/search/filter-product/blog/filter-product-categories.vue'
import { FilterSubmit } from '~/composition/search/filter-submit/filter-submit'
import { ResetCategories } from '~/composition/search/filter-categories/filter-categories-reset'
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import FilterButtonSubmit from '~/components/search/filter-button/filter-button-submit.vue'
import FilterButtonGet from '~/components/search/filter-button/filter-button-get.vue'

export default {
  name: 'FilterProduct',
  components: {
    FilterButtonGet,
    FilterButtonSubmit,
    FilterProductCategories,
    FilterProductBrand,
  },
  setup() {
    return { ...FilterSubmit(), ...ResetCategories(), ...ToggleClick() }
  },
}
</script>
<style lang="sass">
@import "assets/sass-mixin/index"
@import "assets/sass/search/filter-product/filter-product"
@import "assets/sass/search/filter-product/filter-product-element.sass"
@import "assets/sass/search/filter-product/filter-product-children.sass"
</style>
