import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {
  brandIdInterface,
  brandIdInterfaceApi,
} from '~/interface/brands/brand-id.interface'

export const brandIdAxios = async (
  $axios: NuxtAxiosInstance,
  id: number
): Promise<brandIdInterface> => {
  const { data } = await $axios.get(`${process.env.api}/product_brands/${id}`)
  return brandIdMap(data)
}
const brandIdMap = (data: brandIdInterfaceApi): brandIdInterface => {
  return {
    name: data.name,
    code: data.code,
    id: data.id,
    active: data.contains_description,
    description: data.description,
  }
}
