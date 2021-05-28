import { ValidateInput } from '@/composition/_validate/validate-input.ts'
import { TypeFormData } from '@/composition/_validate/validate-type.ts'
import { UnwrapRef } from '@nuxtjs/composition-api'
export function ValidateForm(formDataAll: UnwrapRef<TypeFormData>) {
  const validateForm = (): boolean => {
    let fullValidClient = true
    for (const keyNameInput in formDataAll) {
      ValidateInput(formDataAll[keyNameInput]).onSwitch()
    }
    for (const keyNameInput in formDataAll) {
      for (const key in formDataAll[keyNameInput].regulations) {
        if (
          formDataAll[keyNameInput].regulations[key].active &&
          !formDataAll[keyNameInput].regulations[key].server
        ) {
          fullValidClient = false
        }
      }
    }
    return fullValidClient
  }

  return { validateForm }
}
