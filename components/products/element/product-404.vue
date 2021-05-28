<template>
  <div class="product-404">
    <h2 class="h2 product-404-title">Нет доступных товаров.</h2>
    <p class="product-404-text">
      Попробуйте найти нужные запчасти с помощью поиска в верхней части
      страницы.
    </p>
    <p class="product-404-text">
      Вы можете перейти на
      <nuxt-link class="link-hover-main link" to="/"
        >главную страницу
      </nuxt-link>
      или найти нужную информацию в одном из этих разделов:
    </p>
    <div class="product-404-link-wrapper">
      <nuxt-link class="link-hover-main link" to="/brands/"
        >Бренды запчастей
      </nuxt-link>
      <nuxt-link class="link-hover-main link" to="/carbrands/"
        >Марки автомобилей
      </nuxt-link>
      <nuxt-link class="link-hover-main link" to="/categories/"
        >Категории запчастей
      </nuxt-link>
      <nuxt-link class="link-hover-main link" to="/catalog/"
        >Каталог оригинальных запчастей
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Product404',
}
</script>
<style lang="sass">
@import 'assets/sass/products/product-404'
</style>
