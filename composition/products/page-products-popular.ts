import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
export function PageProductsPopular() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('product/popular/actionsProductPopular')
  })

  const getProductsPopular = computed(() => {
    return store.getters['product/popular/getProductPopular']
  })

  return { getProductsPopular }
}
