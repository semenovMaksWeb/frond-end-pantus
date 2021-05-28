import { computed, ssrRef, useContext, useFetch } from '@nuxtjs/composition-api'
export function PageCarbrands() {
  const { store } = useContext()
  const getCarbrandsView = ssrRef([])
  const getCarbrands = computed(() => {
    return store.getters['carbrands/getCarbrands']
  })
  useFetch(async () => {
    await store.dispatch('carbrands/actionsCarbrands')
    getCarbrandsView.value = store.getters['carbrands/getCarbrands']
  })
  return { getCarbrandsView, getCarbrands }
}
