import { computed, useContext, useFetch } from '@nuxtjs/composition-api'

export function Section8() {
  const { store } = useContext()
  const popularNews = computed(() => {
    return store.getters['news/getNewsPopular']
  })
  useFetch(async () => {
    await store.dispatch('news/actionsNewsPopular')
  })
  return { popularNews }
}
