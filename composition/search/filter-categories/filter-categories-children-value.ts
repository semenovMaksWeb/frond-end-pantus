import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
export function CategoriesCheckedChildren(store: any) {
  const CategoriesCheckedChildrenValue = (
    data: SearchCategoriesInterface,
    value: boolean
  ) => {
    data.children.forEach((element) => {
      store.commit('search/data/setChecked', {
        data: element,
        checkedType: value,
        indeterminate: false,
      })
      if (element.children.length !== 0) {
        CategoriesCheckedChildrenValue(element, value)
      }
    })
  }
  return { CategoriesCheckedChildrenValue }
}
