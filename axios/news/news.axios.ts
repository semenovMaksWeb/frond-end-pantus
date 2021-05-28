import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  NewsApiInterface,
  NewsIdInterface,
  NewsInterface,
} from '~/interface/news/news.interface'

export interface ParamsNewsInterface {
  limit: number
  page: number
  categories?: number
}
export interface ParamsNewsApiInterface {
  // eslint-disable-next-line camelcase
  page_size?: number
  // eslint-disable-next-line camelcase
  page_number?: number
  // eslint-disable-next-line camelcase
  filter_categories?: number
}
export interface ResultNewsInterface {
  data: NewsInterface[]
  count: number
}
export const newsAxios = async (
  $axios: NuxtAxiosInstance,
  params: ParamsNewsInterface
): Promise<ResultNewsInterface> => {
  const paramsApi = mapParamsNews(params)
  const { data } = await $axios.get(`${process.env.api}/news`, {
    params: { ...paramsApi, sort_order: 'desc' },
  })
  const count = await newsCountAxios($axios, params.categories)
  const news = newsMap(data)
  return { data: news, count }
}

const newsMap = (data: NewsApiInterface[]): NewsInterface[] => {
  const news: NewsInterface[] = []
  data.forEach((array) => {
    news.push({
      name: array.name,
      id: array.id,
      preview: {
        image: array.preview.image,
        text: array.preview.text,
      },
    })
  })
  return news
}

export const newsIdAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<NewsIdInterface | null> => {
  const { data } = await $axios.get(`${process.env.api}/news/${id}`)
  return newsIdMap(data)
}

const newsIdMap = (data: NewsApiInterface): NewsIdInterface | null => {
  if (!data) {
    return null
  }
  return {
    id: data.id,
    name: data.name,
    preview: {
      image: data.preview.image,
      text: data.preview.text,
    },
    categories: {
      id: data.category.id,
      name: data.category.name,
      code: data.category.code,
    },
    content: data.content,
    dates: {
      created: data.dates.created,
    },
  }
}

const mapParamsNews = (data: ParamsNewsInterface): ParamsNewsApiInterface => {
  const params: ParamsNewsApiInterface = {}
  if (data.categories) {
    params.filter_categories = data.categories
  }
  if (data.limit) {
    params.page_size = data.limit
  }
  if (data.page) {
    params.page_number = data.page
  }
  return params
}

export const newsCountAxios = async (
  $axios: NuxtAxiosInstance,
  categories?: number
): Promise<number> => {
  // eslint-disable-next-line camelcase
  const paramsApi: { filter_categories?: number } = {}
  if (categories) {
    paramsApi.filter_categories = categories
  }
  const { data } = await $axios.get(`${process.env.api}/news/count`, {
    params: { ...paramsApi },
  })
  return data
}
