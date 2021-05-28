import { computed } from '@nuxtjs/composition-api'
export function ValidateProps(value: any, emit: Function) {
  const propsValue = computed({
    get() {
      return value.value
    },
    set(value) {
      emit('value', value)
    },
  })
  return { propsValue }
}
