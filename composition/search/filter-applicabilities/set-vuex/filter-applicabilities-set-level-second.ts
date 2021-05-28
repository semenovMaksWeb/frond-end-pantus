import { SearchApplicabilitiesInterface } from '@/interface/search/data/search-applicabilities.interface'
import { SearchApplicabilitiesPanelInterface } from '@/interface/search/search-applicabilities-panel.interface'

// import { computed, useContext } from "@nuxtjs/composition-api";
export const FilterApplicabilitiesSetAllSecond = (
  index: number,
  element: SearchApplicabilitiesInterface,
  value: boolean,
  store: any
) => {
  const panel: SearchApplicabilitiesPanelInterface =
    store.getters['search/panel/getSearchApplicabilitiesPanel'][index]
  let newFilter: SearchApplicabilitiesPanelInterface = {
    dataModel: [],
    selectedModel: [],
    selectedGenerations: [],
    dataGenerations: [],
    selectedMarka: null,
  }
  if (value) {
    // Добавлен фильтр
    newFilter = {
      selectedMarka: panel.selectedMarka,
      selectedModel: [element.id, ...panel.selectedModel],
      dataModel: panel.dataModel,
      selectedGenerations: panel.selectedGenerations,
      dataGenerations: [...element.children, ...panel.dataGenerations],
    }
  } else if (!value) {
    // удален фильтр;
    const indexSelectedModel = panel.selectedModel.indexOf(element.id)
    newFilter = {
      selectedMarka: panel.selectedMarka,
      dataGenerations: [],
      dataModel: [...panel.dataModel],
      selectedGenerations: [],
      selectedModel: [
        ...panel.selectedModel.slice(0, indexSelectedModel),
        ...panel.selectedModel.slice(
          indexSelectedModel + 1,
          panel.selectedModel.length
        ),
      ],
    }
    if (newFilter.selectedModel.length === 0) {
      // Выбранных фильтров нету
      newFilter.dataGenerations = []
      newFilter.selectedGenerations = []
    } else {
      // Выбранные фильтры есть
      for (const dataset of panel.dataGenerations) {
        const checkData = element.children.filter(
          (elem) => elem.id === dataset.id
        )
        if (checkData.length === 0) {
          // Оставить dataGenerations
          newFilter.dataGenerations.push(dataset)
          const checkSelected = panel.selectedGenerations.filter(
            (selected) => selected === dataset.id
          )
          if (checkSelected.length !== 0) {
            // Оставить selectedGenerations
            newFilter.selectedGenerations.push(...checkSelected)
          }
        }
      }
    }
  }
  store.commit('search/panel/setLinkPanel', {
    index,
    value: newFilter,
  })
}
