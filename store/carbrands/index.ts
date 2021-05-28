import {
  CarbrandsInterfaceStore,
  CarbrandsInterface,
} from '@/interface/carbrands.interface'
import { ActionTree, MutationTree } from 'vuex'
import { carbrandsAxios } from '@/axios/carbrands.axios'
export const state = (): CarbrandsInterfaceStore => ({
  carbrands: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCarbrands(
    store: CarbrandsInterfaceStore,
    carbrands: CarbrandsInterface[]
  ) {
    store.carbrands = carbrands
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCarbrands({ commit }) {
    const data: CarbrandsInterface[] = await carbrandsAxios(this.$axios)
    commit('setCarbrands', data)
  },
}
export const getters = {
  getCarbrands: (s: CarbrandsInterfaceStore) => s.carbrands,
}
