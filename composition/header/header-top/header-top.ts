import { ref } from '@nuxtjs/composition-api'
import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function HeaderTop() {
  const link = ref<LinkPropsInterface[]>([
    {
      id: 1,
      text: 'Мобильное приложение',
      to: '/app',
    },
    {
      id: 2,
      text: 'Опт',
      to: '/opt',
    },
    {
      id: 3,
      text: 'Доставка',
      to: '/delivery',
    },
    {
      id: 4,
      text: 'Оплата',
      to: '/pay',
    },
    {
      id: 5,
      text: 'Новости',
      to: '/news',
    },
    {
      id: 6,
      text: 'Помощь',
      to: '/help',
    },
    {
      id: 7,
      text: 'Контакты',
      to: '/contacts',
    },
  ])
  const tlf = ref({ text: '8 (800) 555 87 21', to: 'tel:88005558721' })
  return { link, tlf }
}
