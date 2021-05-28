<template>
  <div class="search-query-count">
    По запросу найдено: {{ getProductCount }}
  </div>
</template>

<script lang="ts">
import { SearchQuery } from '~/composition/search/search-query'

export default {
  name: 'SearchQuery',
  setup() {
    return { ...SearchQuery() }
  },
}
</script>
