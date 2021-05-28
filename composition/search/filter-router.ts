import { FilterMap } from '~/composition/search/filter-map'

export function FilterRouter(store: any, router: any) {
  const routerPush = async () => {
    const filter = FilterMap().vuexToQuery(store.getters['search/form/getForm'])
    await router.push({
      name: 'search',
      query: { ...filter },
    })
  }
  return { routerPush }
}
