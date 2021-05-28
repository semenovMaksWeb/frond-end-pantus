import { useContext } from '@nuxtjs/composition-api'
import { GetOrderForm } from '@/composition/orders/order-form/get-order-form'
import { OrdersRulesInterface } from '~/interface/orders/orders-servers/orders-rules.interface'
import { OrdersDeliveryInterface } from '~/interface/orders/orders-servers/orders-delivery.interface'
import { OrdersPaymentInterface } from '~/interface/orders/orders-servers/orders-payment.interface'

enum typeName {
  deliveryId = 'deliveryId',
  paySystemId = 'paySystemId',
}

export function OrderRiles() {
  const { store } = useContext()
  const { getOrderRules, getOrderDelivery, getOrderPayment } = GetOrderForm()
  const setRilesDelivery = (id: number) => {
    rilesCheck(
      getOrderPayment.value,
      id,
      typeName.deliveryId,
      typeName.paySystemId
    )
  }

  const setRilesPaySystem = (id: number) => {
    rilesCheck(
      getOrderDelivery.value,
      id,
      typeName.paySystemId,
      typeName.deliveryId
    )
  }
  const rilesCheck = (
    data: OrdersPaymentInterface[] | OrdersDeliveryInterface[],
    id: number,
    name: typeName,
    name2: typeName
  ) => {
    const rulesCheck = getOrderRules.value.filter(
      (elem: OrdersRulesInterface) => elem[name] === id
    )
    data.forEach((elem, index: number) => {
      const rules = rulesCheck.filter(
        (rules: OrdersRulesInterface) => rules[name2] === elem.id
      )
      commit(name, index, rules.length !== 0)
    })
  }

  const commit = (
    name: 'deliveryId' | 'paySystemId',
    index: number,
    check: boolean
  ) => {
    if (name === 'deliveryId') {
      store.commit('orders/payment/activeOrderPayment', { index, check })
    } else if (name === 'paySystemId') {
      store.commit('orders/delivery/activeOrderDelivery', { index, check })
    }
  }

  return { setRilesDelivery, setRilesPaySystem }
}
