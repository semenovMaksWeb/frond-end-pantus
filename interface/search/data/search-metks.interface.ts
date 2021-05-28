export enum TypeMark {
  brand = 'brand',
  categories = 'categories',
}

export interface SearchMarkInterface {
  id: number
  name: string
  type: TypeMark
}
