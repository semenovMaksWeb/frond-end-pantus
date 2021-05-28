import { computed, useContext, useFetch } from '@nuxtjs/composition-api'
export function PageCategories() {
  const { store } = useContext()
  useFetch(async () => {
    await store.dispatch('categories/actionsCategories')
  })

  const getCategories = computed(() => {
    return store.getters['categories/getCategories']
  })

  return { getCategories }
}
