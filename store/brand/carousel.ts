import { brandCarouselAxios } from '~/axios/brand/brand.axios'
import { ActionTree, MutationTree } from 'vuex'
import { BrandCarousel } from '~/interface/brands/brand-carousel'
export interface BrandCarouselStore {
  carousel: BrandCarousel[] | []
}
export const state = (): BrandCarouselStore => ({
  carousel: [],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setCarousel(store: BrandCarouselStore, brand: BrandCarousel[]) {
    store.carousel = brand
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsCarousel({ commit }) {
    const data: BrandCarousel[] = await brandCarouselAxios(this.$axios)
    commit('setCarousel', data)
  },
}
export const getters = {
  getCarousel: (s: BrandCarouselStore) => s.carousel,
}
