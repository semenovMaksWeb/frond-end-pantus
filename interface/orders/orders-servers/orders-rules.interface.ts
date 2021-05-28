export interface OrdersRulesInterface {
  user: string
  deliveryId: number
  paySystemId: number
}
export interface OrdersRulesInterfaceApi {
  // eslint-disable-next-line camelcase
  user_type_id: number
  // eslint-disable-next-line camelcase
  delivery_type_id: number
  // eslint-disable-next-line camelcase
  paysystem_type_id: number
}

export interface OrdersRulesInterfaceStore {
  orderRules: OrdersRulesInterface[] | null
}
