<template>
  <div class="filter-applicabilities">
    <form
      class="filter-applicabilities-form"
      :class="{ 'filter-applicabilities-form-get': toggle }"
    >
      <h3
        class="filter-applicabilities-title filter-catalog-get-row"
        @click="toggleClick"
      >
        <img
          width="40"
          height="40"
          :src="
            require('~/assets/img/search/filters-applicabilities-red-6.e88322f.svg')
          "
        />
        <span class="link-hover-main">Укажите применяемости</span>
        <filter-button-get :toggle="toggle" />
      </h3>
    </form>
    <div v-show="toggle" class="filter-applicabilities-wrapper-panel">
      <div class="filter-applicabilities-buttons">
        <button
          class="button filter-appicabilities-button__add"
          @click.prevent="addPanel"
        >
          Добавить
        </button>
        <button
          class="button filter-product-button__reset"
          @click.prevent="resetPanel"
        >
          Сбросить
        </button>
      </div>
      <FilterAppicabilitiesPanel
        v-for="(data, index) in Panel"
        :key="data.id"
        :panel="data"
        :index="index"
      />
      <filter-button-submit />
    </div>
  </div>
</template>

<script lang="ts">
import { ToggleClick } from '~/composition/_toggle/toggle-click'
import FilterAppicabilitiesPanel from '~/components/search/filter-applicabilities/filter-appicabilities-panel.vue'
import { FilterApplicabiliries } from '~/composition/search/filter-applicabilities/filter-applicabilities'
import { FilterApplicabiliriesButtonReset } from '~/composition/search/filter-applicabilities/filter-applicabilities-button-reset'
import FilterButtonSubmit from '~/components/search/filter-button/filter-button-submit.vue'
import FilterButtonGet from '~/components/search/filter-button/filter-button-get.vue'
export default {
  name: 'FilterApplicabilities',
  components: {
    FilterButtonGet,
    FilterButtonSubmit,
    FilterAppicabilitiesPanel,
  },
  setup() {
    return {
      ...ToggleClick(),
      ...FilterApplicabiliries(),
      ...FilterApplicabiliriesButtonReset(),
    }
  },
}
</script>

<style lang="sass">
@import "assets/sass-mixin/index"
@import "assets/sass/search/filter-applicabilities/filter-applicabilities"
</style>
