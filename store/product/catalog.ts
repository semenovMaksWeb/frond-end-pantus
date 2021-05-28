import { TypeProductVuex } from '@/interface/products/products.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProductCatalogAxios } from '~/axios/products/product-catalog'

interface InterfaceFilterProduct {
  catalog: TypeProductVuex[]
  limit: number
  count: number
  flagProduct: boolean
}
export interface InterfaceFilterProductMap {
  data: TypeProductVuex[]
  count: number
}

export const state = (): InterfaceFilterProduct => ({
  catalog: [],
  limit: 30,
  count: 0,
  flagProduct: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProductCatalog(
    store: InterfaceFilterProduct,
    data: InterfaceFilterProductMap
  ) {
    store.catalog = data.data
    store.count = data.count
    store.flagProduct = true
  },
  resetProductCatalog(store: InterfaceFilterProduct) {
    store.catalog = []
  },
  flagProductFalse(store: InterfaceFilterProduct) {
    store.flagProduct = false
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProductCatalog({ state, commit }, filter: {}) {
    commit('flagProductFalse')
    const data: InterfaceFilterProductMap = await ProductCatalogAxios(
      this.$axios,
      filter,
      state.limit
    )
    commit('setProductCatalog', data)
  },
}
export const getters = {
  getProductFilter: (s: InterfaceFilterProduct) => s.catalog,
  getProductLimit: (s: InterfaceFilterProduct) => s.limit,
  getProductCount: (s: InterfaceFilterProduct) => s.count,
  getFlagProduct: (s: InterfaceFilterProduct) => s.flagProduct,
}
