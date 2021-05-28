import { CatalogProductType } from '~/interface/products/products.interface'

export type offerApi = {
  id: number
  name: string
  quantity: number
  supplier: {
    code: number
    name: string
    storehouse: string
    deliveryDelay: string
    orderMultiplicity: number
  }
  price: number
}
export type TypeProductApi = {
  id: number
  name: string
  images: {
    main: string
    extra: string[]
  }
  nomenclature: {
    code: string
    type: string
  }
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
    measure: string
    weight: string
  }
  oems: number[]
  offers: offerApi[]
}
