import {
  ProfileInterface,
  ProfileInterfaceDto,
  ProfileInterfaceStore,
} from '@/interface/profile.interface'
import { ActionTree, MutationTree } from 'vuex'
import { ProfileAxios, ProfileUpdateAxios } from '@/axios/profile/profile.axios'
import { BlockInfoType } from '~/interface/base/block-info.interface'
export const state = (): ProfileInterfaceStore => ({
  profile: undefined,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setProfile(store: ProfileInterfaceStore, profile: ProfileInterface) {
    store.profile = profile
  },
  updateProfile(store: ProfileInterfaceStore, profile: ProfileInterfaceDto) {
    if (store.profile) {
      store.profile.name = profile.name.first
      store.profile.surname = profile.name.last
      store.profile.patronymic = profile.name.patronymic
      store.profile.telephone = profile.contacts.phone.personal
    }
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsProfile({ commit }) {
    const data: ProfileInterface | undefined = await ProfileAxios(this.$axios)
    if (data !== undefined) {
      commit('setProfile', data)
    }
  },
  async actionsUpdateProfile(
    { commit },
    profileInterfaceDto: ProfileInterfaceDto
  ) {
    const check: boolean = await ProfileUpdateAxios(
      this.$axios,
      profileInterfaceDto
    )
    if (check) {
      commit('updateProfile', profileInterfaceDto)
      commit(
        'blog-info/setBlockInfo',
        {
          text: 'Данные удачно измененны',
          active: true,
          type: BlockInfoType.Good,
        },
        { root: true }
      )
    }
  },
}
export const getters = {
  getProfile: (s: ProfileInterfaceStore) => s.profile,
}
