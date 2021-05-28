import {
  computed,
  ref,
  ssrRef,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
import { scrollTop } from '~/lib/scroll-top'
export function PageBrand() {
  const value = ref()
  const { store } = useContext()
  const route = useRoute()
  const getBrandView = ssrRef([])
  useFetch(async () => {
    await store.dispatch('brand/actionsBrand')

    getBrandView.value = store.getters['brand/getBrandPage'](
      Number(route.value.query.page)
    )
  })
  const setBrands = () => {
    scrollTop()
    getBrandView.value = store.getters['brand/getBrandPage'](
      Number(route.value.query.page)
    )
  }
  const getBrandActive = async () => {
    await store.dispatch('brand/getBrandActive')
  }
  const getBrandPage = computed(() => {
    return store.getters['brand/getBrandPage'](Number(route.value.query.page))
  })
  const getBrand = computed(() => {
    return store.getters['brand/getBrand']
  })
  const getLimitPage = computed(() => {
    return store.getters['brand/getLimitPage']
  })
  return {
    getBrandView,
    getLimitPage,
    getBrand,
    getBrandActive,
    setBrands,
    value,
    getBrandPage
  }
}
