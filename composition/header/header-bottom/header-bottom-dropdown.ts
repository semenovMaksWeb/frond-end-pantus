import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function HeaderBottomDropdown() {
  const link: LinkPropsInterface[] = [
    { id: 1, to: '/brands', text: 'Бренды запчастей' },
    { id: 2, to: '/carbrands', text: 'Марки автомобилей' },
    { id: 3, to: '/categories', text: 'Категории запчастей' },
    { id: 4, to: '', text: 'Масла и автохимия' },
    { id: 5, to: '', text: 'Антифризы, толосы' },
    { id: 6, to: '', text: 'Каталоги оригинальных запчастей' },
  ]
  return { link }
}
