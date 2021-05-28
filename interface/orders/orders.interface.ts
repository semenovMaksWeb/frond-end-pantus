/* eslint camelcase: 0 */
import { OrdersIdInterface } from '~/interface/orders/orders-id.interface'

export interface OrdersInterface {
  id: number
  date: string
  status: {
    name: string
    code: string
  }
}
export interface OrdersSetInterface {
  first_name: string
  last_name: string
  phone_number: string
  city_name: string
  city_zip?: number
  company_name?: string
  detailed_adress?: string
  paysystem_type_id: number
  delivery_type_id: number
  user_comment?: string
}
export interface OrdersInterfaceApi {
  id: number
  offersCount: number
  price: number
  status: {
    code: string
    name: string
  }
  address: {
    city: string
    detailed: string
  }
  dates: {
    created: string
    modified: string
    statusUpdate: string
  }
  delivery: {
    allow: boolean
    price: number
    trackingCode: string
  }
}
export interface OrdersInterfaceStore {
  orders: OrdersInterface[] | null
  orderId: OrdersIdInterface | null
  countOrders: number
  limit: number
  activeOrders: boolean
}
