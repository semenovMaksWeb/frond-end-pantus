import { useContext, computed } from '@nuxtjs/composition-api'
import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'
export function HeaderUser() {
  const { store } = useContext()

  const getProfile = computed(() => {
    return store.getters['profile/getProfile']
  })

  const link: LinkPropsInterface[] = [
    {
      id: 1,
      to: '/authorization',
      class: 'header-user-link link link-hover-main',
      text: 'Вход',
    },
    {
      id: 2,
      to: '/register',
      class: 'header-user-link link link-hover-main',
      text: 'Регистрация',
    },
  ]
  return { link, getProfile }
}
