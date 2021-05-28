export type SearchFormInterface = {
  brandChecked: number[]
  search: string
  categoriesChecked: number[]
  applicabilitiesChecked: number[]
  page: number
}
export type SearchFormInterfaceStore = {
  formFilterProduct: SearchFormInterface
}
