// import { TypeProductApi } from '@/interface/products/products-api.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'

export const FavoritesAxios = async (
  $axios: NuxtAxiosInstance
): Promise<TypeProductVuex[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/personal/favorites?view=products`
  )
  return ProductsMap(data)
}
export const FavoritesAxiosId = async (
  $axios: NuxtAxiosInstance
): Promise<number[]> => {
  const { data } = await $axios.get(
    `${process.env.api}/personal/favorites?view=ids`
  )
  return data
}
export const FavoritesDeleteAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<{ errors: {} }> => {
  return await $axios.$delete(`${process.env.api}/personal/favorites/${id}`)
}
export const FavoritesPutAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<{ errors: {} }> => {
  return await $axios.$put(`${process.env.api}/personal/favorites`, [id])
}
