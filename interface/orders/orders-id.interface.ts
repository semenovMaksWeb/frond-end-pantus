export interface OrdersIdOffersInterfaceApi {
  guid: string
  guidByOrder: string
  id: number
  name: string
  price: number
  priceTypeName: string
  quantity: number
  sku: string
  supplierCode: string
}
export interface OrdersIdOffersInterface {
  id: number
  name: string
  price: number
  quantity: number
  sku: string
}

export interface OrdersIdInterface {
  id: number
  price: number
  offers: OrdersIdOffersInterface[]
  date: string
  status: {
    name: string
    code: string
  }
  paySystem: {
    id: number
    name: string
  }
  paySystemType: {
    id: number
    name: string
  }
  address: {
    city: string
    detailed: string
  }
  delivery: {
    service: {
      id: number
      name: string
    }
    price: number
  }
  user: {
    name: string
    surname: string
    phone: string
  }
}
export interface OrdersInterfaceIdApi {
  id: number
  offersCount: number
  price: number
  offers: OrdersIdOffersInterfaceApi[]
  status: {
    code: string
    name: string
  }
  payerType: {
    id: number
    name: string
  }
  paysystem: {
    id: number
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
    service: {
      id: number
      name: string
    }
  }
  user: {
    name: {
      first: string
      last: string
    }
    phone: string
  }
}
