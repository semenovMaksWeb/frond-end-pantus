import {
  computed,
  useContext,
  useFetch,
  useRoute,
} from '@nuxtjs/composition-api'
import { CheckPageUrl } from '~/lib/check-page-url'
export function PageOrders() {
  const { store } = useContext()
  const route = useRoute()
  useFetch(async () => {
    await paginationOrder()
  })
  const paginationOrder = async () => {
    const page = CheckPageUrl(route.value.query.page)
    await store.dispatch('orders/actionsOrder', page)
  }
  const getOrder = computed(() => {
    return store.getters['orders/getOrder']
  })
  const getLimit = computed(() => {
    return store.getters['orders/getOrderLimit']
  })
  const getCountOrders = computed(() => {
    return store.getters['orders/getCountOrders']
  })
  const getOrderActive = computed(() => {
    return store.getters['orders/getOrderActive']
  })
  return { getOrder, getLimit, getCountOrders, paginationOrder, getOrderActive }
}
