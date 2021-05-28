import { ref, useContext, useRouter, useStore } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '@/composition/_validate/validate-type'
import { ValidateForm } from '@/composition/_validate/validate-form'
import { ProfileInterfaceCreateDto } from '~/interface/profile.interface'
import { ProfileCreateAxios } from '~/axios/profile/profile.axios'
import { Recaptcha } from '~/lib/recaptcha'
import { BlockInfoType } from '~/interface/base/block-info.interface'

export function RegisterForm() {
  const { $axios } = useContext()
  const router = useRouter()
  const store = useStore()
  const formDataRetail = ref<TypeFormData>({
    checkbox: {
      value: false,
      regulations: [
        {
          id: 1,
          text: 'Подтвердите ваше согласие на обработку персональных данных',
          params: {},
          active: false,
          type: TypeRegulations.CheckTrue,
        },
      ],
      validate: true,
    },
    type: {
      value: 'retail',
      validate: true,
      regulations: [],
    },
    name: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите ваше имя',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    surname: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите вашу фамилию',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    email: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите ваш email',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Email уже занят',
          params: {},
          active: false,
          server: true,
        },
        { id: 3, server: true, text: '', active: false, params: [] },
      ],
      validate: true,
    },
    password: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали пароль',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Пароль должен состоять не менее 8 символов',
          params: { minLength: 8 },
          active: false,
          type: TypeRegulations.MinLength,
        },
        {
          id: 3,
          text: '',
          params: {},
          active: false,
          type: TypeRegulations.ValueFalse,
        },
      ],
      validate: true,
    },
    passwordRepeat: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите пароль еще раз',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Пароли не совпадают',
          params: {},
          active: false,
          type: TypeRegulations.ValueFalse,
        },
      ],
      validate: true,
    },
    telephone: {
      req: true,
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Укажите номер телефона',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Вы указали номер телефона не корректно',
          params: { length: 18 },
          active: false,
          type: TypeRegulations.Length,
        },
      ],
      validate: true,
    },
  })
  formDataRetail.value.passwordRepeat.regulations[1].params = {
    valueFalse: {
      RegSet: formDataRetail.value.passwordRepeat.regulations[1],
      valueSet: formDataRetail.value.passwordRepeat,
      valueCheck: formDataRetail.value.password,
    },
  }
  formDataRetail.value.password.regulations[2].params =
    formDataRetail.value.passwordRepeat.regulations[1].params

  const formDataWholesale = ref<TypeFormData>({
    organization: {
      value: '',
      req: true,
      validate: true,
      regulations: [
        {
          id: 1,
          type: TypeRegulations.Undefined,
          params: [],
          text: 'Вы не указали название своей организации',
          active: false,
        },
      ],
    },
    inn: {
      value: '',
      validate: true,
      regulations: [],
    },
    address: {
      value: '',
      validate: true,
      regulations: [],
    },
  })
  const { check, checkRecaptcha, checkSuccess } = Recaptcha()
  const registerValidateForm = async () => {
    await checkRecaptcha()
    let validateClient: boolean
    if (formDataRetail.value.type.value === 'retail') {
      validateClient = ValidateForm(formDataRetail.value).validateForm()
    } else {
      const validateRetail = ValidateForm(formDataRetail.value).validateForm()
      const validateWholesale = ValidateForm(
        formDataWholesale.value
      ).validateForm()
      validateClient = validateRetail && validateWholesale
    }
    if (validateClient) {
      if (!check.value) {
        store.commit(
          'blog-info/setBlockInfo',
          {
            text: `Вы не прошли капчу`,
            type: BlockInfoType.Error,
            active: true,
          },
          { root: true }
        )
        return
      }
      const profileInterfaceCreateDto: ProfileInterfaceCreateDto = {
        passwd: formDataRetail.value.password.value,
        account: { type: formDataRetail.value.type.value },
        contacts: {
          email: formDataRetail.value.email.value,
          phone: {
            personal: formDataRetail.value.telephone.value,
          },
        },
        name: {
          first: formDataRetail.value.name.value,
          last: formDataRetail.value.surname.value,
        },
        organization: {
          name: formDataWholesale.value.organization.value,
          address: formDataWholesale.value.address.value,
          tin: formDataWholesale.value.inn.value,
        },
      }
      const res = await ProfileCreateAxios($axios, profileInterfaceCreateDto)
      if (!res.error) {
        await router.push('/')
        await store.dispatch('authorization/actionsAuthorization', {
          login: profileInterfaceCreateDto.contacts.email,
          password: profileInterfaceCreateDto.passwd,
        })
        store.commit(
          'blog-info/setBlockInfo',
          {
            text: `Вы удачно зарегистрировали ${profileInterfaceCreateDto.name.first}`,
            type: BlockInfoType.Good,
            active: true,
          },
          { root: true }
        )
      } else {
        formDataRetail.value.email.regulations[2].active = true
        formDataRetail.value.email.regulations[2].text = res.error
        store.commit(
          'blog-info/setBlockInfo',
          {
            text: `${res.error}`,
            type: BlockInfoType.Error,
            active: true,
          },
          { root: true }
        )
      }
    } else {
      store.commit(
        'blog-info/setBlockInfo',
        {
          text: `Не валидная форма`,
          type: BlockInfoType.Error,
          active: true,
        },
        { root: true }
      )
    }
  }
  return {
    formDataRetail,
    formDataWholesale,
    registerValidateForm,
    check,
    checkSuccess,
  }
}
