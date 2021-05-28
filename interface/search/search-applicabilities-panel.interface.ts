import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'

export interface SearchApplicabilitiesPanelInterface {
  selectedMarka: number | null
  selectedModel: number[]
  selectedGenerations: number[]
  dataModel: SearchApplicabilitiesInterface[]
  dataGenerations: SearchApplicabilitiesInterface[]
}
export interface SearchApplicabilitiesPanelStore {
  searchApplicabilitiesPanel: SearchApplicabilitiesPanelInterface[]
}
