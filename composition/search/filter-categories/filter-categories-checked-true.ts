import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { TypeMark } from '~/interface/search/data/search-metks.interface'
export function CategoriesCheckedTrue(store: any) {
  const CategoriesCheckedTrue = (
    dataset: SearchCategoriesInterface,
    searchMetka: boolean = true
  ) => {
    if (dataset.checkedType) {
      // выбранная категория
      store.commit('search/form/pushCategoriesChecked', dataset.id)
      //  Логика меток
      if (searchMetka) {
        store.commit('search/data/pushMark', {
          id: dataset.id,
          name: dataset.name,
          type: TypeMark.categories,
        })
      }
      searchMetka = false
    }
    if (dataset.indeterminate || dataset.checkedType) {
      // искать в потомках
      dataset.children.forEach((element) => {
        CategoriesCheckedTrue(element, searchMetka)
      })
    }
  }
  const CategoriesCheckedTrueAll = (dataset: SearchCategoriesInterface[]) => {
    store.commit('search/form/onlyResetCategories')
    dataset.forEach((data) => {
      CategoriesCheckedTrue(data)
    })
  }
  return { CategoriesCheckedTrueAll }
}
