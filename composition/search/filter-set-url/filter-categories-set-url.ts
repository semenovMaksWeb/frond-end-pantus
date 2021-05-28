import { computed, Ref } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { FilterCategoriesChecked } from '~/composition/search/filter-categories/filter-categories-checked'
import { TypeMark } from '~/interface/search/data/search-metks.interface'
export function FilterCategoriesSetUrl(store: any) {
  const dataset: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const categoriesId: Ref<number[]> = computed(
    () => store.getters['search/form/getCategoriesChecked']
  )
  const filterCategoriesSetUrl = (data = dataset.value) => {
    data.forEach((elem) => {
      checkCategories(elem)
    })
  }
  const checkCategories = (elem: SearchCategoriesInterface) => {
    if (categoriesId.value.includes(elem.id)) {
      store.commit('search/data/pushMark', {
        id: elem.id,
        name: elem.name,
        type: TypeMark.categories,
      })
      FilterCategoriesChecked(store).CategoriesCheckedClick(elem, true)
      return
    }
    if (elem.children.length > 0) {
      elem.children.forEach((children) => {
        checkCategories(children)
      })
    }
  }
  return { filterCategoriesSetUrl }
}
