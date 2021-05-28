import { computed, Ref } from '@nuxtjs/composition-api'

import { brandInterface } from '~/interface/brands/brand.interface'
import { TypeMark } from '~/interface/search/data/search-metks.interface'
export function FilterBrandMark(store: any) {
  const brandChecked = computed(() => {
    return store.getters['search/form/getBrandChecked']
  })
  const brandData: Ref<brandInterface[]> = computed(() => {
    return store.getters['search/data/getBrands']
  })
  const markBrand = () => {
    for (const id of brandChecked.value) {
      const brand = brandData.value.filter((elem) => elem.id === id)[0]
      if (brand) {
        store.commit('search/data/pushMark', {
          id: brand.id,
          name: brand.name,
          type: TypeMark.brand,
        })
      }
    }
  }
  return { markBrand }
}
