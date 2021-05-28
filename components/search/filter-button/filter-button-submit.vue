<template>
  <button class="button link-hover-button" @click.prevent="FilterSubmit()">
    Показать
  </button>
</template>

<script lang="ts">
import { FilterSubmit } from '~/composition/search/filter-submit/filter-submit'

export default {
  name: 'FilterButtonSubmit',

  setup() {
    return { ...FilterSubmit() }
  },
}
</script>
