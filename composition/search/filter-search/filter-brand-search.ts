import { ref } from '@nuxtjs/composition-api'
import { FilterSearchReg } from '~/composition/search/filter-search/filter-search-reg'
export function FilterBrandSearch(
  emit: Function,
  data: [{ name: string }],
  res: [{ name: string }]
) {
  const { checkSearchValue, errors } = FilterSearchReg()
  const value = ref('')

  const searchBrand = () => {
    if (checkSearchValue(value.value) && value.value !== '') {
      return data.filter((item) =>
        item.name.toLowerCase().includes(value.value.toLowerCase())
      )
    }
    return res
  }
  const emitStart = () => {
    emit('dataset', searchBrand())
    emit('value', value.value)
  }
  emitStart()
  return { value, emitStart, errors, searchBrand }
}
