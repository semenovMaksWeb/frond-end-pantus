import { ActionTree, MutationTree } from 'vuex'
// import vue from 'Vue'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { SearchDataInterface } from '~/interface/search/data/search-data.interface'
import { brandInterface } from '~/interface/brands/brand.interface'

import { brandAxios } from '~/axios/brand/brand.axios'
import { carbrandsFilterAxios } from '~/axios/carbrands.axios'
import { categoriesFilterAxios } from '~/axios/categories.axios'
import { SearchMarkInterface } from '~/interface/search/data/search-metks.interface'
export const state = (): SearchDataInterface => ({
  brands: [],
  carbrands: [],
  categories: [],
  mark: [],
  loader: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  // mark
  pushMark(store: SearchDataInterface, data: SearchMarkInterface) {
    store.mark.push(data)
  },
  resetMark(store: SearchDataInterface) {
    store.mark = []
  },
  deleteMark(store: SearchDataInterface, index: number) {
    store.mark.splice(index, 1)
  },
  // Carbrands
  setFilterCarbrands(
    store: SearchDataInterface,
    data: SearchApplicabilitiesInterface[]
  ) {
    store.carbrands = data
  },
  setLoader(store: SearchDataInterface, data: boolean) {
    store.loader = data
  },
  setCarbrandsTopSelect(store: SearchDataInterface, index: number) {
    store.carbrands[index].selectCheck = !store.carbrands[index].selectCheck
  },

  resetCarbrandsTopSelect(store: SearchDataInterface) {
    store.carbrands.forEach((elem) => {
      elem.selectCheck = false
    })
  },
  // Categories
  setFilterCategories(
    store: SearchDataInterface,
    data: SearchCategoriesInterface[]
  ) {
    store.categories = data
  },
  setChecked(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store: SearchDataInterface,
    data: {
      data: SearchCategoriesInterface
      checkedType: boolean
      indeterminate: boolean
    }
  ) {
    data.data.indeterminate = data.indeterminate
    data.data.checkedType = data.checkedType
  },
  setCategoriesActive(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store: SearchDataInterface,
    data: {
      data: SearchCategoriesInterface
      visible: boolean
    }
  ) {
    data.data.visible = data.visible
  },
  // Brands
  setFilterBrands(store: SearchDataInterface, data: brandInterface[]) {
    store.brands = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsFilter({ commit, state }) {
    if (!state.loader) {
      const data = await Promise.all([
        brandAxios(this.$axios),
        categoriesFilterAxios(this.$axios),
        carbrandsFilterAxios(this.$axios),
      ])
      commit('setFilterBrands', data[0])
      commit('setFilterCategories', data[1])
      commit('setFilterCarbrands', data[2])
      commit('setLoader', true)
    }
  },
}

export const getters = {
  getCarbrands: (s: SearchDataInterface) => s.carbrands,
  getCategories: (s: SearchDataInterface) => s.categories,
  getBrands: (s: SearchDataInterface) => s.brands,
  getMark: (s: SearchDataInterface) => s.mark,
}
