<template>
  <div class="footer-element-3 footer-element">
    <h2 class="h2">Доставка</h2>
    <nuxt-link to="/delivery">
      <img :src="require('@/assets/img/footer/car-footer.png')" alt=""  class="footer3-img" />
    </nuxt-link>
    <p class="text text-footer">
      Доставляем запчасти по всему миру с помощью собственного транспорта, Почты
      РФ и любых других служб доставки, доступных в нашей стране. Мы бесплатно
      отвозим заказы в 140 городов РФ и не берем деньги за доставку до терминала
      транспортной компании.
    </p>
    <nuxt-link to="/delivery" class="link link-hover-main">Подробнее</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Footer3',
}
</script>

<style lang="sass">
@import 'assets/sass/footer/footer-3.sass'
</style>
