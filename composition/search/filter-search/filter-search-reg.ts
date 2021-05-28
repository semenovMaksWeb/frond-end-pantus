import { ref } from '@nuxtjs/composition-api'

export function FilterSearchReg() {
  const errors = ref<Boolean>(false)
  const checkSearchValue = (value: string) => {
    if (value.length > 0) {
      const reg = /^[0-9A-Za-zА-Яа-яЁ\-.\s]+$/giu
      const test = reg.test(value)
      errors.value = !test
      return test
    }
    errors.value = false
    return true
  }
  return { checkSearchValue, errors }
}
