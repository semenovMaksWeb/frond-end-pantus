export interface OrdersPaymentInterface {
  id: number
  name: string
  description: string
  active: boolean
}
export interface OrdersPaymentInterfaceApi {
  id: number
  name: string
  active: boolean
  sort: string
  description: string
  // eslint-disable-next-line camelcase
  available_for_user_types: number[]
}

export interface OrdersPaymentInterfaceStore {
  orderPayment: OrdersPaymentInterface[] | null
}
