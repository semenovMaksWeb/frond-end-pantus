import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersRulesInterface,
  OrdersRulesInterfaceApi,
} from '~/interface/orders/orders-servers/orders-rules.interface'

export const orderRulesAxios = async (
  $axios: NuxtAxiosInstance
): Promise<OrdersRulesInterface[] | null> => {
  const { data }: { data: OrdersRulesInterfaceApi[] } = await $axios.get(
    `${process.env.api}/orders/user_to_delivery_to_paysystem_map`
  )
  return orderRules(data)
}

const orderRules = (
  data: OrdersRulesInterfaceApi[]
): OrdersRulesInterface[] | null => {
  const orderRules: OrdersRulesInterface[] = []
  data.forEach((array) => {
    orderRules.push({
      deliveryId: array.delivery_type_id,
      paySystemId: array.paysystem_type_id,
      user: array.user_type_id === 1 ? 'retail' : 'wholesale',
    })
  })
  if (orderRules.length === 0) {
    return null
  }
  return orderRules
}
