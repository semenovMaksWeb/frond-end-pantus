import { computed, onUnmounted, useContext } from '@nuxtjs/composition-api'
export function PageCart() {
  const { store } = useContext()
  onUnmounted(async () => {
    await store.dispatch('cart/count/actionsResetOfferCart')
  })
  const getCart = computed(() => {
    return store.getters['cart/getCart']
  })

  return { getCart }
}
