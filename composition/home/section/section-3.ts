import { LinkHomePropsInterface } from '~/interface/base/props/link-home-props.interface'

export function HomeSection3() {
  const link1: LinkHomePropsInterface[] = [
    {
      img: {
        class: 'home-block-img__carbrands__1',
        url:
          'https://bx.pantus.ru/bitrix/templates/main/img/home/home-car-5.png',
        alt: 'Автозапчасти для а/м ВАЗ',
      },
      className: 'home-block-carbrands',
      linkMain: {
        to: '/search?filter_applicabilities=3140',
        text: 'Автозапчасти для а/м ГАЗ',
      },
      linkDon: [
        {
          text: 'Легковые',
          to: '/search?filter_applicabilities=3140,5136,5143,4943',
        },
        {
          text: 'Грузовые',
          to: '/search?filter_applicabilities=3140,4922,5139',
        },
        {
          text: 'Запчасти для а/м ВАЗ',
          to: '/search?filter_applicabilities=3138',
        },
      ],
    },
    {
      img: {
        class: 'home-block-img__carbrands__2',
        url: 'https://bx.pantus.ru/bitrix/templates/main/img/home/IMG_3848.png',
        alt: 'Автозапчасти для а/м ВАЗ',
      },
      className: 'home-block-carbrands',
      linkMain: {
        to: '/search?filter_applicabilities=4921,4815',
        text: 'Запчасти на грузовые авто',
      },
      linkDon: [
        {
          text: 'Для а/м КАМАЗ',
          to: '/search?filter_applicabilities=4921',
        },
        {
          text: 'Для а/м МАЗ',
          to: '/search?filter_applicabilities=4815',
        },
        {
          text: 'Для а/м ЗИЛ',
          to: '/search?filter_applicabilities=4849',
        },
      ],
    },
    {
      className: 'home-block-carbrands__red home-block-carbrands',
      img: {
        class: 'home-block-img__carbrands__3',
        url:
          'https://bx.pantus.ru/bitrix/templates/main/img/home/home-car-7ts.png',
        alt: 'Автомасла автокосметика автохимия',
      },
      linkMain: {
        class: 'home-linkMain__center',
        to: '/search?filter_categories=3135,3136,434,515,516,3057,3058,449,517',
        text: 'Автомасла автокосметика автохимия',
      },
    },
    {
      img: {
        class: 'home-block-img__carbrands__2',
        url:
          'https://bx.pantus.ru/bitrix/templates/main/img/home/home-car-8.png',
        alt: 'Автозапчасти для а/м ВАЗ',
      },
      className: 'home-block-carbrands',
      linkMain: {
        to: '/search?filter_categories=406',
        text: 'Автосвет и лампы',
      },
      linkDon: [
        {
          text: 'Лампы',
          to: '/search?filter_categories=438',
        },
        {
          text: 'Оптика',
          to: '/search?filter_categories=406',
        },
      ],
    },
  ]
  return { link1 }
}
