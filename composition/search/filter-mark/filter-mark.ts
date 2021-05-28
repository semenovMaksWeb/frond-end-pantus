import { computed, Ref, useContext, useRouter } from '@nuxtjs/composition-api'
import { SearchMarkInterface } from '~/interface/search/data/search-metks.interface'
import { FilterRouter } from '~/composition/search/filter-router'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
export function FilterMark() {
  const { store } = useContext()
  const router = useRouter()
  const getMark = computed(() => store.getters['search/data/getMark'])
  const getBrandChecked: Ref<number[]> = computed(
    () => store.getters['search/form/getBrandChecked']
  )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
  const getCategories: Ref<SearchCategoriesInterface[]> = computed(
    () => store.getters['search/data/getCategories']
  )
  const getCategoriesChecked: Ref<number[]> = computed(
    () => store.getters['search/form/getCategoriesChecked']
  )
  const deleteMark = async (mark: SearchMarkInterface) => {
    const markId = mark.id

    if (mark.type === 'brand') {
      const indexBrandChecked = getBrandChecked.value.findIndex(
        (elem) => elem === markId
      )
      store.commit('search/form/deleteBrandChecked', indexBrandChecked)
    }
    // eslint-disable-next-line no-empty
    if (mark.type === 'categories') {
      categoriesSearch(getCategories.value, markId)
    }
    await FilterRouter(store, router).routerPush()
  }
  const categoriesSearch = (
    data: SearchCategoriesInterface[],
    markId: number
  ) => {
    for (const elem of data) {
      if (elem.id === markId) {
        categoriesDelete(elem)
        return
      } else if (elem.children.length > 0) {
        categoriesSearch(elem.children, markId)
      }
    }
  }
  const categoriesDelete = (data: SearchCategoriesInterface) => {
    const indexCategoriesChecked = getCategoriesChecked.value.findIndex(
      (elem) => elem === data.id
    )
    if (indexCategoriesChecked !== -1) {
      store.commit(
        'search/form/deleteCategoriesChecked',
        indexCategoriesChecked
      )
    }
    if (data.children.length > 0) {
      data.children.forEach((elem) => {
        categoriesDelete(elem)
      })
    }
  }
  return { getMark, deleteMark }
}
