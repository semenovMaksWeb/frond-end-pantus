export type SearchApplicabilitiesInterface = {
  id: number
  name: string
  code: string
  children: SearchApplicabilitiesInterface[]
  level: number
  parentId: number
  visible: boolean
  selectCheck: boolean
  parentTop: number | null
}
