<template>
  <section class="section7">
    <div class="container">
      <h2 class="h2">
        <nuxt-link to="/popular" class="link-hover-main link">
          Популярные товары
        </nuxt-link>
      </h2>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(product, index) in popular" :key="index">
          <product-blog class="section7-product__100" :product="product" />
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script lang="ts">
import 'swiper/swiper.min.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Section7 } from '~/composition/home/section/section-7'
import ProductBlog from '~/components/products/product/product-blog.vue'
export default {
  name: 'Section7',
  components: {
    ProductBlog,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return { ...Section7() }
  },
}
</script>

<style lang="sass">
@import "assets/sass/home/section/section7"
</style>
