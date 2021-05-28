export interface CatalogInterface {
  id: number
  name: string
  code: string
  children: CatalogInterface[]
}
export interface CatalogInterfaceApi {
  id: number
  name: string
  code: string
  depthLevel: number
  parentId: number
  childs: CatalogInterfaceApi[]
}
