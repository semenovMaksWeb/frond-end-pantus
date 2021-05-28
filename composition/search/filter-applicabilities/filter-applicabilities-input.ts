import { computed } from '@nuxtjs/composition-api'
import { SearchApplicabilitiesInterface } from '~/interface/search/data/search-applicabilities.interface'
export function FilterApplicabiliriesInput(
  props: { selected: number[]; dataset: SearchApplicabilitiesInterface[] },
  fun: any
) {
  const SelectedNamePanel = computed(() => {
    const nameSelected: string[] = []
    if (props.selected.length !== 0) {
      for (const keyData in props.dataset) {
        for (const keyId in props.selected) {
          if (props.dataset[keyData].id === props.selected[keyId]) {
            nameSelected.push(props.dataset[keyData].name)
          }
        }
      }
      return nameSelected
    }
  })
  const ApplicabilitiesTopUl = (level: number) => {
    if (level !== 1) {
      fun() // функция Не скрывать Select
    }
  }
  return { SelectedNamePanel, ApplicabilitiesTopUl }
}
