import {
  computed,
  useContext,
  useFetch,
  onUnmounted,
} from '@nuxtjs/composition-api'
import { RedirectCode } from '~/lib/redirect-code'
export function PageProductsId() {
  const { store, route, redirect } = useContext()
  const getProductId = computed(() => {
    return store.getters['product/id/getProductId']
  })
  const userProfile = computed(() => {
    return store.getters['profile/getProfile']
  })

  useFetch(async () => {
    const id = route.value.params.id
    await store.dispatch('product/id/actionsProductId', id)
    if (getProductId.value) {
      const articul = `${getProductId.value.productCard.sku.normalized}-${getProductId.value.productCard.brand.code}`
      RedirectCode().checkRedirectCode(
        redirect,
        route.value.params.articul,
        articul,
        `/products/${getProductId.value.productCard.id}`
      )
    } else {
      redirect(`/404`)
    }
  })

  const getActiveProductId = computed(() => {
    return store.getters['product/id/getActiveProductId']
  })

  onUnmounted(() => {
    store.commit('product/id/resetProductId')
  })
  return { getProductId, getActiveProductId, userProfile }
}
