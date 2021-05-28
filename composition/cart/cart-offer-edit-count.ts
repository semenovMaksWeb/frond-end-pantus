import { useContext } from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function CartOfferEditCount() {
  const { store } = useContext()
  const cartOfferEditCount = async (offer: CartOfferInterface) => {
    await store.dispatch('cart/count/actionsUpdateOfferCart', offer)
  }
  return { cartOfferEditCount }
}
