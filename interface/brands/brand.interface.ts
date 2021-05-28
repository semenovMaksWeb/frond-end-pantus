import { brandIdInterface } from '~/interface/brands/brand-id.interface'

export interface brandInterface {
  id: number
  name: string
  code: string
  active: boolean
}
export interface brandInterfaceApi {
  id: number
  name: string
  code: string
  cert: null
  // eslint-disable-next-line camelcase
  contains_description: boolean
}
export interface brandInterfaceStore {
  brand: brandInterface[] | []
  limitPage: number
  activeBrand: boolean
  brandId: brandIdInterface[] | []
}
