import { CartInterface } from '@/interface/cart/cart.interface'
import { CartInterfaceApi } from '@/interface/cart/cart-api.interface'
import { TypeProductVuex } from '@/interface/products/products.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'

export const CartAxios = async (
  $axios: NuxtAxiosInstance
): Promise<CartInterface[]> => {
  const { data } = await $axios.get(`${process.env.api}/personal/cart`)
  const product = ProductsMap(data)
  return CartMap(product, data)
}

export const CartDeleteAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<object> => {
  const { data } = await $axios.delete(`${process.env.api}/personal/cart/${id}`)
  return data.error
}
export const CartUpdateOfferIdAxios = async (
  $axios: NuxtAxiosInstance,
  id?: number,
  quantity?: number
): Promise<CartInterface[] | undefined> => {
  const { data } = await $axios.put(`${process.env.api}/personal/cart/${id}`, {
    quantity,
  })
  if (data.error) {
    return data.error
  }
  const product = ProductsMap(data)
  return CartMap(product, data)
}
export const CartUpdateOfferAxios = async (
  $axios: NuxtAxiosInstance,
  cart: [{ id: number; quantity: number }]
): Promise<CartInterface[] | string> => {
  const { data } = await $axios.put(`${process.env.api}/personal/cart`, cart)
  if (data.error) {
    return data.error
  }
  const product = ProductsMap(data)
  return CartMap(product, data)
}

const CartMap = (
  data: TypeProductVuex[],
  api: CartInterfaceApi[]
): CartInterface[] => {
  const result: CartInterface[] = data
  api.forEach((elem, index) => {
    elem.offers.forEach((elemOffers, indexOffers) => {
      result[index].productOffer[indexOffers].activity = elemOffers.activity
      result[index].productOffer[indexOffers].count = elemOffers.quantityInCart
      result[index].productOffer[indexOffers].defaultCount =
        elemOffers.quantityInCart
    })
  })
  return result
}
