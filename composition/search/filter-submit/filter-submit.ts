import { useContext, computed, useRouter } from '@nuxtjs/composition-api'
import { CategoriesCheckedTrue } from '~/composition/search/filter-categories/filter-categories-checked-true'
import { ApplicabilitiesCheckedTrue } from '~/composition/search/filter-applicabilities/filter-appicabilites-checked-true'
import { FilterBrandMark } from '~/composition/search/filter-brand/filter-brand-mark'
import { FilterRouter } from '~/composition/search/filter-router'
export function FilterSubmit() {
  const { store } = useContext()
  const router = useRouter()
  const panelApplicabilities = computed(() => {
    return store.getters['search/panel/getSearchApplicabilitiesPanel']
  })
  const categories = computed(() => {
    return store.getters['search/data/getCategories']
  })

  const FilterSubmit = async () => {
    await store.dispatch('search/panel/fixPanel')
    store.commit('search/data/resetMark')
    CategoriesCheckedTrue(store).CategoriesCheckedTrueAll(categories.value)
    ApplicabilitiesCheckedTrue(store).ApplicabilitiesCheckedTrueAll(
      panelApplicabilities.value
    )
    FilterBrandMark(store).markBrand()
    store.commit('search/form/setPage', 1)
    await store.dispatch('product/filter/actionsProductFilter')
    store.commit('product/filter/setSearchStart', false)
    await FilterRouter(store, router).routerPush()
  }
  return { FilterSubmit }
}
