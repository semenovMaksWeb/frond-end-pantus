import { ActionTree, MutationTree } from 'vuex'
import {
  CartInterface,
  CartOfferInterface,
} from '~/interface/cart/cart.interface'
import { RootState } from '~/store/cart/index'
import { CartUpdateOfferIdAxios } from '~/axios/cart/cart.axios'
import { BlockInfoType } from '~/interface/base/block-info.interface'
export const mutations: MutationTree<RootState> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCountOfferCart(store, data: { offer: CartOfferInterface; count: number }) {
    data.offer.count = data.count
  },
  updateCountOfferCart(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    store,
    offer: CartOfferInterface
  ) {
    offer.defaultCount = offer.count
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  resetCountOfferCart(store, offer: CartOfferInterface) {
    offer.count = offer.defaultCount
  },
}
export const actions: ActionTree<{}, {}> = {
  async actionsSetCountOfferCart(
    { commit, dispatch },
    data: { offer: CartOfferInterface; count: number }
  ) {
    commit('setCountOfferCart', data)
    await dispatch('actionsCheckCountOffer')
  },
  actionsResetOfferCart({ rootGetters, commit }) {
    commit('cart/setCartAxios', false, { root: true })
    rootGetters['cart/getCart'].forEach((elem: CartInterface) => {
      const offer = elem.productOffer.filter(
        (offer) => offer.count !== offer.defaultCount
      )
      if (offer.length > 0) {
        offer.forEach((offerElem) => {
          commit('resetCountOfferCart', offerElem)
        })
      }
    })
  },
  async actionsUpdateOfferCart(
    { commit, dispatch },
    offers: CartOfferInterface
  ) {
    const data: CartInterface[] | undefined = await CartUpdateOfferIdAxios(
      this.$axios,
      offers.id,
      offers.count
    )
    if (data) {
      commit('updateCountOfferCart', offers)
      commit(
        'blog-info/setBlockInfo',
        {
          text: `Выбранный товар в корзине обновлен`,
          active: true,
          type: BlockInfoType.Good,
        },
        { root: true }
      )
      await dispatch('actionsCheckCountOffer')
    }
  },
  actionsCheckCountOffer({ rootGetters, commit }) {
    commit('cart/setCartAxios', false, { root: true })
    const cart = rootGetters['cart/getCart']
    for (const cartKey in cart) {
      const offer = cart[cartKey].productOffer.filter(
        (offer: CartOfferInterface) => offer.count !== offer.defaultCount
      )
      if (offer.length > 0) {
        commit('cart/setCartAxios', true, { root: true })
        break
      }
    }
  },
  async actionsPostCart({ commit }, offers: { id: number; count: number }) {
    const data: CartInterface[] | undefined = await CartUpdateOfferIdAxios(
      this.$axios,
      offers.id,
      offers.count
    )
    if (data) {
      commit('cart/setCart', data, { root: true })
      commit(
        'blog-info/setBlockInfo',
        {
          text: 'Товар удачно добавлен в корзину',
          type: BlockInfoType.Good,
          active: true,
        },
        { root: true }
      )
    }
  },
}
