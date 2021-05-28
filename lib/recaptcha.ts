import { ref } from '@nuxtjs/composition-api'

export function Recaptcha() {
  const check = ref<boolean>(true)
  const checkSuccess = (value: string) => {
    if (value) {
      check.value = true
    }
  }
  const checkRecaptcha = async () => {
    try {
      // @ts-ignore
      await window.$nuxt.$recaptcha.getResponse()
      check.value = true
    } catch (e) {
      check.value = false
    }
  }
  return { checkRecaptcha, checkSuccess, check }
}
