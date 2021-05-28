import Vue from 'vue'
import { MutationTree, ActionTree } from 'vuex'
import { SearchApplicabilitiesPanelStore } from '~/interface/search/search-applicabilities-panel.interface'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'

export const state = (): SearchApplicabilitiesPanelStore => ({
  searchApplicabilitiesPanel: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setNewPanel(store: SearchApplicabilitiesPanelStore) {
    store.searchApplicabilitiesPanel.push({
      selectedMarka: null,
      selectedModel: [],
      selectedGenerations: [],
      dataModel: [],
      dataGenerations: [],
    })
  },
  setLinkPanel(
    store: SearchApplicabilitiesPanelStore,
    data: { index: number; value: SearchApplicabilitiesInterface }
  ) {
    Vue.set(store.searchApplicabilitiesPanel, data.index, data.value)
  },
  deleteIndexPanel(state: SearchApplicabilitiesPanelStore, index: number) {
    state.searchApplicabilitiesPanel.splice(index, 1)
  },
  deletePanel(state: SearchApplicabilitiesPanelStore) {
    state.searchApplicabilitiesPanel = []
  },
  resetPanel(store: SearchApplicabilitiesPanelStore) {
    store.searchApplicabilitiesPanel = [
      {
        selectedMarka: null,
        selectedModel: [],
        selectedGenerations: [],
        dataModel: [],
        dataGenerations: [],
      },
    ]
  },
}
export const actions: ActionTree<RootState, RootState> = {
  fixPanel({ commit, state }) {
    if (state.searchApplicabilitiesPanel.length === 1) {
      return
    }
    const indexDelete: number[] = []
    state.searchApplicabilitiesPanel.forEach((elem, index) => {
      if (elem.selectedMarka === null) {
        indexDelete.push(index)
      }
    })
    indexDelete.sort((a, b) => b - a)
    indexDelete.forEach((index) => {
      commit('deleteIndexPanel', index)
    })
    if (state.searchApplicabilitiesPanel.length === 0) {
      commit('setNewPanel')
    }
  },
}
export const getters = {
  getSearchApplicabilitiesPanel: (s: SearchApplicabilitiesPanelStore) =>
    s.searchApplicabilitiesPanel,
}
