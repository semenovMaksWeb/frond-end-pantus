import {
  ProfileInterface,
  ProfileInterfaceApi,
  ProfileInterfaceCreateDto,
  ProfileInterfaceDto,
} from '@/interface/profile.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const ProfileAxios = async (
  $axios: NuxtAxiosInstance
): Promise<ProfileInterface | undefined> => {
  const { data } = await $axios.get(`${process.env.api}/personal/profile`)
  if (!data.error) {
    return ProfileMap(data)
  }
}
export const ProfileCreateAxios = async (
  $axios: NuxtAxiosInstance,
  dataset: ProfileInterfaceCreateDto
) => {
  const { data } = await $axios.post(`${process.env.api}/users`, dataset)
  return data
}
export const ProfileUpdateAxios = async (
  $axios: NuxtAxiosInstance,
  profileInterfaceDto: ProfileInterfaceDto
): Promise<boolean> => {
  const { data } = await $axios.patch(
    `${process.env.api}/users`,
    profileInterfaceDto
  )
  return !!data.success
}

const ProfileMap = (data: ProfileInterfaceApi): ProfileInterface => {
  return {
    login: data.contacts.email,
    name: data.name.first,
    surname: data.name.last,
    patronymic: data.name.patronymic,
    telephone: data.contacts.phone.personal,
    type: data.account.type,
  }
}
