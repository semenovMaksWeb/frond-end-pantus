<template>
  <div class="carbrands-id-catalog col">
    <nuxt-link :to="'/carbrands/' + carbrands.code" class="carbrands-id-link">
      {{ carbrands.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CarbrandsInterface } from '@/interface/carbrands.interface'

export default {
  name: 'CarbrandsIdCatalog',
  props: {
    carbrands: {
      default: [],
      type: Object as () => PropType<CarbrandsInterface>,
    },
  },
}
</script>
