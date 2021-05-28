<template>
  <div class="base-pagination">
    <base-pagination-item
      v-for="data in arrayPagination"
      :key="data.text"
      :to="data.to"
      :text="data.text"
      v-on="$listeners"
      @click="setArrayPagination"
    />
  </div>
</template>

<script lang="ts">
import { Pagination } from '~/composition/base/pagination'
import { PaginationPropsInterface } from '~/interface/base/props/pagination-props.interface'
import BasePaginationItem from '~/components/base/pagination/base-pagination-item.vue'

export default {
  name: 'BasePagination',
  components: { BasePaginationItem },
  props: {
    limitPagination: {
      default: 5,
      type: Number,
    },
    limitElement: {
      default: 1,
      type: Number,
    },
    countElement: {
      default: 1,
      type: Number,
    },
    name: {
      type: String,
      default: 'page',
    },
  },
  setup(props: PaginationPropsInterface) {
    return { ...Pagination(props) }
  },
}
</script>
<style lang="sass">
@import "assets/sass/base/base-pagination"
</style>
