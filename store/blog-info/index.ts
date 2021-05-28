import { MutationTree } from 'vuex'
import {
  BlockInfoInterface,
  BlockInfoStore,
  BlockInfoType,
} from '~/interface/base/block-info.interface'
export const state = (): BlockInfoStore => ({
  blockInfo: {
    text: '',
    active: false,
    type: BlockInfoType.Null,
  },
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setBlockInfo(store: BlockInfoStore, blockInfo: BlockInfoInterface) {
    store.blockInfo.text = blockInfo.text
    store.blockInfo.type = blockInfo.type
    store.blockInfo.active = blockInfo.active
  },
  setBlockInfoClose(store: BlockInfoStore) {
    store.blockInfo.active = false
  },
  setBlockInfoOpen(store: BlockInfoStore) {
    store.blockInfo.active = true
  },
}
export const getters = {
  getBlockInfo: (s: BlockInfoStore) => s.blockInfo,
}
