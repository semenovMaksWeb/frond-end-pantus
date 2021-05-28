import { computed, Ref } from '@nuxtjs/composition-api'
import { SearchApplicabilitiesPanelInterface } from '~/interface/search/search-applicabilities-panel.interface'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
import { FilterApplicabilitiesSetAll } from '~/composition/search/filter-applicabilities/set-vuex/filter-applicabilities-set-all'

export function FilterApplicabilitiesSetUrl(store: any) {
  const panel: Ref<SearchApplicabilitiesPanelInterface[]> = computed(
    () => store.getters['search/panel/getSearchApplicabilitiesPanel']
  )
  const carbrandsData: Ref<SearchApplicabilitiesInterface[]> = computed(
    () => store.getters['search/data/getCarbrands']
  )
  const carbrandsFilter: Ref<number[]> = computed(
    () => store.getters['search/form/getApplicabilitiesChecked']
  )
  const setUrlApplicabilities = () => {
    if (carbrandsFilter.value.length === 0) {
      return
    }
    for (const keyData of carbrandsData.value) {
      const index = panel.value.length - 1
      checkUrlApplicabilities(keyData, index)
    }
  }
  const checkUrlApplicabilities = (
    carbrands: SearchApplicabilitiesInterface,
    index: number
  ) => {
    const carbrandsElem = carbrandsFilter.value.filter(
      (elem) => elem === carbrands.id
    )[0]
    if (carbrandsElem) {
      // level 1
      if (carbrands.level === 1 || !panel.value[index]) {
        store.commit('search/panel/setNewPanel')
        index++
      }
      // selectedMarka === null
      if (carbrands.level !== 1 && panel.value[index].selectedMarka === null) {
        const carbrandsElemParent = carbrandsData.value.filter(
          (elem) => elem.id === carbrands.parentTop
        )[0]
        FilterApplicabilitiesSetAll(index, carbrandsElemParent, true, store)
      }
      // level 3
      if (carbrands.level === 3) {
        const idCheck = panel.value[index].selectedModel.filter(
          (elem) => elem === carbrands.parentId
        )[0]
        // id 2 level выбран
        if (!idCheck) {
          const carbrandsParent: SearchApplicabilitiesInterface = panel.value[
            index
          ].dataModel.filter((elem) => elem.id === carbrands.parentId)[0]
          FilterApplicabilitiesSetAll(index, carbrandsParent, true, store)
        }
      }
      // мы находим и сохраняем
      FilterApplicabilitiesSetAll(index, carbrands, true, store)
    }
    if (carbrands.children.length > 0) {
      // прогон потомков
      for (const keyData of carbrands.children) {
        checkUrlApplicabilities(keyData, index)
      }
    }
  }
  return { setUrlApplicabilities }
}
