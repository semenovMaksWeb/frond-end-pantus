<template>
  <section class="section1">
    <div class="container">
      <div class="row">
        <div class="row-gutters section1__block-carbrands">
          <home-block-carbrands
            v-for="(link, index) in link1"
            :key="index"
            :link="link"
          />
        </div>
        <div class="col section1-banner">
          <nuxt-link to="/opt">
            <img
              class="img section1-banner-img"
              src="https://bx.pantus.ru/bitrix/images/site/optbanner2.webp"
              alt="Специальное предложение оптовикам"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { HomeSection1 } from '~/composition/home/section/section-1'
import HomeBlockCarbrands from '~/components/home/elem/home-block-carbrands.vue'

export default {
  name: 'Section1',
  components: { HomeBlockCarbrands },
  setup() {
    return { ...HomeSection1() }
  },
}
</script>
<style lang="sass">
@import "assets/sass/home/section/section1"
</style>
