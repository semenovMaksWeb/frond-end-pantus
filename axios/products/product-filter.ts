/* eslint camelcase: 0 */

import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'
import { SearchFormInterface } from '~/interface/search/search-form.interface'
import { InterfaceFilterProductMap } from '~/store/product/filter'

export const ProductFilterAxios = async (
  $axios: NuxtAxiosInstance,
  searchFilter: SearchFormInterface,
  limit: number
): Promise<InterfaceFilterProductMap> => {
  const { data } = await $axios.get(`${process.env.api}/products_filter`, {
    params: {
      ...mapFilter(searchFilter, limit),
    },
  })
  return { data: ProductsMap(data.data), count: data.meta.count }
}
const mapFilter = (searchFilter: SearchFormInterface, limit: number) => {
  const value: {
    page_size?: number
    page_number?: number
    filter_substr?: string
    filter_brands?: string
    filter_applicabilities?: string
    filter_categories?: string
  } = {
    page_size: limit,
  }
  if (searchFilter.search !== '') {
    value.filter_substr = searchFilter.search
  }
  if (searchFilter.categoriesChecked.join() !== '') {
    value.filter_categories = searchFilter.categoriesChecked.join()
  }
  if (searchFilter.applicabilitiesChecked.join() !== '') {
    value.filter_applicabilities = searchFilter.applicabilitiesChecked.join()
  }
  if (searchFilter.brandChecked.join() !== '') {
    value.filter_brands = searchFilter.brandChecked.join()
  }
  if (searchFilter.page) {
    value.page_number = searchFilter.page
  }
  return value
}
