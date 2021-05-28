import {
  SearchFormInterface,
  SearchFormInterfaceStore,
} from '@/interface/search/search-form.interface'
import { MutationTree } from 'vuex'

export const state = (): SearchFormInterfaceStore => ({
  formFilterProduct: {
    brandChecked: [],
    search: '',
    categoriesChecked: [],
    applicabilitiesChecked: [],
    page: 1,
  },
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setForm(store: SearchFormInterfaceStore, data: SearchFormInterface) {
    store.formFilterProduct = data
  },
  setSearch(store: SearchFormInterfaceStore, value: string) {
    store.formFilterProduct.search = value
  },
  setPage(store: SearchFormInterfaceStore, data: number) {
    store.formFilterProduct.page = data
  },
  pushCategoriesChecked(store: SearchFormInterfaceStore, data: number) {
    store.formFilterProduct.categoriesChecked.push(data)
  },

  pushApplicabilitiesChecked(store: SearchFormInterfaceStore, data: number) {
    store.formFilterProduct.applicabilitiesChecked.push(data)
  },

  setBrandChecked(store: SearchFormInterfaceStore, data: number[]) {
    store.formFilterProduct.brandChecked = data
  },

  pushBrandChecked(store: SearchFormInterfaceStore, data: number) {
    store.formFilterProduct.brandChecked.push(data)
  },
  deleteBrandChecked(store: SearchFormInterfaceStore, index: number) {
    store.formFilterProduct.brandChecked.splice(index, 1)
  },
  deleteCategoriesChecked(store: SearchFormInterfaceStore, index: number) {
    store.formFilterProduct.categoriesChecked.splice(index, 1)
  },
  onlyResetCategories(store: SearchFormInterfaceStore) {
    store.formFilterProduct.categoriesChecked = []
  },
  onlyResetApplicabilities(store: SearchFormInterfaceStore) {
    store.formFilterProduct.applicabilitiesChecked = []
  },
  resetAll(store: SearchFormInterfaceStore) {
    store.formFilterProduct = {
      applicabilitiesChecked: [],
      brandChecked: [],
      categoriesChecked: [],
      search: '',
      page: 1,
    }
  },

  resetProduct(store: SearchFormInterfaceStore) {
    store.formFilterProduct.brandChecked = []
    store.formFilterProduct.categoriesChecked = []
  },
  resetApplicabilities(store: SearchFormInterfaceStore) {
    store.formFilterProduct.applicabilitiesChecked = []
  },
}

export const getters = {
  getForm: (s: SearchFormInterfaceStore) => s.formFilterProduct,
  getSearch: (s: SearchFormInterfaceStore) => s.formFilterProduct.search,
  getApplicabilitiesChecked: (s: SearchFormInterfaceStore) =>
    s.formFilterProduct.applicabilitiesChecked,
  getBrandChecked: (s: SearchFormInterfaceStore) =>
    s.formFilterProduct.brandChecked,
  getCategoriesChecked: (s: SearchFormInterfaceStore) =>
    s.formFilterProduct.categoriesChecked,
}
