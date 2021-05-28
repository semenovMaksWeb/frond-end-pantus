import { ActionTree, MutationTree } from 'vuex'
import {
  orderAxios,
  orderCountAxios,
  orderIdAxios,
  orderSetAxios,
} from '@/axios/order/order.axios'
import {
  OrdersInterface,
  OrdersInterfaceStore,
  OrdersSetInterface,
} from '~/interface/orders/orders.interface'
import { OrdersIdInterface } from '~/interface/orders/orders-id.interface'
export const state = (): OrdersInterfaceStore => ({
  orders: null,
  countOrders: 0,
  limit: 15,
  orderId: null,
  activeOrders: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  resetOrders(store: OrdersInterfaceStore) {
    store.orderId = null
    store.orders = null
    store.countOrders = 0
    store.activeOrders = false
  },
  setOrders(store: OrdersInterfaceStore, orders: OrdersInterface[]) {
    store.orders = orders
    store.activeOrders = true
  },
  setCountOrders(store: OrdersInterfaceStore, count: number) {
    store.countOrders = count
  },
  setOrderId(store: OrdersInterfaceStore, data: OrdersIdInterface) {
    store.orderId = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrder({ commit }, page: number) {
    const data: OrdersInterface[] | null = await orderAxios(
      this.$axios,
      state().limit,
      page
    )
    const count: number = await orderCountAxios(this.$axios)
    commit('setOrders', data)
    commit('setCountOrders', count)
  },
  async actionsOrderId({ commit }, id: number) {
    const data: OrdersIdInterface | null = await orderIdAxios(this.$axios, id)
    commit('setOrderId', data)
  },
  // eslint-disable-next-line no-empty-pattern
  async actionsSetOrder({}, form: OrdersSetInterface) {
    const data: number | { error: object } = await orderSetAxios(
      this.$axios,
      form
    )
    return data
  },
}
export const getters = {
  getOrder: (s: OrdersInterfaceStore) => s.orders,
  getOrderActive: (s: OrdersInterfaceStore) => s.activeOrders,
  getOrderId: (s: OrdersInterfaceStore) => s.orderId,
  getOrderLimit: (s: OrdersInterfaceStore) => s.limit,
  getCountOrders: (s: OrdersInterfaceStore) => s.countOrders,
}
