import { ssrRef } from '@nuxtjs/composition-api'
import { CatalogInterface } from '~/interface/catalog/catalog.interface'

export function catalogCodeId(route: any, store: any, redirect: any) {
  const pageCatalogSelected = ssrRef<null | CatalogInterface>(null)
  const pageNameSelected = ssrRef<string[]>([])
  const catalogSearchId = (data: CatalogInterface[]) => {
    const params = route.value.fullPath.split('/')
    params.splice(0, 2)
    for (const param of params) {
      const result = data.filter((elem) => elem.code === param)[0]
      if (result) {
        pageCatalogSelected.value = result
        pageNameSelected.value.push(result.name)
        data = result.children
      } else {
        redirect('/404')
      }
    }
  }
  const catalogSearch = async (data: CatalogInterface[]) => {
    pageCatalogSelected.value = null
    pageNameSelected.value = []
    catalogSearchId(data)
    await store.dispatch('product/catalog/actionsProductCatalog', {
      // @ts-ignore
      filter_categories: pageCatalogSelected.value?.id,
    })
  }
  return {
    catalogSearch,
    pageCatalogSelected,
    pageNameSelected,
  }
}
