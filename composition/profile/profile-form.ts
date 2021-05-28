import { ref, useContext } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '@/composition/_validate/validate-type'
import { ValidateForm } from '@/composition/_validate/validate-form'
import { ProfileInterfaceDto } from '~/interface/profile.interface'

export function ProfileForm() {
  const { store } = useContext()
  const profile = store.getters['profile/getProfile']
  // const router = useRouter()
  const formData = ref<TypeFormData>({
    name: {
      value: profile.name,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали имя',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    surname: {
      value: profile.surname,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали фамилию',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    patronymic: {
      value: profile.patronymic,
      regulations: [],
      validate: true,
    },
    telephone: {
      value: profile.telephone,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали номер телефона',
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
  const profileValidateForm = async () => {
    const validateClient = ValidateForm(formData.value).validateForm()
    if (validateClient) {
      const value: ProfileInterfaceDto = {
        contacts: { phone: { personal: formData.value.telephone.value } },
        name: {
          first: formData.value.name.value,
          last: formData.value.surname.value,
          patronymic: formData.value.patronymic.value,
        },
      }
      await store.dispatch('profile/actionsUpdateProfile', value)
    }
  }
  return { formData, profileValidateForm }
}
