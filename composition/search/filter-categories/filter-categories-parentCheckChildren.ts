import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
export function CategoriesParentCheckChildren(store: any) {
  const CategoriesCheckedChildrenValue = (data: SearchCategoriesInterface) => {
    let checked: boolean = true
    let indeterminate: boolean = false
    data.children.forEach((element) => {
      if (element.checkedType || element.indeterminate) {
        indeterminate = true
      }
      if (!element.checkedType) {
        checked = false
      }
    })
    if (checked) {
      indeterminate = false
    }
    store.commit('search/data/setChecked', {
      data,
      checkedType: checked,
      indeterminate,
    })
  }
  return { CategoriesCheckedChildrenValue }
}
