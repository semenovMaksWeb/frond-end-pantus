import { computed, Ref, ref, useContext } from '@nuxtjs/composition-api'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { FilterSearchReg } from '~/composition/search/filter-search/filter-search-reg'

export function FilterCategoriesSearch(catalog: boolean = false) {
  const { store } = useContext()
  const { checkSearchValue, errors } = FilterSearchReg()
  const categoriesVuex: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const categoriesPage: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['categories/getCategories']
  )
  const value = ref('')

  const searchCategories = () => {
    checkSearchValue(value.value)
    if (value.value.length === 0 && errors.value) {
      categoriesActiveAll(categoriesVuex.value, true)
    } else if (!errors.value) {
      if (catalog) {
        categoriesPage.value.forEach((elem) => {
          forCategoriesAll(elem)
        })
        return
      }
      categoriesVuex.value.forEach((elem) => {
        forCategoriesAll(elem)
      })
    }
  }
  const searchCategoriesName = (elem: SearchCategoriesInterface) => {
    return elem.name.toLowerCase().search(value.value.toLowerCase()) !== -1
  }
  const forCategoriesAll = (data: SearchCategoriesInterface): boolean => {
    let checkParent = false
    if (searchCategoriesName(data)) {
      checkParent = true
      categoriesActive(data, true)
    } else if (data.children.length !== 0) {
      for (const elem of data.children) {
        let check = false
        check = forCategoriesAll(elem)
        if (check) {
          checkParent = true
        }
      }
      if (checkParent) {
        categoriesActive(data, true)
      } else {
        categoriesActive(data, searchCategoriesName(data))
      }
    } else {
      categoriesActive(data, checkParent)
    }
    return checkParent
  }
  const categoriesActive = (
    data: SearchCategoriesInterface,
    value: boolean
  ) => {
    if (data.visible !== value) {
      store.commit('search/data/setCategoriesActive', {
        data,
        visible: value,
      })
    }
  }
  const categoriesActiveAll = (
    data: SearchCategoriesInterface[],
    visible: boolean
  ) => {
    data.forEach((elem) => {
      categoriesActive(elem, visible)
    })
  }
  return { value, searchCategories, errors }
}
