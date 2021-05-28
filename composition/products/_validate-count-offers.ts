import { ssrRef } from '@nuxtjs/composition-api'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function ValidateCountOffers() {
  const error = ssrRef({
    check: false,
    text: 'Не валидное кол-во товара',
  })
  const replaceNumber = (count: any) => {
    return Number(count.toString().replace(/[^\d]/g, ''))
  }
  const lengthCount = (count: number): number => {
    if (count.toString().length >= 8) {
      return Number(count.toString().slice(0, 8))
    }
    return count
  }
  const nullCount = (offer: CartOfferInterface, count: number) => {
    if (count <= 0 || !count) {
      error.value.check = true
      return offer.multiplicity
    }
    return count
  }
  const multiplicityCount = (
    offer: CartOfferInterface,
    count: number
  ): number => {
    const ost = count % offer.multiplicity
    if (ost > 0) {
      count = count - ost
      error.value.check = true
    }
    return count
  }

  return {
    lengthCount,
    nullCount,
    multiplicityCount,
    replaceNumber,
    error,
  }
}
