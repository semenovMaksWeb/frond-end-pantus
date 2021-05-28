import { useFetch, useRoute, useStore } from '@nuxtjs/composition-api'
import { CheckPageUrl } from '~/lib/check-page-url'
export function PageNews() {
  const store = useStore()
  const route = useRoute()

  useFetch(async () => {
    const page = CheckPageUrl(route.value.query.page)
    await Promise.all([
      store.dispatch('news/actionsNews', { page }),
      store.dispatch('news/actionsNewsCategories'),
    ])
  })
  return {}
}
