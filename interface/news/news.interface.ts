import {
  NewsCategoriesIdApiInterface,
  NewsCategoriesIdInterface,
} from '~/interface/news/news-categories.interface'

export interface NewsInterface {
  id: number
  name: string
  // categories: NewsCategoriesIdInterface
  preview: {
    image: string
    text: string
  }
}
export interface NewsIdInterface extends NewsInterface {
  categories: NewsCategoriesIdInterface
  dates: {
    created: string
  }
  content: string
}
export interface NewsApiInterface {
  id: number
  name: string
  activity: boolean
  content: string
  category: NewsCategoriesIdApiInterface
  dates: {
    // eslint-disable-next-line camelcase
    active_from: string
    created: string
    updated: string
  }
  preview: {
    image: string
    text: string
  }
}
