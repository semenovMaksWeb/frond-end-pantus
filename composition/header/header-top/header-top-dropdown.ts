import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function HeaderBottomDropdown() {
  const link: LinkPropsInterface[] = [
    { id: 1, to: '', text: 'О компании' },
    { id: 2, to: '', text: 'Работа в компании' },
    { id: 3, to: '', text: 'ОПТ' },
    { id: 4, to: '', text: 'Поставщикам' },
    { id: 5, to: '', text: 'Документы и реквизиты' },
    { id: 6, to: '/about/certificates', text: 'Дилерские сертификаты' },
  ]
  return { link }
}
