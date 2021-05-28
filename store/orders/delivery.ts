import { ActionTree, MutationTree } from 'vuex'
import { orderDeliveryAxios } from '@/axios/order/orders-servers/orders-delivery.axios'
import {
  OrdersDeliveryInterface,
  OrdersDeliveryInterfaceStore,
} from '~/interface/orders/orders-servers/orders-delivery.interface'

export const state = (): OrdersDeliveryInterfaceStore => ({
  orderDelivery: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setOrderDelivery(
    store: OrdersDeliveryInterfaceStore,
    data: OrdersDeliveryInterface[]
  ) {
    store.orderDelivery = data
  },
  activeOrderDelivery(
    store: OrdersDeliveryInterfaceStore,
    data: { index: number; check: boolean }
  ) {
    if (store.orderDelivery) {
      store.orderDelivery[data.index].active = data.check
    }
  },
  ExtraOrderDelivery(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store,
    data: { delivery: OrdersDeliveryInterface; price: number; extra: string }
  ) {
    data.delivery.price = data.price
    data.delivery.extra = data.extra
  },
  ResetOrderDelivery(store: OrdersDeliveryInterfaceStore) {
    store.orderDelivery?.forEach((elem) => {
      elem.extra = elem.defaultExtra
      elem.price = elem.defaultPrice
    })
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsOrderDelivery({ commit }, userTypeId: number) {
    const data: OrdersDeliveryInterface[] | null = await orderDeliveryAxios(
      this.$axios,
      userTypeId
    )
    commit('setOrderDelivery', data)
  },
  async actionsSetMailRussiaDelivery(
    { getters, commit, dispatch },
    zip: number
  ) {
    const deliveryMailRussia = getters.getOrderDeliveryId(4)
    const mailRussia = await dispatch(
      'api/mail-russia/actionsMailRussia',
      zip,
      {
        root: true,
      }
    )
    let price: number = 0
    let extra: string
    if (mailRussia.paynds) {
      price = mailRussia.paynds / 100
      extra = `${price} р.`
    } else {
      extra = mailRussia.caption
    }
    commit('ExtraOrderDelivery', {
      delivery: deliveryMailRussia,
      price,
      extra,
    })
  },
}
export const getters = {
  getOrderDelivery: (s: OrdersDeliveryInterfaceStore) => s.orderDelivery,
  getOrderDeliveryId: (s: OrdersDeliveryInterfaceStore) => (id: number) => {
    if (s.orderDelivery) {
      return s.orderDelivery.filter((elem) => elem.id === id)[0]
    }
  },
}
