import {
  computed,
  onUnmounted,
  useContext,
  useFetch,
  useRoute,
  watch,
} from '@nuxtjs/composition-api'
import { catalogCodeId } from '~/lib/catalog-code-id'

export function PageCarbrandsCode() {
  const { store, redirect } = useContext()
  const route = useRoute()
  const {
    pageCatalogSelected,
    catalogSearch,
    pageNameSelected,
  } = catalogCodeId(route, store, redirect)

  const getCarbrands = computed(() => {
    return store.getters['carbrands/getCarbrands']
  })

  const textTitle = computed(() => {
    return pageNameSelected.value?.join(' - ')
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
    await store.dispatch('carbrands/actionsCarbrands')
    await catalogSearch(getCarbrands.value)
  })
  watch(route, async () => {
    await catalogSearch(getCarbrands.value)
  })
  onUnmounted(() => {
    store.commit('product/catalog/flagProductFalse')
    store.commit('product/catalog/resetProductCatalog')
  })
  return {
    getCarbrands,
    textTitle,
    pageCatalogSelected,
    getProductFilter,
    getRoutePath,
    getFlagProduct,
  }
}
