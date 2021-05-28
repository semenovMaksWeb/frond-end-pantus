import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
export function BrandCarousel() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('brand/carousel/actionsCarousel')
  })
  const getCarousel = computed(() => {
    return store.getters['brand/carousel/getCarousel']
  })
  return { getCarousel }
}
