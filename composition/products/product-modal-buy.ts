import { ssrRef } from '@nuxtjs/composition-api'

export function ProductModalBuy(emit: any) {
  const count = ssrRef<number>(1)
  const close = () => {
    emit('close')
  }
  return { close, count }
}
