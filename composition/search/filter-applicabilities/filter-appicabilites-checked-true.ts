import { SearchApplicabilitiesPanelInterface } from '~/interface/search/search-applicabilities-panel.interface'
export function ApplicabilitiesCheckedTrue(store: any) {
  const ApplicabilitiesCheckedTrue = (dataset: number[]) => {
    dataset.forEach((id) => {
      store.commit('search/form/pushApplicabilitiesChecked', id)
    })
  }
  const ApplicabilitiesCheckedTrueAll = (
    dataset: SearchApplicabilitiesPanelInterface[]
  ) => {
    store.commit('search/form/onlyResetApplicabilities')
    dataset.forEach((data) => {
      if (data.selectedMarka !== null) {
        ApplicabilitiesCheckedTrue([data.selectedMarka])
      }
      ApplicabilitiesCheckedTrue(data.selectedModel)
      ApplicabilitiesCheckedTrue(data.selectedGenerations)
    })
  }
  return { ApplicabilitiesCheckedTrueAll }
}
