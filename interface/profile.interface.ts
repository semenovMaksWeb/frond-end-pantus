export interface ProfileInterface {
  login: string
  name: string
  surname: string
  patronymic: string
  telephone: string
  type: string
}
export interface ProfileInterfaceApi {
  account: {
    type: string
  }
  contacts: {
    email: string
    phone: {
      personal: string
    }
  }
  name: {
    first: string
    last: string
    patronymic: string
  }
}

export interface ProfileInterfaceDto {
  contacts: {
    phone: {
      personal: string
    }
  }
  name: {
    first: string
    last: string
    patronymic: string
  }
}

export interface ProfileInterfaceStore {
  profile: ProfileInterface | undefined
}
export interface ProfileInterfaceCreateDto {
  passwd: string
  organization?: {
    name: string
    address: string
    tin: string
  }
  name: {
    first: string
    last: string
  }
  contacts: {
    email: string
    phone: {
      personal: string
    }
  }
  account: {
    type: string
  }
}
