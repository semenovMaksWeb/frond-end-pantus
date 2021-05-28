import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersDeliveryInterface,
  OrdersDeliveryInterfaceApi,
} from '~/interface/orders/orders-servers/orders-delivery.interface'

export const orderDeliveryAxios = async (
  $axios: NuxtAxiosInstance,
  idTypeUser: number
): Promise<OrdersDeliveryInterface[] | null> => {
  const { data }: { data: OrdersDeliveryInterfaceApi[] } = await $axios.get(
    `${process.env.api}/orders/delivery_services`
  )
  return orderDelivery(data, idTypeUser)
}

const orderDelivery = (
  data: OrdersDeliveryInterfaceApi[],
  idTypeUser: number
): OrdersDeliveryInterface[] | null => {
  const orderDelivery: OrdersDeliveryInterface[] = []
  data.forEach((array) => {
    const RulesCheck = array.available_for_user_types.filter(
      (elem) => elem === idTypeUser
    )
    if (RulesCheck.length === 0) return
    orderDelivery.push({
      active: true,
      city: array.default_city,
      description: array.description,
      defaultPrice: array.default_price,
      price: array.default_price,
      defaultExtra: array.extra,
      extra: array.extra,
      id: array.id,
      name: array.name,
      zip: array.zip,
    })
  })
  if (orderDelivery.length === 0) {
    return null
  }
  return orderDelivery
}
