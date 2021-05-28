<template>
  <div class="filter-appicabilities-wrapper-input">
    <div
      class="filter-appicabilities-input"
      :class="{ 'filter-appicabilities-input__disable': dataset.length === 0 }"
      @click="ToggleBodyFunctionClick"
    >
      <template v-if="selected.length === 0 || selected[0] === null">
        {{ text }}
      </template>
      <template v-if="dataset.length > 0 && selected.length > 0">
        <span v-for="item in SelectedNamePanel" :key="item.id">
          {{ item }}
        </span>
      </template>
    </div>
    <ul
      v-if="ToggleBody && dataset.length !== 0"
      class="filter-appicabilities-ul"
    >
      <filter-filter-appicabilities-li
        v-for="li in dataset"
        :key="li.id"
        :index-panel="indexPanel"
        :element="li"
        :selected="selected"
        @click="ApplicabilitiesTopUl(li.level)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { ToggleBodyFalse } from '@/composition/_toggle/toggle-body-false.ts'
import FilterFilterAppicabilitiesLi from '~/components/search/filter-applicabilities/filter-appicabilities-li.vue'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { FilterApplicabiliriesInput } from '~/composition/search/filter-applicabilities/filter-applicabilities-input'

export default {
  name: 'FilterAppicabilitiesInput',
  components: { FilterFilterAppicabilitiesLi },
  props: {
    text: {
      type: String,
    },
    selected: {
      type: Array,
    },
    dataset: {
      type: Array as () => PropType<SearchApplicabilitiesInterface>,
    },
    indexPanel: {
      type: Number,
    },
  },
  setup(props: any) {
    const toggleBody = ToggleBodyFalse(false)

    return {
      ...toggleBody,
      ...FilterApplicabiliriesInput(
        props,
        toggleBody.ToggleBodyFunctionSelectClick
      ),
    }
  },
}
</script>
