export interface TownInterface {
  id: string
  type: string
  typeShort: string
  zip: number
  name: string
}
export interface TownInterfaceStore {
  town: TownInterface[] | []
}
