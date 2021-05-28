// @ts-ignore
export default ({ store, redirect }) => {
  if (store.getters['authorization/getUserAuthorization'] === false) {
    redirect('/')
  }
}
