import {
  TypeFormData,
  TypeValidateInput,
} from '@/composition/_validate/validate-type'

export interface InputPropsInterface {
  type?: string
  placeholder?: string
  text?: string
  validateForm?: TypeFormData
  validateInput?: TypeValidateInput
  classItem?: string
  classLabel?: string
  classInput?: string
}
