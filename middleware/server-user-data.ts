// @ts-ignore
export default async ({ store, app }) => {
  if (
    !app.$cookies.get('Authorization') ||
    !store.getters['authorization/getLoaderUser']
  ) {
    await store.dispatch('authorization/actionsAuthorization')
  }
  await Promise.all([
    store.dispatch('cart/actionsCart'),
    store.dispatch('favorites/actionsFavoritesId'),
  ])
}
