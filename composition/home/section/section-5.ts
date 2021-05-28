import { Ref, ref } from '@nuxtjs/composition-api'
import { LinkPropsInterface } from '~/interface/base/props/link-props.interface'

export function Section5() {
  const link: Ref<LinkPropsInterface[][]> = ref([
    [
      {
        id: 1,
        text: 'ВРТ',
        to: '/brands/vrt',
      },
      {
        id: 2,
        text: 'БРТ',
        to: '/brands/brt',
      },
      {
        id: 3,
        text: 'Lada',
        to: '/brands/lada',
      },
      {
        id: 4,
        text: 'Элад',
        to: '/brands/elad',
      },
    ],
    [
      {
        id: 1,
        text: 'AMD',
        to: '/brands/amd',
      },
      {
        id: 2,
        text: 'ASAM',
        to: '/brands/asamsa',
      },
      {
        id: 3,
        text: 'СОАТЭ',
        to: '/brands/soate',
      },
      {
        id: 4,
        text: 'РезиноТехника',
        to: '/brands/rezinotehnika',
      },
    ],
    [
      {
        id: 1,
        text: 'БМРТ',
        to: '/brands/bmrt',
      },
      {
        id: 2,
        text: 'СЭВИ',
        to: '/brands/sevi',
      },
      {
        id: 3,
        text: 'ТехноПартнер',
        to: '/brands/tehnopartner',
      },
      {
        id: 4,
        text: 'ТРЕК',
        to: '/brands/trek',
      },
    ],
    [
      {
        id: 1,
        text: 'ФОБОС',
        to: '/brands/fobos',
      },
      {
        id: 2,
        text: 'ПромТехПласт',
        to: '/brands/ptp64',
      },
      {
        id: 3,
        text: 'Hanse',
        to: '/brands/hanse',
      },
      {
        id: 4,
        text: 'Rezkon',
        to: '/brands/rezkon',
      },
    ],
  ])
  return { link }
}
