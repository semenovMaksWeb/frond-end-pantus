import { SearchApplicabilitiesInterface } from '@/interface/search/data/search-applicabilities.interface'
import { SearchApplicabilitiesPanelInterface } from '@/interface/search/search-applicabilities-panel.interface'

export const FilterApplicabilitiesSetAllThree = (
  index: number,
  element: SearchApplicabilitiesInterface,
  value: boolean,
  store: any
) => {
  const panel =
    store.getters['search/panel/getSearchApplicabilitiesPanel'][index]
  let newFilter: SearchApplicabilitiesPanelInterface
  if (value) {
    newFilter = {
      selectedMarka: panel.selectedMarka,
      dataGenerations: panel.dataGenerations,
      dataModel: panel.dataModel,
      selectedGenerations: [...panel.selectedGenerations, element.id],
      selectedModel: panel.selectedModel,
    }
  } else {
    const indexSelectedGenerations = panel.selectedGenerations.indexOf(
      element.id
    )
    newFilter = {
      selectedMarka: panel.selectedMarka,
      dataGenerations: panel.dataGenerations,
      dataModel: panel.dataModel,
      selectedModel: panel.selectedModel,
      selectedGenerations: [
        ...panel.selectedGenerations.slice(0, indexSelectedGenerations),
        ...panel.selectedGenerations.slice(
          indexSelectedGenerations + 1,
          panel.selectedGenerations.length
        ),
      ],
    }
  }
  store.commit('search/panel/setLinkPanel', {
    index,
    value: newFilter,
  })
}
