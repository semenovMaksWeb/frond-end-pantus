import { MutationTree } from 'vuex'
import { LinkPropsInterface } from '~/interface/base/props/link-props.interface.ts'

export interface LinkMobileInterface extends LinkPropsInterface {
  name?: string
  to?: string
}
export interface NavMobileInterface {
  link: LinkMobileInterface[]
  componentsName?: string
  backLink?: { text: string; name: string }
}
export interface NavMobileInterfaceStore {
  mobile: { [key: string]: NavMobileInterface }
  active: NavMobileInterface | null
}
export const state = (): NavMobileInterfaceStore => ({
  mobile: {
    index: {
      link: [
        { text: 'Автозапчасти', name: 'catalog' },
        { text: 'О компании', name: 'about' },
        { text: 'Мобильное приложение', to: '/app' },
        { text: 'Новости', to: '/news' },
        { text: 'Помощь', to: '/help' },
        { text: 'Контакты', to: '/contacts' },
      ],
    },
    catalog: {
      backLink: { text: 'Главная', name: 'index' },
      link: [
        { text: 'Марки автомобилей', to: '/carbrands' },
        { text: 'Производители запчастей', to: '/brands' },
        { text: 'Категории запчастей', to: '/categories' },
        {
          text: 'Масла и автохимия',
          to: '/search?filter_categories=434,517',
        },
        {
          text: 'Антифризы, тосолы',
          to: '/search?filter_categories=515',
        },
        { text: 'Онлайн-каталоги', to: '/catalog' },
      ],
    },
    about: {
      backLink: { text: 'Главная', name: 'index' },
      link: [
        { to: '/about', text: 'О компании' },
        { to: '/about/career', text: 'Работа в компании' },
        { to: '/opt', text: 'ОПТ' },
        { to: '/about/suppliers', text: 'Поставщикам' },
        { to: '/documents', text: 'Документы и реквизиты' },
        { to: '/about/certificates', text: 'Дилерские сертификаты' },
      ],
    },
  },
  active: null,
})
export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setActive(store: NavMobileInterfaceStore, name: string | null) {
    if (typeof name === 'string') {
      store.active = store.mobile[name]
    } else {
      store.active = null
    }
  },
}

export const getters = {
  getActive: (s: NavMobileInterfaceStore) => s.active,
}
