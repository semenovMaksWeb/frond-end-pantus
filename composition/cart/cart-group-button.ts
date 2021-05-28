import { computed, useContext } from '@nuxtjs/composition-api'
export function CartGroupButton() {
  const { store } = useContext()
  const getUserAuthorization = computed(() => {
    return store.getters['authorization/getUserAuthorization']
  })
  const getCartAxios = computed(() => {
    return store.getters['cart/getCartAxios']
  })
  const getActiveCartAll = computed(() => {
    return store.getters['cart/getActiveCartAll']
  })
  const updateCart = async () => {
    await store.dispatch('cart/actionsUpdateCart')
  }
  return { getCartAxios, getUserAuthorization, getActiveCartAll, updateCart }
}
