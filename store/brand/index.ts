import { ActionTree, MutationTree } from 'vuex'
import { brandAxios } from '~/axios/brand/brand.axios'
import {
  brandInterfaceStore,
  brandInterface,
} from '~/interface/brands/brand.interface'
import { brandIdInterface } from '~/interface/brands/brand-id.interface'
import { brandIdAxios } from '~/axios/brand/brand-id.axios'
export const state = (): brandInterfaceStore => ({
  brand: [],
  limitPage: 50,
  activeBrand: false,
  brandId: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setBrand(store: brandInterfaceStore, brand: brandInterface[]) {
    store.brand = brand
    store.activeBrand = true
  },
  setBrandId(store: brandInterfaceStore, brandId: brandIdInterface[]) {
    store.brandId = brandId
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsBrand({ commit }) {
    const data: brandInterface[] = await brandAxios(this.$axios)
    commit('setBrand', data)
  },
  async actionsBrandId({ commit }, id: number) {
    const data: brandIdInterface = await brandIdAxios(this.$axios, id)
    commit('setBrandId', data)
  },
}
export const getters = {
  getBrand: (s: brandInterfaceStore) => s.brand,
  getBrandActive: (s: brandInterfaceStore) => s.activeBrand,
  getBrandPage: (s: brandInterfaceStore) => (id: number) => {
    if (isNaN(id)) {
      id = 1
    }
    return s.brand?.slice((id - 1) * s.limitPage, s.limitPage * id)
  },
  getLimitPage: (s: brandInterfaceStore) => s.limitPage,
  getBrandId: (s: brandInterfaceStore) => s.brandId,
}
