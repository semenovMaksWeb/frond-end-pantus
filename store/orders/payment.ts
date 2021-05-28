import { ActionTree, MutationTree } from 'vuex'
import { orderPaymentAxios } from '@/axios/order/orders-servers/orders-payment.axios'
import {
  OrdersPaymentInterface,
  OrdersPaymentInterfaceStore,
} from '~/interface/orders/orders-servers/orders-payment.interface'

export const state = (): OrdersPaymentInterfaceStore => ({
  orderPayment: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrderPayment(
    store: OrdersPaymentInterfaceStore,
    data: OrdersPaymentInterface[]
  ) {
    store.orderPayment = data
  },
  activeOrderPayment(
    store: OrdersPaymentInterfaceStore,
    data: { index: number; check: boolean }
  ) {
    if (store.orderPayment) {
      store.orderPayment[data.index].active = data.check
    }
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrderPayment({ commit }, userTypeId: number) {
    const data: OrdersPaymentInterface[] | null = await orderPaymentAxios(
      this.$axios,
      userTypeId
    )
    commit('setOrderPayment', data)
  },
}
export const getters = {
  getOrderPayment: (s: OrdersPaymentInterfaceStore) => s.orderPayment,
}
