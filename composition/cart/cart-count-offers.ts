import { useContext } from '@nuxtjs/composition-api'
import { ValidateCountOffers } from '@/composition/products/_validate-count-offers'
import { CartOfferInterface } from '~/interface/cart/cart.interface'
export function CartCountOffers() {
  const {
    error,
    multiplicityCount,
    lengthCount,
    replaceNumber,
    nullCount,
  } = ValidateCountOffers()
  const { store } = useContext()
  const commitCount = async (offer: CartOfferInterface, count: number) => {
    store.commit('cart/count/setCountOfferCart', {
      offer,
      count: 0,
    })
    await store.dispatch('cart/count/actionsSetCountOfferCart', {
      offer,
      count,
    })
  }
  const cartCountOffers = async (offer: CartOfferInterface, count: string) => {
    error.value.check = false
    let countNumber = replaceNumber(count)
    countNumber = lengthCount(countNumber)
    countNumber = multiplicityCount(offer, countNumber)
    countNumber = nullCount(offer, countNumber)
    await commitCount(offer, countNumber)
  }

  const cartErrorFalse = async (offer: CartOfferInterface, count: number) => {
    error.value.check = false
    let countNumber = lengthCount(count)
    countNumber = multiplicityCount(offer, Number(count))
    countNumber = nullCount(offer, countNumber)
    countNumber = multiplicityCount(offer, countNumber)
    await commitCount(offer, countNumber)
  }

  return { cartCountOffers, error, cartErrorFalse }
}
