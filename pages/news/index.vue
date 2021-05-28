<template>
  <div class="container">
    <div class="row news-categories-row">
      <news-categories
        v-for="categories in categoriesNews"
        :key="categories.id"
        :categories="categories"
      />
    </div>
    <h1 class="h1">Новости</h1>
    <div class="row">
      <news
        v-for="newsId in news"
        :key="newsId.id"
        class="news"
        :news="newsId"
      />
    </div>
    <base-pagination
      v-if="newsCount > newsLimit"
      :count-element="newsCount"
      :limit-element="newsLimit"
      @click="paginationClick"
    />
  </div>
</template>

<script lang="ts">
import { PageNews } from '~/composition/news/page-news.ts'
import NewsCategories from '~/components/news/news-categories/news-categories.vue'
import News from '~/components/news/news.vue'
import { NewsView } from '~/composition/news/news-view'

export default {
  name: 'PageNews',
  components: {
    BasePagination: () =>
      import('~/components/base/pagination/base-pagination.vue'),
    News,
    NewsCategories,
  },
  setup() {
    return { ...PageNews(), ...NewsView() }
  },
}
</script>

<!--<style scoped></style>-->
