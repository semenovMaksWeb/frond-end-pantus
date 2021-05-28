import { useContext, computed } from '@nuxtjs/composition-api'
export function HeaderUserName() {
  const { store } = useContext()

  const getProfile = computed(() => {
    return store.getters['profile/getProfile']
  })

  return { getProfile }
}
