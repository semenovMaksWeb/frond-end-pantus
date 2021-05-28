import { ref } from '@nuxtjs/composition-api'

export function ToggleClick(toggleProps = false) {
  const toggle = ref(toggleProps)
  const toggleClick = () => {
    toggle.value = !toggle.value
  }
  return { toggleClick, toggle }
}
