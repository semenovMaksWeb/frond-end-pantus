<template>
  <div class="col">
    <div class="news-preview">
      <img
        v-if="news.preview.image"
        :src="news.preview.image"
        alt=""
        class="news-img img"
      />
      <nuxt-link
        :to="'/news/' + news.id"
        class="news-name link link-hover-main"
        >{{ news.name }}</nuxt-link
      >
    </div>
    <div class="news-text" v-html="news.preview.text" />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { NewsInterface } from '@/interface/news/news.interface'

export default {
  name: 'News',
  props: {
    news: {
      type: Object as PropType<NewsInterface>,
    },
  },
}
</script>

<style lang="sass">
@import "assets/sass/news/news"
</style>
