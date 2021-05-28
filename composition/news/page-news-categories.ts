import {
  computed,
  useFetch,
  useRoute,
  Ref,
  useContext,
} from '@nuxtjs/composition-api'
import { CheckPageUrl } from '~/lib/check-page-url'
import { NewsCategoriesInterface } from '~/interface/news/news-categories.interface'
import { RedirectCode } from '~/lib/redirect-code'
export function PageNewsCategories() {
  const { store, redirect } = useContext()
  const route = useRoute()
  const categoriesNews: Ref<NewsCategoriesInterface[]> = computed(() => {
    return store.getters['news/getCategories']
  })
  useFetch(async () => {
    await store.dispatch('news/actionsNewsCategories')
    const page = CheckPageUrl(route.value.query.page)
    const categoriesCode = route.value.params.code
    const categoriesId = route.value.params.id
    const categoriesFilter = categoriesNews.value.filter(
      (elem) => elem.id === Number(categoriesId)
    )[0]
    if (!categoriesFilter) {
      redirect('/404')
      return
    }
    RedirectCode().checkRedirectCode(
      redirect,
      categoriesCode,
      categoriesFilter?.code,
      `/news/categories/${categoriesFilter.id}`
    )
    await store.dispatch('news/actionsNews', { page, categories: categoriesId })
  })
  return {}
}
