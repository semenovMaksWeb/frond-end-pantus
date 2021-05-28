import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { NewsInterface } from '~/interface/news/news.interface'
import { NewsCategoriesInterface } from '~/interface/news/news-categories.interface'
import {
  ResultNewsInterface,
  newsAxios,
  newsIdAxios,
} from '~/axios/news/news.axios'
import { NewsCategoriesAxios } from '~/axios/news/news-categories.axios'
export interface NewsInterfaceStore {
  count: number
  news: NewsInterface[]
  newsId: NewsInterface | null
  categories: NewsCategoriesInterface[]
  newsPopular: NewsInterface[]
  limit: number
}
export const state = (): NewsInterfaceStore => ({
  categories: [],
  count: 0,
  news: [],
  newsId: null,
  newsPopular: [],
  limit: 12,
})
export type RootState = ReturnType<typeof state>
export const mutations: MutationTree<RootState> = {
  setNews(store: NewsInterfaceStore, data: ResultNewsInterface) {
    store.news = data.data
    store.count = data.count
  },
  setCategories(store: NewsInterfaceStore, data: NewsCategoriesInterface[]) {
    store.categories = data
  },
  setNewsPopular(store: NewsInterfaceStore, data: ResultNewsInterface) {
    store.newsPopular = data.data
  },
  setNewsId(store: NewsInterfaceStore, data: NewsInterface) {
    store.newsId = data
  },
}
export const actions: ActionTree<RootState, RootState> = {
  async actionsNews(
    { commit, state },
    params: { page: number; categories?: number }
  ) {
    const data = await newsAxios(this.$axios, {
      categories: params?.categories,
      page: params.page,
      limit: state.limit,
    })
    commit('setNews', data)
  },
  async actionsNewsId({ commit }, id: number) {
    const data = await newsIdAxios(this.$axios, id)
    commit('setNewsId', data)
  },
  async actionsNewsPopular({ commit }) {
    const data = await newsAxios(this.$axios, { limit: 9, page: 1 })
    commit('setNewsPopular', data)
  },
  async actionsNewsCategories({ commit }) {
    const data = await NewsCategoriesAxios(this.$axios)
    commit('setCategories', data)
  },
}
export const getters: GetterTree<RootState, RootState> = {
  getCount: (s: NewsInterfaceStore) => s.count,
  getNews: (s: NewsInterfaceStore) => s.news,
  getCategories: (s: NewsInterfaceStore) => s.categories,
  getLimit: (s: NewsInterfaceStore) => s.limit,
  getNewsPopular: (s: NewsInterfaceStore) => s.newsPopular,
  getNewsId: (s: NewsInterfaceStore) => s.newsId,
}
