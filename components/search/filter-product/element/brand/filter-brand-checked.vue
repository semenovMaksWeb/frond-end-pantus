<template>
  <div class="filter-input-wrapper" @click="ClickBrandChecked">
    <div class="filter-input">
      <font-awesome v-if="checked === false" unicode="&#xf096;" />
      <font-awesome v-if="checked === true" unicode="&#xf14a;" />
      <!--    <font-awesome unicode="&#xf146;" />-->
      <span class="filter-input-name">{{ source.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import FontAwesome from '~/components/base/font-awesome/font-awesome.vue'
import { brandInterface } from '~/interface/brands/brand.interface'
import { FilterBrandChecked } from '~/composition/search/filter-brand/filter-brand-checked.ts'
export default {
  name: 'FilterBrandChecked',
  components: { FontAwesome },
  props: {
    source: {
      type: Object as () => PropType<brandInterface>,
    },
  },
  setup(props: any) {
    return { ...FilterBrandChecked(props.source.id) }
  },
}
</script>
