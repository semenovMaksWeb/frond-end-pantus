import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  NewsCategoriesApiInterface,
  NewsCategoriesInterface,
} from '~/interface/news/news-categories.interface'

export const NewsCategoriesAxios = async (
  $axios: NuxtAxiosInstance
): Promise<NewsCategoriesInterface[]> => {
  const { data } = await $axios.get(`${process.env.api}/news/categories`)
  return newsCategoriesMap(data)
}
const newsCategoriesMap = (
  data: NewsCategoriesApiInterface[]
): NewsCategoriesInterface[] => {
  const newsCategories: NewsCategoriesInterface[] = []
  for (const elem of data) {
    newsCategories.push({
      id: elem.id,
      code: elem.code,
      name: elem.name,
      count: elem.count,
    })
  }
  return newsCategories
}
