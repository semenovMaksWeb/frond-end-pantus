<template>
  <div class="container">
    <div class="row">
      <div v-if="newsId" class="news-id static" v-html="newsId.content" />
      <div v-if="newsPopular.length !== 0" class="news-view-wrapper">
        <h2 class="h2 col">Новости</h2>
        <news
          v-for="news in newsPopular"
          :key="news.id"
          class="news-view"
          :news="news"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PageNewsId } from '~/composition/news/page-news-id'
import News from '~/components/news/news.vue'

export default {
  name: 'PageNewsId',
  components: { News },
  setup() {
    return { ...PageNewsId() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/static/static"
@import "assets/sass/static/news-static"
@import "assets/sass/news/news-id"
</style>
