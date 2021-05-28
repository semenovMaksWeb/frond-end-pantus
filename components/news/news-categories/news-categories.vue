<template>
  <nuxt-link
    :to="'/news/categories/' + categories.id + '/' + categories.code"
    class="col link link-hover-main news-categories box-shadow"
  >
    <div :to="'categories/' + categories.id + '/' + categories.code">
      {{ categories.name }}
    </div>
    <div class="news-categories-count">{{ categories.count }}</div>
  </nuxt-link>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { NewsCategoriesInterface } from '~/interface/news/news-categories.interface'
export default {
  name: 'NewsCategories',
  props: {
    categories: Object as PropType<NewsCategoriesInterface>,
  },
}
</script>

<style lang="sass">
@import "assets/sass/news/news-categories.sass"
</style>
