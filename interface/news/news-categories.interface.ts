export interface NewsCategoriesIdInterface {
  code: string
  id: number
  name: string
}
export interface NewsCategoriesIdApiInterface {
  code: string
  id: number
  name: string
}
export interface NewsCategoriesInterface extends NewsCategoriesIdInterface {
  count: number
}
export interface NewsCategoriesApiInterface
  extends NewsCategoriesIdApiInterface {
  count: number
}
