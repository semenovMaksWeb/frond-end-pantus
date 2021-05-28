<template>
  <div class="container">
    <div class="static">
      <h1>404 Ошибка</h1>
      <h2>
        Страница не найдена. Вероятно она была удалена, а возможно она и не
        существовала
      </h2>
      <p class="h2">
        Попробуйте найти нужные запчасти с помощью поиска в верхней части
        страницы
      </p>
      <p>
        Вы можете перейти на
        <nuxt-link to="/">главную страницу </nuxt-link>
        или найти нужную информацию в одном из этих разделов:
      </p>
      <div class="flex-column">
        <nuxt-link to="/brands">Бренды запчастей </nuxt-link>
        <nuxt-link to="/carbrands">Марки автомобилей </nuxt-link>
        <nuxt-link to="/categories">Категории запчастей </nuxt-link>
        <nuxt-link to="">Каталог оригинальных запчастей </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  asyncData({ redirect, route }) {
    if (route.path !== '/404') {
      redirect('/404')
    }
  },
}
</script>
<style lang="sass">
@import "assets/sass/static/static"
</style>
