<template>
  <div class="footer-element-2 footer-element">
    <h2 class="h2">Оплата</h2>
    <div class="row">
      <div class="col">
        <img
          :src="require('@/assets/img/footer/cards.png')"
          alt="cards"
          class="img footer2-img__1"
        />
      </div>
      <div class="col">
        <img
          :src="require('@/assets/img/footer/cash.png')"
          alt="cards"
          class="img footer2-img__2"
        />
      </div>
      <div class="col">
        <img
          :src="require('@/assets/img/footer/bank.png')"
          alt="cards"
          class="img footer2-img__3"
        />
      </div>
    </div>
    <p class="text text-footer ">
      Мы принимаем банковские карты Visa, MasterCard и Мир. А также предлагаем
      10 других безопасных способов оплаты, включая безналичный расчет,
      электронные деньги и салоны связи. Возможна оплата товара при получении и
      отсрочка платежа.
    </p>
    <nuxt-link to="/pay" class="link link-hover-main footer2-element-link">
      Подробнее
    </nuxt-link>
    <div class="row">
      <div class="col">
        <img
          :src="require('@/assets/img/footer/paypal.png')"
          alt=""
          class="img footer2-img__1"
        />
      </div>
      <div class="col">
        <img
          :src="require('@/assets/img/footer/yandexmoney.png')"
          alt=""
          class="img footer2-img__4"
        />
      </div>
      <div class="col">
        <img
          :src="require('@/assets/img/footer/webmoney.png')"
          alt=""
          class="img footer2-img__4"
        />
      </div>
      <div class="col">
        <img
          :src="require('@/assets/img/footer/qiwi.png')"
          alt=""
          class="img footer2-img__4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer2',
}
</script>

<style lang="sass">
@import "assets/sass/footer/footer-2"
</style>
