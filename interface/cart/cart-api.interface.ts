import { CatalogProductType } from '~/interface/products/products.interface'

export interface CartInterfaceOffersApi {
  id: string
  name: string
  guid: string
  activity: boolean
  quantity: number
  productId: number
  supplier: {
    code: string
    name: string
    itemId: string
    storehouse: string
    deliveryDelay: number
    orderMultiplicity: number
  }
  dates: {
    created: string
    modified: string
  }
  price: number
  // eslint-disable-next-line camelcase
  price_name: string
  quantityInCart: number
  // eslint-disable-next-line camelcase
  cart_id: number
}

export interface CartInterfaceApi {
  id: number
  guid: string
  barcode: string
  activity: boolean
  name: string
  supplierMaintainer: string
  images: {
    main: string
    extra: string[]
  }
  storehouse: string
  sku: {
    origin: string
    custom: string
  }
  brand: {
    id: number
    name: string
    code: string
    deliveryDelay: string
  }
  categories: CatalogProductType[]
  applicabilities: CatalogProductType[]
  params: {
    material: string
    weight: string
    measure: string
    length: string
    width: string
  }
  oems: string[]
  dates: {
    created: string
    modified: string
    release: string
  }
  offers: CartInterfaceOffersApi[]
}
