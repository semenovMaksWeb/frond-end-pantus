import { useContext, computed, Ref } from '@nuxtjs/composition-api'
export function FilterBrandChecked(id: number) {
  const { store } = useContext()
  const checked: Ref<number> = computed(() =>
    store.getters['search/form/getBrandChecked'].includes(id)
  )
  const brandChecked = computed(() => {
    return store.getters['search/form/getBrandChecked']
  })
  const ClickBrandChecked = () => {
    if (checked.value) {
      const index: number = brandChecked.value.indexOf(id)
      store.commit('search/form/deleteBrandChecked', index)
    } else {
      store.commit('search/form/pushBrandChecked', id)
    }
  }
  return {
    checked,
    ClickBrandChecked,
  }
}
