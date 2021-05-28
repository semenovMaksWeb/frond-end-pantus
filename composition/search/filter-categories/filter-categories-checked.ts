import { computed } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { CategoriesCheckedChildren } from '~/composition/search/filter-categories/filter-categories-children-value'
import { CategoriesParentCheckChildren } from '~/composition/search/filter-categories/filter-categories-parentCheckChildren'
import { CategoriesParent } from '~/composition/search/filter-categories/filter-categories-parentAll'

export function FilterCategoriesChecked(store: any) {
  // const { store } = useContext()
  const CategoriesFilterVuex = computed(() => {
    return store.getters['search/data/getCategories']
  })
  const CategoriesCheckedClick = (
    data: SearchCategoriesInterface,
    value: boolean
  ) => {
    store.commit('search/data/setChecked', {
      data,
      checkedType: value,
      indeterminate: false,
    })
    // прогнать всех потомков в true
    CategoriesCheckedChildren(store).CategoriesCheckedChildrenValue(data, value)
    if (data.level !== 1) {
      const DataParentTop = CategoriesFilterVuex.value.filter(
        (elem: { id: number }) => elem.id === data.topParent
      )[0]
      if (data.level === 2) {
        CategoriesParentCheckChildren(store).CategoriesCheckedChildrenValue(
          DataParentTop
        )
      } else {
        CategoriesParent(store).CategoriesParentAll(DataParentTop)
      }
    }
  }
  return { CategoriesCheckedClick }
}
