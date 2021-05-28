import { useContext, computed } from '@nuxtjs/composition-api'
export function OrderProduct() {
  const { store } = useContext()
  const summa = computed(() => {
    return store.getters['cart/getSumma']
  })
  return { summa }
}
