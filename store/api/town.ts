import {
  TownInterface,
  TownInterfaceStore,
} from '@/interface/api/town.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ApiTownAxios } from '~/axios/api/town.axios'

export const state = (): TownInterfaceStore => ({
  town: [],
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setTown(store: TownInterfaceStore, data: TownInterface[]) {
    store.town = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsTown({ commit }, search: string): Promise<void> {
    const data: TownInterface[] = await ApiTownAxios(this.$axios, search)
    commit('setTown', data)
  },
}
export const getters = {
  getTown: (s: TownInterfaceStore) => s.town,
}
