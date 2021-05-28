import { computed, Ref, useRoute, useStore } from '@nuxtjs/composition-api'
import { NewsCategoriesInterface } from '~/interface/news/news-categories.interface'
import { scrollTop } from '~/lib/scroll-top'
export function NewsView() {
  const store = useStore()
  const route = useRoute()
  const categoriesNews: Ref<NewsCategoriesInterface[]> = computed(() => {
    return store.getters['news/getCategories']
  })
  const news = computed(() => {
    return store.getters['news/getNews']
  })
  const newsCount = computed(() => {
    return store.getters['news/getCount']
  })
  const newsLimit = computed(() => {
    return store.getters['news/getLimit']
  })
  const paginationClick = async () => {
    scrollTop()
    const page = route.value.query?.page
    const categoriesId = route.value.params.id
    await store.dispatch('news/actionsNews', { page, categories: categoriesId })
  }
  return { categoriesNews, news, newsCount, newsLimit, paginationClick }
}
