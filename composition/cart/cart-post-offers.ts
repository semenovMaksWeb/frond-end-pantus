import { useContext } from '@nuxtjs/composition-api'

export function CartPostOffers() {
  const { store } = useContext()
  const cartPostOffers = async (id: number, count: number) => {
    await store.dispatch('cart/count/actionsPostCart', {
      id,
      count,
    })
  }
  return { cartPostOffers }
}
