import { computed, useContext } from '@nuxtjs/composition-api'

export function ProfileNav() {
  const { store } = useContext()
  const getProfile = computed(() => {
    return store.getters['profile/getProfile']
  })
  return { getProfile }
}
