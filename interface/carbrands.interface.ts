import {
  CatalogInterface,
  CatalogInterfaceApi,
} from '@/interface/catalog/catalog.interface'

export interface CarbrandsInterface extends CatalogInterface {}
export interface CarbrandsInterfaceApi extends CatalogInterfaceApi {}
export interface CarbrandsInterfaceStore {
  carbrands: CarbrandsInterface[] | []
}
