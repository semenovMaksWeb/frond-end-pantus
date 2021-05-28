import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersPaymentInterface,
  OrdersPaymentInterfaceApi,
} from '~/interface/orders/orders-servers/orders-payment.interface'

export const orderPaymentAxios = async (
  $axios: NuxtAxiosInstance,
  idTypeUser: number
): Promise<OrdersPaymentInterface[] | null> => {
  const { data }: { data: OrdersPaymentInterfaceApi[] } = await $axios.get(
    `${process.env.api}/orders/payment_services`
  )
  return orderPayment(data, idTypeUser)
}

const orderPayment = (
  data: OrdersPaymentInterfaceApi[],
  idTypeUser: number
): OrdersPaymentInterface[] | null => {
  const orderPayment: OrdersPaymentInterface[] = []
  data.forEach((array) => {
    const RulesCheck = array.available_for_user_types.filter(
      (elem) => elem === idTypeUser
    )
    if (RulesCheck.length === 0) return
    orderPayment.push({
      active: true,
      description: array.description,
      id: array.id,
      name: array.name,
    })
  })
  if (orderPayment.length === 0) {
    return null
  }
  return orderPayment
}
