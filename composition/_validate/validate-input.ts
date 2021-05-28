import {
  TypeValidateInput,
  TypeValidateRegulations,
} from '@/composition/_validate/validate-type'
import { UnwrapRef } from '@nuxtjs/composition-api'

export function ValidateInput(validateInput: UnwrapRef<TypeValidateInput>) {
  const errorUndefined = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    inputData.active =
      validateInput.value === '' || validateInput.value === null
  }
  const errorRegExp = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.regExp) {
      inputData.active = !inputData.params.regExp.test(validateInput.value)
    }
  }
  const errorValueTrue = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.valueTrue) {
      inputData.params.valueTrue.RegSet.active =
        inputData.params.valueTrue.valueSet.value ===
        inputData.params.valueTrue.valueCheck.value
      errorValidateInput(
        inputData.params.valueTrue.RegSet,
        inputData.params.valueTrue.valueSet
      )
    }
  }
  const errorValueFalse = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.valueFalse) {
      inputData.params.valueFalse.RegSet.active =
        inputData.params.valueFalse.valueSet.value !==
        inputData.params.valueFalse.valueCheck.value
      errorValidateInputAll(inputData.params.valueFalse.valueSet)
    }
  }
  const errorCheckTrue = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    inputData.active = validateInput.value !== true
  }

  const errorMinLength = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.minLength) {
      inputData.active =
        validateInput.value.length <= inputData.params.minLength
    }
  }
  const errorLength = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.length) {
      inputData.active = validateInput.value.length !== inputData.params.length
    }
  }
  const errorMaxLength = (inputData: UnwrapRef<TypeValidateRegulations>) => {
    if (inputData.params && inputData.params.maxLength) {
      inputData.active =
        validateInput.value.length <= inputData.params.maxLength
    }
  }
  const errorValidateInputAll = (
    inputValue: UnwrapRef<TypeValidateInput> = validateInput
  ) => {
    inputValue.validate = true
    for (const key in inputValue.regulations) {
      if (inputValue.regulations[key].active) {
        inputValue.validate = false
        break
      }
    }
  }
  const errorValidateInput = (
    regulations: UnwrapRef<TypeValidateRegulations>,
    inputValue: UnwrapRef<TypeValidateInput> = validateInput
  ) => {
    if (inputValue.validate) {
      inputValue.validate = !regulations.active
    }
  }

  const onSwitch = (value?: any) => {
    if (value !== undefined) {
      validateInput.value = value
    }
    validateInput.validate = true
    for (const keyReg in validateInput.regulations) {
      if (validateInput.regulations[keyReg].server) {
        validateInput.regulations[keyReg].active = false
        continue
      }
      switch (validateInput.regulations[keyReg].type) {
        case 'undefined':
          errorUndefined(validateInput.regulations[keyReg])
          break
        case 'regExp':
          errorRegExp(validateInput.regulations[keyReg])
          break
        case 'valueTrue':
          errorValueTrue(validateInput.regulations[keyReg])
          break
        case 'valueFalse':
          errorValueFalse(validateInput.regulations[keyReg])
          break
        case 'minLength':
          errorMinLength(validateInput.regulations[keyReg])
          break
        case 'maxLength':
          errorMaxLength(validateInput.regulations[keyReg])
          break
        case 'length':
          errorLength(validateInput.regulations[keyReg])
          break
        case 'checkTrue':
          errorCheckTrue(validateInput.regulations[keyReg])
          break
        default:
          break
      }
      errorValidateInput(validateInput.regulations[keyReg])
    }
  }
  return { onSwitch }
}
