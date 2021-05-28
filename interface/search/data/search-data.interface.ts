import { SearchCategoriesInterface } from '~/interface/search/data/search-categories.interface'
import { brandInterface } from '~/interface/brands/brand.interface'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { SearchMarkInterface } from '~/interface/search/data/search-metks.interface'

export interface SearchDataInterface {
  categories: SearchCategoriesInterface[]
  brands: brandInterface[]
  carbrands: SearchApplicabilitiesInterface[]
  mark: SearchMarkInterface[]
  loader: boolean
}
