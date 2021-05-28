import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  brandInterface,
  brandInterfaceApi,
} from '~/interface/brands/brand.interface'
import {
  BrandCarousel,
  BrandCarouselApi,
} from '~/interface/brands/brand-carousel'

export const brandAxios = async (
  $axios: NuxtAxiosInstance
): Promise<brandInterface[]> => {
  const { data } = await $axios.get(`${process.env.api}/product_brands`)
  return brandMap(data).sort(function (a, b) {
    // @ts-ignore
    return b.active - a.active
  })
}
const brandMap = (data: brandInterfaceApi[]): brandInterface[] => {
  const brand: brandInterface[] = []
  data.forEach((array) => {
    brand.push({
      name: array.name,
      code: array.code,
      id: array.id,
      active: array.contains_description,
    })
  })
  return brand
}

export const brandCarouselAxios = async (
  $axios: NuxtAxiosInstance
): Promise<BrandCarousel[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/product_brands/carousel`
  )
  return brandCarouselMap(data)
}
const brandCarouselMap = (data: BrandCarouselApi[]): BrandCarousel[] => {
  const res: BrandCarousel[] = []
  data.forEach((elem) => {
    res.push({
      code: elem.code,
      img: elem.img,
    })
  })
  return res
}
