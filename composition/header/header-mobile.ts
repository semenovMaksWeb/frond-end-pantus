import {
  computed,
  onMounted,
  onUnmounted,
  useRoute,
  useStore,
  watch,
} from '@nuxtjs/composition-api'

export function HeaderMobile() {
  const store = useStore()
  const route = useRoute()
  const activeNav = computed(() => {
    return store.getters['nav-mobile/getActive']
  })
  const setActiveMav = (name: string) => {
    store.commit('nav-mobile/setActive', name)
  }
  watch(
    () => route.value,
    () => {
      store.commit('nav-mobile/setActive', null)
    }
  )
  const toggleBodyFunction = (event: any) => {
    if (
      event.target.className !==
        'link link-hover-main header-mobile-link header-mobile-row' &&
      event.target.className !== 'button link-hover-button header-mobile' &&
      event.target.className !== 'fontawesome' &&
      event.target.className !== 'header-mobile-nav box-shadow'
    ) {
      store.commit('nav-mobile/setActive', null)
    }
  }
  const setBody = () => {
    document.addEventListener('click', toggleBodyFunction)
  }
  const deleteBody = () => {
    document.removeEventListener('click', toggleBodyFunction)
  }
  onUnmounted(deleteBody)
  onMounted(setBody)

  const setStart = () => {
    if (activeNav.value !== null) {
      store.commit('nav-mobile/setActive', null)
    } else {
      store.commit('nav-mobile/setActive', 'index')
    }
  }
  return { activeNav, setActiveMav, setStart }
}
