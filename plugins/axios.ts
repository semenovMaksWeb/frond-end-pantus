// @ts-ignore
export default ({ $axios, app }) => {
  $axios.onRequest(() => {
    const token = app.$cookies.get('Authorization')
    if (token) {
      $axios.setToken(token, 'Bearer')
    } else {
      $axios.setToken(token, false)
    }
  })
}
