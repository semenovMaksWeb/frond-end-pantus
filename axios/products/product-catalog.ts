/* eslint camelcase: 0 */

import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { ProductsMap } from '~/axios/products/product-map'
import { InterfaceFilterProductMap } from '~/store/product/filter'

export const ProductCatalogAxios = async (
  $axios: NuxtAxiosInstance,
  searchFilter: {},
  limit: number
): Promise<InterfaceFilterProductMap> => {
  const { data } = await $axios.get(`${process.env.api}/products_filter`, {
    params: {
      ...searchFilter,
      page_size: limit,
    },
  })
  return { data: ProductsMap(data.data), count: data.meta.count }
}
