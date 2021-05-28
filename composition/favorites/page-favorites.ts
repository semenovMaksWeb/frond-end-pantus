import { computed, useFetch, useStore } from '@nuxtjs/composition-api'

export function PageFavorites() {
  const store = useStore()
  const getFavorites = computed(() => {
    return store.getters['favorites/getFavorites']
  })
  useFetch(async () => {
    await store.dispatch('favorites/actionsFavorites')
  })
  return { getFavorites }
}
