import { SearchApplicabilitiesInterface } from '@/interface/search/data/search-applicabilities.interface'
import { SearchApplicabilitiesPanelInterface } from '@/interface/search/search-applicabilities-panel.interface'

export const FilterApplicabilitiesSetAllFirst = (
  index: number,
  element: SearchApplicabilitiesInterface,
  store: any
) => {
  const panelId: SearchApplicabilitiesPanelInterface =
    store.getters['search/panel/getSearchApplicabilitiesPanel'][index]
  if (panelId.selectedMarka !== null) {
    // вернуть элемент в массив который был выбран
    const IndexApplicabilities = store.getters[
      'search/data/getCarbrands'
    ].findIndex((elem: any) => elem.id === panelId.selectedMarka)
    store.commit('search/data/setCarbrandsTopSelect', IndexApplicabilities)
  }
  const IndexApplicabilities = store.getters[
    'search/data/getCarbrands'
  ].findIndex((elem: any) => elem.id === element.id)
  store.commit('search/data/setCarbrandsTopSelect', IndexApplicabilities)

  const data: SearchApplicabilitiesPanelInterface = {
    selectedMarka: element.id,
    dataGenerations: [],
    dataModel: [...element.children],
    selectedGenerations: [],
    selectedModel: [],
  }
  store.commit('search/panel/setLinkPanel', {
    index,
    value: data,
  })
}
