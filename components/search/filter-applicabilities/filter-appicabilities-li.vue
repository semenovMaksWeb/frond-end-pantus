<template>
  <li
    v-if="!element.selectCheck"
    class="filter-appicabilities-li"
    v-on="$listeners"
    @click="toggleLi(indexPanel)"
  >
    <template v-if="element.level !== 1">
      <font-awesome v-if="selectedLi" unicode="&#xf14a;" />
      <font-awesome v-if="!selectedLi" unicode="&#xf096;" />
    </template>
    {{ element.name }}
  </li>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { FilterApplicabiliriesLi } from '@/composition/search/filter-applicabilities/filter-applicabilities-li.ts'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
export default {
  name: 'FilterFilterAppicabilitiesLi',
  components: { FontAwesome },
  props: {
    element: {
      type: Object as () => PropType<SearchApplicabilitiesInterface>,
    },
    selected: {
      type: Array,
    },
    indexPanel: {
      type: Number,
    },
  },
  setup(props: any) {
    const filterApplicabiliriesLi = FilterApplicabiliriesLi(
      props.element,
      props.selected
    )
    return { ...filterApplicabiliriesLi }
  },
}
</script>

<!--<style scoped></style>-->
