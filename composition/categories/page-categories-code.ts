import {
  computed,
  onUnmounted,
  useContext,
  useFetch,
  useRoute,
  watch,
} from '@nuxtjs/composition-api'
import { catalogCodeId } from '~/lib/catalog-code-id'

export function PageCategoriesCode() {
  const { store, redirect } = useContext()
  const route = useRoute()
  const {
    pageCatalogSelected,
    catalogSearch,
    pageNameSelected,
  } = catalogCodeId(route, store, redirect)

  const getCategories = computed(() => {
    return store.getters['categories/getCategories']
  })

  const textTitle = computed(() => {
    return pageNameSelected.value[pageNameSelected.value.length - 1]
  })
  const getProductFilter = computed(() => {
    return store.getters['product/catalog/getProductFilter']
  })
  const getFlagProduct = computed(() => {
    return store.getters['product/catalog/getFlagProduct']
  })
  const getRoutePath = computed(() => {
    return route.value.fullPath
  })

  useFetch(async () => {
    await store.dispatch('categories/actionsCategories')
    await catalogSearch(getCategories.value)
  })
  watch(route, async () => {
    await catalogSearch(getCategories.value)
  })
  onUnmounted(() => {
    store.commit('product/catalog/flagProductFalse')
    store.commit('product/catalog/resetProductCatalog')
  })
  return {
    getCategories,
    textTitle,
    pageCatalogSelected,
    getProductFilter,
    getRoutePath,
    getFlagProduct,
  }
}
