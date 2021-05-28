export interface OrdersDeliveryInterface {
  id: number
  name: string
  active: boolean
  description: string
  defaultExtra: string
  price: number
  defaultPrice: number
  extra: string
  city: string
  zip?: number
}
export interface OrdersDeliveryInterfaceApi {
  id: number
  name: string
  active: boolean
  sort: string
  description: string
  extra: string
  // eslint-disable-next-line camelcase
  default_city: string
  // eslint-disable-next-line camelcase
  default_price: number
  // eslint-disable-next-line camelcase
  available_for_user_types: number[]
  zip: number
}

export interface OrdersDeliveryInterfaceStore {
  orderDelivery: OrdersDeliveryInterface[] | null
}
