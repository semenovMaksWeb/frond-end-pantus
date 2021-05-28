<template>
  <div>
    <input
      v-model="value"
      class="filter-search"
      type="text"
      placeholder="Поиск по списку"
      @input="searchCategories()"
    />
    <div v-if="errors" class="text-error">Указан не корретный символ</div>
  </div>
</template>

<script lang="ts">
import { FilterCategoriesSearch } from '~/composition/search/filter-search/filter-categories-search'

export default {
  name: 'FilterCategoriesSearch',
  props: {
    catalog: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any) {
    return { ...FilterCategoriesSearch(props.catalog) }
  },
}
</script>
