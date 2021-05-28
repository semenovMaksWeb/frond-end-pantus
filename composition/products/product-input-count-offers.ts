import { ssrRef } from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
import { ValidateCountOffers } from '~/composition/products/_validate-count-offers'
export function ProductInputCountOffers(
  cart: CartOfferInterface,
  emit: Function
) {
  const {
    lengthCount,
    multiplicityCount,
    nullCount,
    replaceNumber,
    error,
  } = ValidateCountOffers()
  const count = ssrRef(1)
  if (cart && cart.count) {
    count.value = cart.count
    emit('update:count', count.value)
  }
  const countOffers = (offer: CartOfferInterface) => {
    error.value.check = false
    count.value = replaceNumber(count.value)
    count.value = lengthCount(count.value)
    count.value = multiplicityCount(offer, count.value)
    count.value = nullCount(offer, count.value)
    emit('update:count', count.value)
  }

  const errorFalse = (offer: CartOfferInterface) => {
    count.value = multiplicityCount(offer, count.value)
    count.value = lengthCount(count.value)
    error.value.check = false
    count.value = nullCount(offer, count.value)
    emit('update:count', count.value)
  }
  return {
    lengthCount,
    nullCount,
    multiplicityCount,
    countOffers,
    errorFalse,
    error,
    count,
  }
}
