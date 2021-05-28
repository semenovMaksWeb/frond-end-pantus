<template>
  <div>
    <input
      v-model="value"
      class="filter-search"
      type="text"
      placeholder="Поиск по списку"
      @input="emitStart"
    />
    <div v-if="errors" class="text-error">Указан не корретный символ</div>
  </div>
</template>

<script lang="ts">
import { FilterBrandSearch } from '~/composition/search/filter-search/filter-brand-search'

export default {
  name: 'FilterBrandSearch',
  props: {
    data: {
      type: Array,
    },
    res: {
      type: Array,
    },
  },
  setup(props: any, { emit }: { emit: Function }) {
    return { ...FilterBrandSearch(emit, props.data, props.res) }
  },
}
</script>
<style lang="sass">
@import "assets/sass/search/filter-input.sass"
</style>
