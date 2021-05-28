import { ActionTree, MutationTree } from 'vuex'
import { orderRulesAxios } from '@/axios/order/orders-servers/orders-rules.axios'
import {
  OrdersRulesInterface,
  OrdersRulesInterfaceStore,
} from '~/interface/orders/orders-servers/orders-rules.interface'

export const state = (): OrdersRulesInterfaceStore => ({
  orderRules: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrderRules(
    store: OrdersRulesInterfaceStore,
    data: OrdersRulesInterface[]
  ) {
    store.orderRules = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrder({ commit, rootGetters }) {
    const data: OrdersRulesInterface[] | null = await orderRulesAxios(
      this.$axios
    )
    const userType = rootGetters['profile/getProfile'].type
    commit(
      'setOrderRules',
      data?.filter((data) => data.user === userType)
    )
  },
}
export const getters = {
  getOrderRules: (s: OrdersRulesInterfaceStore) => s.orderRules,
}
