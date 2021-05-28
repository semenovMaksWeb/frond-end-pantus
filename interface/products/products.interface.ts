export type CatalogProductType = {
  id: number
  name: string
}

export type TypeParamsProduct = {
  measure: string
  weight: number
}

export type TypeBrandProduct = {
  id: number
  name: string
  deliveryDelay: number
  code: string
}

export type TypeSkuProduct = {
  normalized: string
  original: string
}

export type TypeSupplier = {
  deliveryDelay: number
  name: string
}

export type TypeCartProduct = {
  id: number
  name: string
  sku: TypeSkuProduct
  productCardImage: {
    url: string
  }
  nomenclature: {
    code: string
  }
  params: TypeParamsProduct
  oem: string[]
  album: string[]
  applicability: CatalogProductType[]
  categories: CatalogProductType[]
  brand: TypeBrandProduct
}

export type TypeOfferProduct = {
  id: number
  multiplicity: number
  prices: number
  quantity: number
  supplier: TypeSupplier
}

export type TypeProductVuex = {
  productCard: TypeCartProduct
  productOffer: TypeOfferProduct[]
}
