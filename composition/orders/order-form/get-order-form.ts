import { computed, useContext } from '@nuxtjs/composition-api'
export function GetOrderForm() {
  const { store } = useContext()
  const getOrderRules = computed(() => {
    return store.getters['orders/rules/getOrderRules']
  })
  const getOrderPayment = computed(() => {
    return store.getters['orders/payment/getOrderPayment']
  })
  const getOrderDelivery = computed(() => {
    return store.getters['orders/delivery/getOrderDelivery']
  })
  const getProfileType = computed(() => {
    return store.getters['profile/getProfile'].type
  })
  return { getOrderRules, getOrderPayment, getOrderDelivery, getProfileType }
}
