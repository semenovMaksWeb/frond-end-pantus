import { encode } from 'js-base64'
import {
  AuthorizationInterface,
  AuthorizationInterfaceApi,
  AuthorizationInterfaceDto,
} from '@/interface/authorization.interface'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export const AuthorizationAxios = async (
  $axios: NuxtAxiosInstance,
  authorization?: AuthorizationInterfaceDto
): Promise<AuthorizationInterface> => {
  if (authorization) {
    const { data } = await $axios.get(`${process.env.api}/auth`, {
      headers: {
        Authorization:
          'Basic ' + encode(authorization.login + ':' + authorization.password),
      },
    })
    return AuthorizationMap(data)
  } else {
    const { data } = await $axios.get(`${process.env.api}/auth`)
    return AuthorizationMap(data)
  }
}

const AuthorizationMap = (
  data: AuthorizationInterfaceApi
): AuthorizationInterface => {
  return {
    id: data.id,
    token: data.token,
  }
}
