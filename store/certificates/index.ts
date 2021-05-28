import { CertificatesInterface } from '@/interface/certificates.interface'
import { ActionTree, MutationTree } from 'vuex'
import { CertificatesAxios } from '@/axios/certificates.axios'

interface CertificatesInterfaceStore {
  certificates: CertificatesInterface[]
}

export const state = (): CertificatesInterfaceStore => ({
  certificates: [],
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCertificates(
    store: CertificatesInterfaceStore,
    data: CertificatesInterface[]
  ) {
    store.certificates = data
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async actionsAuthorization({ commit }) {
    const data: CertificatesInterface[] = await CertificatesAxios(this.$axios)
    commit('setCertificates', data)
  },
}
export const getters = {
  getCertificates: (s: CertificatesInterfaceStore) => s.certificates,
}
