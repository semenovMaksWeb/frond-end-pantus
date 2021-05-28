import { computed, useStore } from '@nuxtjs/composition-api'

export function UserAuthorization() {
  const store = useStore()
  const getUserAuthorization = computed(() => {
    return store.getters['authorization/getUserAuthorization']
  })
  return { getUserAuthorization }
}
