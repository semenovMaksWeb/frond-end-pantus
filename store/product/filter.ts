import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProductFilterAxios } from '~/axios/products/product-filter'

interface InterfaceFilterProduct {
  filter: TypeProductVuex[]
  limit: number
  count: number
  searchStart: boolean // Требуется ли загружить товары
  flagProduct: boolean // были ли загружены товары
}
export interface InterfaceFilterProductMap {
  data: TypeProductVuex[]
  count: number
}

export const state = (): InterfaceFilterProduct => ({
  filter: [],
  limit: 30,
  count: 0,
  searchStart: true,
  flagProduct: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProductFilter(
    store: InterfaceFilterProduct,
    data: InterfaceFilterProductMap
  ) {
    store.filter = data.data
    store.count = data.count
    store.flagProduct = true
  },
  setSearchStart(store: InterfaceFilterProduct, data: boolean) {
    store.searchStart = data
  },
  flagProductFalse(store: InterfaceFilterProduct) {
    store.flagProduct = false
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProductFilter({ state, commit, rootGetters }) {
    commit('flagProductFalse')
    const data: InterfaceFilterProductMap = await ProductFilterAxios(
      this.$axios,
      rootGetters['search/form/getForm'],
      state.limit
    )
    commit('setProductFilter', data)
  },
}
export const getters = {
  getProductFilter: (s: InterfaceFilterProduct) => s.filter,
  getProductLimit: (s: InterfaceFilterProduct) => s.limit,
  getProductCount: (s: InterfaceFilterProduct) => s.count,
  getSearchStart: (s: InterfaceFilterProduct) => s.searchStart,
  getFlagProduct: (s: InterfaceFilterProduct) => s.flagProduct,
}
