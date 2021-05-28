import { computed, useContext } from '@nuxtjs/composition-api'
export function BlockInfo() {
  const { store } = useContext()
  const getBlockInfo = computed(() => store.getters['blog-info/getBlockInfo'])
  const closeBlockInfo = () => {
    store.commit('blog-info/setBlockInfoClose')
  }
  return { getBlockInfo, closeBlockInfo }
}
