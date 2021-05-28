import { computed, useContext } from '@nuxtjs/composition-api'
export function SearchQuery() {
  const { store } = useContext()
  const getProductCount = computed(() => {
    return store.getters['product/filter/getProductCount']
  })
  return { getProductCount }
}
