import { computed, ref, useContext } from '@nuxtjs/composition-api'
import FilterBrandChecked from '@/components/search/filter-product/element/brand/filter-brand-checked.vue'
export function FilterBrand() {
  const { store } = useContext()
  const getBrand = computed(() => {
    return store.getters['search/data/getBrands']
  })
  const brandView = ref(store.getters['search/data/getBrands'])
  const componentsName = ref(FilterBrandChecked)
  return { brandView, componentsName, getBrand }
}
