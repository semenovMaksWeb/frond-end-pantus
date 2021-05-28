import { Ref } from '@nuxtjs/composition-api'
import { SearchFormInterface } from '~/interface/search/search-form.interface'
import { SearchUrlInterface } from '~/interface/search/search-url.interface'

export function FilterMap() {
  const checkValidateFilter = (data: string | (string | null)[]): number[] => {
    if (data) {
      return data
        .toString()
        .split(',')
        .map((string: string) => +string)
    }
    return []
  }
  const queryToVuex = (route: Ref<any>) => {
    const vuex = {
      brandChecked: checkValidateFilter(route.value.query.filter_brands),
      categoriesChecked: checkValidateFilter(
        route.value.query.filter_categories
      ),
      applicabilitiesChecked: checkValidateFilter(
        route.value.query.filter_applicabilities
      ),
      page: Number(route.value.query?.page) ?? 1,
      search: route.value.query.filter_substr ?? '',
    }
    if (isNaN(vuex.page)) {
      vuex.page = 1
    }
    return vuex
  }
  const vuexToQuery = (getForm: SearchFormInterface) => {
    const url: SearchUrlInterface = {}
    if (getForm.brandChecked.length > 0) {
      url.filter_brands = getForm.brandChecked?.join()
    }
    if (getForm.categoriesChecked.length > 0) {
      url.filter_categories = getForm.categoriesChecked.join()
    }
    if (getForm.applicabilitiesChecked.length > 0) {
      url.filter_applicabilities = getForm.applicabilitiesChecked.join()
    }
    if (getForm.search?.length > 0 || getForm.search !== '') {
      url.filter_substr = getForm.search
    }
    if (getForm.page && getForm.page > 1) {
      url.page = getForm.page.toString()
    }
    return url
  }

  return { queryToVuex, vuexToQuery }
}
