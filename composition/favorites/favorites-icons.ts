import { computed, useStore, ssrRef, Ref } from '@nuxtjs/composition-api'
import { BlockInfoType } from '~/interface/base/block-info.interface'

export function FavoritesIcons(id: number) {
  const store = useStore()
  const getFavorites: Ref<number[]> = computed(() => {
    return store.getters['favorites/getFavoritesId']
  })
  const deleteFavorites = async () => {
    const check = await store.dispatch('favorites/actionsDeleteFavorites', id)
    if (check) {
      getCheck.value = false
      store.commit(
        'blog-info/setBlockInfo',
        {
          text: `Избранный товар удален`,
          active: true,
          type: BlockInfoType.Good,
        },
        { root: true }
      )
    }
    setTextTitle()
  }
  const putFavorites = async () => {
    const check = await store.dispatch('favorites/actionsPutFavorites', id)
    if (check) {
      getCheck.value = true
      store.commit(
        'blog-info/setBlockInfo',
        {
          text: `Избранный товар удален`,
          active: true,
          type: BlockInfoType.Good,
        },
        { root: true }
      )
    }
    setTextTitle()
  }
  const setTextTitle = () => {
    if (getCheck.value) {
      textTitle.value = 'Убрать товар с избранных'
    } else {
      textTitle.value = 'Добавить товар с избранных'
    }
  }
  const getCheck = ssrRef(false)
  const textTitle = ssrRef('')
  getCheck.value = getFavorites.value?.includes(id)
  setTextTitle()

  return {
    getCheck,
    textTitle,
    deleteFavorites,
    putFavorites,
  }
}
