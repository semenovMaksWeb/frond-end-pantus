import { ActionTree, MutationTree } from 'vuex'
import {
  CartAxios,
  CartDeleteAxios,
  CartUpdateOfferAxios,
} from '@/axios/cart/cart.axios'
import {
  CartInterfaceStore,
  CartInterface,
  CartOfferInterface,
} from '~/interface/cart/cart.interface'
import { BlockInfoType } from '~/interface/base/block-info.interface'
export const state = (): CartInterfaceStore => ({
  cart: [],
  loaderCart: false,
  cartAxios: false,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCart(store: CartInterfaceStore, cart: CartInterface[]) {
    store.cart = cart
  },
  setLoaderCart(store: CartInterfaceStore, loader: boolean) {
    store.loaderCart = loader
  },
  resetCart(store: CartInterfaceStore) {
    store.cart = []
  },
  setCartAxios(store: CartInterfaceStore, check: boolean) {
    store.cartAxios = check
  },
  deleteOfferCart(store, data: { indexOffer: number; indexProduct: number }) {
    store.cart[data.indexProduct].productOffer.splice(data.indexOffer, 1)
    if (store.cart[data.indexProduct].productOffer.length === 0) {
      store.cart.splice(data.indexProduct, 1)
    }
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCart({ state, commit }) {
    if (!state.loaderCart) {
      const data: CartInterface[] = await CartAxios(this.$axios)
      commit('setCart', data)
      commit('setLoaderCart', true)
    }
  },
  async actionsDeleteCart({ state, commit, dispatch }, id: number) {
    const data: object = await CartDeleteAxios(this.$axios, id)
    if (!data) {
      state.cart.forEach((product, indexProduct) => {
        const indexOffer = product.productOffer.findIndex(
          (offer) => offer.id === id
        )
        if (indexOffer !== -1) {
          commit('deleteOfferCart', { indexOffer, indexProduct })
          commit(
            'blog-info/setBlockInfo',
            {
              text: 'Товар удачно убран из корзины',
              type: BlockInfoType.Good,
              active: true,
            },
            { root: true }
          )
        }
      })
      await dispatch('count/actionsResetOfferCart')
    }
  },
  async actionsUpdateCart({ getters, commit }) {
    const cartId: any = []
    getters.getCart.forEach((product: CartInterface) => {
      product.productOffer.forEach((offer: CartOfferInterface) => {
        if (offer.count && offer.activity) {
          cartId.push({ id: offer.id, quantity: offer.count })
        }
      })
    })
    const cart = await CartUpdateOfferAxios(this.$axios, cartId)
    if (typeof cart !== 'string') {
      commit('setCart', cart)
      commit('setCartAxios', false)
      commit(
        'blog-info/setBlockInfo',
        {
          text: `Корзина обновлена`,
          active: true,
          type: BlockInfoType.Good,
        },
        { root: true }
      )
    }
  },
}
export const getters = {
  getActiveCartAll: (s: CartInterfaceStore) => {
    let check = false
    for (const cartElement of s.cart) {
      if (cartElement.productOffer.some((value) => !value.activity)) {
        check = true
        break
      }
    }
    return check
  },
  getCart: (s: CartInterfaceStore) => s.cart,
  getCartAxios: (s: CartInterfaceStore): boolean => s.cartAxios,
  getSumma: (s: CartInterfaceStore) => {
    let summa = 0
    s.cart.forEach((elem) => {
      elem.productOffer.forEach((offers) => {
        if (offers.count && offers.activity) {
          summa += offers.count * offers.prices
        }
      })
    })
    return summa.toFixed(2)
  },
  getWeight: (s: CartInterfaceStore) => {
    let weight = 0
    s.cart.forEach((elem) => {
      if (!elem.productOffer.some((value) => !value.activity)) {
        weight += elem.productCard.params.weight
      }
    })
    return weight.toFixed(2)
  },
}
