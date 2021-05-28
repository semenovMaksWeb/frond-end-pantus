import { LinkHomePropsInterface } from '~/interface/base/props/link-home-props.interface'

export function HomeSection1() {
  const link1: LinkHomePropsInterface[] = [
    {
      img: {
        class: 'home-block-img__carbrands__1',
        url:
          'https://bx.pantus.ru/bitrix/templates/main/img/home/home-car-1.png',
        alt: 'Автозапчасти для а/м ВАЗ',
      },
      className: 'home-block__maxCarbrands',
      linkMain: {
        to: '/search?filter_applicabilities=3138',
        text: 'Автозапчасти для а/м ВАЗ',
      },
      linkDon: [
        {
          text: 'Запчасти для а/м Приора',
          to: '/search?filter_applicabilities=4864',
        },
        {
          text: 'Запчасти для а/м Веста',
          to: '/search?filter_applicabilities=4973',
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
        url:
          'https://bx.pantus.ru/upload/medialibrary/5cf/mobile_file_2020-11-11_08-16-20 (2).jpg',
        alt: 'Автозапчасти для а/м ВАЗ',
      },
      className: 'home-block__minCarbrands',
      linkMain: {
        to: '/search?filter_brands=453',
        text: 'Генераторы СОАТЭ',
      },
    },
    {
      img: {
        class: 'home-block-img__carbrands__1',
        url: 'https://bx.pantus.ru/upload/medialibrary/4ae/4457741.jpg',
        alt: 'Новые бренды на Pantus.ru',
      },
      className: 'home-block__maxCarbrands',
      linkMain: {
        to: '/search?filter_applicabilities=3138',
        text: 'Автозапчасти для а/м ВАЗ',
      },
      linkDon: [
        {
          text: 'Trialli',
          to: '/search?filter_brands=2004',
        },
        {
          text: 'Luzar',
          to: '/search?filter_brands=706',
        },
        {
          text: 'Hofer',
          to: '/search?filter_brands=1507',
        },
      ],
    },
    {
      img: {
        url:
          'https://bx.pantus.ru//bitrix/templates/main/img/home/home-car-4.png',
        alt: 'Запчасти для а/м Renault',
        class: 'home-block-img__carbrands__2',
      },
      className: 'home-block__minCarbrands',
      linkMain: {
        to: '/search?filter_applicabilities=4802',
        text: 'Запчасти для а/м Renault',
      },
    },
  ]
  return { link1 }
}
