<template>
  <div class="footer-element-1 footer-element">
    <h2 class="h2">Пантус</h2>
    <div class="footer1-wrapper-link">
      <nuxt-link to="/about" class="link link-hover-main footer-element-link">
        О компании
      </nuxt-link>
      <nuxt-link
        to="/about/career/jobs"
        class="link link-hover-main footer-element-link"
        >Вакансии
      </nuxt-link>
      <nuxt-link to="/help" class="link link-hover-main footer-element-link"
        >Помощь
      </nuxt-link>
      <nuxt-link
        to="/help#returns"
        class="link link-hover-main footer-element-link"
        >Возврат
      </nuxt-link>
      <nuxt-link to="/contacts" class="link link-hover-main footer-element-link"
        >Контакты
      </nuxt-link>
    </div>
    <h2 class="h2">Партнерство</h2>
    <nuxt-link to="/opt" class="link link-hover-main footer-element-link"
      >Спецпредложение для оптовиков
    </nuxt-link>
    <nuxt-link
      to="/about/suppliers"
      class="link link-hover-main footer-element-link"
      >Поставщикам
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Footer1',
}
</script>

<style lang="sass">
@import "assets/sass/footer/footer-1"
</style>
