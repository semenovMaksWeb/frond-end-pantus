import { MutationTree } from 'vuex'

export enum SearchVid {
  'blog' = 'products-view-blog',
  'table' = 'products-view-table',
}

export interface SearchVidInterfaceStore {
  vid: SearchVid
}
export const state = (): SearchVidInterfaceStore => ({
  vid: SearchVid.table,
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setVid(store: SearchVidInterfaceStore, data: SearchVid) {
    store.vid = data
  },
}

export const getters = {
  getVid: (s: SearchVidInterfaceStore) => s.vid,
}
