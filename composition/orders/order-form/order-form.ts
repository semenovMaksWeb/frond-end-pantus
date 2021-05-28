import { ref, useContext, useRouter } from '@nuxtjs/composition-api'
import {
  TypeFormData,
  TypeRegulations,
} from '~/composition/_validate/validate-type'
import { OrdersSetInterface } from '~/interface/orders/orders.interface'
import { ValidateForm } from '~/composition/_validate/validate-form'
import { BlockInfoType } from '~/interface/base/block-info.interface'

export function OrderForm() {
  const { store } = useContext()
  const profile = store.getters['profile/getProfile']
  const router = useRouter()
  const formDataRetail = ref<TypeFormData>({
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
    city: {
      value: '',
      regulations: [
        {
          id: 1,
          text: 'Вы не указали город',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    payment: {
      value: null,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали способ оплаты',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    delivery: {
      value: null,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали способ доставки',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
      validate: true,
    },
    zip: {
      regulations: [],
      value: undefined,
      validate: true,
    },
    deliverySumma: {
      regulations: [],
      value: 0,
      validate: true,
    },
    address: {
      value: '',
      validate: true,
      req: false,
      regulations: [],
    },
    comment: {
      value: '',
      validate: true,
      req: false,
      regulations: [],
    },
  })
  const formDataWholesale = ref<TypeFormData>({
    companyName: {
      value: '',
      req: true,
      validate: true,
      regulations: [
        {
          id: 1,
          text: 'Вы не указали название компании',
          params: {},
          active: false,
          type: TypeRegulations.Undefined,
        },
      ],
    },
  })
  const orderSet = async () => {
    let validateClient: boolean
    const typeUser = store.getters['profile/getProfile'].type
    if (typeUser === 'retail') {
      validateClient = ValidateForm(formDataRetail.value).validateForm()
    } else {
      const validateRetail = ValidateForm(formDataRetail.value).validateForm()
      const validateWholesale = ValidateForm(
        formDataWholesale.value
      ).validateForm()
      validateClient = validateRetail && validateWholesale
    }
    if (validateClient) {
      const orderSet: OrdersSetInterface = {
        delivery_type_id: formDataRetail.value.delivery.value,
        paysystem_type_id: formDataRetail.value.payment.value,
        city_name: formDataRetail.value.city.value,
        city_zip: formDataRetail.value.zip.value,
        first_name: formDataRetail.value.name.value,
        last_name: formDataRetail.value.surname.value,
        phone_number: formDataRetail.value.telephone.value,
        company_name: undefined,
        detailed_adress: undefined,
        user_comment: undefined,
      }
      const res = await store.dispatch('orders/actionsSetOrder', orderSet)
      if (!res.error) {
        store.commit(
          'blog-info/setBlockInfo',
          {
            text: 'Заказ удачно оформлен',
            active: true,
            type: BlockInfoType.Good,
          },
          { root: true }
        )
        await router.push(`/profile/orders/${res.success.order_id}`)
      } else {
        store.commit(
          'blog-info/setBlockInfo',
          {
            text: res.error,
            active: true,
            type: BlockInfoType.Error,
          },
          { root: true }
        )
      }
    } else {
      store.commit(
        'blog-info/setBlockInfo',
        {
          text: 'Не валидная форма',
          active: true,
          type: BlockInfoType.Error,
        },
        { root: true }
      )
    }
  }
  return { formDataRetail, formDataWholesale, orderSet }
}
