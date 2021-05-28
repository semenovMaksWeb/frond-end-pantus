import { OrderRiles } from '~/composition/orders/order-form/order-riles'
export function OrderPayment(emit: Function) {
  const { setRilesPaySystem } = OrderRiles()
  const setPaySystem = (id: number) => {
    setRilesPaySystem(id)
    emit('value', id)
  }
  return { setPaySystem }
}
