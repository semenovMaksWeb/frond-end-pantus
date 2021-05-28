import {
  computed,
  ssrRef,
  useRoute,
  useFetch,
  watch,
  ref,
  Ref,
} from '@nuxtjs/composition-api'
import { PaginationPropsInterface } from '~/interface/base/props/pagination-props.interface'

interface pageData {
  to: string | number | null | undefined
  text: string | number
}
export function Pagination(props: PaginationPropsInterface) {
  const query: Ref<string> = ref('')
  const route = useRoute()
  watch(route, () => {
    setArrayPagination()
  })
  watch(props, () => {
    setArrayPagination()
  })
  const arrayPagination = ssrRef<pageData[]>([])
  const countPagination = computed(() => {
    if (props && props.countElement && props.limitElement) {
      return Math.ceil(props.countElement / props.limitElement)
    }
    return 1
  })
  const resetArrayPagination = () => {
    arrayPagination.value = []
  }
  const setArrayPaginationLast = () => {
    arrayPagination.value.push({
      text: countPagination.value,
      to: `${route.value.path}${query.value}&${props.name}=${countPagination.value}`,
    })
  }
  const SetQueryPagination = () => {
    if (props && props.name) {
      query.value = '?'
      for (const queryKey in route.value.query) {
        if (queryKey !== props.name) {
          if (query.value !== '?') {
            query.value += '&'
          }
          query.value += `${queryKey}=${route.value.query[queryKey]}`
        }
      }
    }
  }
  const startPagination = () => {
    if (props && props.limitPagination && props.name && route.value.query) {
      let active = 1
      if (route.value.query[props.name]) {
        active = Number(route.value.query[props.name])
      }
      let add = 1
      if (active >= countPagination.value - 1) {
        add = countPagination.value - props.limitPagination + 1
      } else if (active <= Math.ceil(props.limitPagination / 2)) {
        add = 1
      } else {
        add = active - Math.ceil((props.limitPagination - 1) / 2)
      }

      for (let i = 0; i < props.limitPagination - 1; i++) {
        if (add > 0 && add < countPagination.value) {
          arrayPagination.value.push({
            text: add,
            to: `${route.value.path}${query.value}&${props.name}=${add}`,
          })
        }
        add++
      }
      if (arrayPagination.value.length > 0) {
        arrayPagination.value[0].text = 1
        if (query.value === '?') {
          arrayPagination.value[0].to = route.value.path
        } else {
          arrayPagination.value[0].to = route.value.path + query.value
        }
      }
    }
  }
  const setArrayPagination = () => {
    resetArrayPagination()
    SetQueryPagination()
    startPagination()
    setArrayPaginationLast()
  }
  useFetch(() => {
    if (props && props.name) {
      setArrayPagination()
    }
  })
  return { countPagination, setArrayPagination, arrayPagination }
}
