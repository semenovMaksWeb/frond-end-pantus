export interface AuthorizationInterface {
  id: number
  token: string
}
export interface AuthorizationInterfaceApi {
  id: number
  token: string
}
export interface AuthorizationInterfaceStore {
  loaderUser: boolean
  userAuthorization: boolean
}

export interface AuthorizationInterfaceDto {
  login: string
  password: string
}
