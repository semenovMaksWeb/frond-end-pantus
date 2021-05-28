import { useRouter, useStore } from '@nuxtjs/composition-api'
import { FilterCategoriesChecked } from '~/composition/search/filter-categories/filter-categories-checked'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { FilterRouter } from '~/composition/search/filter-router'
export function ResetCategories() {
  const store = useStore()
  const router = useRouter()
  const { CategoriesCheckedClick } = FilterCategoriesChecked(store)
  const resetCategories = async () => {
    const data: SearchCategoriesInterface[] =
      store.getters['search/data/getCategories']
    data.forEach((elem) => {
      CategoriesCheckedClick(elem, false)
    })
    store.commit('search/form/resetProduct')
    await FilterRouter(store, router).routerPush()
  }
  return { resetCategories }
}
