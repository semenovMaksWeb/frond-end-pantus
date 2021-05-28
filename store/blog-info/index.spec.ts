import { mutations, getters } from '@/store/blog-info/index'
import {
  BlockInfoInterface,
  BlockInfoStore,
  BlockInfoType,
} from '~/interface/base/block-info.interface'

describe('store blog-info', () => {
  const data: BlockInfoInterface = {
    type: BlockInfoType.Good,
    text: 'Удачно создан пользователь',
    active: true,
  }
  test('mutations setBlockInfo', () => {
    const state: BlockInfoStore = {
      blockInfo: { active: false, text: '', type: BlockInfoType.Null },
    }
    mutations.setBlockInfo(state, data)
    expect(state.blockInfo).toEqual(data)
  })
  test('mutations setBlockInfoClose', () => {
    const state: BlockInfoStore = { blockInfo: data }
    mutations.setBlockInfoClose(state)
    expect(state.blockInfo.active).toBe(false)
  })
  test('mutations setBlockInfoOpen', () => {
    const state: BlockInfoStore = {
      blockInfo: { active: false, text: '', type: BlockInfoType.Null },
    }
    mutations.setBlockInfoOpen(state)
    expect(state.blockInfo.active).toBe(true)
  })
  test('getters getBlockInfo', function () {
    const state: BlockInfoStore = { blockInfo: data }
    const getProfile = getters.getBlockInfo(state)
    expect(getProfile).toEqual(data)
  })
})
