import { computed, useStore, ComputedRef } from '@nuxtjs/composition-api'
import { SearchVid } from '~/store/search/vid'

export function SearchPageVidProduct() {
  const store = useStore()
  const vidProduct: ComputedRef<SearchVid> = computed(() => {
    return store.getters['search/vid/getVid']
  })
  const setVidProduct = (data: string) => {
    store.commit('search/vid/setVid', data)
  }
  return { vidProduct, setVidProduct }
}
