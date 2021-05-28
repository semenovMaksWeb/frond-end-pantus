import { useContext, ref, computed, Ref } from '@nuxtjs/composition-api'
export function OrderCity(emit: Function) {
  const { store } = useContext()
  const timerId: Ref<null | ReturnType<typeof setTimeout>> = ref(null)

  const getCity = computed(() => {
    return store.getters['api/town/getTown']
  })

  const searchCity = async (name: string) => {
    emit('value', name)
    emit('zip', undefined)
    await store.commit('orders/delivery/ResetOrderDelivery')
    if (timerId.value !== null) {
      clearTimeout(timerId.value)
    }
    timerId.value = setTimeout(async () => {
      await store.dispatch('api/town/actionsTown', name)
    }, 1000)
  }
  const setCityOrder = async (name: string, zip: string) => {
    await store.dispatch('orders/delivery/actionsSetMailRussiaDelivery', zip)
    emit('value', name)
    emit('zip', zip)
  }
  return { searchCity, getCity, setCityOrder }
}
