import {
  CategoriesInterfaceStore,
  CategoriesInterface,
} from '@/interface/categories.interface'
import { ActionTree, MutationTree } from 'vuex'
import { categoriesAxios } from '@/axios/categories.axios'
export const state = (): CategoriesInterfaceStore => ({
  categories: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCategories(
    store: CategoriesInterfaceStore,
    categories: CategoriesInterface[]
  ) {
    store.categories = categories
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCategories({ commit }) {
    const data: CategoriesInterface[] = await categoriesAxios(this.$axios)
    commit('setCategories', data)
  },
}
export const getters = {
  getCategories: (s: CategoriesInterfaceStore) => s.categories,
}
