import { useContext } from '@nuxtjs/composition-api'
export function CartDelete() {
  const { store } = useContext()
  const cartDelete = async (id: number) => {
    await store.dispatch('cart/actionsDeleteCart', id)
  }

  return { cartDelete }
}
