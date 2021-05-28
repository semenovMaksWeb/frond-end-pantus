import {
  computed,
  useContext,
  useFetch,
  useRoute,
  watch,
  onUnmounted,
} from '@nuxtjs/composition-api'
import { FilterMap } from '~/composition/search/filter-map'
import { FilterCategoriesSetUrl } from '~/composition/search/filter-set-url/filter-categories-set-url'
import { FilterApplicabilitiesSetUrl } from '~/composition/search/filter-set-url/filter-applicabilities-set-url'
import { FilterBrandMark } from '~/composition/search/filter-brand/filter-brand-mark'
import { scrollTop } from '~/lib/scroll-top'

export function PageSearch() {
  const { store } = useContext()
  const route = useRoute()
  const filterStart = async () => {
    const filter = FilterMap().queryToVuex(route)
    store.commit('search/form/setForm', filter)
    await Promise.all([
      store.dispatch('search/data/actionsFilter'),
      store.dispatch('product/filter/actionsProductFilter'),
    ])
    store.commit('search/panel/deletePanel')
    store.commit('search/data/resetMark')
    FilterCategoriesSetUrl(store).filterCategoriesSetUrl()
    FilterApplicabilitiesSetUrl(store).setUrlApplicabilities()
    FilterBrandMark(store).markBrand()
    if (
      store.getters['search/panel/getSearchApplicabilitiesPanel'].length === 0
    ) {
      store.commit('search/panel/resetPanel')
    }
  }
  useFetch(async () => {
    await filterStart()
  })
  watch(route, async () => {
    if (getSearchStart.value) {
      await filterStart()
    }
    store.commit('product/filter/setSearchStart', true)
  })

  const pageSet = (value: number) => {
    scrollTop()
    store.commit('search/form/setPage', value)
  }
  const productFilter = computed(() => {
    return store.getters['product/filter/getProductFilter']
  })
  const getProductLimit = computed(() => {
    return store.getters['product/filter/getProductLimit']
  })
  const getProductCount = computed(() => {
    return store.getters['product/filter/getProductCount']
  })
  const getSearchStart = computed(() => {
    return store.getters['product/filter/getSearchStart']
  })
  const getFlagProduct = computed(() => {
    return store.getters['product/filter/getFlagProduct']
  })
  onUnmounted(() => {
    store.commit('search/form/resetAll')
    store.commit('search/panel/deletePanel')
    store.commit('search/data/resetCarbrandsTopSelect')
    store.commit('search/data/resetMark')
    store.commit('product/filter/setProductFilter', { data: [], count: 0 })
  })
  return {
    productFilter,
    getProductLimit,
    getProductCount,
    getSearchStart,
    getFlagProduct,
    pageSet,
  }
}
