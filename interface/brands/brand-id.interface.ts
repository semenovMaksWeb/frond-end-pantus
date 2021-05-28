import {
  brandInterfaceApi,
  brandInterface,
} from '~/interface/brands/brand.interface'

export interface brandIdInterface extends brandInterface {
  description: string
}
export interface brandIdInterfaceApi extends brandInterfaceApi {
  description: string
  // eslint-disable-next-line camelcase
  description_id: number
}
export interface brandInterfaceStore {
  brandId: brandIdInterface[] | []
}
