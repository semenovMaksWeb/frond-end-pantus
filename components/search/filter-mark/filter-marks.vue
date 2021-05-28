<template>
  <div class="filter-marks-wrapper row">
    <template v-for="mark in getMark">
      <div :key="mark.id" class="filter-mark" @click="deleteMark(mark)">
        {{ mark.name }}
        <FontAwesome unicode="&#xf00d;" class="filter-mark-delete" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { FilterMark } from '~/composition/search/filter-mark/filter-mark'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'

export default {
  name: 'FilterMarks',
  components: { FontAwesome },
  setup() {
    return { ...FilterMark() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/search/filter-mark/index"
</style>
