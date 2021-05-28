import { useContext, computed, useRouter } from '@nuxtjs/composition-api'
import { FilterRouter } from '~/composition/search/filter-router'

export function FilterApplicabiliriesButtonReset() {
  const { store } = useContext()
  const router = useRouter()
  const PanelAll = computed(
    () => store.getters['search/panel/getSearchApplicabilitiesPanel']
  )
  const resetPanel = async () => {
    store.commit('search/panel/resetPanel')
    store.commit('search/form/resetApplicabilities')
    store.commit('search/data/resetCarbrandsTopSelect')
    await FilterRouter(store, router).routerPush()
  }
  return { PanelAll, resetPanel }
}
