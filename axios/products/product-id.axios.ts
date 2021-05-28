// import { TypeProductApi } from '@/interface/products/products-api.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'

export const ProductIdAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<TypeProductVuex | null> => {
  const { data } = await $axios.get(
    `${process.env.api}/products_filter?id=${id}`
  )
  const mapProduct = ProductsMap(data.data)
  if (mapProduct.length === 1) {
    return mapProduct[0]
  }
  return null
}
