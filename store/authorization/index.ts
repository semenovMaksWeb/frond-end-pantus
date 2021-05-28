import {
  AuthorizationInterface,
  AuthorizationInterfaceDto,
  AuthorizationInterfaceStore,
} from '@/interface/authorization.interface'
import { ActionTree, MutationTree } from 'vuex'
import { AuthorizationAxios } from '@/axios/authorization.axios'

export const state = (): AuthorizationInterfaceStore => ({
  loaderUser: false,
  userAuthorization: false,
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setLoaderUser(store: AuthorizationInterfaceStore, data: boolean) {
    store.loaderUser = data
  },
  setUserAuthorization(store: AuthorizationInterfaceStore, data: boolean) {
    store.userAuthorization = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsAuthorization(
    { commit, dispatch },
    authorization?: AuthorizationInterfaceDto
  ): Promise<boolean> {
    const data: AuthorizationInterface = await AuthorizationAxios(
      this.$axios,
      authorization
    )
    this.app.$cookies.set('Authorization', data.token)
    commit('setLoaderUser', true)
    if (data.id) {
      // Запрос на получение user
      await dispatch('profile/actionsProfile', {}, { root: true })
      commit('setUserAuthorization', true)
      // Получение корзины и избранных
      commit('cart/setLoaderCart', false, { root: true })
      await Promise.all([
        dispatch('cart/actionsCart', undefined, { root: true }),
        dispatch('favorites/actionsFavoritesId', true, { root: true }),
      ])
      return true
    }
    return false
  },
}
export const getters = {
  getLoaderUser: (s: AuthorizationInterfaceStore) => s.loaderUser,
  getUserAuthorization: (s: AuthorizationInterfaceStore) => s.userAuthorization,
}
