import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
import { RedirectCode } from '~/lib/redirect-code'
export function PageBrandId() {
  const { store, route, redirect } = useContext()
  useFetch(async () => {
    const id = route.value.params.id
    const code = route.value.params.code
    await store.dispatch('brand/actionsBrandId', id)
    RedirectCode().checkRedirectCode(
      redirect,
      code,
      getBrandId.value.code,
      `/brands/${id}`
    )
  })

  const getBrandId = computed(() => {
    return store.getters['brand/getBrandId']
  })

  return {
    getBrandId,
  }
}
