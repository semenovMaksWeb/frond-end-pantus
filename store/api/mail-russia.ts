import { ActionTree } from 'vuex'
import { ApiMainRussiaAxios } from '~/axios/api/mail-russia.axios'
import { MailRussiaInterface } from '~/interface/api/mail-russia-interface'

export const state = () => ({})
export type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
  async actionsMailRussia(
    { rootGetters },
    zip: string
  ): Promise<MailRussiaInterface> {
    const summa = rootGetters['cart/getSumma'] * 100
    const weight = rootGetters['cart/getWeight'] * 100
    return await ApiMainRussiaAxios(this.$axios, summa, zip, weight)
  },
}
