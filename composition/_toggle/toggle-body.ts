import { ref, onUnmounted, onMounted } from '@nuxtjs/composition-api'

export function ToggleBody(Toggle = false, target: string) {
  const getToggle = ref(Toggle)
  const toggleBodyFunction = (event: any) => {
    getToggle.value =
      target === event.target.className && getToggle.value === false
  }
  const setBody = () => {
    document.addEventListener('click', toggleBodyFunction)
  }
  const deleteBody = () => {
    document.removeEventListener('click', toggleBodyFunction)
  }
  onUnmounted(deleteBody)
  onMounted(setBody)
  return { getToggle }
}
