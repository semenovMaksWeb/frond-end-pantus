import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const ApiMainRussiaAxios = async (
  $axios: NuxtAxiosInstance,
  summa: number,
  to: string,
  weight: number
) => {
  const { data } = await $axios.get(
    `${process.env.api}/rupost?sumoc=${summa}&to=${to}&weight=${weight}`
  )
  return data
}
