<template>
  <div class="categories-id-catalog box-shadow">
    <nuxt-link
      :to="'/categories/' + categories.code"
      class="categories-id-link-main link-hover-main"
    >
      {{ categories.name }}
    </nuxt-link>
    <nuxt-link
      v-for="children in categories.children"
      :key="children.id"
      :to="'/categories/' + categories.code + '/' + children.code"
      class="categories-id-link-children"
    >
      {{ children.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { CategoriesInterface } from '@/interface/categories.interface'

export default {
  name: 'CategoriesIdCatalog',
  props: {
    categories: {
      default: [],
      type: Object as () => PropType<CategoriesInterface>,
    },
  },
}
</script>
