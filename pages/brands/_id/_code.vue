<template>
  <div class="container">
    <div class="static" v-html="getBrandId.description" />
  </div>
</template>

<script lang="ts">
import { PageBrandId } from '@/composition/brand/page-brand-id'

export default {
  name: 'PageBrandsId',
  setup() {
    return { ...PageBrandId() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/static/static"
</style>
