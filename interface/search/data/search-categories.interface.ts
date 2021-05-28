export interface SearchCategoriesInterface {
  id: number
  parentId: number
  name: string
  level: number
  children: SearchCategoriesInterface[]
  visible: boolean
  checkedType: boolean
  indeterminate: boolean
  topParent: number
}
