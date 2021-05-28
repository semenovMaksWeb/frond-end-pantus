import { ref, useContext, useRouter } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '@/composition/_validate/validate-type'
import { ValidateForm } from '@/composition/_validate/validate-form'
import { BlockInfoType } from '~/interface/base/block-info.interface'

export function AuthorizationForm() {
  const { store } = useContext()
  const router = useRouter()
  const formData = ref<TypeFormData>({
    login: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали логин',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
        {
          id: 2,
          text: 'Не верный логин или пароль',
          params: {},
          active: false,
          server: true,
        },
      ],
      validate: true,
      req: true,
    },
    password: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали пароль',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
      req: true,
    },
  })
  const authorizationValidateForm = async () => {
    const validateClient = ValidateForm(formData.value).validateForm()
    if (validateClient) {
      const validateServer = await store.dispatch(
        'authorization/actionsAuthorization',
        {
          login: formData.value.login.value,
          password: formData.value.password.value,
        }
      )
      if (validateServer) {
        store.commit('blog-info/setBlockInfo', {
          text: `Добро пожаловать ${store.getters['profile/getProfile'].name}`,
          active: true,
          type: BlockInfoType.Good,
        })
        await router.push('/')
      } else {
        formData.value.login.regulations[1].active = true
        store.commit('blog-info/setBlockInfo', {
          text: `Не верный логин или пароль`,
          active: true,
          type: BlockInfoType.Error,
        })
      }
    } else {
      store.commit('blog-info/setBlockInfo', {
        text: `Не валидная форма`,
        active: true,
        type: BlockInfoType.Error,
      })
    }
  }
  return { formData, authorizationValidateForm }
}
