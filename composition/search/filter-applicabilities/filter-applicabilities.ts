import { useContext, computed, onMounted } from '@nuxtjs/composition-api'

export function FilterApplicabiliries() {
  const { store } = useContext()
  const Panel = computed(
    () => store.getters['search/panel/getSearchApplicabilitiesPanel']
  )
  const addCheckPanel = () => {
    if (Panel.value.length === 0) {
      store.commit('search/panel/setNewPanel')
    }
  }
  const addPanel = () => {
    store.commit('search/panel/setNewPanel')
  }
  onMounted(addCheckPanel)
  return { Panel, addPanel }
}
export function FilterApplicabiliriesPanel() {
  const { store } = useContext()
  const PanelAll = computed(
    () => store.getters['search/panel/getSearchApplicabilitiesPanel']
  )
  const ApplicabilitiesVuex = computed(
    () => store.getters['search/data/getCarbrands']
  )
  const DeletePanel = (index: number) => {
    store.commit('search/panel/deleteIndexPanel', index)
  }
  return { PanelAll, DeletePanel, ApplicabilitiesVuex }
}
