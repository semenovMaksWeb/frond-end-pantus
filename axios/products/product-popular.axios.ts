// import { TypeProductApi } from '@/interface/products/products-api.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'

export const ProductPopularAxios = async (
  $axios: NuxtAxiosInstance
): Promise<TypeProductVuex[]> => {
  const { data } = await $axios.get(`${process.env.api}/popular_products`)
  return ProductsMap(data)
}
