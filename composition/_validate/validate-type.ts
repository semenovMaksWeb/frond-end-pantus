export enum TypeRegulations {
  RegExp = 'regExp',
  Undefined = 'undefined',
  CheckTrue = 'checkTrue',
  ValueTrue = 'valueTrue',
  ValueFalse = 'valueFalse',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  Length = 'length',
}
export type TypeValueCheck = {
  // eslint-disable-next-line no-use-before-define
  valueSet: TypeValidateInput
  // eslint-disable-next-line no-use-before-define
  valueCheck: TypeValidateInput
  // eslint-disable-next-line no-use-before-define
  RegSet: TypeValidateRegulations
}
export type TypeValidateParamsAll = {
  minLength?: number
  maxLength?: number
  length?: number
  regExp?: RegExp
  valueTrue?: TypeValueCheck
  valueFalse?: TypeValueCheck
}
export type TypeValidateRegulations = {
  id: number
  server?: boolean
  type?: TypeRegulations
  active: boolean
  text: string
  params: TypeValidateParamsAll
}
export type TypeValidateInput = {
  validate: boolean
  regulations: TypeValidateRegulations[]
  value: any
  req?: boolean
}

export type TypeFormData = {
  [item: string]: TypeValidateInput
}
