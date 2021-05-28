import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  OrdersInterface,
  OrdersInterfaceApi,
  OrdersSetInterface,
} from '~/interface/orders/orders.interface.ts'
import {
  OrdersIdInterface,
  OrdersInterfaceIdApi,
} from '~/interface/orders/orders-id.interface'

export const orderAxios = async (
  $axios: NuxtAxiosInstance,
  limit: number,
  page: number = 1
): Promise<OrdersInterface[] | null> => {
  const { data } = await $axios.get(
    `${process.env.api}/personal/orders?sort_order=desc&page_size=${limit}&page_number=${page}`
  )
  return orderMap(data)
}

export const orderCountAxios = async (
  $axios: NuxtAxiosInstance
): Promise<number> => {
  const { data } = await $axios.get(`${process.env.api}/personal/orders/count`)
  return data
}
export const orderSetAxios = async (
  $axios: NuxtAxiosInstance,
  order: OrdersSetInterface
): Promise<number | { error: object }> => {
  const { data } = await $axios.post(
    `${process.env.api}/personal/orders`,
    order
  )
  return data
}
export const orderIdAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<OrdersIdInterface | null> => {
  const { data } = await $axios.get(`${process.env.api}/personal/orders/${id}`)
  return orderIdMap(data)
}

const orderMap = (data: OrdersInterfaceApi[]): OrdersInterface[] | null => {
  const order: OrdersInterface[] = []
  data.forEach((array) => {
    order.push({
      date: array.dates.created,
      id: array.id,
      status: {
        code: array.status.code,
        name: array.status.name,
      },
    })
  })
  if (order.length === 0) {
    return null
  }
  return order
}
const orderIdMap = (data: OrdersInterfaceIdApi): OrdersIdInterface | null => {
  if (!data.id) {
    return null
  }
  const orderId: OrdersIdInterface = {
    id: data.id,
    price: data.price,
    offers: [],
    user: {
      name: data.user.name.first,
      surname: data.user.name.last,
      phone: data.user.phone,
    },
    status: {
      name: data.status.name,
      code: data.status.code,
    },
    address: {
      city: data.address.city,
      detailed: data.address.detailed,
    },
    date: data.dates.created,
    delivery: {
      price: data.delivery.price,
      service: {
        id: data.delivery.service.id,
        name: data.delivery.service.name,
      },
    },
    paySystem: {
      id: data.paysystem.id,
      name: data.paysystem.name,
    },
    paySystemType: {
      id: data.payerType.id,
      name: data.payerType.name,
    },
  }
  data.offers.forEach((elemOffer) => {
    orderId.offers.push({
      name: elemOffer.name,
      id: elemOffer.id,
      sku: elemOffer.sku,
      quantity: elemOffer.quantity,
      price: elemOffer.price,
    })
  })
  return orderId
}
