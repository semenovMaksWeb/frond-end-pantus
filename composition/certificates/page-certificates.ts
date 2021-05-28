import { computed, useContext, useFetch } from '@nuxtjs/composition-api'

export function PageCertificates() {
  const { store } = useContext()
  const certificates = computed(() => {
    return store.getters['certificates/getCertificates']
  })
  useFetch(async () => {
    await store.dispatch('certificates/actionsAuthorization')
  })
  return { certificates }
}
